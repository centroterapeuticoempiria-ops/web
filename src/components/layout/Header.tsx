"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, MapPin, Clock, Mail } from "lucide-react";
import { EmpiriaLogo } from "@/components/logo/EmpiriaLogo";
import { contactData, getWhatsAppLink } from "@/data/contact";
import { WhatsAppGlyph } from "@/components/icons";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust menu state during render on route change (React-recommended pattern)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Áreas de atención", href: "/areas-de-atencion" },
    { label: "Valoración", href: "/valoracion-fonoaudiologica" },
    { label: "Nuestro proceso", href: "/nuestro-proceso" },
    { label: "Nuestro espacio", href: "/nuestro-espacio" },
    { label: "Recursos", href: "/recursos" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E4F7]"
            : "bg-white/85 backdrop-blur-sm border-b border-[#E8E4F7]/70"
        }`}
      >
        {/* Top utility contact bar for trust & quick reach - zero emojis */}
        <div className="hidden lg:block bg-gradient-to-r from-[#F2EFFA]/70 via-[#E8E4F7]/50 to-[#F2EFFA]/70 border-b border-[#E8E4F7]/70 py-1.5 px-6 text-xs text-[#3E3B52]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={contactData.address.googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#5B4B9E] transition-colors"
                title="Ver ubicación en Google Maps"
              >
                <MapPin size={14} className="text-[#5B8FD4]" />
                <span>Modelia, Bogotá</span>
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} className="text-[#8B7FD1]" />
                <span>{contactData.schedule.topbarSummary}</span>
              </span>
            </div>
            <div className="flex items-center gap-5 font-medium">
              <a
                href={getWhatsAppLink("Hola, deseo solicitar orientación para mi hijo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5B4B9E] transition-colors inline-flex items-center gap-1.5"
              >
                <WhatsAppGlyph size={14} className="text-[#25D366]" />
                <span>WhatsApp: {contactData.phoneFormatted}</span>
              </a>
              <span className="text-[#C3B8E8]">|</span>
              <a
                href={`mailto:${contactData.email}`}
                className="hover:text-[#5B4B9E] transition-colors inline-flex items-center gap-1.5"
              >
                <Mail size={14} className="text-[#5B8FD4]" />
                <span>{contactData.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Logo */}
            <div className="flex-shrink-0">
              <EmpiriaLogo size="md" priority />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#E8E4F7] text-[#5B4B9E]"
                        : "text-[#2D2D3A] hover:text-[#5B4B9E] hover:bg-[#F2EFFA]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Action Button (Exact match: Escríbenos por WhatsApp) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#5B8FD4] via-[#7385D6] to-[#8B7FD1] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <WhatsAppGlyph size={16} className="text-white" />
                <span>Escríbenos por WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu & WhatsApp Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2.5 rounded-full text-white bg-[#25D366] shadow-sm hover:bg-[#20ba59] transition-colors"
                aria-label="Hablar por WhatsApp con Empiria"
              >
                <WhatsAppGlyph size={20} className="text-white" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-[#2D2D3A] hover:text-[#5B4B9E] hover:bg-[#F2EFFA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8FD4] transition-colors"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-[#2D2D3A]/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E4F7]">
                <EmpiriaLogo size="sm" />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-[#2D2D3A] hover:bg-[#F2EFFA] transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-[#E8E4F7] text-[#5B4B9E]"
                          : "text-[#2D2D3A] hover:bg-[#F2EFFA] hover:text-[#5B4B9E]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#8B7FD1]" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 mt-6 border-t border-[#E8E4F7] space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-base font-bold text-white bg-[#25D366] shadow-md active:scale-95 transition-all"
              >
                <WhatsAppGlyph size={20} className="text-white" />
                <span>Hablar por WhatsApp</span>
              </a>

              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#5B4B9E] bg-[#F2EFFA] border border-[#C3B8E8]/50 hover:bg-[#E8E4F7] transition-all"
              >
                <MapPin size={16} className="text-[#5B8FD4]" />
                <span>Sede y Contacto Directo</span>
              </Link>

              <p className="text-center text-xs text-[#3E3B52] pt-2">
                Avenida Calle 24 #74-55 · Modelia, Bogotá
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
