import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { getWhatsAppLink } from "@/data/contact";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/icons";

export const EmotionalBreak: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#E8E4F7]/30 via-white/20 to-transparent relative overflow-hidden">
      {/* Background soft ambient glowing circles */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Children photo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/real_children_playing.jpg" 
                alt="Niños jugando y aprendiendo felices" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Center: Title, Description and Dual CTAs */}
          <div className="lg:col-span-7 text-center space-y-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D2D3A] tracking-tight leading-tight">
              Cada pequeño avance cuenta.
            </h2>

            <p className="text-sm sm:text-base text-[#3E3B52] leading-relaxed max-w-md mx-auto">
              Estamos aquí para acompañarte a comprender las necesidades de tu hijo o hija y construir juntos un proceso pensado para él o ella.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="whatsapp"
                size="md"
                href={getWhatsAppLink("Hola, deseo conversar sobre el proceso de mi hijo/a con el equipo de Empiria.")}
                isExternal
                className="w-full sm:w-auto shadow-sm"
                leftIcon={<WhatsAppGlyph size={18} className="text-white" />}
              >
                Conversemos por WhatsApp
              </Button>

              <Button
                variant="outline"
                size="md"
                href="/contacto"
                className="w-full sm:w-auto border-[#8B7FD1]/50 text-[#5B4B9E] bg-white shadow-xs"
                leftIcon={<Mail size={16} className="text-[#5B8FD4]" />}
              >
                Escríbenos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
