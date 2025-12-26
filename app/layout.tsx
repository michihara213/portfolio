import type { Metadata } from "next";
import "./globals.css";
import { NavTabs } from "../components/NavTabs";
import { LanguageProvider } from "../contexts/LanguageContext"; // ★これが必要です

export const metadata: Metadata = {
  title: "Michiyo Nishimura – Portfolio",
  description: "Portfolio of Michiyo Nishimura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* ▼▼▼ この Provider で囲むのが必須です ▼▼▼ */}
        <LanguageProvider>
          <div className="container">
            <NavTabs />
            {children}
            <footer className="footer">
              <span>Contact:</span>{" "}
              {/* 自分のメールアドレス等 */}
              <a href="mailto:def1203@icloud.com">def1203@icloud.com</a>
              <span> / </span>
              <a
                href="https://github.com/michihara213"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </footer>
          </div>
        </LanguageProvider>
        {/* ▲▲▲ ここまで ▲▲▲ */}
      </body>
    </html>
  );
}