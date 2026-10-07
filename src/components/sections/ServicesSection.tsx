import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import {
  SpeechIcon,
  LanguageIcon,
  CommunicationIcon,
  LiteracyIcon,
  LearningIcon,
  OrganicLeaf,
} from "@/components/icons";

export const ServicesSection: React.FC = () => {
  const serviceCards = [
    {
      slug: "habla",
      title: "Habla",
      description: "Dificultades en la articulación y pronunciación de los sonidos del habla.",
      icon: <SpeechIcon size={46} className="text-[#5B8FD4]" strokeWidth={2.2} />,
      bgCircle: "bg-[#A8C5E8]/25",
    },
    {
      slug: "lenguaje",
      title: "Lenguaje",
      description: "Comprensión y expresión de ideas.",
      icon: <LanguageIcon size={46} className="text-[#8B7FD1]" strokeWidth={2.2} />,
      bgCircle: "bg-[#E8E4F7]",
    },
    {
      slug: "comunicacion",
      title: "Comunicación",
      description: "Habilidades para interactuar y relacionarse con otros.",
      icon: <CommunicationIcon size={46} className="text-[#5B4B9E]" strokeWidth={2.2} />,
      bgCircle: "bg-[#B4C4EA]/30",
    },
    {
      slug: "lectoescritura",
      title: "Lectoescritura",
      description: "Procesos de lectura y escritura en edad escolar.",
      icon: <LiteracyIcon size={46} className="text-[#8B7FD1]" strokeWidth={2.2} />,
      bgCircle: "bg-[#D4C9EE]/40",
    },
    {
      slug: "aprendizaje",
      title: "Aprendizaje",
      description: "Procesos cognitivos y escolares asociados al desarrollo.",
      icon: <LearningIcon size={46} className="text-[#5B8FD4]" strokeWidth={2.2} />,
      bgCircle: "bg-[#F2EFFA]",
    },
  ];

  return (
    <section id="areas" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative organic leaf accents */}
      <div className="absolute top-8 left-6 pointer-events-none opacity-80">
        <OrganicLeaf size={44} color="#8B7FD1" />
      </div>
      <div className="absolute bottom-6 right-8 pointer-events-none opacity-80">
        <OrganicLeaf size={40} color="#5B8FD4" flip />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            ¿Qué podemos acompañar?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3E3B52]">
            Cada niño es único. Estas son algunas áreas en las que podemos apoyarte:
          </p>
        </div>

        {/* 5 Distinct Cards Grid: 5 columns on desktop, 2-3 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {serviceCards.map((service) => (
            <Card
              key={service.slug}
              variant="default"
              className="flex flex-col justify-between p-6 sm:p-7 bg-white border border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-[24px] group"
            >
              <div>
                {/* Large Distinct SVG Empiria Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${service.bgCircle} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-extrabold text-[#2D2D3A] group-hover:text-[#5B4B9E] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Link: Conocer más */}
              <div className="mt-6 pt-4 border-t border-[#F2EFFA]">
                <Link
                  href={`/areas-de-atencion/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Conocer más</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
