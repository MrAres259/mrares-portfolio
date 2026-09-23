import type { Lang, ProjectId } from "./portfolio-data";
import { projectCopy, type ProjectCopy } from "./project-content";

export type { Lang };
export type Role = { date: string; title: string; place: string; summary: string; bullets: string[] };
export type Education = { date: string; title: string; place: string; desc: string };

export type Content = {
  meta: { title: string; description: string };
  nav: { work: string; experience: string; capabilities: string; credentials: string; contact: string; talk: string; menu: string; switchLang: string; theme: string };
  hero: { available: string; eyebrow: string; headlineStart: string; headlineAccent: string; intro: string; primary: string; secondary: string; profileLabel: string; profileStatus: string; profileNote: string; proof: { value: string; label: string }[] };
  work: { label: string; title: string; intro: string; badge: string; cta: string };
  projects: Record<ProjectId, ProjectCopy>;
  experience: { label: string; title: string; showMore: string; showLess: string; roles: Role[] };
  capabilities: { label: string; title: string; items: { title: string; desc: string }[] };
  credentials: { label: string; title: string; educationLabel: string; education: Education[]; certsLabel: string; featured: string; certNo: string; validThrough: string; copy: string; copied: string; verify: string };
  contact: { label: string; title: string; body: string; location: string };
  detail: { back: string; stack: string; overview: string; architecture: string; gallery: string; galleryTitle: string; nextStep: string; nextTitle: string; email: string; backHome: string; expand: string };
  footer: { tagline: string };
  notFound: { title: string; body: string; home: string };
};

