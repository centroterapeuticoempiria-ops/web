import React from "react";
import { ExternalLink } from "lucide-react";
import { contactData } from "@/data/contact";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { InstagramGlyph, LittleHeartDoodle, OrganicLeaf } from "@/components/icons";

interface InstagramTopicPreview {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  gradientBg: string;
}

const editorialTopics: InstagramTopicPreview[] = [
  {
    id: "topic-1",
    tag: "Estimulación en Casa",
    title: "Momentos cotidianos para enriquecer el lenguaje",
    excerpt:
      "La hora del baño, el juego compartido o el camino a casa: pautas respetuosas para convertir rutinas diarias en espacios de conexión y comunicación activa.",
    gradientBg: "from-[#5B8FD4]/15 via-[#E8E4F7]/40 to-white",
  },
  {
    id: "topic-2",
    tag: "Habla y Pronunciación",
    title: "El sonido /r/ y /rr/: ¿cuándo consultar con tranquilidad?",
    excerpt:
      "Información clara sobre los tiempos de adquisición fonológica esperados en la infancia y estrategias de modelado amoroso en familia.",
    gradientBg: "from-[#8B7FD1]/15 via-[#F2EFFA]/50 to-white",
  },
  {
    id: "topic-3",
    tag: "Lectoescritura",
    title: "Acompañar la lectura y escritura desde la confianza",
    excerpt:
      "Pautas de conciencia fonológica y juego sonoro para fortalecer la lectura en edad escolar sin presiones ni frustración.",
    gradientBg: "from-[#5B4B9E]/10 via-[#E8E4F7]/40 to-white",
  },
  {
    id: "topic-4",
    tag: "Nuestra Sede en Bogotá",
    title: "Un entorno terapéutico diseñado para la infancia",
    excerpt:
      "Conoce cómo organizamos nuestras sesiones presenciales en Bogotá: juego guiado, calidez humana y respeto por los ritmos individuales.",
    gradientBg: "from-[#A8C5E8]/20 via-[#F2EFFA]/40 to-white",
  },
];

export const InstagramFeedSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-white/30 to-transparent relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-10 right-6 pointer-events-none opacity-60">
        <OrganicLeaf size={40} color="#8B7FD1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <Badge variant="lavender" icon={<InstagramGlyph size={14} className="text-[#8B7FD1]" />}>
                Contenido y Comunidad
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight">
              Acompáñanos en <span className="text-[#5B4B9E]">{contactData.social.instagram}</span>
            </h2>
            <p className="text-base text-[#3E3B52]">
              Compartimos reflexiones fonoaudiológicas, recursos pedagógicos y miradas respetuosas sobre el desarrollo y bienestar de tu hijo o hija.
            </p>
          </div>

          <div>
            <a
              href={contactData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <InstagramGlyph size={16} className="text-white" />
              <span>Seguir en Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Editorial Topic Cards Grid - Zero fabricated metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorialTopics.map((topic) => (
            <Card
              key={topic.id}
              variant="default"
              className={`flex flex-col justify-between p-6 bg-gradient-to-br ${topic.gradientBg} border border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-[24px]`}
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-[#5B4B9E] uppercase tracking-wider text-[11px]">
                    {topic.tag}
                  </span>
                  <InstagramGlyph size={14} className="text-[#8B7FD1]" />
                </div>

                <h3 className="text-base font-bold text-[#2D2D3A] leading-snug">
                  {topic.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                  {topic.excerpt}
                </p>
              </div>

              {/* Profile link */}
              <div className="mt-5 pt-3 border-t border-[#E8E4F7]/80 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 font-semibold text-[#8B7FD1]">
                  <LittleHeartDoodle size={13} color="#8B7FD1" />
                  <span>Desarrollo infantil</span>
                </span>

                <a
                  href={contactData.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#5B8FD4] hover:text-[#5B4B9E] transition-colors inline-flex items-center gap-1 text-[11px]"
                >
                  <span>Ir al perfil</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
