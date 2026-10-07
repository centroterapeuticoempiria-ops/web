import React from "react";
import { CheckCircle2 } from "lucide-react";
import { stagesData } from "@/data/stages";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  InfancyIcon,
  ChildDevelopmentIcon,
  SchoolStageIcon,
  YouthGroupIcon,
} from "@/components/icons";

export const StagesSection: React.FC = () => {
  const getStageIcon = (id: string) => {
    switch (id) {
      case "primera-infancia":
        return <InfancyIcon size={30} className="text-[#5B8FD4]" strokeWidth={2.2} />;
      case "desarrollo-infantil":
        return <ChildDevelopmentIcon size={30} className="text-[#8B7FD1]" strokeWidth={2.2} />;
      case "etapa-escolar":
        return <SchoolStageIcon size={30} className="text-[#5B4B9E]" strokeWidth={2.2} />;
      default:
        return <YouthGroupIcon size={30} className="text-[#5B8FD4]" strokeWidth={2.2} />;
    }
  };

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lavender">Momentos del Desarrollo</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            ¿A quiénes acompañamos?
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Cada etapa del crecimiento infantil plantea retos singulares de comunicación, lenguaje y aprendizaje. Adaptamos nuestras estrategias a las necesidades de cada momento.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stagesData.map((stage) => (
            <Card
              key={stage.id}
              variant="default"
              className="flex flex-col justify-between p-6 sm:p-7 bg-white border border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-[24px] group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F2EFFA] flex items-center justify-center border border-[#E8E4F7] group-hover:scale-105 transition-transform duration-300">
                    {getStageIcon(stage.id)}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${stage.badgeColor}`}>
                    {stage.range}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#2D2D3A] group-hover:text-[#5B4B9E] transition-colors">
                  {stage.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                  {stage.description}
                </p>

                <div className="mt-5 pt-4 border-t border-[#F2EFFA]">
                  <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider mb-2">
                    Enfoque de acompañamiento:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#3E3B52]">
                    {stage.emphasis.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8FD4] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {stage.note && (
                <div className="mt-6 pt-3 border-t border-[#E8E4F7] text-[11px] text-[#3E3B52] italic">
                  {stage.note}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Reassurance text */}
        <p className="text-center text-xs sm:text-sm text-[#3E3B52] mt-8 italic">
          * Los rangos de edad son orientativos para guiar el acompañamiento familiar y no representan una categorización diagnóstica rígida.
        </p>
      </div>
    </section>
  );
};
