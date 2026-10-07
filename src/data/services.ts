export interface ServiceArea {
  id: string;
  slug: string;
  title: string;
  pageH1: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  fullDescription: string;
  signsToConsult: string[];
  therapeuticApproach: string;
  pedagogicalNote: string;
  iconName: "Volume2" | "MessageSquare" | "Users" | "BookOpen" | "Sparkles";
  colorAccent: string;
}

export const servicesData: ServiceArea[] = [
  {
    id: "habla",
    slug: "habla",
    title: "Habla",
    pageH1: "Fonoaudiología para dificultades del habla y pronunciación infantil en Bogotá",
    seoTitle: "Terapia de Habla y Pronunciación Infantil en Bogotá | Empiria",
    seoDescription:
      "Acompañamiento fonoaudiológico especializado en articulación, inteligibilidad y fluidez verbal para niños en Modelia, Bogotá.",
    shortDescription: "Dificultades en la articulación y pronunciación de los sonidos del habla.",
    fullDescription:
      "Acompañamos los procesos de inteligibilidad, articulación y fluidez verbal. Trabajamos desde la conciencia fonológica y el desarrollo motriz del habla, facilitando que cada niño gane claridad, soltura y confianza al comunicarse con su entorno familiar y escolar.",
    signsToConsult: [
      "Dificultades para pronunciar determinados sonidos (p. ej., distorsiones, sustituciones u omisiones de fonemas).",
      "Trastornos de los sonidos del habla (TSH) que limitan la comprensión de su mensaje.",
      "Tartamudez o disfluencias (repeticiones, prolongaciones o bloqueos involuntarios al iniciar o continuar frases).",
      "Habla poco inteligible para las personas fuera del círculo familiar más cercano.",
      "Frustración o retraimiento al intentar hacerse entender.",
    ],
    therapeuticApproach:
      "Nuestra intervención parte de una evaluación lúdica y respetuosa, trabajando la coordinación orofacial y la discriminación auditiva sin generar presión, celebrando cada sonido conquistado.",
    pedagogicalNote:
      "Estas características pueden ser una señal oportuna para consultar; no representan un diagnóstico automático ni definen el potencial comunicativo del niño.",
    iconName: "Volume2",
    colorAccent: "#5B8FD4",
  },
  {
    id: "lenguaje",
    slug: "lenguaje",
    title: "Lenguaje",
    pageH1: "Terapia de lenguaje para niños en Bogotá",
    seoTitle: "Terapia de Lenguaje Infantil en Bogotá | Centro Terapéutico Empiria",
    seoDescription:
      "Intervención fonoaudiológica en comprensión, estructuración de oraciones y expresión verbal para niños en Bogotá.",
    shortDescription: "Procesos relacionados con la comprensión y expresión de ideas.",
    fullDescription:
      "Favorecemos la adquisición, enriquecimiento y organización del lenguaje tanto a nivel comprensivo como expresivo. Brindamos herramientas para que los niños puedan estructurar sus pensamientos, ampliar su léxico y comprender el mundo que los rodea con mayor claridad.",
    signsToConsult: [
      "Retraso o dificultades persistentes en el desarrollo del lenguaje hablado.",
      "Vocabulario reducido en comparación con otros niños de su misma edad.",
      "Dificultad para construir oraciones completas, coherentes o seguir el orden gramatical.",
      "Dificultad para comprender o retener instrucciones cotidianas y escolares.",
      "Retos para narrar vivencias, anécdotas o secuencias de acontecimientos diarios.",
    ],
    therapeuticApproach:
      "Fomentamos la expresión mediante interacciones naturales, narraciones compartidas y estrategias contextualizadas que conectan las sesiones con la vida diaria en el hogar.",
    pedagogicalNote:
      "El ritmo lingüístico varía en cada etapa. Una valoración fonoaudiológica permite diferenciar variaciones típicas de necesidades específicas de estimulación.",
    iconName: "MessageSquare",
    colorAccent: "#8B7FD1",
  },
  {
    id: "comunicacion",
    slug: "comunicacion",
    title: "Comunicación",
    pageH1: "Acompañamiento en comunicación e interacción social infantil en Bogotá",
    seoTitle: "Comunicación Social y Pragmática Infantil en Bogotá | Empiria",
    seoDescription:
      "Acompañamiento en reciprocidad social, habilidades pragmáticas y canales aumentativos de comunicación infantil en Bogotá.",
    shortDescription: "Habilidades necesarias para interactuar y relacionarse con otras personas.",
    fullDescription:
      "La comunicación va mucho más allá de las palabras: abarca la mirada, la reciprocidad social, la intención compartida y la comprensión de normas sociales de interacción. Acompañamos a niños que requieren apoyo en pragmática o en sistemas alternativos de comunicación.",
    signsToConsult: [
      "Dificultades de comunicación social y comprensión pragmática del contexto.",
      "Dificultad para iniciar, mantener o respetar turnos de conversación espontánea.",
      "Retos para compartir intereses mutuos, sostener contacto visual o interpretar gestos.",
      "Interpretación excesivamente literal del lenguaje o dificultad con el humor y dobles sentidos.",
      "Necesidades de comunicación aumentativa o alternativa (CAA) mediante apoyos visuales o tecnológicos.",
    ],
    therapeuticApproach:
      "Construimos puentes relacionales a través del juego regulado, el interés genuino del niño y la creación de entornos seguros donde expresarse sea una experiencia gratificante.",
    pedagogicalNote:
      "Cada niño tiene una manera propia de interactuar. Buscamos potenciar su canal comunicativo respetando siempre su perfil individual y emocional.",
    iconName: "Users",
    colorAccent: "#5B4B9E",
  },
  {
    id: "lectoescritura",
    slug: "lectoescritura",
    title: "Lectoescritura",
    pageH1: "Acompañamiento en lectoescritura infantil en Bogotá",
    seoTitle: "Lectoescritura Infantil y Conciencia Fonológica en Bogotá | Empiria",
    seoDescription:
      "Apoyo fonoaudiológico en correspondencia letra-sonido, decodificación y comprensión lectora sin frustración en Bogotá.",
    shortDescription: "Procesos de lectura y escritura durante la etapa escolar.",
    fullDescription:
      "Acompañamos la transición del lenguaje oral al código escrito. Brindamos soporte en conciencia fonológica, decodificación grafema-fonema, velocidad, precisión y comprensión lectora, así como en la estructuración de la expresión escrita para el éxito escolar.",
    signsToConsult: [
      "Dificultades persistentes para aprender a leer o afianzar la correspondencia letra-sonido.",
      "Dificultades para aprender a escribir, trazar o segmentar palabras en el papel.",
      "Confusión frecuente de letras similares (p/q, b/d) o inversión de sonidos dentro de las palabras.",
      "Lectura silábica lenta, fatigante o con sobreesfuerzo constante.",
      "Dificultades notorias para comprender y recordar lo que acaba de leer.",
      "Errores ortográficos persistentes no atribuibles a falta de explicación escolar.",
    ],
    therapeuticApproach:
      "Utilizamos métodos multisensoriales que integran el juego, la audición y la motricidad, transformando la lectura y la escritura en un camino de descubrimiento y no de frustración.",
    pedagogicalNote:
      "Las dificultades en lectoescritura no reflejan falta de inteligencia ni desinterés; orientar a tiempo estas señales previene el desgaste emocional y académico.",
    iconName: "BookOpen",
    colorAccent: "#5B8FD4",
  },
  {
    id: "aprendizaje",
    slug: "aprendizaje",
    title: "Aprendizaje",
    pageH1: "Acompañamiento en procesos de aprendizaje infantil en Bogotá",
    seoTitle: "Acompañamiento en Aprendizaje Infantil en Bogotá | Empiria",
    seoDescription:
      "Fortalecimiento de funciones cognitivas, atención, memoria verbal y autonomía escolar para niños en Bogotá.",
    shortDescription: "Procesos cognitivos y escolares relacionados con el desarrollo.",
    fullDescription:
      "Potenciamos las funciones cognitivas que sostienen el rendimiento académico y la autonomía infantil: atención sostenida, memoria de trabajo verbal, razonamiento lógico y flexibilidad cognitiva para resolver problemas de la vida cotidiana.",
    signsToConsult: [
      "Dificultades para mantener la atención en tareas estructuradas o escolares.",
      "Dificultades de concentración o tendencia a dispersarse con facilidad.",
      "Retos para seguir instrucciones que contienen varios pasos secuenciales.",
      "Dificultades en memoria de trabajo verbal y retención de consignas auditivas.",
      "Desafíos en razonamiento verbal, categorización y organización del tiempo escolar.",
    ],
    therapeuticApproach:
      "Diseñamos retos adaptados al nivel del niño que fortalecen sus estrategias metacognitivas, enseñándole 'cómo aprender' y cómo autorregular su proceso con autonomía.",
    pedagogicalNote:
      "Cada estudiante procesa la información de modo diferente. Una valoración integral identifica fortalezas para apoyarse en ellas al superar los desafíos.",
    iconName: "Sparkles",
    colorAccent: "#8B7FD1",
  },
];

