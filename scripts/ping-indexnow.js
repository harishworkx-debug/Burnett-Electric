/**
 * IndexNow Automatic Submission Script for Burnett Electric
 * Submits all website URLs directly to IndexNow (Bing, Yandex, etc.)
 * Run with: npm run indexnow
 */

const HOST = "www.burnettelectrictuscaloosa.com";
const KEY = "e5b61972620f4f9f83f1e944bc699b82";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/about`,
  `https://${HOST}/reviews`,
  `https://${HOST}/contact`,
  `https://${HOST}/sitemap`,
  `https://${HOST}/electrical-repairs-tuscaloosa-al`,
  `https://${HOST}/wiring-upgrades-tuscaloosa-al`,
  `https://${HOST}/outdoor-wiring-tuscaloosa-al`,
  `https://${HOST}/generator-installation-tuscaloosa-al`,
  `https://${HOST}/panel-upgrades-tuscaloosa-al`,
  `https://${HOST}/lighting-installation-tuscaloosa-al`,
  `https://${HOST}/ev-charger-installation-tuscaloosa-al`,
  `https://${HOST}/emergency-electrician-tuscaloosa-al`,
  `https://${HOST}/smart-home-installation-tuscaloosa-al`,
  `https://${HOST}/electrician-northport`,
  `https://${HOST}/electrician-birmingham`,
  `https://${HOST}/electrician-buhl`,
  `https://${HOST}/electrician-cottondale-al`,
  `https://${HOST}/electrician-vance-al`,
  `https://${HOST}/electrician-coaling-al`,
  `https://${HOST}/electrician-moundville-al`,
  `https://${HOST}/electrician-brookwood-al`,
];

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  console.log(`Submitting ${URL_LIST.length} URLs to IndexNow...`);

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`[IndexNow] Success! Status: ${response.status} OK/Accepted.`);
      console.log(`Search engines notified to immediately crawl all ${URL_LIST.length} pages.`);
    } else {
      const text = await response.text();
      console.log(`[IndexNow] Response ${response.status}: ${text}`);
    }
  } catch (err) {
    console.error("[IndexNow] Failed to submit:", err.message);
  }
}

submitIndexNow();
