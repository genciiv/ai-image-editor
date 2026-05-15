"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {
  LayoutDashboard,
  WandSparkles,
  History,
  Settings,
  Sparkles,
  Crown,
} from "lucide-react";

export default function DashboardLayout({ children }) {
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
            Editim Imazhi
          </Link>

          <Link href="/dashboard/history">
            <History size={17} />
            Historia
          </Link>

          <Link href="/dashboard/settings">
            <Settings size={17} />
            Settings
          </Link>
        </nav>

        <div className="dashUpgrade">
          <div>
            <Crown size={15} />
            <span>8 Credits</span>
          </div>

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
