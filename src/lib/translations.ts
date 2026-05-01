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
      "Guided customers through cloud adoption, translating technical needs into optimized IaaS/PaaS deployments on Huawei Cloud.",
      "Identified feature gaps and designed custom workarounds to meet specific customer requirements.",
      "Executed architectural reviews and health checks, advising on cost, security, and performance optimization.",
      "Collaborated with technical teams to resolve complex escalations, minimizing downtime for mission-critical applications."
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
      "Guié a los clientes en la adopción de la nube, traduciendo necesidades técnicas en implementaciones optimizadas de IaaS/PaaS en Huawei Cloud.",
      "Identifiqué brechas en funciones y diseñé soluciones personalizadas para cumplir con los requisitos específicos del cliente.",
      "Ejecuté revisiones arquitectónicas y de estado, asesorando sobre optimización de costos, seguridad y rendimiento.",
      "Colaboré con equipos técnicos para resolver escalamientos complejos, minimizando el tiempo de inactividad para aplicaciones críticas."
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
