"use client"; // Necesario para manejar el estado del menú móvil

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // íconos para el menú hamburguesa

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A4174]/80 backdrop-blur-md shadow-lg border-b border-[#4E8EA2]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#7BBDE8] hover:text-[#BDD8E9] transition-colors">
                Chacapuente
              </span>
              <span className="text-sm font-light text-[#BDD8E9] hidden sm:inline">
                | Mi Pueblo
              </span>
            </Link>
          </div>

          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-1">
              <NavLink href="/">Inicio</NavLink>
              <NavLink href="/historia">Historia</NavLink>
              <NavLink href="/turismo">Turismo</NavLink>
              <NavLink href="/galeria">Galería</NavLink>
              <NavLink href="/contacto">Contacto</NavLink>
            </div>
          </div>

          {/* Botón de contacto - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contacto"
              className="px-4 py-2 rounded-full bg-[#7BBDE8] text-[#001D39] font-semibold hover:bg-[#6EA2B3] transition-colors shadow-md hover:shadow-lg"
            >
              Visítanos
            </Link>
          </div>

          {/* Botón menú hamburguesa - Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#BDD8E9] hover:text-[#7BBDE8] transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden bg-[#0A4174]/95 backdrop-blur-md border-t border-[#4E8EA2]/30 py-4">
            <div className="flex flex-col space-y-3 px-2">
              <MobileNavLink href="/" onClick={toggleMenu}>
                Inicio
              </MobileNavLink>
              <MobileNavLink href="/historia" onClick={toggleMenu}>
                Historia
              </MobileNavLink>
              <MobileNavLink href="/turismo" onClick={toggleMenu}>
                Turismo
              </MobileNavLink>
              <MobileNavLink href="/galeria" onClick={toggleMenu}>
                Galería
              </MobileNavLink>
              <MobileNavLink href="/contacto" onClick={toggleMenu}>
                Contacto
              </MobileNavLink>
              <Link
                href="/contacto"
                className="mt-2 px-4 py-2 rounded-full bg-[#7BBDE8] text-[#001D39] font-semibold text-center hover:bg-[#6EA2B3] transition-colors shadow-md"
                onClick={toggleMenu}
              >
                Visítanos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Componente para enlaces del menú desktop
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 rounded-md text-[#BDD8E9] hover:text-[#7BBDE8] transition-colors duration-200 text-sm font-medium group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7BBDE8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
}

// Componente para enlaces del menú móvil
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
      className="block px-3 py-2 rounded-md text-[#BDD8E9] hover:text-[#7BBDE8] hover:bg-[#49769F]/40 transition-colors text-base font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}