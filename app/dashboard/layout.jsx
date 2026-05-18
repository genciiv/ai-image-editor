"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  WandSparkles,
  History,
  Settings,
  Sparkles,
  Crown,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const [credits, setCredits] = useState(0);
  const [plan, setPlan] = useState("FREE");

  useEffect(() => {
    async function getCredits() {
      const res = await fetch("/api/user/credits");
      const data = await res.json();

      setCredits(data.credits);
      setPlan(data.plan);
    }

    getCredits();
  }, []);

  return (
    <div className="dashShell">
      <aside className="dashSidebar">
        <Link href="/" className="dashLogo">
          <Sparkles size={26} />
          <div>
            <strong>AI Image</strong>
            <span>Editor</span>
          </div>
        </Link>

        <nav className="dashNav">
          <Link href="/dashboard">
            <LayoutDashboard size={17} />
            Dashboard
          </Link>

          <Link href="/dashboard/edit">
            <WandSparkles size={17} />
            Edit Image
          </Link>

          <Link href="/dashboard/history">
            <History size={17} />
            History
          </Link>

          <Link href="/dashboard/settings">
            <Settings size={17} />
            Settings
          </Link>
        </nav>

        <div className="dashUpgrade">
          <div>
            <Crown size={15} />
            <span>
              {plan === "PRO" ? "PRO · Unlimited" : `${plan} · ${credits} Credits`}
            </span>
          </div>

          <button
  onClick={async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Checkout error");
    }
  }}
>
  Upgrade
</button>

<button onClick={() => signOut({ callbackUrl: "/" })}>Dil</button>

          
        </div>
      </aside>

      <main className="dashMain">
        <div className="dashTopbar">
          <span>Dashboard</span>
        </div>

        <div className="dashContent">{children}</div>
      </main>
    </div>
  );
}