export const translations: Record<Lang, Content> = {
  en: {
    meta: {
      title: "Rigel Santos | Cloud, AI & Network Systems",
      description: "Portfolio of Rigel Santos: applied AI, cloud infrastructure, network operations and full-stack engineering.",
    },
    nav: {
      work: "Work",
      experience: "Experience",
      capabilities: "Capabilities",
      credentials: "Credentials",
      contact: "Contact",
      talk: "Let's talk",
      menu: "Menu",
      switchLang: "Switch language",
      theme: "Toggle theme",
    },
    hero: {
      available: "Based in Mexico City · Open to opportunities",
      eyebrow: "Applied AI · Cloud infrastructure · Network operations",
      headlineStart: "I build resilient systems for",
      headlineAccent: "real operations.",
      intro: "I turn complex cloud, data and network problems into systems teams can inspect, trust and operate—from architecture to production.",
      primary: "View case studies",
      secondary: "Start a conversation",
      profileLabel: "Profile signal",
      profileStatus: "ACTIVE",
      profileNote: "Technical Account Manager Intern at Huawei Cloud. Telecom, Systems & Electronics Engineering at UNAM.",
      proof: [
        { value: "02", label: "flagship systems" },
        { value: "04", label: "engineering domains" },
        { value: "EN / ES", label: "bilingual delivery" },
        { value: "2026", label: "UNAM graduate" },
      ],
    },
    work: {
      label: "Selected work",
      title: "Engineering under real constraints",
      intro: "Not concept art. Two working systems designed around business data, security guardrails and operational response.",
      badge: "VERIFIED BUILD",
      cta: "Explore system",
    },
    projects: projectCopy.en,
    experience: {
      label: "Operational history",
      title: "Technical depth, client context",
      showMore: "Show more",
      showLess: "Show less",
      roles: [
        {
          date: "Dec 2025 — Present",
          title: "Technical Account Manager Intern",
          place: "Huawei Cloud · Mexico City",
          summary: "Cloud architecture, enterprise troubleshooting, multi-cloud adoption, infrastructure automation and security validation across production environments.",
          bullets: [
            "Designed and deployed custom software and cloud infrastructure solutions tailored to resolve specific business challenges and accelerate enterprise digital transformation.",
            "Led multi-cloud adoption strategies and end-to-end migrations, utilizing Infrastructure as Code (IaC) to automate the provisioning and deployment of scalable enterprise environments.",
            "Acted as the primary technical liaison for enterprise clients, executing advanced troubleshooting and root-cause analysis to ensure high availability and resolve complex incidents in production environments.",
            "Validated security postures across multi-VPC topologies by conducting penetration testing on Web Application Firewalls (WAF) and Cloud Firewalls, ensuring strict policy enforcement and protection against advanced threats.",
            "Streamlined cloud operations by engineering serverless automation architectures and configuration scripts, significantly reducing manual effort and minimizing deployment times.",
          ],
        },
        {
          date: "2020 — Nov 2025",
          title: "IT Support Technician · Internship",
          place: "Mexico City",
          summary: "Preventive and corrective systems maintenance across Linux, Windows and Android environments, with cybersecurity support.",
          bullets: [
            "General maintenance of electronic devices.",
            "Preventive and corrective maintenance.",
            "Experience managing operating systems (Linux, Windows, and Android).",
            "Intermediate cybersecurity techniques.",
          ],
        },
        {
          date: "Summers 2022 — 2025",
          title: "Bilingual Technical Support & Sales",
          place: "Premium service providers · Mexico City",
          summary: "High-volume technical diagnosis and client communication in English and Spanish under strict service targets.",
          bullets: [
            "Delivered specialized technical support and dedicated customer service for premium-tier accounts, effectively diagnosing issues and ensuring rapid resolution of complex inquiries in a fully bilingual (English/Spanish) environment.",
            "Executed targeted sales and cross-selling strategies by analyzing customer needs and account profiles, successfully recommending tailored solutions to drive revenue and account growth.",
            "Managed high-volume inbound communications under pressure, consistently meeting strict Service Level Agreements (SLAs) and maintaining high customer satisfaction metrics.",
          ],
        },
      ],
    },
    capabilities: {
      label: "Capability architecture",
      title: "One operator across the stack",
      items: [
        {
          title: "Cloud & infrastructure",
          desc: "Huawei Cloud, Google Cloud, Terraform, containers, Kubernetes and serverless systems.",
        },
        {
          title: "Applied AI & data",
          desc: "LLM integration, retrieval pipelines, Elasticsearch, PostgreSQL, GaussDB and evaluation workflows.",
        },
        {
          title: "Security & networking",
          desc: "WAF testing, cloud firewalls, enterprise routing, observability and incident analysis.",
        },
        {
          title: "Full-stack delivery",
          desc: "Python, TypeScript, SQL, APIs and interfaces that expose complex system state clearly.",
        },
      ],
    },
    credentials: {
      label: "Verified signals",
      title: "Education & credentials",
      educationLabel: "Education",
      education: [
        {
          date: "2020 - 2026",
          title: "Telecom, Systems & Electronics Engineering",
          place: "Universidad Nacional Autónoma de México",
          desc: "Specialized in Telecommunications, Coding, and Networking.",
        },
        {
          date: "2017 - 2019",
          title: "Computer Technician",
          place: "Universidad Nacional Autónoma de México (ENP 9)",
          desc: "Foundational technical training in computing and systems.",
        },
      ],
      certsLabel: "Certifications",
      featured: "Featured Certification",
      certNo: "Cert. No.",
      validThrough: "Valid through May 2029",
      copy: "Copy certificate number",
      copied: "Copied",
      verify: "Verify",
    },
    contact: {
      label: "Direct contact",
      title: "Have a complex system to untangle?",
      body: "I’m interested in cloud, AI infrastructure, network operations and technical roles where reliability matters.",
      location: "Mexico City, Mexico",
    },
    detail: {
      back: "Portfolio",
      stack: "System stack",
      overview: "System overview",
      architecture: "Architecture & decisions",
      gallery: "System gallery",
      galleryTitle: "Every screen, live from the system",
      nextStep: "Next step",
      nextTitle: "Let’s discuss the architecture behind the system.",
      email: "Email Rigel",
      backHome: "Back to Portfolio",
      expand: "Expand screenshot",
    },
    footer: {
      tagline: "Cloud excellence, strategic innovation",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      home: "Go home",
    },
  },
  es: {
    meta: {
      title: "Rigel Santos | Cloud, IA y Sistemas de Red",
      description: "Portafolio de Rigel Santos: IA aplicada, infraestructura cloud, operaciones de red e ingeniería full-stack.",
    },
    nav: {
      work: "Proyectos",
      experience: "Experiencia",
      capabilities: "Capacidades",
      credentials: "Credenciales",
      contact: "Contacto",
      talk: "Hablemos",
      menu: "Menú",
      switchLang: "Cambiar idioma",
      theme: "Cambiar tema",
    },
    hero: {
      available: "Ciudad de México · Abierto a oportunidades",
      eyebrow: "IA aplicada · Infraestructura cloud · Operaciones de red",
      headlineStart: "Construyo sistemas resilientes para",
      headlineAccent: "operaciones reales.",
      intro: "Convierto problemas complejos de nube, datos y redes en sistemas que los equipos pueden inspeccionar, confiar y operar: desde arquitectura hasta producción.",
      primary: "Ver casos de estudio",
      secondary: "Iniciar conversación",
      profileLabel: "Señal de perfil",
      profileStatus: "ACTIVO",
      profileNote: "Pasante de Technical Account Manager en Huawei Cloud. Ingeniería en Telecomunicaciones, Sistemas y Electrónica en la UNAM.",
      proof: [
        { value: "02", label: "sistemas principales" },
        { value: "04", label: "áreas de ingeniería" },
        { value: "EN / ES", label: "trabajo bilingüe" },
        { value: "2026", label: "egresado UNAM" },
      ],
    },
    work: {
      label: "Trabajo seleccionado",
      title: "Ingeniería bajo restricciones reales",
      intro: "No son conceptos. Son dos sistemas funcionales diseñados alrededor de datos, seguridad y respuesta operativa.",
      badge: "SISTEMA VERIFICADO",
      cta: "Explorar sistema",
    },
    projects: projectCopy.es,
    experience: {
      label: "Historial operativo",
      title: "Profundidad técnica, contexto de cliente",
      showMore: "Ver más",
      showLess: "Ver menos",
      roles: [
        {
          date: "Dic 2025 — Presente",
          title: "Pasante de Technical Account Manager",
          place: "Huawei Cloud · Ciudad de México",
          summary: "Arquitectura cloud, diagnóstico empresarial, adopción multi-cloud, automatización de infraestructura y validación de seguridad en producción.",
          bullets: [
            "Diseñé e implementé software a medida y soluciones de infraestructura en la nube adaptadas para resolver desafíos comerciales específicos y acelerar la transformación digital empresarial.",
            "Lideré estrategias de adopción de múltiples nubes y migraciones de extremo a extremo, utilizando Infraestructura como Código (IaC) para automatizar el aprovisionamiento y despliegue de entornos empresariales escalables.",
            "Actué como enlace técnico principal para clientes empresariales, ejecutando solución de problemas avanzada y análisis de causa raíz para garantizar alta disponibilidad y resolver incidentes complejos en entornos de producción.",
            "Validé posturas de seguridad a través de topologías multi-VPC realizando pruebas de penetración en Firewalls de Aplicaciones Web (WAF) y Firewalls en la Nube, garantizando el cumplimiento estricto de políticas y protección contra amenazas avanzadas.",
            "Optimicé las operaciones en la nube diseñando arquitecturas de automatización sin servidor y scripts de configuración, reduciendo significativamente el esfuerzo manual y minimizando los tiempos de despliegue.",
          ],
        },
        {
          date: "2020 — Nov 2025",
          title: "Técnico de soporte · Pasantía",
          place: "Ciudad de México",
          summary: "Mantenimiento preventivo y correctivo en Linux, Windows y Android, además de soporte de ciberseguridad.",
          bullets: [
            "Mantenimiento general de dispositivos electrónicos.",
            "Mantenimiento preventivo y correctivo.",
            "Experiencia en el manejo de sistemas operativos (Linux, Windows y Android).",
            "Técnicas intermedias de ciberseguridad.",
          ],
        },
        {
          date: "Veranos 2022 — 2025",
          title: "Soporte técnico y ventas bilingüe",
          place: "Proveedores de servicios premium · Ciudad de México",
          summary: "Diagnóstico técnico y comunicación con clientes en inglés y español bajo objetivos estrictos de servicio.",
          bullets: [
            "Brindé soporte técnico especializado y servicio al cliente dedicado para cuentas de nivel premium, diagnosticando problemas de manera efectiva y garantizando una rápida resolución de consultas complejas en un entorno completamente bilingüe (inglés/español).",
            "Ejecuté estrategias de ventas dirigidas y ventas cruzadas al analizar las necesidades del cliente y los perfiles de cuenta, recomendando con éxito soluciones personalizadas para impulsar los ingresos y el crecimiento de la cuenta.",
            "Manejé comunicaciones entrantes de alto volumen bajo presión, cumpliendo consistentemente con estrictos Acuerdos de Nivel de Servicio (SLA) y manteniendo altas métricas de satisfacción del cliente.",
          ],
        },
      ],
    },
    capabilities: {
      label: "Arquitectura de capacidades",
      title: "Un operador para toda la pila",
      items: [
        {
          title: "Cloud e infraestructura",
          desc: "Huawei Cloud, Google Cloud, Terraform, contenedores, Kubernetes y sistemas serverless.",
        },
        {
          title: "IA aplicada y datos",
          desc: "Integración LLM, recuperación, Elasticsearch, PostgreSQL, GaussDB y flujos de evaluación.",
        },
        {
          title: "Seguridad y redes",
          desc: "Pruebas WAF, firewalls cloud, ruteo empresarial, observabilidad y análisis de incidentes.",
        },
        {
          title: "Desarrollo full-stack",
          desc: "Python, TypeScript, SQL, APIs e interfaces que exponen sistemas complejos con claridad.",
        },
      ],
    },
    credentials: {
      label: "Señales verificadas",
      title: "Educación y credenciales",
      educationLabel: "Educación",
      education: [
        {
          date: "2020 - 2026",
          title: "Ingeniería en Telecomunicaciones, Sistemas y Electrónica",
          place: "Universidad Nacional Autónoma de México",
          desc: "Especializado en Telecomunicaciones, Programación y Redes.",
        },
        {
          date: "2017 - 2019",
          title: "Técnico en Computación",
          place: "Universidad Nacional Autónoma de México (ENP 9)",
          desc: "Formación técnica fundamental en computación y sistemas.",
        },
      ],
      certsLabel: "Certificaciones",
      featured: "Certificación Destacada",
      certNo: "Cert. No.",
      validThrough: "Válido hasta mayo 2029",
      copy: "Copiar número de certificado",
      copied: "Copiado",
      verify: "Verificar",
    },
    contact: {
      label: "Contacto directo",
      title: "¿Tienes un sistema complejo por resolver?",
      body: "Me interesan oportunidades en cloud, infraestructura de IA y operaciones de red donde la confiabilidad importe.",
      location: "Ciudad de México, México",
    },
    detail: {
      back: "Portafolio",
      stack: "Stack del sistema",
      overview: "Resumen del sistema",
      architecture: "Arquitectura y decisiones",
      gallery: "Galería del sistema",
      galleryTitle: "Cada pantalla, directo del sistema",
      nextStep: "Siguiente paso",
      nextTitle: "Hablemos de la arquitectura detrás del sistema.",
      email: "Escríbele a Rigel",
      backHome: "Volver al Portafolio",
      expand: "Ampliar captura",
    },
    footer: {
      tagline: "Excelencia en la nube, innovación estratégica",
    },
    notFound: {
      title: "Página no encontrada",
      body: "La página que buscas no existe o fue movida.",
      home: "Ir al inicio",
    },
  },
};
