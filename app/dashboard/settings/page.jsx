"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    async function getProfile() {
      const res = await fetch("/api/user/profile");
      const data = await res.json();

      if (!data.error) {
        setForm({
          name: data.name || "",
          email: data.email || "",
        });
      }
    }

    getProfile();
  }, []);

  async function handleSave() {
    const res = await fetch("/api/user/profile", {
      method: "PUT",
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

    alert("Të dhënat u ruajtën me sukses!");
  }

  return (
    <>
      <div className="dashHeader">
        <h1>Cilësimet e llogarisë</h1>
        <p>Menaxho preferencat e llogarisë dhe cilësimet e sigurisë.</p>
      </div>

      <div className="settingsWrap">
        <section className="settingsCard">
          <h2>Emri</h2>
          <p>Ndrysho emrin që shfaqet në llogarinë tënde.</p>

          <input
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            placeholder="Emri"
          />

          <div className="settingsBottom">
            <span>Maksimumi 32 karaktere.</span>
            <button onClick={handleSave}>Ruaj</button>
          </div>
        </section>

        <section className="settingsCard">
          <h2>Email</h2>
          <p>Ndrysho emailin që përdor për t’u kyçur.</p>

          <input
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            placeholder="Email"
          />

          <div className="settingsBottom">
            <span>Vendos një email të vlefshëm.</span>
            <button onClick={handleSave}>Ruaj</button>
          </div>
        </section>
      </div>
    </>
  );
}