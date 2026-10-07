export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Sesiones" | "Proceso" | "Familias";
}

// Questions and answers below match the official FAQ content verbatim.
// Do not reword — any change must come from an updated official source.
export const faqData: FAQItem[] = [
  {
    id: "remision-medica",
    question: "¿Necesito una remisión médica?",
    answer:
      "No es necesario contar con una remisión médica para iniciar el proceso de valoración fonoaudiológica.",
    category: "General",
  },
  {
    id: "duracion-sesion",
    question: "¿Cuánto dura una sesión?",
    answer:
      "Las sesiones tienen una duración de 45 minutos e incluyen un espacio de retroalimentación con el padre, madre o cuidador.",
    category: "Sesiones",
  },
  {
    id: "frecuencia-sesiones",
    question: "¿Con qué frecuencia se realizan las sesiones?",
    answer:
      "La frecuencia se determina de manera individual, de acuerdo con las necesidades identificadas durante la valoración.",
    category: "Sesiones",
  },
  {
    id: "duracion-proceso",
    question: "¿Cuánto tiempo dura el proceso?",
    answer:
      "No existe una duración estándar. El tiempo depende de las necesidades de cada niño, los objetivos planteados y su evolución.",
    category: "Proceso",
  },
  {
    id: "rango-edad",
    question: "¿Cuál es el rango de edad que atienden en Empiria?",
    answer:
      "Nuestra atención está especializada en la población infantil de 0 a 12 años, adaptando cada evaluación y proceso terapéutico al momento madurativo de cada niño.",
    category: "General",
  },
  {
    id: "seguimiento-e-informes",
    question: "¿Cómo se informa a la familia sobre el progreso?",
    answer:
      "Se realiza un informe inicial de valoración, retroalimentación después de cada sesión y un informe de intervención al finalizar el proceso. Cuando sea necesario, también pueden realizarse informes o reuniones con el contexto escolar.",
    category: "Proceso",
  },
  {
    id: "participacion-padres",
    question: "¿Los padres participan en las sesiones?",
    answer:
      "La familia forma parte del proceso mediante espacios de retroalimentación y acompañamiento para favorecer la continuidad del trabajo en casa.",
    category: "Familias",
  },
  // Not part of the official 7-question list — kept as-is since it doesn't
  // contradict anything official, per the spec's own rule of not silently
  // deleting content under uncertainty. Flagged to the user; remove on request.
  {
    id: "convenios-eps",
    question: "¿Tienen convenio con EPS o medicina prepagada?",
    answer:
      "Nuestros servicios se prestan en modalidad particular e independiente. Emitimos los comprobantes e informes necesarios en caso de que su póliza de salud o seguro ofrezca modalidad de reembolso.",
    category: "General",
  },
];
