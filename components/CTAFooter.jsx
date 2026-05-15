import { Sparkles, ImageDown } from "lucide-react";

export default function CTAFooter() {
  return (
    <>
      <section className="ctaSection">
        <h2>Gati për të transformuar imazhet?</h2>
        <p>Fillo të krijosh foto më profesionale me fuqinë e AI.</p>

        <div className="heroButtons">
          <a href="/auth/sign-up" className="darkBtn bigBtn gradientBtn">
            <Sparkles size={17} />
            Provoje Falas
          </a>

          <a href="#features" className="lightBtn bigBtn">
            <ImageDown size={17} />
            Shiko Shembuj
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <a href="/" className="brand">
            <span className="brandIcon">
              <Sparkles size={20} />
            </span>
            <span>AI Image Editor</span>
          </a>

          <p>
            Platformë moderne për editim imazhesh me inteligjencë artificiale.
          </p>
        </div>

        <div>
          <h4>Produkti</h4>
          <a href="#features">Veçoritë</a>
          <a href="#pricing">Çmimet</a>
          <a href="/dashboard">Dashboard</a>
        </div>

        <div>
          <h4>Ndihmë</h4>
          <a href="#">Kontakt</a>
          <a href="#">Privatësi</a>
          <a href="#">Kushtet</a>
        </div>
      </footer>
    </>
  );
}