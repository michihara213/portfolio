import { ProjectSection } from "../../components/ProjectSection";
import { otherProjects } from "../../content/other";

export default function OtherPage() {
  return (
    // ▼▼▼ className="other-page" を追加 ▼▼▼
    <main className="other-page">
      <header className="page-header">
        <h1>Other project</h1>
        <p style={{ marginTop: "16px" }}>
          授業・制作・受賞など、研究以外の取り組み。
        </p>
      </header>

      {otherProjects.map((project) => (
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