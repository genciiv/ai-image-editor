import { Sparkles, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbarShell">
      <div className="navbar">
        <a href="/" className="brand">
          <span className="brandIcon">
            <Sparkles size={22} />
          </span>
          <span>AI Image Editor</span>
        </a>

        <nav className="navLinks">
          <a href="#features">Veçoritë</a>
          <a href="#pricing">Çmimet</a>
          <a href="#reviews">Vlerësimet</a>
        </nav>

        <div className="navActions">
          <a href="/auth/sign-in">Hyr</a>
          <a href="/auth/sign-up" className="darkBtn">
            Provoje Falas <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}