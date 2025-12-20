import type { Metadata } from "next";
import "./globals.css";
import { NavTabs } from "../components/NavTabs";

export const metadata: Metadata = {
  title: "Michiyo Nishimura – Portfolio",
  description:
    "西村路世（早稲田大学 創造理工学部 総合機械工学科）のポートフォリオ。Research / Other Projects を掲載。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="container">
          <NavTabs />
          {children}
          <footer className="footer">
            <span>Contact:</span>{" "}
            {/* TODO: 自分のメールに変更 */}
            <a href="mailto:def1203@icloud.com">def1203@icloud.com</a>
            <span> / </span>
            {/* TODO: 自分のGitHubに変更 */}
            <a
              href="https://github.com/your-github-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}