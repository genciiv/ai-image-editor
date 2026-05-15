"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="navbarShell">
      <div className="navbar">
        <Link href="/" className="brand">
          <span className="brandIcon">
            <Sparkles size={20} />
          </span>

          <span>AI Image Editor</span>
        </Link>

        <nav className="navLinks">
          <a href="#features">Veçoritë</a>
          <a href="#pricing">Çmimet</a>
          <a href="#reviews">Vlerësimet</a>
        </nav>

        <div className="navActions">
          {session ? (
            <Link href="/dashboard" className="darkBtn">
              Dashboard →
            </Link>
          ) : (
            <>
              <Link href="/auth/sign-in">Hyr</Link>

              <Link href="/auth/sign-up" className="darkBtn">
                Provoje Falas
                <ArrowRight size={16} />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
