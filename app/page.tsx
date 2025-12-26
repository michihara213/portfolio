"use client"; // ★Hooksを使うので必須

import { Hero } from "../components/Hero";
import { Timeline } from "../components/Timeline";
import { careerData } from "../content/career"; // ★更新したデータをインポート
import { profileData } from "../content/profile"; // ★新規データをインポート
import { useLanguage } from "../contexts/LanguageContext"; // ★言語フック

export default function HomePage() {
  const { language } = useLanguage(); // 現在の言語を取得 ("ja" or "en")

  return (
    <main>
      <Hero
        nameJa={profileData.nameJa}
        nameRoman={profileData.nameRoman}
        // ▼ 言語によってテキストを切り替え
        affiliation={profileData.affiliation[language]}
        photoSrc={profileData.photoSrc}
      />

      <section className="section">
        <h2>Career</h2>
        <p className="section-lead">
          {language === "ja" 
            ? "高校卒業から現在までの主な経歴。"
            : "My academic and professional background."}
        </p>
        
        {/* ▼ 言語ごとの配列を渡す */}
        <Timeline items={careerData[language]} />
      </section>
    </main>
  );
}