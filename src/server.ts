import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// 301 Permanent Redirects for legacy routes previously indexed by Google
const LEGACY_REDIRECTS: Record<string, string> = {
  "/northport": "/electrician-northport",
  "/electrician-northport-al": "/electrician-northport",
  "/birmingham": "/electrician-birmingham",
  "/electrician-birmingham-al": "/electrician-birmingham",
  "/buhl": "/electrician-buhl",
  "/electrician-buhl-al": "/electrician-buhl",
  "/electrical-repairs": "/electrical-repairs-tuscaloosa-al",
  "/wiring-upgrades": "/wiring-upgrades-tuscaloosa-al",
  "/outdoor-wiring": "/outdoor-wiring-tuscaloosa-al",
  "/commercial-electrical": "/services",
  "/commercial-electrical-tuscaloosa-al": "/services",
  "/tuscaloosa": "/",
  "/electrician-tuscaloosa-al": "/",
  "/electrician-tuscaloosa": "/",
};

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);

      // Normalize path (strip trailing slash if length > 1)
      let pathname = url.pathname;
      const hasTrailingSlash = pathname.length > 1 && pathname.endsWith("/");
      if (hasTrailingSlash) {
        pathname = pathname.slice(0, -1);
      }

      // Check legacy 301 redirects for previously indexed URLs
      const legacyTarget = LEGACY_REDIRECTS[pathname.toLowerCase()];
      if (legacyTarget) {
        const canonicalUrl = `https://www.burnettelectrictuscaloosa.com${legacyTarget}${url.search}`;
        return new Response(null, {
          status: 301,
          headers: {
            Location: canonicalUrl,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      }

      // Enforce preferred canonical host (non-www to www) or trailing slash removal
      const isNonWww = url.hostname === "burnettelectrictuscaloosa.com";
      if (isNonWww || hasTrailingSlash) {
        const canonicalUrl = `https://www.burnettelectrictuscaloosa.com${pathname}${url.search}`;
        return new Response(null, {
          status: 301,
          headers: {
            Location: canonicalUrl,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
