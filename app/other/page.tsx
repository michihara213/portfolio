import { ProjectSection } from "../../components/ProjectSection";
import { otherProject } from "../../content/other";

export default function OtherPage() {
  return (
    <main>
      <header className="page-header">
        <h1>Other project</h1>
        <p>授業・制作・受賞など、研究以外の取り組み。</p>
      </header>

      <ProjectSection
        id={otherProject.id}
        title={otherProject.title}
        subtitle={otherProject.subtitle}
        tags={otherProject.tags}
        description={otherProject.description}
        media={otherProject.media}
      />
    </main>
  );
}