export interface Therapist {
  /** Anchor id of the therapist's profile block on /nosotros. */
  id: "johanna" | "lina";
  name: string;
  role: string;
  specialty?: string;
  image: string;
  /**
   * object-position for the circular headshot crop. The source photos are
   * portrait, so a centered crop can cut the top of the head.
   */
  imagePosition: string;
  candidImage: string;
  candidAlt: string;
  /** Official bio, first person, as provided by the client. One string per paragraph. */
  bio: string[];
}

export const therapists: Therapist[] = [
  {
    id: "johanna",
    name: "Johanna Gómez",
    role: "Fonoaudióloga",
    image: "/images/team/johanna-gomez.jpg",
    imagePosition: "center center",
    candidImage: "/images/team/johanna-gomez-candid.jpg",
    candidAlt: "Johanna Gómez usando tarjetas de vocabulario en una sesión",
    bio: [
      "Soy fonoaudióloga egresada de la Corporación Universitaria Iberoamericana, con más de cinco años de experiencia profesional en valoración e intervención fonoaudiológica. A lo largo de mi trayectoria he consolidado mi especial interés y dedicación al abordaje del lenguaje, la comunicación y la lectoescritura en la población infantil (0 a 12 años).",
      "Mi práctica se caracteriza por brindar una atención cálida, cercana y respetuosa, basada en las necesidades y particularidades de cada persona. En el trabajo con niños y niñas, considero fundamental crear espacios seguros y de confianza que favorezcan su participación y aprendizaje, integrando el acompañamiento profesional con una relación terapéutica basada en la empatía y el vínculo.",
    ],
  },
  {
    id: "lina",
    name: "Lina Rodríguez",
    role: "Fonoaudióloga",
    specialty: "Especialista en Neuropsicología Escolar",
    image: "/images/team/lina-rodriguez.jpg",
    imagePosition: "center 15%",
    candidImage: "/images/team/lina-rodriguez-candid.jpg",
    candidAlt: "Lina Rodríguez con títeres de dedo, materiales de terapia infantil",
    bio: [
      "Soy fonoaudióloga egresada de la Institución Universitaria Escuela Colombiana de Rehabilitación y especialista en Neuropsicología Escolar del Politécnico Grancolombiano. Cuento con más de tres años de experiencia en procesos de valoración e intervención dirigidos a niños y jóvenes, con énfasis en el área de habla y lenguaje.",
      "Mi formación en neuropsicología escolar me permite abordar cada proceso terapéutico desde una comprensión integral del desarrollo y el aprendizaje, articulando el conocimiento clínico con las necesidades particulares de cada niño y de su entorno educativo.",
      "Mi práctica se caracteriza por ser dinámica, cercana y respetuosa, buscando que cada sesión sea una experiencia amena y significativa que favorezca la participación y el aprendizaje de los niños, sin dejar de lado el compromiso, la rigurosidad y el profesionalismo que cada proceso requiere.",
    ],
  },
];
