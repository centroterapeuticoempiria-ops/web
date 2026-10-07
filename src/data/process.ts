export interface ProcessStep {
  stepNumber: number;
  title: string;
  tagline: string;
  description: string;
  detailPoints: string[];
  estimatedDuration: string;
  modality: "Virtual" | "Presencial" | "Mixto";
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Toma de datos",
    tagline: "Primer contacto cercano y confidencial",
    description:
      "Recopilamos información básica del niño o niña y conocemos el motivo de consulta de manera segura y sin solicitar datos clínicos sensibles innecesarios.",
    detailPoints: [
      "Contacto inicial vía WhatsApp o formulario web",
      "Identificación de las principales inquietudes de la familia",
      "Orientación preliminar sobre el alcance del servicio",
    ],
    estimatedDuration: "10 - 15 minutos",
    modality: "Virtual",
  },
  {
    stepNumber: 2,
    title: "Reunión virtual de acercamiento",
    tagline: "Conociéndonos antes de comenzar",
    description:
      "Agendamos un primer encuentro virtual para explicar nuestra metodología, resolver preguntas y conocer a la profesional que podría acompañar el proceso.",
    detailPoints: [
      "Espacio exclusivo para padres o cuidadores principales",
      "Claridad sobre planes de atención, metodología y expectativas",
      "Vínculo de confianza inicial con la terapeuta",
    ],
    estimatedDuration: "30 minutos",
    modality: "Virtual",
  },
  {
    stepNumber: 3,
    title: "Valoración presencial",
    tagline: "Exploración lúdica, respetuosa y rigurosa",
    description:
      "Evaluamos las habilidades comunicativas y de aprendizaje para identificar fortalezas y necesidades específicas en un ambiente seguro y estimulante.",
    detailPoints: [
      "Actividades adaptadas a los intereses del niño",
      "Observación clínica directa de habla, lenguaje o lectoescritura",
      "Entrega posterior de informe fonoaudiológico con recomendaciones",
    ],
    estimatedDuration: "Sesión completa individual",
    modality: "Presencial",
  },
  {
    stepNumber: 4,
    title: "Inicio del proceso de intervención",
    tagline: "Plan terapéutico a la medida de tu hijo",
    description:
      "Con los resultados de la valoración diseñamos un plan de intervención personalizado, fijando objetivos claros y articulados con el hogar y el colegio.",
    detailPoints: [
      "Sesiones individuales de 45 minutos semanales",
      "Retroalimentación continua al final de cada sesión",
      "Estrategias prácticas para potenciar avances en casa",
    ],
    estimatedDuration: "Según ritmo y metas acordadas",
    modality: "Presencial",
  },
];
