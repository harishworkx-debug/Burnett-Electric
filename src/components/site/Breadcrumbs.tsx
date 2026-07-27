import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import React from "react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full flex">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground whitespace-nowrap overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
        <li>
          <Link
            to="/"
            className="flex items-center hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={item.label}>
              <li>
                <ChevronRight className="h-4 w-4 text-muted-foreground/50" aria-hidden="true" />
              </li>
              <li>
                {isLast || !item.to ? (
                  <span className="text-secondary font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.to as any}
                    className="hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
