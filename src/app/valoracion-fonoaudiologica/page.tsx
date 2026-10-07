import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ClipboardCheck,
  CheckCircle2,
  Info,
  Clock,
  Heart,
  ArrowRight,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { contactData, getWhatsAppLink } from "@/data/contact";
import { WhatsAppGlyph } from "@/components/icons";

export const metadata: Metadata = {
  title: "Valoración Fonoaudiológica Infantil en Bogotá | Centro Terapéutico Empiria",
  description:
    "Evaluación fonoaudiológica integral y respetuosa para niños de 0 a 12 años en Bogotá. Identificamos fortalezas y necesidades en habla, lenguaje, lectoescritura y aprendizaje.",
  alternates: {
    canonical: "/valoracion-fonoaudiologica",
  },
  openGraph: {
    title: "Valoración Fonoaudiológica Infantil en Bogotá | Centro Terapéutico Empiria",
    description:
      "Evaluación fonoaudiológica respetuosa e individual para niños en Modelia, Bogotá. Informe detallado y orientación a familias y colegios.",
    url: "/valoracion-fonoaudiologica",
  },
};

export default function ValoracionFonoaudiologicaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Valoración Fonoaudiológica Infantil en Bogotá",
    description:
      "Evaluación fonoaudiológica integral y respetuosa para niños de 0 a 12 años en Bogotá. Identificamos fortalezas y necesidades en habla, lenguaje, lectoescritura y aprendizaje.",
    url: "https://www.centroempiria.com/valoracion-fonoaudiologica",
    about: {
      "@type": "MedicalProcedure",
      name: "Valoración Fonoaudiológica Infantil",
      procedureType: "Diagnostic",
      followup: "Informe fonoaudiológico y plan de intervención individualizado",
      howPerformed: "Evaluación clínica mediante actividades lúdicas, observación estructurada e interacción comunicativa directa.",
    },
    provider: {
      "@type": "MedicalBusiness",
      name: "Centro Terapéutico Empiria",
      url: "https://www.centroempiria.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: contactData.address.street,
        addressLocality: "Bogotá",
        neighborhood: contactData.address.neighborhood,
        addressCountry: "CO",
      },
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.centroempiria.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Valoración Fonoaudiológica Infantil",
        item: "https://www.centroempiria.com/valoracion-fonoaudiologica",
      },
    ],
  };

  const areasEvaluadas = [
    {
      title: "Habla y Pronunciación",
      desc: "Articulación de sonidos, inteligibilidad del mensaje, fluidez verbal y coordinación motora del habla.",
      link: "/areas-de-atencion/habla",
    },
    {
      title: "Lenguaje Comprensivo y Expresivo",
      desc: "Comprensión de instrucciones, amplitud de vocabulario, estructuración sintáctica y habilidad narrativa.",
      link: "/areas-de-atencion/lenguaje",
    },
    {
      title: "Comunicación e Interacción Social",
      desc: "Contacto visual, intención comunicativa, respeto de turnos de conversación y reciprocidad en el juego.",
      link: "/areas-de-atencion/comunicacion",
    },
    {
      title: "Lectoescritura Inicial y Escolar",
      desc: "Conciencia fonológica, correspondencia grafema-fonema, decodificación lectora y expresión escrita.",
      link: "/areas-de-atencion/lectoescritura",
    },
    {
      title: "Procesos de Aprendizaje",
      desc: "Atención focalizada, memoria de trabajo verbal, razonamiento verbal y funciones de organización escolar.",
      link: "/areas-de-atencion/aprendizaje",
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-gradient-to-b from-[#E8E4F7]/30 via-white/20 to-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb visual navigation */}
        <nav aria-label="Ruta de navegación" className="mb-6 text-xs text-[#5B4B9E] flex items-center gap-2">
          <Link href="/" className="hover:text-[#5B8FD4] transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-[#3E3B52] font-semibold">Valoración Fonoaudiológica</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="lavender" icon={<ClipboardCheck size={14} className="text-[#8B7FD1]" />}>
            Paso Fundamental · Fonoaudiología Infantil
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] tracking-tight leading-[1.15]">
            Valoración Fonoaudiológica Infantil <span className="text-[#5B4B9E]">en Bogotá</span>
          </h1>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Una mirada profesional, cálida y respetuosa para comprender el momento de desarrollo de tu hijo o hija, identificar sus fortalezas y trazar una ruta clara de acompañamiento.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="whatsapp"
              size="lg"
              href={getWhatsAppLink("valoracion")}
              isExternal
              leftIcon={<WhatsAppGlyph size={20} className="text-white" />}
            >
              Solicitar información sobre la valoración
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/nuestro-proceso"
            >
              Conocer el proceso paso a paso
            </Button>
          </div>
        </div>

        {/* ¿Qué es y para qué sirve? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card variant="default" className="p-8 rounded-[28px] space-y-3 bg-white border border-[#E8E4F7]">
            <div className="w-12 h-12 rounded-2xl bg-[#E8E4F7] flex items-center justify-center text-[#5B4B9E]">
              <Sparkles size={24} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D3A]">
              ¿Qué es una valoración fonoaudiológica?
            </h2>
            <p className="text-sm text-[#3E3B52] leading-relaxed">
              Es un espacio de exploración clínica individualizada donde observamos cómo el niño comprende, se expresa, se relaciona y se comunica con su entorno. A través del juego guiado y actividades adaptadas a su edad (0 a 12 años), identificamos su perfil comunicativo sin someterlo a situaciones estresantes o de examen.
            </p>
          </Card>

          <Card variant="default" className="p-8 rounded-[28px] space-y-3 bg-white border border-[#E8E4F7]">
            <div className="w-12 h-12 rounded-2xl bg-[#A8C5E8]/30 flex items-center justify-center text-[#5B8FD4]">
              <Heart size={24} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D3A]">
              ¿Para qué sirve a la familia?
            </h2>
            <p className="text-sm text-[#3E3B52] leading-relaxed">
              Aporta certidumbre y claridad a los padres. Permite distinguir variaciones naturales del ritmo de maduración de señales que ameritan estimulación o terapia oportuna. Además, proporciona al colegio y a la familia recomendaciones concretas para acompañar al niño con serenidad y afecto.
            </p>
          </Card>
        </div>

        {/* Áreas que evaluamos */}
        <div className="mb-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D3A]">
              ¿Qué aspectos observamos en la valoración?
            </h2>
            <p className="text-sm text-[#3E3B52]">
              Cada proceso se adapta a la edad cronológica y motivo de consulta de la familia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {areasEvaluadas.map((area, idx) => (
              <Card
                key={idx}
                variant="default"
                className="p-6 rounded-[24px] bg-white border border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#5B4B9E]">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-[#3E3B52] leading-relaxed">{area.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2EFFA]">
                  <Link
                    href={area.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B8FD4] hover:text-[#5B4B9E] transition-colors"
                  >
                    <span>Ver área de atención</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cómo es el proceso en Empiria */}
        <div className="mb-16 p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#F2EFFA] via-[#E8E4F7]/40 to-white border border-[#E8E4F7] space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B7FD1]">Metodología en 3 momentos</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D3A] mt-1">
              ¿Cómo es el proceso de valoración en Empiria?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-[#E8E4F7] space-y-2 shadow-xs">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#5B8FD4] text-white text-xs font-bold">1</span>
              <h3 className="text-base font-bold text-[#2D2D3A]">Reunión con padres</h3>
              <p className="text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                Espacio virtual inicial con acudientes para conocer la historia del desarrollo, motivos de inquietud y expectativas sin exponer al niño a conversaciones sobre sus dificultades.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E4F7] space-y-2 shadow-xs">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#8B7FD1] text-white text-xs font-bold">2</span>
              <h3 className="text-base font-bold text-[#2D2D3A]">Sesión presencial lúdica</h3>
              <p className="text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                Encuentro presencial en nuestro consultorio en Modelia. Planteamos actividades motivadoras donde el menor interactúa con materiales terapéuticos en un ambiente seguro.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E4F7] space-y-2 shadow-xs">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#5B4B9E] text-white text-xs font-bold">3</span>
              <h3 className="text-base font-bold text-[#2D2D3A]">Informe y orientación</h3>
              <p className="text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                Entrega de informe fonoaudiológico con hallazgos claros, recomendaciones para el hogar y colegio, y —si se requiere— la propuesta de plan de sesiones personalizadas.
              </p>
            </div>
          </div>
        </div>

        {/* Nota pedagógica / aclaración médica */}
        <div className="mb-16 bg-[#F2EFFA] border border-[#D4C9EE] rounded-2xl p-5 flex items-start gap-3.5 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
          <Info className="w-5 h-5 text-[#8B7FD1] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-[#5B4B9E]">Aclaración importante para familias:</p>
            <p>
              La valoración fonoaudiológica es un proceso de exploración funcional y comunicativa. No reemplaza diagnósticos médicos ni valoraciones neuropediátricas cuando estas sean requeridas por el estado de salud del menor. Trabajamos articuladamente con los profesionales médicos o escolares que ya acompañen al niño.
            </p>
          </div>
        </div>

        {/* Profesionales a cargo */}
        <div className="mb-16 p-8 rounded-[28px] bg-white border border-[#E8E4F7] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#8B7FD1] uppercase tracking-wider">
              <Users size={16} />
              <span>Equipo Profesional Verificado</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D3A]">
              Valoraciones dirigidas por fonoaudiólogas colegiadas
            </h3>
            <p className="text-sm text-[#3E3B52] max-w-xl">
              Cada valoración es realizada personalmente por Johanna Gómez o Lina Rodríguez, profesionales especializadas en fonoaudiología infantil y neuropsicología escolar.
            </p>
          </div>
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#E8E4F7] text-[#5B4B9E] hover:bg-[#5B4B9E] hover:text-white transition-colors shrink-0"
          >
            <span>Conocer al equipo</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Sede y ubicación */}
        <div className="mb-16 p-6 sm:p-8 rounded-[28px] bg-white border border-[#E8E4F7] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#5B8FD4]/15 text-[#5B8FD4] shrink-0 mt-1">
              <Building2 size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#2D2D3A]">Atención presencial en Modelia, Bogotá</h3>
              <p className="text-xs sm:text-sm text-[#3E3B52]">
                Avenida Calle 24 #74-55, Barrio Modelia. Espacio adaptado y seguro para la infancia.
              </p>
            </div>
          </div>
          <a
            href={contactData.address.googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#5B8FD4] hover:text-[#5B4B9E] transition-colors shrink-0"
          >
            <span>Ver en Google Maps</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Final Conversion CTA */}
        <div className="text-center p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-[#F2EFFA] via-[#E8E4F7]/60 to-[#F2EFFA] border border-[#D4C9EE] space-y-4">
          <Badge variant="lavender">Comienza con Certeza</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2D2D3A]">
            ¿Quieres agendar o recibir información sobre la valoración?
          </h2>
          <p className="text-sm sm:text-base text-[#3E3B52] max-w-xl mx-auto">
            Escríbenos directamente por WhatsApp. Te explicaremos los pasos para iniciar y resolveremos tus preguntas antes de coordinar el primer encuentro.
          </p>
          <div className="pt-3">
            <Button
              variant="whatsapp"
              size="lg"
              href={getWhatsAppLink("valoracion")}
              isExternal
              leftIcon={<WhatsAppGlyph size={22} className="text-white" />}
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
