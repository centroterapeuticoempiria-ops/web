import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/contact";
import {
  PersonalizedCareIcon,
  FamilySupportIcon,
  SchoolCoordinationIcon,
  HumanApproachIcon,
  WhatsAppGlyph,
  BotanicalBranch,
  OrganicLeaf,
  SparkleStar,
  LittleHeartDoodle,
} from "@/components/icons";

export const HeroSection: React.FC = () => {
  const indicators = [
    {
      icon: <PersonalizedCareIcon size={18} className="text-[#8B7FD1]" />,
      label: "Atención personalizada",
    },
    {
      icon: <FamilySupportIcon size={18} className="text-[#5B8FD4]" />,
      label: "Acompañamiento a la familia",
    },
    {
      icon: <SchoolCoordinationIcon size={18} className="text-[#5B4B9E]" />,
      label: "Articulación con el colegio",
    },
    {
      icon: <HumanApproachIcon size={18} className="text-[#8B7FD1]" />,
      label: "Enfoque humano y profesional",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8E4F7]/30 via-white/15 to-transparent pt-8 pb-16 sm:pt-14 sm:pb-24">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E8E4F7]/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A8C5E8]/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Grid named areas control DOM-independent reordering per breakpoint:
          on mobile the photo sits between the description and the CTAs
          (matching the reference design), while on lg: it stays a full-height
          right column beside all the text rows, exactly as before.
        */}
        <div
          className="grid grid-cols-1 lg:[grid-template-columns:7fr_5fr] gap-y-6 gap-x-12 lg:gap-x-8 items-center [grid-template-areas:'badge'_'heading'_'subtitle'_'description'_'photo'_'ctas'_'indicators'] lg:[grid-template-areas:'badge_photo'_'heading_photo'_'subtitle_photo'_'description_photo'_'ctas_photo'_'indicators_photo']"
        >
          {/* Pill badge: exact match from mockup */}
          <div className="[grid-area:badge] flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4C9EE] shadow-xs">
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.18em] text-[#5B8FD4] uppercase">
                COMUNICACIÓN · APRENDIZAJE · CRECIMIENTO · FAMILIA
              </span>
            </div>
          </div>

          {/* Main Heading: 2-tone */}
          <h1 className="[grid-area:heading] text-center lg:text-left text-3xl sm:text-5xl lg:text-6xl font-black text-[#2D2D3A] tracking-tight leading-[1.12]">
            Fonoaudiología Infantil <br />
            <span className="text-[#5B4B9E]">en Bogotá</span>
          </h1>

          {/* Bold Subtitle */}
          <p className="[grid-area:subtitle] text-center lg:text-left text-base sm:text-lg lg:text-xl font-bold text-[#2D2D3A] leading-snug max-w-2xl mx-auto lg:mx-0">
            Convertimos las dificultades de comunicación y aprendizaje en confianza, autonomía y éxito escolar.
          </p>

          {/* Description */}
          <p className="[grid-area:description] text-center lg:text-left text-sm sm:text-base text-[#3E3B52] leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Trabajamos con población infantil en procesos de habla, lenguaje, lectoescritura y aprendizaje, con atención individual y personalizada en cada sesión.
          </p>

          {/* Right Column: Organic Child Photograph & Botanical Composition */}
          <div className="[grid-area:photo] relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Floating script sticker: "Pequeños avances, grandes historias" */}
              <div className="absolute -top-6 left-4 sm:-top-8 sm:left-6 z-20 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-2xl shadow-sm border border-[#E8E4F7] -rotate-3">
                <div className="flex items-center gap-1.5">
                  <span className="font-script text-xl sm:text-2xl text-[#5B4B9E] font-bold">
                    Pequeños avances, grandes historias
                  </span>
                  <LittleHeartDoodle size={16} color="#8B7FD1" />
                </div>
              </div>

              {/* Decorative sparkles */}
              <div className="absolute top-1/4 -left-5 z-10">
                <SparkleStar size={18} color="#8B7FD1" />
              </div>
              <div className="absolute bottom-1/3 -right-4 z-10">
                <SparkleStar size={16} color="#5B8FD4" />
              </div>

              {/* Botanical leaves framing the image */}
              <div className="absolute -bottom-8 -left-8 z-10 pointer-events-none">
                <BotanicalBranch size={130} color="#8B7FD1" />
              </div>

              <div className="absolute -top-6 -right-6 z-0 pointer-events-none opacity-80">
                <OrganicLeaf size={48} color="#A8C5E8" />
              </div>
              <div className="absolute -bottom-4 right-1/3 z-10 pointer-events-none">
                <OrganicLeaf size={36} color="#8B7FD1" flip />
              </div>

              {/* Main Organic Photo Container */}
              <div className="relative rounded-[40px] sm:rounded-[56px] overflow-hidden bg-gradient-to-tr from-[#E8E4F7] via-white to-[#A8C5E8]/40 p-2 sm:p-3 shadow-xl border-2 border-white">
                <div className="relative w-full aspect-square rounded-[36px] sm:rounded-[48px] overflow-hidden bg-[#F2EFFA]">
                  <Image
                    src="/images/hero/hero-child.jpg"
                    alt="Niña sonriendo durante una actividad lúdica y comunicativa"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>

              {/* Floating speech pill: "Aquí también crecen sus palabras" with SVG heart */}
              <div className="absolute -bottom-4 right-2 sm:right-4 z-20 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-2xl shadow-md border border-[#E8E4F7] rotate-2">
                <p className="font-script text-lg sm:text-xl text-[#5B4B9E] font-bold leading-tight inline-flex items-center gap-1.5">
                  <span>Aquí también crecen sus palabras</span>
                  <LittleHeartDoodle size={16} color="#8B7FD1" />
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="[grid-area:ctas] pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#proceso"
              className="w-full sm:w-auto bg-[#5B4B9E] hover:bg-[#4E3F88] shadow-md shadow-[#5B4B9E]/20"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Quiero conocer el proceso
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={getWhatsAppLink("Hola, quisiera recibir información sobre el proceso de valoración fonoaudiológica infantil en Centro Terapéutico Empiria.")}
              isExternal
              className="w-full sm:w-auto border-2 border-[#5B8FD4]/40 hover:border-[#25D366] text-[#2D2D3A] hover:text-[#25D366] bg-white shadow-xs"
              leftIcon={<WhatsAppGlyph size={20} className="text-[#25D366]" />}
            >
              Hablar por WhatsApp
            </Button>
          </div>

          {/* 4 Indicators Row: matches the mockup under the buttons */}
          <div className="[grid-area:indicators] pt-6 border-t border-[#E8E4F7]/90 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            {indicators.map((ind, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-white/80 border border-[#E8E4F7] shadow-xs"
              >
                <span className="shrink-0 p-1.5 rounded-xl bg-[#F2EFFA]">
                  {ind.icon}
                </span>
                <span className="text-xs font-semibold text-[#2D2D3A] leading-tight">
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
