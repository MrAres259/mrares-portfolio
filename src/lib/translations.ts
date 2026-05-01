export type Lang = "en" | "es";

export const translations = {
  en: {
    greeting: "Hi! I'm",
    name: "Rigel Santos",
    alias: "But you can call me MrAres259",
    role: "Technical Account Manager Intern",
    education: "Education",
    experience: "Professional Experience",
    certifications: "Certifications",
    contact: "Contact",
    motto: "Cloud excellence, strategic innovation",
    // Education
    edu1Title: "Telecom, Systems & Electronics Engineering",
    edu1Place: "Universidad Nacional Autónoma de México",
    edu1Date: "2020 - 2026",
    edu1Desc: "Specialized in Telecommunications, Coding, and Networking.",
    edu2Title: "Computer Technician",
    edu2Place: "Universidad Nacional Autónoma de México (ENP 9)",
    edu2Date: "2017 - 2019",
    edu2Desc: "Foundational technical training in computing and systems.",
    // Experience
    exp1Title: "Technical Account Manager Intern, Huawei Cloud",
    exp1Date: "Dec 2025 - Present",
    exp1Place: "Mexico City",
    exp1Desc: [
      "Guided cloud adoption, translating technical needs into optimized IaaS/PaaS deployments.",
      "Designed custom workarounds for platform gaps to meet customer requirements.",
      "Performed architectural reviews and health checks for cost, security, and performance optimization.",
      "Resolved complex infrastructure escalations with cross-functional teams to minimize downtime."
    ],
    exp2Title: "IT Support Technician, Internship",
    exp2Date: "2020 - Nov 2025",
    exp2Place: "Mexico City",
    exp2Desc: [
      "General maintenance of electronic devices.",
      "Preventive and corrective maintenance.",
      "Experience managing operating systems (Linux, Windows, and Android).",
      "Intermediate cybersecurity techniques."
    ],
    exp3Title: "Customer Care Agent, Teleperformance",
    exp3Date: "Mar 2020 - Jan 2021",
    exp3Place: "Mexico City",
    exp3Desc: [
      "Provided client support resolving service inquiries.",
      "Collaborated with technical support team to troubleshoot hardware and software on customer's devices.",
      "Sales oriented to a specific line of business goal."
    ],
    // Contact
    location: "Mexico City, Mexico",
    email: "mr.santosc259@gmail.com",
    linkedin: "LinkedIn",
  },
  es: {
    greeting: "¡Hola! Soy",
    name: "Rigel Santos",
    alias: "Pero puedes llamarme MrAres259",
    role: "Pasante de Technical Account Manager",
    education: "Educación",
    experience: "Experiencia Profesional",
    certifications: "Certificaciones",
    contact: "Contacto",
    motto: "Excelencia en la nube, innovación estratégica",
    edu1Title: "Ingeniería en Telecomunicaciones, Sistemas y Electrónica",
    edu1Place: "Universidad Nacional Autónoma de México",
    edu1Date: "2020 - 2026",
    edu1Desc: "Especializado en Telecomunicaciones, Programación y Redes.",
    edu2Title: "Técnico en Computación",
    edu2Place: "Universidad Nacional Autónoma de México (ENP 9)",
    edu2Date: "2017 - 2019",
    edu2Desc: "Formación técnica fundamental en computación y sistemas.",
    exp1Title: "Pasante de Technical Account Manager, Huawei Cloud",
    exp1Date: "Dic 2025 - Presente",
    exp1Place: "Ciudad de México",
    exp1Desc: [
      "Guié la adopción de la nube, traduciendo necesidades en implementaciones IaaS/PaaS optimizadas.",
      "Diseñé soluciones personalizadas para cubrir brechas de la plataforma y cumplir requisitos.",
      "Realicé revisiones arquitectónicas y de estado para optimizar costos, seguridad y rendimiento.",
      "Resolví escalamientos complejos de infraestructura con equipos técnicos para minimizar inactividad."
    ],
    exp2Title: "Técnico de Soporte TI, Prácticas",
    exp2Date: "2020 - Nov 2025",
    exp2Place: "Ciudad de México",
    exp2Desc: [
      "Mantenimiento general de dispositivos electrónicos.",
      "Mantenimiento preventivo y correctivo.",
      "Experiencia en el manejo de sistemas operativos (Linux, Windows y Android).",
      "Técnicas intermedias de ciberseguridad."
    ],
    exp3Title: "Agente de Atención al Cliente, Teleperformance",
    exp3Date: "Mar 2020 - Ene 2021",
    exp3Place: "Ciudad de México",
    exp3Desc: [
      "Proporcioné soporte al cliente resolviendo consultas de servicio.",
      "Colaboré con el equipo de soporte técnico para solucionar problemas de hardware y software en los dispositivos de los clientes.",
      "Orientado a ventas con un objetivo específico de línea de negocio."
    ],
    location: "Ciudad de México, México",
    email: "mr.santosc259@gmail.com",
    linkedin: "LinkedIn",
  },
} as const;
