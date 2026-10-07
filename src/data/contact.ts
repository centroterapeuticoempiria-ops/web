export interface ContactInfo {
  name: string;
  tagline: string;
  specialty: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsAppUrl: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    country: string;
    full: string;
    googleMapsPlaceUrl: string;
  };
  schedule: {
    weekdays: string;
    saturdays: string;
    sundays: string;
    /** Compact one-line summary for tight spaces (e.g. the header topbar). */
    topbarSummary: string;
  };
  social: {
    instagram: string;
    instagramUrl: string;
  };
  defaultWhatsAppMessage: string;
}

export const contactData: ContactInfo = {
  name: "Centro Terapéutico Empiria",
  tagline: "Fonoaudiología infantil con un enfoque humano, personalizado y profesional.",
  specialty: "Fonoaudiología infantil",
  phoneRaw: "573127366606",
  phoneFormatted: "+57 312 736 6606",
  whatsAppUrl: "https://wa.me/573127366606",
  email: "centroterapeuticoempiria@gmail.com",
  address: {
    street: "Avenida Calle 24 #74-55",
    neighborhood: "Barrio Modelia",
    city: "Bogotá",
    country: "Colombia",
    full: "Avenida Calle 24 #74-55, Barrio Modelia, Bogotá, Colombia",
    googleMapsPlaceUrl:
      "https://www.google.com/maps/place/Centro+Terap%C3%A9utico+Empiria/data=!4m2!3m1!1s0x0:0x41d7ceca5cb0b891?sa=X&ved=1t:2428&ictx=111",
  },
  schedule: {
    weekdays: "Lunes a viernes: 9:00 a.m. – 6:00 p.m.",
    saturdays: "Sábados: 9:00 a.m. – 5:00 p.m.",
    sundays: "Domingos: Cerrado",
    topbarSummary: "Lun–Vie: 9:00 a.m.–6:00 p.m. · Sáb: 9:00 a.m.–5:00 p.m.",
  },
  social: {
    instagram: "@centrot.empiria",
    instagramUrl: "https://instagram.com/centrot.empiria",
  },
  defaultWhatsAppMessage:
    "Hola, quisiera información sobre fonoaudiología infantil para mi hijo/a.",
};

/** Pre-defined contextual WhatsApp messages for specific user intents. */
export const CONTEXTUAL_WHATSAPP_MESSAGES = {
  general: "Hola, quisiera información sobre fonoaudiología infantil para mi hijo/a.",
  valoracion: "Hola, quisiera información sobre una valoración fonoaudiológica infantil.",
  lenguaje: "Hola, quisiera información sobre terapia de lenguaje para mi hijo/a.",
  habla: "Hola, quisiera información sobre terapia de habla para mi hijo/a.",
  comunicacion: "Hola, quisiera información sobre acompañamiento en comunicación para mi hijo/a.",
  lectoescritura: "Hola, quisiera información sobre acompañamiento en lectoescritura.",
  aprendizaje: "Hola, quisiera información sobre acompañamiento en procesos de aprendizaje.",
  paquetes: "Hola, quisiera conocer los planes y paquetes de atención de Empiria.",
} as const;

export type WhatsAppIntent = keyof typeof CONTEXTUAL_WHATSAPP_MESSAGES;

export const getWhatsAppLink = (intentOrCustom?: WhatsAppIntent | string) => {
  if (!intentOrCustom) {
    return `https://wa.me/${contactData.phoneRaw}?text=${encodeURIComponent(contactData.defaultWhatsAppMessage)}`;
  }
  const text =
    intentOrCustom in CONTEXTUAL_WHATSAPP_MESSAGES
      ? CONTEXTUAL_WHATSAPP_MESSAGES[intentOrCustom as WhatsAppIntent]
      : intentOrCustom;
  return `https://wa.me/${contactData.phoneRaw}?text=${encodeURIComponent(text)}`;
};

