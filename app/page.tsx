import { Hero } from "../components/Hero";
import { Timeline } from "../components/Timeline";
import { career } from "../content/career";

export default function HomePage() {
  return (
    <main>
      <Hero
        nameJa="西村 路世"
        nameRoman="Michiyo Nishimura"
        affiliation="早稲田大学 創造理工学部 総合機械工学科 3年  (通算GPA 3.60 / 4.00)"
        //oneLine="機械学習 × ゲーム開発で、動くものをつくる"
        photoSrc="id-photo.jpg"
      />


      <section className="section">
        <h2>Career</h2>
        <p className="section-lead">高校卒業から現在までの主な経歴。</p>
        <Timeline items={career} />
      </section>
    </main>
  );
}