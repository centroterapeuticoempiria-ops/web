import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import {
  FamilySupportIcon,
  ArticlesIcon,
  FAQIcon,
  EmailIcon,
  SparkleStar,
} from "@/components/icons";

export const FeatureHubCards: React.FC = () => {
  const hubs = [
    {
      title: "Para familias",
      description: "Recursos y orientación para acompañar en casa.",
      href: "/para-familias",
      icon: <FamilySupportIcon size={26} className="text-[#5B8FD4]" strokeWidth={2} />,
      bgIcon: "bg-[#A8C5E8]/25",
    },
    {
      title: "Empiria en casa",
      description: "Artículos y recursos educativos.",
      href: "/recursos",
      icon: <ArticlesIcon size={26} className="text-[#8B7FD1]" strokeWidth={2} />,
      bgIcon: "bg-[#E8E4F7]",
    },
    {
      title: "Preguntas frecuentes",
      description: "Resuelve tus dudas más comunes.",
      href: "/preguntas-frecuentes",
      icon: <FAQIcon size={26} className="text-[#5B4B9E]" strokeWidth={2} />,
      bgIcon: "bg-[#B4C4EA]/30",
    },
    {
      title: "Contáctanos",
      description: "Estamos para acompañarte.",
      href: "/contacto",
      icon: <EmailIcon size={26} className="text-[#5B8FD4]" strokeWidth={2} />,
      bgIcon: "bg-[#D4C9EE]/40",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white/30 border-y border-[#E8E4F7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Light framing so this hub grid matches the minimal heading + subtitle
            pattern used by every sibling section, instead of dropping in bare. */}
        <div className="relative text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D3A] tracking-tight">
            Más formas de acompañarte
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#3E3B52]">
            Recursos, respuestas y un canal directo cuando lo necesites.
          </p>
          <div className="hidden sm:block absolute -top-3 right-0 pointer-events-none opacity-70">
            <SparkleStar size={18} color="#8B7FD1" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {hubs.map((hub, idx) => (
            <Card
              key={idx}
              variant="default"
              className="flex flex-col justify-between p-6 bg-white border border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-[24px] group"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl ${hub.bgIcon} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}
                >
                  {hub.icon}
                </div>

                <h3 className="text-lg font-extrabold text-[#2D2D3A] group-hover:text-[#5B4B9E] transition-colors">
                  {hub.title}
                </h3>

                <p className="mt-1.5 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F2EFFA]">
                <Link
                  href={hub.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Ver más</span>
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
