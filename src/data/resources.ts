export interface Article {
  slug: string;
  title: string;
  category: "Habla" | "Lenguaje" | "Comunicación" | "Lectoescritura" | "Aprendizaje" | "Familias";
  summary: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  keywords: string[];
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  contentParagraphs: string[];
  keyRecommendations: string[];
  faq: { question: string; answer: string }[];
}

export const resourcesData: Article[] = [
  {
    slug: "cuando-consultar-dificultades-lenguaje",
    title: "¿Cuándo consultar por dificultades en el lenguaje infantil?",
    category: "Lenguaje",
    summary:
      "Aprende a diferenciar las variaciones esperables del desarrollo de aquellas señales que ameritan una valoración fonoaudiológica oportuna.",
    readTime: "4 min de lectura",
    date: "Septiembre 2026",
    author: "Johanna Gómez",
    authorRole: "Fonoaudióloga",
    keywords: ["lenguaje infantil", "terapia de lenguaje niños Bogotá", "dificultades del lenguaje infantil"],
    relatedServiceSlug: "lenguaje",
    relatedServiceTitle: "Terapia de Lenguaje Infantil",
    contentParagraphs: [
      "El lenguaje es una de las habilidades más fascinantes del desarrollo humano. Cada niño recorre este sendero con un ritmo propio; sin embargo, existen hitos comunicativos que sirven de referencia para identificar cuándo el proceso se está desarrollando adecuadamente y cuándo podría beneficiarse de un acompañamiento especializado.",
      "Muchas familias escuchan frases bienintencionadas como 'ya hablará cuando entre al colegio' o 'los niños tardan más que las niñas'. Si bien la paciencia es fundamental, una consulta oportuna no busca etiquetar al menor, sino comprender cómo se comunican sus ideas y proporcionarle a la familia herramientas cotidianas eficaces.",
      "Una valoración fonoaudiológica permite analizar tanto la vertiente comprensiva (cómo entiende el niño las instrucciones y el entorno) como la expresiva (cómo estructura oraciones, qué variedad de vocabulario utiliza y qué recursos emplea para hacerse entender).",
    ],
    keyRecommendations: [
      "Si a los 2 años utiliza menos de 50 palabras aisladas o no combina dos palabras con sentido comunicativo (p. ej., 'más agua').",
      "Si le cuesta trabajo comprender instrucciones sencillas sin apoyos gestuales repetitivos.",
      "Si muestra frustración frecuente o recurre al llanto o al aislamiento al no poder transmitir lo que desea.",
      "Recuerda: estas señales no son un diagnóstico; son una invitación a observar y acompañar a tiempo.",
    ],
    faq: [
      {
        question: "¿Esperar hasta los 4 o 5 años es recomendable?",
        answer:
          "En fonoaudiología la atención temprana es clave. Intervenir o brindar pautas entre los 2 y 3 años previene dificultades mayores en la etapa escolar y reduce la frustración del niño.",
      },
    ],
  },
  {
    slug: "senales-dificultad-pronunciacion-habla",
    title: "¿Qué señales pueden indicar una dificultad en la pronunciación?",
    category: "Habla",
    summary:
      "Cómo identificar si las dificultades para articular ciertos sonidos corresponden a la maduración típica o requieren apoyo profesional.",
    readTime: "5 min de lectura",
    date: "Septiembre 2026",
    author: "Lina Rodríguez",
    authorRole: "Fonoaudióloga | Esp. Neuropsicología Escolar",
    keywords: ["pronunciación niños", "dificultades del habla", "fonoaudiología niños Bogotá"],
    relatedServiceSlug: "habla",
    relatedServiceTitle: "Terapia de Habla y Pronunciación",
    contentParagraphs: [
      "Aprender a hablar implica una coordinación motriz sumamente compleja entre labios, lengua, paladar, respiración y discriminación auditiva. Es natural que los niños pequeños simplifiquen palabras (por ejemplo, diciendo 'tete' por 'chupete' o 'pato' por 'plato').",
      "No obstante, a medida que crecen, ciertos sonidos deben irse consolidando de manera progresiva. La persistencia de errores articulatorios más allá de la edad cronológica esperada puede influir en su seguridad personal y en su futura adquisición de la lectoescritura.",
      "En Centro Terapéutico Empiria enfatizamos que nunca se debe forzar, regañar ni corregir en público a un niño cuando pronuncia con dificultad. La corrección indirecta y el modelado positivo son siempre el mejor camino.",
    ],
    keyRecommendations: [
      "Habla que resulta poco inteligible para personas ajenas a la familia después de los 3 años y medio.",
      "Omisión o sustitución reiterada de sonidos en palabras sencillas.",
      "Aparición de bloqueos, repeticiones de sílabas o sobreesfuerzo al intentar hablar con fluidez.",
      "Dificultad para coordinar movimientos orofaciales al masticar o articular.",
    ],
    faq: [
      {
        question: "¿Es normal que a los 5 años no pronuncie la 'r' o la 'rr'?",
        answer:
          "El fonema vibrante múltiple (/rr/) es uno de los más tardíos en consolidarse (usualmente hacia los 5-6 años). Si hacia esa edad persiste la dificultad, una valoración ayuda a determinar si es un tema de tono muscular, discriminación o coordinación.",
      },
    ],
  },
  {
    slug: "como-estimular-lenguaje-rutinas-cotidianas",
    title: "¿Cómo estimular el lenguaje en las rutinas cotidianas del hogar?",
    category: "Familias",
    summary:
      "Estrategias sencillas, afectivas y sin pantallas para enriquecer la comunicación durante la comida, el baño y el juego en casa.",
    readTime: "4 min de lectura",
    date: "Septiembre 2026",
    author: "Johanna Gómez",
    authorRole: "Fonoaudióloga",
    keywords: ["lenguaje infantil", "estimulación del lenguaje", "fonoaudiología Bogotá"],
    relatedServiceSlug: "lenguaje",
    relatedServiceTitle: "Estimulación y Terapia de Lenguaje",
    contentParagraphs: [
      "No se necesitan materiales costosos ni sesiones formales en casa para estimular el lenguaje. Los momentos más fértiles ocurren durante la preparación del desayuno, la hora del baño, el trayecto en el carro o mientras ordenamos los juguetes.",
      "El secreto reside en la 'presencia atenta': ponerse a la altura de los ojos del niño, escuchar con paciencia sin terminarle las oraciones y describir lo que estamos experimentando juntos usando un vocabulario variado y enriquecido.",
    ],
    keyRecommendations: [
      "Ponerse a su altura visual para que pueda observar la articulación de tus labios.",
      "Narrar lo que hacen: 'Ahora guardamos los cubos azules grandes y luego los amarillos pequeños'.",
      "Dar tiempo de respuesta: esperar 5 a 10 segundos antes de responder por él.",
      "Evitar las preguntas tipo examen ('¿de qué color es esto?') y preferir comentarios interactivos ('¡Mira qué torre tan alta construiste!').",
    ],
    faq: [
      {
        question: "¿Qué papel juegan las pantallas en el desarrollo del habla?",
        answer:
          "La evidencia científica muestra que las pantallas pasivas no sustituyen la interacción humana. Para aprender a hablar, el cerebro infantil necesita reciprocidad, gestos y conversación real.",
      },
    ],
  },
  {
    slug: "dificultades-de-lectoescritura-guia-familias",
    title: "¿Qué son las dificultades de lectoescritura y cómo acompañarlas?",
    category: "Lectoescritura",
    summary:
      "Descubre cómo la conciencia fonológica y el acompañamiento sin frustración facilitan el éxito escolar de tu hijo.",
    readTime: "5 min de lectura",
    date: "Septiembre 2026",
    author: "Lina Rodríguez",
    authorRole: "Fonoaudióloga | Esp. Neuropsicología Escolar",
    keywords: ["lectoescritura niños", "dificultades de lectura", "fonoaudiología escolar Bogotá"],
    relatedServiceSlug: "lectoescritura",
    relatedServiceTitle: "Acompañamiento en Lectoescritura",
    contentParagraphs: [
      "Aprender a leer y escribir es una invención cultural que exige reconfigurar circuitos cerebrales. Cuando un niño experimenta tropiezos persistentes al decodificar palabras o plasmar sus pensamientos en un cuaderno, suele sentir una gran carga de frustración y pensar que 'no es capaz'.",
      "Desde el enfoque fonoaudiológico y neuropsicológico escolar, entendemos que la lectura se cimienta sobre el lenguaje oral. Si la base fonológica es sólida, la correspondencia entre sonidos y grafemas se vuelve comprensible y predecible.",
    ],
    keyRecommendations: [
      "Jugar con rimas, canciones y segmentación de sílabas antes de imponer la lectura forzada.",
      "Lectura compartida diaria: leerle en voz alta mostrando entusiasmo por las historias.",
      "Validar el esfuerzo antes que el resultado: celebrar los intentos de escritura sin tachar con dureza.",
      "Consultar cuando la lectura silábica persiste con fatiga y desinterés evidente en 2º o 3º de primaria.",
    ],
    faq: [
      {
        question: "¿La confusión de letras como b y d siempre significa dislexia?",
        answer:
          "No necesariamente. Durante los primeros grados escolares las inversiones pueden ser parte de la maduración espacial. Si persisten y se acompañan de dificultades severas en la decodificación, se sugiere una valoración integral.",
      },
    ],
  },
];
