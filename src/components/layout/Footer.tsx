import React from "react";
import Link from "next/link";
import { Shield, FileCheck, FileText, Cookie, MapPin, Clock, Mail, Heart } from "lucide-react";
import { EmpiriaLogo } from "@/components/logo/EmpiriaLogo";
import { contactData, getWhatsAppLink } from "@/data/contact";
import {
  InstagramGlyph,
  WhatsAppGlyph,
  OrganicLeaf,
  LittleHeartDoodle,
} from "@/components/icons";

export const Footer: React.FC = () => {
  const navigationLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Áreas de atención", href: "/areas-de-atencion" },
    { label: "Nuestro espacio", href: "/nuestro-espacio" },
    { label: "Nuestro proceso", href: "/nuestro-proceso" },
    { label: "Para familias", href: "/para-familias" },
    { label: "Recursos y Artículos", href: "/recursos" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Contacto", href: "/contacto" },
  ];

  const serviceLinks = [
    { label: "Valoración Fonoaudiológica", href: "/valoracion-fonoaudiologica" },
    { label: "Habla e Inteligibilidad", href: "/areas-de-atencion/habla" },
    { label: "Desarrollo del Lenguaje", href: "/areas-de-atencion/lenguaje" },
    { label: "Comunicación e Interacción", href: "/areas-de-atencion/comunicacion" },
    { label: "Lectoescritura Infantil", href: "/areas-de-atencion/lectoescritura" },
    { label: "Procesos de Aprendizaje", href: "/areas-de-atencion/aprendizaje" },
  ];

  const legalLinks = [
    {
      label: "Política de Privacidad",
      href: "/politica-de-privacidad",
      icon: <Shield size={14} className="text-[#8B7FD1]" />,
    },
    {
      label: "Tratamiento de Datos Personales",
      href: "/politica-tratamiento-datos",
      icon: <FileCheck size={14} className="text-[#5B8FD4]" />,
    },
    {
      label: "Autorización de Tratamiento de Datos",
      href: "/autorizacion-tratamiento-datos",
      icon: <FileCheck size={14} className="text-[#5B4B9E]" />,
    },
    {
      label: "Términos y Condiciones",
      href: "/terminos-y-condiciones",
      icon: <FileText size={14} className="text-[#8B7FD1]" />,
    },
    {
      label: "Política de Cookies",
      href: "/politica-cookies",
      icon: <Cookie size={14} className="text-[#5B8FD4]" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white/20 via-[#E8E4F7]/25 to-[#E8E4F7]/45 text-[#2D2D3A] border-t border-[#E8E4F7] relative overflow-hidden">
      {/* Decorative leaf in footer */}
      <div className="absolute top-6 right-6 pointer-events-none opacity-60">
        <OrganicLeaf size={48} color="#C3B8E8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        {/* Brand Quote Card matching mockup */}
        <div className="mb-12 p-6 sm:p-8 rounded-[28px] bg-white border border-[#E8E4F7] shadow-xs text-center flex flex-col items-center justify-center space-y-3">
          <EmpiriaLogo size="sm" />
          <p className="font-script text-xl sm:text-2xl font-bold text-[#5B4B9E] max-w-xl inline-flex items-center gap-2">
            <span>“Cada niño tiene una forma única de aprender, comunicarse y crecer.”</span>
            <LittleHeartDoodle size={18} color="#8B7FD1" />
          </p>
          <div className="pt-2 flex items-center gap-3">
            {/* Only confirmed social profile: Instagram @centrot.empiria */}
            <a
              href={contactData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2EFFA] text-[#2D2D3A] hover:bg-[#E8E4F7] hover:text-[#E1306C] transition-colors text-xs font-bold"
              aria-label="Instagram oficial de Centro Terapéutico Empiria"
            >
              <InstagramGlyph size={16} className="text-[#E1306C]" />
              <span>{contactData.social.instagram}</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2EFFA] text-[#2D2D3A] hover:bg-[#E8E4F7] hover:text-[#25D366] transition-colors text-xs font-bold"
              aria-label="WhatsApp oficial de Centro Terapéutico Empiria"
            >
              <WhatsAppGlyph size={16} className="text-[#25D366]" />
              <span>{contactData.phoneFormatted}</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-[#D4C9EE]/60">
          {/* Column 1: Brand & Emotional statement */}
          <div className="lg:col-span-2 space-y-4">
            <EmpiriaLogo size="md" />
            <p className="text-sm sm:text-base text-[#3E3B52] leading-relaxed max-w-sm pt-2">
              Fonoaudiología infantil con un enfoque humano, personalizado y profesional en Bogotá. Acompañamos a tu hijo a descubrir y potenciar su voz y su aprendizaje.
            </p>
            <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8E4F7] text-xs text-[#3E3B52] space-y-1">
              <p className="font-bold text-[#5B4B9E] flex items-center gap-1.5">
                <Heart size={14} className="text-[#8B7FD1]" />
                Enfoque centrado en la familia
              </p>
              <p>
                Cada sesión es individual y diseñada respetando los ritmos singulares de cada niño o niña.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation — split into two short columns so all 9 links stay visible without a tall single list */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B4B9E] mb-4">
              Navegación
            </h4>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2.5 text-sm text-[#3E3B52]">
                {navigationLinks.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-[#5B4B9E] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5 text-sm text-[#3E3B52]">
                {navigationLinks.slice(5).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-[#5B4B9E] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Áreas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B4B9E] mb-4">
              Áreas de Atención
            </h4>
            <ul className="space-y-2.5 text-sm text-[#3E3B52]">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-[#5B4B9E] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B4B9E] mb-4">
              Sede Presencial
            </h4>
            <div className="space-y-3 text-xs text-[#3E3B52]">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#5B8FD4] shrink-0 mt-0.5" />
                <a
                  href={contactData.address.googleMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5B4B9E] transition-colors"
                >
                  {contactData.address.street} <br />
                  {contactData.address.neighborhood}, Bogotá
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-[#8B7FD1] shrink-0 mt-0.5" />
                <span>
                  {contactData.schedule.weekdays} <br />
                  {contactData.schedule.saturdays}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={15} className="text-[#5B4B9E] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactData.email}`}
                  className="hover:text-[#5B4B9E] transition-colors break-all"
                >
                  {contactData.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#525064]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#5B4B9E] transition-colors inline-flex items-center gap-1"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <p className="text-center md:text-right">
            © {new Date().getFullYear()} {contactData.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
