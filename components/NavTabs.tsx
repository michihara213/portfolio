"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavTabs() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research project" },
    { href: "/other", label: "Other project" },
  ];

  return (
    <nav className="tabs">
      <div className="nav-name">MICHIYO NISHIMURA</div>
      <div className="nav-links">
        {links.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`tab-link ${active ? "active" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}