"use client";

import Link from "next/link";

const items = [
  { name: "Dashboard", icon: "📊", href: "/" },
  { name: "Clients", icon: "👥", href: "/clients" },
  { name: "Policies", icon: "📄", href: "/policies" },
  { name: "Commissions", icon: "💰", href: "/commissions" },
  { name: "Team", icon: "🧠", href: "/team" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">InsuranceTech</div>

      <nav className="sidebar-nav">
        {items.map((i) => (
          <Link key={i.name} href={i.href} className="sidebar-item">
            <span className="icon">{i.icon}</span>
            <span className="label">{i.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
