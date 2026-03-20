"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-900 to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-primary-900">
              Clara<span className="text-accent">IA</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-primary-900 transition-colors text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contato?assunto=orcamento"
              className="bg-accent hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-2 text-gray-600 hover:text-primary-900"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contato?assunto=orcamento"
              className="block mt-2 bg-accent text-white text-center px-5 py-2 rounded-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Solicitar Orçamento
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
