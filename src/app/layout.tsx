import type { Metadata, Viewport } from "next";
import { Nunito, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { contactData } from "@/data/contact";
import { getSiteUrl } from "@/data/site";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#5B8FD4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Centro Terapéutico Empiria | Fonoaudiología Infantil en Bogotá",
    template: "%s | Centro Terapéutico Empiria",
  },
  description:
    "Centro terapéutico especializado en fonoaudiología infantil en Bogotá. Acompañamiento profesional y humano en procesos de habla, lenguaje, lectoescritura y aprendizaje.",
  keywords: [
    "fonoaudiología infantil Bogotá",
    "fonoaudióloga infantil Bogotá",
    "terapia de lenguaje niños Bogotá",
    "fonoaudiología niños Bogotá",
    "dificultades del lenguaje infantil",
    "dificultades del habla",
    "pronunciación niños",
    "lectoescritura niños Bogotá",
    "aprendizaje infantil",
    "valoración fonoaudiológica infantil Bogotá",
  ],
  authors: [{ name: "Centro Terapéutico Empiria" }],
  creator: "Centro Terapéutico Empiria",
  publisher: "Centro Terapéutico Empiria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Centro Terapéutico Empiria | Fonoaudiología Infantil en Bogotá",
    description:
      "Convertimos las dificultades de comunicación y aprendizaje en confianza, autonomía y éxito escolar. Atención 100% individual y personalizada.",
    url: siteUrl,
    siteName: "Centro Terapéutico Empiria",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro Terapéutico Empiria | Fonoaudiología Infantil Bogotá",
    description:
      "Acompañamiento fonoaudiológico infantil especializado en habla, lenguaje, lectoescritura y aprendizaje.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: contactData.name,
    description:
      "Centro terapéutico especializado en fonoaudiología infantil en Bogotá. Acompañamiento en habla, lenguaje, lectoescritura y aprendizaje.",
    image: `${siteUrl}/logo/logo.png`,
    telephone: "+573127366606",
    email: contactData.email,
    url: siteUrl,
    hasMap: contactData.address.googleMapsPlaceUrl,
    priceRange: "$$",
    currenciesAccepted: "COP",
    address: {
      "@type": "PostalAddress",
      streetAddress: contactData.address.street,
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      addressCountry: "CO",
      neighborhood: contactData.address.neighborhood,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.6674,
      longitude: -74.1166,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    medicalSpecialty: "SpeechPathology",
    sameAs: [
      contactData.social.instagramUrl,
      contactData.address.googleMapsPlaceUrl,
    ],
    employee: [
      {
        "@type": "Person",
        name: "Johanna Gómez",
        jobTitle: "Fonoaudióloga",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Corporación Universitaria Iberoamericana",
        },
      },
      {
        "@type": "Person",
        name: "Lina Rodríguez",
        jobTitle: "Fonoaudióloga y Especialista en Neuropsicología Escolar",
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Institución Universitaria Escuela Colombiana de Rehabilitación",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Politécnico Grancolombiano",
          },
        ],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Fonoaudiológicos Infantiles",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Valoración Fonoaudiológica Infantil",
            description: "Evaluación integral de habilidades de habla, lenguaje, lectoescritura y aprendizaje en Modelia, Bogotá.",
            url: `${siteUrl}/valoracion-fonoaudiologica`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Valoración e Intervención en Habla",
            description: "Dificultades en la articulación, pronunciación y fluidez del habla.",
            url: `${siteUrl}/areas-de-atencion/habla`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Valoración e Intervención en Lenguaje",
            description: "Comprensión, enriquecimiento léxico y estructuración sintáctica.",
            url: `${siteUrl}/areas-de-atencion/lenguaje`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Comunicación Social y Pragmática",
            description: "Habilidades de interacción, reciprocidad y comunicación aumentativa/alternativa.",
            url: `${siteUrl}/areas-de-atencion/comunicacion`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Procesos de Lectoescritura",
            description: "Conciencia fonológica, decodificación, comprensión lectora y escritura sin frustración.",
            url: `${siteUrl}/areas-de-atencion/lectoescritura`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Procesos de Aprendizaje Infantil",
            description: "Atención, memoria de trabajo verbal, razonamiento y funciones ejecutivas escolares.",
            url: `${siteUrl}/areas-de-atencion/aprendizaje`,
          },
        },
      ],
    },
  };

  return (
    <html lang="es-CO" className={`${nunito.variable} ${inter.variable} ${caveat.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body text-[#2D2D3A] antialiased selection:bg-[#E8E4F7] selection:text-[#5B4B9E]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
