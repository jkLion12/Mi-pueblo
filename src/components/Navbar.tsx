"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Compass, Heart, Menu, Search, User, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/#destinos", label: "Destinos" },
  { href: "/#experiencias", label: "Experiencias" },
  { href: "/#comunidad", label: "Comunidad" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="hidden items-center justify-between rounded-[1.8rem] border border-[rgba(240,247,221,0.16)] bg-[linear-gradient(180deg,rgba(30,72,47,0.52),rgba(17,45,33,0.46))] px-6 py-4 shadow-[0_24px_70px_rgba(5,22,15,0.22),inset_0_1px_0_rgba(240,247,221,0.12)] backdrop-blur-2xl md:flex">
          <Link href="/" className="min-w-[13rem]">
            <span className="block font-display text-4xl leading-none text-white">
              Abancay
            </span>
            <span className="mt-1 block text-[0.63rem] uppercase tracking-[0.3em] text-white/58">
              Apurímac · Perú
            </span>
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-[rgba(240,247,221,0.12)] bg-[rgba(255,255,255,0.03)] p-1 shadow-[inset_0_1px_0_rgba(240,247,221,0.08)]">
            {navItems.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 ${
                  (href === "/" && isHome) || (href !== "/" && pathname === href)
                    ? "bg-[linear-gradient(180deg,rgba(182,216,123,0.22),rgba(105,156,92,0.18))] text-[var(--color-sand)] shadow-[inset_0_1px_0_rgba(240,247,221,0.12)]"
                    : "text-white/76 hover:bg-[rgba(210,244,224,0.1)] hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex min-w-[13rem] items-center justify-end gap-2">
            <UtilityButton ariaLabel="Buscar">
              <Search className="h-4 w-4" />
            </UtilityButton>
            <UtilityButton ariaLabel="Favoritos">
              <Heart className="h-4 w-4" />
            </UtilityButton>
            <UtilityButton ariaLabel="Perfil">
              <User className="h-4 w-4" />
            </UtilityButton>
            <Link
              href="/#destinos"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#8eb964,#6b9d67)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(18,58,39,0.24)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
            >
              <Compass className="h-4 w-4" />
              Explora
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-between rounded-[1.5rem] border border-[rgba(240,247,221,0.16)] bg-[linear-gradient(180deg,rgba(30,72,47,0.56),rgba(17,45,33,0.5))] px-4 py-3 shadow-[0_20px_50px_rgba(5,22,15,0.2),inset_0_1px_0_rgba(240,247,221,0.12)] backdrop-blur-2xl">
            <Link href="/">
              <span className="block font-display text-3xl leading-none text-white">
                Abancay
              </span>
              <span className="mt-1 block text-[0.55rem] uppercase tracking-[0.28em] text-white/56">
                Apurímac · Perú
              </span>
            </Link>

            <button
              onClick={() => setIsOpen((value) => !value)}
              className="rounded-full border border-[rgba(240,247,221,0.14)] bg-[rgba(255,255,255,0.04)] p-2.5 text-white"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isOpen && (
            <div className="mt-3 rounded-[1.8rem] border border-[rgba(240,247,221,0.16)] bg-[linear-gradient(180deg,rgba(30,72,47,0.62),rgba(17,45,33,0.58))] p-3 shadow-[0_24px_50px_rgba(5,22,15,0.22)] backdrop-blur-2xl">
              <div className="flex flex-col gap-2">
                {navItems.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white/82 transition hover:bg-[rgba(210,244,224,0.1)] hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function UtilityButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(240,247,221,0.12)] bg-[rgba(255,255,255,0.03)] text-white/80 shadow-[inset_0_1px_0_rgba(240,247,221,0.08)] transition duration-300 hover:bg-[rgba(210,244,224,0.1)] hover:text-white"
    >
      {children}
    </button>
  );
}
