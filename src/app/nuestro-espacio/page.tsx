import { Metadata } from "next";
import { MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SpaceGallery } from "@/components/space/SpaceGallery";
import type { SpaceLightboxImage } from "@/components/space/SpaceLightbox";
import { contactData, getWhatsAppLink } from "@/data/contact";
import { OrganicLeaf, WhatsAppGlyph } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nuestro Consultorio en Modelia, Bogotá | Centro Terapéutico Empiria",
  description:
    "Conoce las instalaciones de Centro Terapéutico Empiria en Modelia, Bogotá. Consultorio fonoaudiológico cálido, seguro y adaptado para niños de 0 a 12 años.",
  alternates: {
    canonical: "/nuestro-espacio",
  },
  openGraph: {
    title: "Nuestro Consultorio en Modelia, Bogotá | Centro Terapéutico Empiria",
    description:
      "Conoce las instalaciones de Centro Terapéutico Empiria en Modelia, Bogotá. Espacio fonoaudiológico pensado para la infancia.",
    url: "/nuestro-espacio",
  },
};

const MAPS_LINK = contactData.address.googleMapsPlaceUrl;

const spacePhotos: SpaceLightboxImage[] = [
  {
    src: "/images/space/consultorio-banner.png",
    alt: "Espacio de atención y sala de espera del Centro Terapéutico Empiria en Bogotá.",
    width: 1942,
    height: 809,
  },
  {
    src: "/images/space/sala-recepcion.jpg",
    alt: "Sala de espera de Centro Terapéutico Empiria con sofá y el logo del centro.",
    width: 900,
    height: 1600,
  },
  {
    src: "/images/space/consultorio-1.jpg",
    alt: "Consultorio de atención con escritorio, mesa infantil y ventana con vista de la ciudad en Centro Terapéutico Empiria.",
    width: 900,
    height: 1600,
  },
  {
    src: "/images/space/consultorio-2.jpg",
    alt: "Vista del consultorio con escritorio de atención y zona de juego para niños.",
    width: 900,
    height: 1600,
  },
];

export default function NuestroEspacioPage() {
  return (
    <div className="py-12 sm:py-16">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative">
        <div className="hidden sm:block absolute top-0 left-6 pointer-events-none opacity-70">
          <OrganicLeaf size={40} color="#8B7FD1" />
        </div>
        <div className="max-w-3xl mx-auto">
          <Badge variant="lavender">Sede Presencial en Modelia</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] mt-4 tracking-tight">
            Nuestro Consultorio en Modelia, Bogotá
          </h1>
          <p className="text-base sm:text-lg text-[#3E3B52] mt-4 leading-relaxed">
            Pensamos cada rincón de nuestro consultorio para que niños y familias se sientan
            cómodos desde el primer momento. Un espacio cercano, pensado para acompañar de cerca
            cada proceso terapéutico.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SpaceGallery photos={spacePhotos} />
      </div>

      {/* Sede / ubicación */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Card variant="default" className="rounded-[28px]">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2D3A] mb-6">
            Sede Presencial
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="shrink-0 p-2 rounded-xl bg-[#5B4B9E]/15">
                <MapPin size={20} className="text-[#5B4B9E]" />
              </span>
              <div>
                <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider mb-1">
                  Dirección
                </p>
                <p className="text-sm sm:text-base text-[#3E3B52] leading-relaxed">
                  {contactData.address.full}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="shrink-0 p-2 rounded-xl bg-[#8B7FD1]/15">
                <Clock size={20} className="text-[#8B7FD1]" />
              </span>
              <div>
                <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider mb-1">
                  Horarios
                </p>
                <p className="text-sm sm:text-base text-[#3E3B52] leading-relaxed">
                  {contactData.schedule.weekdays}
                  <br />
                  {contactData.schedule.saturdays}
                  <br />
                  {contactData.schedule.sundays}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#5B4B9E]">
          ¿Quieres conocer nuestro consultorio en persona?
        </h2>
        <p className="text-base text-[#3E3B52]">
          Agenda tu visita o resuelve tus dudas antes de iniciar cualquier proceso de valoración.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            href={MAPS_LINK}
            isExternal
            leftIcon={<MapPin size={20} className="text-[#5B4B9E]" />}
          >
            Ver ubicación
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            href={getWhatsAppLink("Hola, quisiera conocer más sobre el consultorio de Centro Terapéutico Empiria.")}
            isExternal
            leftIcon={<WhatsAppGlyph size={20} className="text-white" />}
          >
            Conversar por WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
