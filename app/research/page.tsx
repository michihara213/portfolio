import { ProjectSection } from "../../components/ProjectSection";
import { ScrollToToc } from "../../components/ScrollToToc"; // ★追加
import {
  researchIntro,
  researchIntroMedia,
  researchTopics,
  benchmarkFigure,
  benchmarkItems,
} from "../../content/research";

export default function ResearchPage() {
  return (
    <main style={{ position: "relative" }}>
      <header className="page-header">
        <h1>Research project</h1>

        {/* 1. 文章（縦積み） */}
        <div style={{ marginTop: "16px", marginBottom: "32px" }}>
          {researchIntro.map((text, i) => (
            <p
              key={i}
              style={{
                margin: "0 0 24px",
                fontSize: "14px",
                color: "var(--text-muted)",
                lineHeight: "1.8",
                whiteSpace: "pre-wrap",
              }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* 2. ORIZURU画像 */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <img
            src={researchIntroMedia.orizuru.src}
            alt={researchIntroMedia.orizuru.alt}
            style={{
              height: "220px",
              width: "auto",
              maxWidth: "100%",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)",
              margin: "0 auto",
              display: "block",
            }}
          />
          <div className="mediaCaption">
            {researchIntroMedia.orizuru.caption}
          </div>
        </div>

        {/* 3. 3断面の画像 */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "60px" }}>
          <div style={{ width: "fit-content", maxWidth: "100%" }}>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                marginBottom: "12px",
                textAlign: "left",
              }}
            >
              ▼ 取得対象となる基本3断面（左端が本研究の対象）
            </p>

            <div 
              className="researchThreeViews"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center" 
              }}
            >
              {researchIntroMedia.threeViews.map((view, i) => {
                const isTarget = i === 0;
                return (
                  <div key={i} className="view">
                    <img
                      src={view.src}
                      alt={view.alt}
                      style={{
                        height: "220px",
                        width: "auto",
                        display: "block",
                        borderRadius: "10px",
                        borderStyle: "solid",
                        borderWidth: isTarget ? "2px" : "1px",
                        borderColor: isTarget ? "var(--accent)" : "var(--border-subtle)",
                        boxShadow: isTarget ? "0 4px 12px rgba(37, 99, 235, 0.15)" : "none",
                      }}
                    />
                    <div
                      className="label"
                      style={{
                        fontSize: "14px",
                        marginTop: "8px",
                        color: "var(--text-muted)",
                        textAlign: "center",
                        ...(isTarget
                          ? { fontWeight: "bold", color: "var(--accent)" }
                          : {}),
                      }}
                    >
                      {isTarget ? "★ " : ""}
                      {view.caption}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 目次（INDEX）エリア */}
        <nav 
          id="toc" 
          style={{ 
            margin: "0 auto 40px", 
            padding: "32px 24px", 
            background: "#f8fafc", 
            borderRadius: "16px",
            border: "1px solid var(--border-subtle)",
            maxWidth: "800px"
          }}
        >
          <div style={{ 
            textAlign: "center", 
            marginBottom: "20px", 
            fontWeight: "bold", 
            color: "var(--text-muted)",
            fontSize: "14px",
            letterSpacing: "0.05em"
          }}>
            — INDEX: プロジェクト詳細 —
          </div>
          
          <div className="toc" style={{ justifyContent: "center" }}>
            <a href="#benchmarks" style={{ fontWeight: 600 }}>概要：6つのベンチマーク</a>
            {researchTopics.map((t) => (
              <a key={t.id} href={`#${t.id}`}>
                {t.title}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* ① まず6ベンチマークを図で説明 */}
      <section className="section" id="benchmarks">
        <div className="card">
          <h3>6つのベンチマーク</h3>

          <p style={{ margin: "0 0 40px", fontSize: 14 }}>
            私が所属する研究班では、左室長軸断面に対して、画像品質を評価するためのベンチマークを6つ定義しました。
            まずは全体像を図と文章で説明します。
          </p>

          <div className="mediaItem benchmarkFigure" style={{ marginTop: 10 }}>
            <img src={benchmarkFigure.src} alt={benchmarkFigure.alt} />
            <div className="mediaCaption">{benchmarkFigure.caption}</div>
          </div>

          <div className="divider" />

          <ul className="benchmarkList">
            {benchmarkItems.map((b) => (
              <li key={b.id}>
                <span className="benchmarkTitle">{b.title}</span>
                {b.note ? <span className="muted"> — {b.note}</span> : null}
              </li>
            ))}
          </ul>

          <div className="divider" />

          <p style={{ margin: 0, fontSize: 14 }}>
            このうち私は、①②④⑥（左心室検出／開閉ループ判定／大動脈弁検出／僧帽弁と腱索の繋がり検出）に取り組みました。
            以下で各項目を、動画・画像を交えて紹介します。
          </p>

          {/* ★削除済み：ここに書いていた静的な「↑ 目次に戻る」リンクを消しました */}
        </div>
      </section>

      {/* ③ 自分の4項目 */}
      {researchTopics.map((topic) => (
        <ProjectSection
          key={topic.id}
          id={topic.id}
          title={topic.title}
          subtitle={topic.subtitle}
          benchmark={topic.benchmark}
          tags={topic.tags}
          description={topic.description}
          media={topic.media}
          tableData={topic.tableData}
          mediaGap={topic.mediaGap}
        />
      ))}

      {/* ▼▼▼ 追加：フローティングボタン ▼▼▼ */}
      <ScrollToToc />
      {/* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */}
    </main>
  );
}