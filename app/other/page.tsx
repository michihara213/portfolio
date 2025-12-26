"use client";

import { ProjectSection } from "../../components/ProjectSection";
import { otherProjectsData } from "../../content/other"; // ★変更
import { useLanguage } from "../../contexts/LanguageContext"; // ★追加

export default function OtherPage() {
  const { language } = useLanguage();
  // 現在の言語のデータを取得
  const projects = otherProjectsData[language];

  return (
    <main className="other-page">
      <header className="page-header">
        <h1>Other project</h1>
        <p style={{ marginTop: "16px" }}>
          {language === "ja"
            ? "授業・制作・受賞など、研究以外の取り組み。"
            : "Academic projects, creations, and awards outside of research."}
        </p>
      </header>

      {projects.map((project) => (
        <ProjectSection
          key={project.id}
          id={project.id}
          title={project.title}
          tags={project.tags}
          description={project.description}
          media={project.media}
          mediaGap={project.mediaGap}
          githubUrl={project.githubUrl}
        />
      ))}
    </main>
  );
}