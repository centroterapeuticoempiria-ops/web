"use client";

import React, { useState } from "react";
import { ArrowRight, ExternalLink, Heart, Shield } from "lucide-react";
import { contactData, getWhatsAppLink } from "@/data/contact";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  WhatsAppIcon,
  WhatsAppGlyph,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  InstagramIcon,
} from "@/components/icons";

export const ContactSection: React.FC = () => {
  const [parentName, setParentName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [concernArea, setConcernArea] = useState("Habla");
  const [note, setNote] = useState("");

  const handleWhatsAppConsult = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      `Hola, mi nombre es ${parentName.trim() || "un padre/madre de familia"}.`,
      childAge.trim() ? `Mi hijo/a tiene ${childAge.trim()}.` : "",
      `Quisiera consultar sobre el área de ${concernArea}.`,
      note.trim() ? `Detalle: ${note.trim()}` : "",
      "Agradezco su orientación para conocer los pasos de valoración en Centro Terapéutico Empiria.",
    ].filter(Boolean);

    const fullMessage = parts.join(" ");
    window.open(getWhatsAppLink(fullMessage), "_blank", "noopener,noreferrer");
  };

  const contactChannels = [
    {
      id: "whatsapp",
      title: "WhatsApp",
      value: contactData.phoneFormatted,
      href: getWhatsAppLink(),
      isExternal: true,
      description: "Canal preferido para respuesta ágil, agendamiento y orientación inicial.",
      icon: <WhatsAppIcon size={32} className="text-[#25D366]" strokeWidth={2} />,
      bgIcon: "bg-[#25D366]/15",
      actionLabel: "Escribir al WhatsApp",
      highlight: true,
    },
    {
      id: "email",
      title: "Correo Electrónico",
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      isExternal: false,
      description: "Consultas institucionales, documentación escolar y convenios.",
      icon: <EmailIcon size={32} className="text-[#5B8FD4]" strokeWidth={2} />,
      bgIcon: "bg-[#5B8FD4]/15",
      actionLabel: "Enviar correo",
      highlight: false,
    },
    {
      id: "phone",
      title: "Teléfono",
      value: contactData.phoneFormatted,
      href: `tel:${contactData.phoneRaw}`,
      isExternal: false,
      description: "Llamadas directas en nuestro horario habitual de atención.",
      icon: <PhoneIcon size={32} className="text-[#8B7FD1]" strokeWidth={2} />,
      bgIcon: "bg-[#8B7FD1]/15",
      actionLabel: "Llamar ahora",
      highlight: false,
    },
    {
      id: "location",
      title: "Sede Presencial",
      value: contactData.address.full,
      href: contactData.address.googleMapsPlaceUrl,
      isExternal: true,
      description: "Instalaciones cálidas, seguras y adaptadas a la infancia.",
      icon: <LocationIcon size={32} className="text-[#5B4B9E]" strokeWidth={2} />,
      bgIcon: "bg-[#5B4B9E]/15",
      actionLabel: "Ver en el mapa",
      highlight: false,
    },
    {
      id: "instagram",
      title: "Instagram Oficial",
      value: contactData.social.instagram,
      href: contactData.social.instagramUrl,
      isExternal: true,
      description: "Comunidad, reflexiones de fonoaudiología y actividades en familia.",
      icon: <InstagramIcon size={32} className="text-[#E1306C]" strokeWidth={2} />,
      bgIcon: "bg-[#E1306C]/15",
      actionLabel: "Seguir perfil",
      highlight: false,
    },
  ];

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <Badge
            variant="lavender"
            icon={<Heart size={14} className="text-[#8B7FD1]" />}
          >
            Cada pequeño avance cuenta
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            ¿Quieres conversar sobre el proceso de tu hijo o hija?
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Estamos aquí para acompañarte a comprender sus necesidades y construir juntos un camino pensado para él o ella.
          </p>
        </div>

        {/* 5 Visual Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactChannels.map((channel) => (
            <Card
              key={channel.id}
              variant="default"
              className={`p-6 sm:p-7 flex flex-col justify-between rounded-[24px] border transition-all duration-300 ${
                channel.highlight
                  ? "bg-gradient-to-br from-[#F2EFFA]/70 via-white to-[#E8E4F7]/40 border-[#8B7FD1]/40 shadow-sm hover:shadow-lg hover:-translate-y-1"
                  : "bg-white border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-xs hover:shadow-md hover:-translate-y-1"
              }`}
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl ${channel.bgIcon} flex items-center justify-center mb-5`}
                >
                  {channel.icon}
                </div>

                <span className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider">
                  {channel.title}
                </span>

                <h3 className="text-lg font-bold text-[#2D2D3A] mt-1 break-words">
                  {channel.value}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EFFA]">
                <a
                  href={channel.href}
                  target={channel.isExternal ? "_blank" : undefined}
                  rel={channel.isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors"
                >
                  <span>{channel.actionLabel}</span>
                  {channel.isExternal ? (
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </a>
              </div>
            </Card>
          ))}

          {/* Horarios Card to balance grid */}
          <Card
            variant="default"
            className="p-6 sm:p-7 flex flex-col justify-between rounded-[24px] bg-white border border-[#E8E4F7] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#5B8FD4]/15 flex items-center justify-center mb-5">
                <LocationIcon size={32} className="text-[#5B8FD4]" strokeWidth={2} />
              </div>

              <span className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider">
                Horarios de Consulta
              </span>

              <h3 className="text-lg font-bold text-[#2D2D3A] mt-1">
                Lunes a Sábado
              </h3>

              <div className="mt-2 text-xs sm:text-sm text-[#3E3B52] space-y-1 leading-relaxed">
                <p>
                  <strong>Entre semana:</strong> 9:00 a.m. – 6:00 p.m.
                </p>
                <p>
                  <strong>Sábados:</strong> 9:00 a.m. – 5:00 p.m.
                </p>
                <p className="text-[#7A788A]">Domingos y festivos: Cerrado</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2EFFA]">
              <span className="text-xs font-medium text-[#7A788A]">
                Atención presencial previa cita
              </span>
            </div>
          </Card>
        </div>

        {/* Interactive Consultation Preparer: Opens WhatsApp directly without simulating backend storage */}
        <div className="rounded-[32px] bg-gradient-to-br from-[#F2EFFA] via-[#E8E4F7]/40 to-white p-8 sm:p-12 border border-[#E8E4F7] shadow-md max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D3A]">
              Asistente de Consulta Directa por WhatsApp
            </h3>
            <p className="text-sm text-[#3E3B52]">
              Completa estos datos básicos para que el mensaje se prepare automáticamente y puedas iniciar la conversación de inmediato con nuestro equipo.
            </p>
          </div>

          <form onSubmit={handleWhatsAppConsult} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#5B4B9E] uppercase tracking-wider mb-1.5">
                  Nombre del padre, madre o acudiente
                </label>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Ej: Carolina Morales"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:ring-2 focus:ring-[#8B7FD1]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5B4B9E] uppercase tracking-wider mb-1.5">
                  Edad del niño o niña
                </label>
                <input
                  type="text"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  placeholder="Ej: 4 años y medio"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:ring-2 focus:ring-[#8B7FD1]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#5B4B9E] uppercase tracking-wider mb-1.5">
                  Área principal de acompañamiento
                </label>
                <select
                  value={concernArea}
                  onChange={(e) => setConcernArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:ring-2 focus:ring-[#8B7FD1]"
                >
                  <option value="Habla y pronunciación">Habla y articulación de sonidos</option>
                  <option value="Desarrollo del lenguaje">Lenguaje (comprensión y expresión)</option>
                  <option value="Comunicación e interacción">Comunicación e interacción social</option>
                  <option value="Lectoescritura escolar">Lectoescritura en edad escolar</option>
                  <option value="Procesos de aprendizaje">Procesos de aprendizaje infantil</option>
                  <option value="Orientación fonoaudiológica general">Orientación general</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5B4B9E] uppercase tracking-wider mb-1.5">
                  Comentario adicional (opcional)
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ej: Recomendación del colegio / dudas recientes"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:ring-2 focus:ring-[#8B7FD1]"
                />
              </div>
            </div>

            {/* Privacy note */}
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/80 border border-[#E8E4F7] text-xs text-[#3E3B52]">
              <Shield size={18} className="text-[#5B4B9E] shrink-0 mt-0.5" />
              <p>
                <strong>Privacidad protegida:</strong> No solicitamos historias clínicas ni información médica confidencial por este medio. La comunicación se realiza directamente en tu aplicación de WhatsApp.
              </p>
            </div>

            <div className="text-center pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                type="submit"
                className="w-full sm:w-auto px-8 shadow-md"
                leftIcon={<WhatsAppGlyph size={20} className="text-white" />}
              >
                Abrir WhatsApp y Enviar Consulta
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
