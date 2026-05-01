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
      "Guided customers through their cloud adoption lifecycle, translating complex technical needs into optimized IaaS and PaaS deployments on Huawei Cloud.",
      "Identified platform feature gaps and proactively designed custom workarounds, bridging the divide between customer requirements and current cloud capabilities.",
      "Executed comprehensive architectural reviews and cloud health checks, advising clients on best practices for cost optimization, security, and performance.",
      "Collaborated with cross-functional technical teams to resolve complex cloud infrastructure escalations, minimizing downtime for mission-critical customer applications."
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
      "Guié a los clientes a través de su ciclo de vida de adopción de la nube, traduciendo necesidades técnicas complejas en implementaciones optimizadas de IaaS y PaaS en Huawei Cloud.",
      "Identifiqué brechas en las características de la plataforma y diseñé proactivamente soluciones personalizadas, acortando la brecha entre los requisitos del cliente y las capacidades actuales de la nube.",
      "Ejecuté revisiones arquitectónicas exhaustivas y comprobaciones de estado de la nube, asesorando a los clientes sobre las mejores prácticas para la optimización de costos, seguridad y rendimiento.",
      "Colaboré con equipos técnicos interfuncionales para resolver escalamientos complejos de infraestructura en la nube, minimizando el tiempo de inactividad para aplicaciones críticas de clientes."
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
