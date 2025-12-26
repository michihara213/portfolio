"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext"; // ★追加

export function NavTabs() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage(); // ★言語情報を取得

  const links = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research project" },
    { href: "/other", label: "Other project" },
  ];

  return (
    <nav className="tabs">
      {/* ▼▼▼ ここを変更 ▼▼▼ */}
      <div className="lang-switch">
        <button 
          onClick={() => setLanguage("ja")} 
          className={language === "ja" ? "active" : ""}
        >
          JP
        </button>
        <span className="divider">/</span>
        <button 
          onClick={() => setLanguage("en")} 
          className={language === "en" ? "active" : ""}
        >
          EN
        </button>
      </div>
      {/* ▲▲▲ ここまで ▲▲▲ */}

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