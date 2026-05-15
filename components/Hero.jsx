import { Sparkles, Play, ImageIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroBadge">
        <Sparkles size={16} />
        Mundësuar nga AI
      </div>

      <h1>
        Transformo imazhet me <span>AI Magic</span>
      </h1>

      <p>
        Redakto foto në mënyrë profesionale me inteligjencë artificiale:
        hiq sfondin, përmirëso cilësinë dhe përgatit imazhe për biznes.
      </p>

      <div className="heroButtons">
        <a href="/auth/sign-up" className="darkBtn bigBtn">
          <Play size={17} />
          Fillo Falas
        </a>

        <a href="#features" className="lightBtn bigBtn">
          <ImageIcon size={17} />
          Shiko Demo
        </a>
      </div>

      <div className="trustText">Zgjedhur nga krijues dhe biznese online</div>

      <div className="stats">
        <div>
          <strong>10K+</strong>
          <span>Imazhe të përpunuara</span>
        </div>
        <div>
          <strong>2.5K+</strong>
          <span>Përdorues aktivë</span>
        </div>
        <div>
          <strong>99.9%</strong>
          <span>Stabilitet</span>
        </div>
        <div>
          <strong className="orange">4.8★</strong>
          <span>Vlerësim</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Përpunim AI</span>
        </div>
      </div>
    </section>
  );
}