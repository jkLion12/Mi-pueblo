"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[rgba(120,93,62,0.12)] bg-[rgba(7,19,29,0.68)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div>
              <span className="block font-display text-4xl leading-none text-[var(--color-ink)]">
                Abancay
              </span>
              <span className="mt-1 block text-[0.63rem] uppercase tracking-[0.28em] text-white/42">
                Apurímac · Perú
              </span>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-1 rounded-full border border-[rgba(120,93,62,0.16)] bg-[rgba(255,248,236,0.04)] p-1.5 backdrop-blur-xl">
              <NavLink href="/" active={isHome}>
                Inicio
              </NavLink>
              <NavLink href="/#destinos">Destinos</NavLink>
              <NavLink href="/#experiencias">Experiencias</NavLink>
              <NavLink href="/#gastronomia">Gastronomía</NavLink>
              <NavLink href="/#galeria">Galería</NavLink>
              <NavLink href="/#comunidad">Comunidad</NavLink>
            </div>
          </div>

          <div className="hidden items-center md:flex">
            <Link
              href="/#planifica"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-clay)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#e08957]"
            >
              <Compass className="h-4 w-4" />
              Planifica tu viaje
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-full border border-[rgba(120,93,62,0.14)] bg-[rgba(255,248,236,0.04)] p-2.5 text-white transition hover:bg-[rgba(255,248,236,0.1)]"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="pb-5 md:hidden">
            <div className="rounded-[1.6rem] border border-[rgba(120,93,62,0.14)] bg-[rgba(8,20,31,0.94)] p-3 backdrop-blur-xl">
              <div className="flex flex-col space-y-2">
                <MobileNavLink href="/" onClick={toggleMenu}>
                  Inicio
                </MobileNavLink>
                <MobileNavLink href="/#destinos" onClick={toggleMenu}>
                  Destinos
                </MobileNavLink>
                <MobileNavLink href="/#experiencias" onClick={toggleMenu}>
                  Experiencias
                </MobileNavLink>
                <MobileNavLink href="/#gastronomia" onClick={toggleMenu}>
                  Gastronomía
                </MobileNavLink>
                <MobileNavLink href="/#galeria" onClick={toggleMenu}>
                  Galería
                </MobileNavLink>
                <MobileNavLink href="/#comunidad" onClick={toggleMenu}>
                  Comunidad
                </MobileNavLink>
                <Link
                  href="/#planifica"
                  className="mt-2 rounded-full bg-[var(--color-clay)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#e08957]"
                  onClick={toggleMenu}
                >
                  Planifica tu viaje
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-[rgba(245,227,188,0.14)] text-[var(--color-sand)] shadow-sm"
          : "text-white/72 hover:bg-[rgba(255,248,236,0.08)] hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl px-4 py-3 text-base font-medium text-white/78 transition hover:bg-[rgba(255,248,236,0.08)] hover:text-white"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
