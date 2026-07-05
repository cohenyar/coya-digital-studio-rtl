import { Link } from "@tanstack/react-router";
import { ChevronLeft, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  to?: string; // omit for current page
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="פירורי לחם" className="container-x pt-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-white/60">
        <li className="flex items-center gap-1">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition">
            <Home className="size-3.5" aria-hidden />
            <span>בית</span>
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronLeft className="size-3.5 opacity-50" aria-hidden />
            {c.to ? (
              <Link to={c.to} className="hover:text-white transition">
                {c.name}
              </Link>
            ) : (
              <span className="text-white" aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
