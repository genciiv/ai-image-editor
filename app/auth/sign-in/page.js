"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { signIn } from "next-auth/react";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <>
      <Navbar />

      <main className="authPage">
        <section className="authLeft">
          <Link href="/" className="authLogo">
            <span className="brandIcon">
              <Sparkles size={22} />
            </span>
            <span>AI Image Editor</span>
          </Link>

          <h1>
            Mirë se u ktheve te <span>AI Magic</span>
          </h1>

          <p>
            Hyr në llogarinë tënde dhe vazhdo të krijosh imazhe profesionale me
            inteligjencë artificiale.
          </p>
        </section>

        <section className="authRight">
          <form className="authCard" onSubmit={handleSubmit}>
            <h2>Hyr në Llogari</h2>
            <p>Vendos emailin dhe password-in për të vazhduar.</p>

            <div className="authDivider">
              <span>ose</span>
            </div>

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button type="submit">Hyr</button>
            <button
              type="button"
              className="googleBtn"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              Vazhdo me Google
            </button>

            <span className="authSwitch">
              Nuk ke llogari? <Link href="/auth/sign-up">Krijo këtu</Link>
            </span>
          </form>
        </section>
      </main>
    </>
  );
}
