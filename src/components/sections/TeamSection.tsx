import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OrganicLeaf, SparkleStar } from "@/components/icons";
import { therapists } from "@/data/team";

interface TeamSectionProps {
  /** Show each therapist's candid photo alongside their headshot. Used only on /nosotros. */
  showCandidPhoto?: boolean;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ showCandidPhoto = false }) => {

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-[#E8E4F7]/25 relative overflow-hidden">
      {/* Background soft botanical accents */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-70">
        <OrganicLeaf size={56} color="#C3B8E8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline, Text and CTA */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <span className="text-xs font-extrabold tracking-[0.18em] text-[#8B7FD1] uppercase">
              NUESTRO EQUIPO
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight leading-tight">
              Profesionales que creen en su potencial
            </h2>

            <p className="text-sm sm:text-base text-[#3E3B52] leading-relaxed">
              Somos un equipo de fonoaudiólogas comprometidas con el desarrollo, la comunicación y el bienestar de cada niño y su familia.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                href="/nosotros"
                className="bg-[#5B4B9E] hover:bg-[#4E3F88]"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Conocer más sobre nosotras
              </Button>
            </div>
          </div>

          {/* Right Column: Therapists Circular Portraits & Floating Quote */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 sm:gap-8">
            {/* Therapist 1: Johanna Gómez */}
            <div className="text-center group flex flex-col items-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-tr from-[#8B7FD1] via-[#E8E4F7] to-[#5B8FD4] shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
                  <Image
                    src={therapists[0].image}
                    alt={therapists[0].name}
                    fill
                    sizes="180px"
                    className="object-cover"
                    style={{ objectPosition: therapists[0].imagePosition }}
                  />
                </div>
                {showCandidPhoto && (
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-10 w-14 sm:w-16 aspect-[1086/1448] -rotate-6 rounded-xl overflow-hidden bg-white border-2 border-white shadow-md">
                    <Image
                      src={therapists[0].candidImage}
                      alt={therapists[0].candidAlt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-extrabold text-[#2D2D3A]">
                {therapists[0].name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#8B7FD1]">
                {therapists[0].role}
              </p>
              <Link
                href={`/nosotros#${therapists[0].id}`}
                className="mt-1 text-xs font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors inline-flex items-center gap-1"
              >
                <span>Ver perfil</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Therapist 2: Lina Rodríguez */}
            <div className="text-center group flex flex-col items-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-tr from-[#5B8FD4] via-[#E8E4F7] to-[#8B7FD1] shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
                  <Image
                    src={therapists[1].image}
                    alt={therapists[1].name}
                    fill
                    sizes="180px"
                    className="object-cover"
                    style={{ objectPosition: therapists[1].imagePosition }}
                  />
                </div>
                {showCandidPhoto && (
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-14 sm:w-16 aspect-[1086/1448] rotate-6 rounded-xl overflow-hidden bg-white border-2 border-white shadow-md">
                    <Image
                      src={therapists[1].candidImage}
                      alt={therapists[1].candidAlt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-extrabold text-[#2D2D3A]">
                {therapists[1].name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#8B7FD1]">
                {therapists[1].role}
              </p>
              {therapists[1].specialty && (
                <p className="text-[11px] text-[#3E3B52] font-medium max-w-[180px]">
                  {therapists[1].specialty}
                </p>
              )}
              <Link
                href={`/nosotros#${therapists[1].id}`}
                className="mt-1 text-xs font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors inline-flex items-center gap-1"
              >
                <span>Ver perfil</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Floating Quote Card: Exactly from mockup */}
            <div className="relative bg-white/95 backdrop-blur-xs p-5 sm:p-6 rounded-3xl shadow-sm border border-[#E8E4F7] max-w-xs text-left">
              <div className="absolute -top-3 -right-2 text-[#8B7FD1]">
                <SparkleStar size={20} color="#8B7FD1" />
              </div>
              <p className="font-script text-lg sm:text-xl text-[#5B4B9E] font-bold leading-snug">
                “Más que un proceso clínico, para nosotras esto es la construcción de un vínculo.”
              </p>
              <div className="mt-3 flex items-center justify-between">
                <OrganicLeaf size={24} color="#5B8FD4" />
                <SparkleStar size={14} color="#8B7FD1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
