import React from "react";
import { Check } from "lucide-react";
import { pillarsData } from "@/data/pillars";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  PersonalizedCareIcon,
  FamilySupportIcon,
  SchoolCoordinationIcon,
  TrustSafetyIcon,
} from "@/components/icons";

export const WhyEmpiriaSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "UserCheck":
        return <PersonalizedCareIcon size={30} className="text-[#5B4B9E]" strokeWidth={2.2} />;
      case "HeartHandshake":
        return <FamilySupportIcon size={30} className="text-[#8B7FD1]" strokeWidth={2.2} />;
      case "School":
        return <SchoolCoordinationIcon size={30} className="text-[#5B8FD4]" strokeWidth={2.2} />;
      case "Award":
      default:
        return <TrustSafetyIcon size={30} className="text-[#5B4B9E]" strokeWidth={2.2} />;
    }
  };

  return (
    <section id="por-que-empiria" className="py-16 sm:py-24 bg-[#E8E4F7]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lavender">Nuestros Fundamentos</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            ¿Por qué Empiria?
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Construimos un espacio donde la ciencia fonoaudiológica se encuentra con la sensibilidad humana, garantizando que tu hijo se sienta motivado y seguro.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillarsData.map((pillar, idx) => (
            <Card
              key={pillar.id}
              variant="default"
              className="flex flex-col justify-between p-6 sm:p-7 bg-white/95 border border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-[24px] group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#E8E4F7] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getPillarIcon(pillar.iconName)}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#8B7FD1]">
                  Pilar 0{idx + 1}
                </span>

                <h3 className="mt-1 text-lg sm:text-xl font-bold text-[#2D2D3A] leading-snug group-hover:text-[#5B4B9E] transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm text-[#3E3B52] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EFFA] flex items-start gap-2 text-xs text-[#5B4B9E] font-medium">
                <Check className="w-4 h-4 text-[#5B8FD4] shrink-0 mt-0.5" />
                <span>{pillar.highlight}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
