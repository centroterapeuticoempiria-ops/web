import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle, Sparkles, Info } from "lucide-react";
import { servicesData } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/contact";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Área no encontrada" };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/areas-de-atencion/${slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/areas-de-atencion/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbJsonLd = {
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
        name: "Áreas de Atención",
        item: "https://www.centroempiria.com/areas-de-atencion",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://www.centroempiria.com/areas-de-atencion/${slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: service.pageH1,
    description: service.seoDescription,
    url: `https://www.centroempiria.com/areas-de-atencion/${slug}`,
    about: {
      "@type": "Service",
      name: service.title,
      description: service.shortDescription,
      provider: {
        "@type": "MedicalBusiness",
        name: "Centro Terapéutico Empiria",
        url: "https://www.centroempiria.com",
      },
    },
  };

  return (
    <div className="py-12 sm:py-20 bg-gradient-to-b from-[#E8E4F7]/30 via-white/20 to-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb visual navigation */}
        <nav aria-label="Ruta de navegación" className="mb-6 text-xs text-[#5B4B9E] flex items-center gap-2">
          <Link href="/" className="hover:text-[#5B8FD4] transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/areas-de-atencion" className="hover:text-[#5B8FD4] transition-colors">Áreas de atención</Link>
          <span>/</span>
          <span className="text-[#3E3B52] font-semibold">{service.title}</span>
        </nav>

        {/* Back link */}
        <Link
          href="/areas-de-atencion"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a todas las áreas de atención</span>
        </Link>

        {/* Title & Tagline */}
        <div className="space-y-4">
          <Badge variant="lavender">Fonoaudiología Infantil · Bogotá</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight leading-tight">
            {service.pageH1}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#5B4B9E] leading-relaxed">
            “{service.shortDescription}”
          </p>
        </div>

        {/* Overview */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E4F7] shadow-sm text-sm sm:text-base text-[#3E3B52] leading-relaxed space-y-4">
          <p>{service.fullDescription}</p>
        </div>

        {/* Pedagogical disclaimer callout */}
        <div className="mt-8 bg-[#F2EFFA] border border-[#D4C9EE] rounded-2xl p-5 flex items-start gap-3.5 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
          <Info className="w-5 h-5 text-[#8B7FD1] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#5B4B9E]">Nota orientativa para padres:</p>
            <p className="mt-0.5">{service.pedagogicalNote}</p>
          </div>
        </div>

        {/* Signs to consult section */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E4F7] shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D3A]">
            Señales que pueden sugerir una consulta oportuna
          </h2>
          <p className="text-xs sm:text-sm text-[#3E3B52]">
            Si observas con frecuencia alguna de las siguientes situaciones, una valoración individualizada en nuestro consultorio en Modelia, Bogotá, puede aportar claridad y tranquilidad a la familia:
          </p>
          <ul className="space-y-3 pt-2">
            {service.signsToConsult.map((sign, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3E3B52]">
                <CheckCircle2 className="w-4 h-4 text-[#5B8FD4] shrink-0 mt-0.5" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Therapeutic approach */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F2EFFA] to-[#E8E4F7]/60 border border-[#D4C9EE]/60 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#5B4B9E] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#8B7FD1]" />
            Nuestro enfoque en el área de {service.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
            {service.therapeuticApproach}
          </p>
        </div>

        {/* Next step: Valoración fonoaudiológica pillar */}
        <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-white border border-[#D4C9EE] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#8B7FD1] uppercase tracking-wider">Paso inicial recomendado</span>
            <h3 className="text-lg font-bold text-[#2D2D3A]">¿Por dónde comenzamos?</h3>
            <p className="text-xs sm:text-sm text-[#3E3B52]">
              Antes de iniciar cualquier plan de sesiones, realizamos una valoración fonoaudiológica completa.
            </p>
          </div>
          <Link
            href="/valoracion-fonoaudiologica"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#E8E4F7] text-[#5B4B9E] hover:bg-[#5B4B9E] hover:text-white transition-colors shrink-0"
          >
            <span>Conocer la valoración</span>
            <Sparkles className="w-4 h-4" />
          </Link>
        </div>

        {/* Direct CTA */}
        <div className="mt-12 text-center space-y-4 bg-white p-8 rounded-3xl border border-[#E8E4F7] shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D3A]">
            ¿Deseas orientación sobre el área de {service.title}?
          </h3>
          <p className="text-sm text-[#3E3B52] max-w-md mx-auto">
            Conversemos directamente por WhatsApp para resolver tus preguntas y guiarte sobre los primeros pasos.
          </p>
          <div className="pt-2">
            <Button
              variant="whatsapp"
              size="lg"
              href={getWhatsAppLink(`Hola, quisiera recibir información sobre el área de ${service.title} para mi hijo/a.`)}
              isExternal
              leftIcon={<MessageCircle className="w-5 h-5" />}
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

