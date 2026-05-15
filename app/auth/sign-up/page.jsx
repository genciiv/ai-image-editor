"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.error) return alert(data.error);

    alert("Llogaria u krijua me sukses!");
  }

  return (
    <main className="authPage">
      <section className="authLeft">
        <Link href="/" className="authLogo">
          <span className="brandIcon">
            <Sparkles size={22} />
          </span>
          <span>AI Image Editor</span>
        </Link>

        <h1>
          Transformo imazhet me <span>AI Magic</span>
        </h1>

        <p>
          Krijo llogari dhe fillo të përpunosh imazhe me inteligjencë artificiale.
        </p>
      </section>

      <section className="authRight">
        <form className="authCard" onSubmit={handleSubmit}>
          <h2>Krijo Llogari</h2>
          <p>Plotëso të dhënat për të vazhduar.</p>

          <input
            type="text"
            placeholder="Emri"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

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

          <button type="submit">
            {loading ? "Duke krijuar..." : "Krijo Account"}
          </button>

          <span className="authSwitch">
            Ke llogari? <Link href="/auth/sign-in">Hyr këtu</Link>
          </span>
        </form>
      </section>
    </main>
  );
}