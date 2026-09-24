import type { Lang, ProjectId } from "./portfolio-data";
import { projectCopy, type ProjectCopy } from "./project-content";

export type { Lang };
export type Role = { date: string; title: string; place: string; summary: string; bullets: string[] };
export type Education = { date: string; title: string; place: string; desc: string };

export type Content = {
  meta: { title: string; description: string };
  nav: { work: string; experience: string; capabilities: string; credentials: string; contact: string; talk: string; menu: string; switchLang: string; theme: string };
  hero: { available: string; eyebrow: string; headlineStart: string; headlineAccent: string; intro: string; primary: string; secondary: string; profileLabel: string; profileStatus: string; profileNote: string; proof: { value: string; label: string }[] };
  work: { label: string; title: string; intro: string; badge: string; cta: string; more: { label: string; type: string; title: string; description: string; stack: string[] } };
  projects: Record<ProjectId, ProjectCopy>;
  experience: { label: string; title: string; showMore: string; showLess: string; roles: Role[] };
  capabilities: { label: string; title: string; learningTag: string; items: { title: string; desc: string }[] };
  credentials: { label: string; title: string; educationLabel: string; education: Education[]; certsLabel: string; featured: string; certNo: string; validThrough: string; copy: string; copied: string; verify: string };
  contact: { label: string; title: string; body: string; location: string };
  detail: { back: string; stack: string; overview: string; architecture: string; gallery: string; galleryTitle: string; nextStep: string; nextTitle: string; email: string; backHome: string; expand: string };
  footer: { tagline: string };
  notFound: { title: string; body: string; home: string };
};

export const translations: Record<Lang, Content> = {
  en: {
    meta: {
      title: "Rigel Santos | Cloud AI Engineer",
      description: "Portfolio of Rigel Santos, Cloud AI Engineer: RAG and Text-to-SQL platforms, real-time data pipelines and serverless automation on Huawei Cloud.",
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
      eyebrow: "Cloud · AI · Automation · Data",
      headlineStart: "I build cloud AI systems that turn data into",
      headlineAccent: "action.",
      intro: "Cloud AI Engineer at Huawei Cloud. I design RAG and Text-to-SQL platforms, real-time data pipelines and serverless automation for enterprise customers, from architecture and proof of concept to production.",
      primary: "View case studies",
      secondary: "Start a conversation",
      profileLabel: "Profile signal",
      profileStatus: "ACTIVE",
      profileNote: "Technical Account Manager (Intern) at Huawei Cloud for ISP, telecom and ERP customers. Telecom, Systems & Electronics Engineering at UNAM, Aug 2026.",
      proof: [
        { value: "5 min", label: "incident resolution in NOLI PoC (was 45–120)" },
        { value: "03", label: "enterprise AI platforms" },
        { value: "HCIP", label: "cloud solutions architect" },
        { value: "EN / ES", label: "bilingual delivery" },
      ],
    },
    work: {
      label: "Selected work",
      title: "AI systems for enterprise operations",
      intro: "Three enterprise platforms built on Huawei Cloud: LLM-driven incident response, Text-to-SQL analytics and RAG knowledge search.",
      badge: "VERIFIED BUILD",
      cta: "Explore system",
      more: {
        label: "Also delivered",
        type: "Enterprise RAG · Knowledge platform",
        title: "Pangolin Brain",
        description: "A knowledge-center platform for a tier-1 Mexican mobile carrier, modeled on Huawei Cloud Pangu's knowledge base: document ingestion, chunking and embeddings stored in vector databases, powering semantic search and source-grounded LLM answers.",
        stack: ["RAG", "Embeddings", "Vector databases", "Semantic search", "Huawei Cloud Pangu"],
      },
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
          summary: "Technical advisor for ISP, telecom and ERP customers: LLM platforms, real-time data pipelines, serverless ETL and secure multi-VPC landing zones, from architecture to production.",
          bullets: [
            "Primary technical advisor for ISP, telecom and ERP customers: architecture guidance, capacity planning, multi-cloud migrations and root-cause analysis on production workloads, acting as the escalation point during critical incidents.",
            "Delivered LLM platforms on Huawei Cloud: NOLI, an incident-response system for a major Mexican ISP's NOC that cut resolution time from 45–120 minutes to as little as 5 in proof of concept; insAIght, Text-to-SQL analytics across three business databases; and Pangolin Brain, an enterprise RAG knowledge base.",
            "Built real-time data pipelines (device logs → Datadog → load balancer → Elasticsearch) and the query and aggregation layers behind operator dashboards and auto-generated management reports.",
            "Automated cloud operations with serverless functions and Python: an event-driven ETL forwarding audit logs to Splunk SIEM, alerts on database anomalies, and scripts for instance management and configuration.",
            "Architected secure multi-VPC landing zones (hub-and-spoke Enterprise Router, DMZ and inspection VPCs, private connectivity to AI model endpoints) provisioned with Terraform, enforcing least-privilege IAM and validating WAF and Cloud Firewall policies through penetration testing.",
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
      title: "Cloud, AI, automation and data",
      learningTag: "in progress",
      items: [
        {
          title: "Cloud & infrastructure",
          desc: "Landing zones, VPC networking, containers and infrastructure as code on Huawei Cloud, with Google Cloud and OCI foundations.",
        },
        {
          title: "AI & LLM systems",
          desc: "RAG pipelines, vector search, Text-to-SQL and agentic workflows grounded in enterprise data.",
        },
        {
          title: "Automation",
          desc: "Serverless functions, event-driven ETL and configuration automation that remove manual steps from operations.",
        },
        {
          title: "Data & analytics",
          desc: "Pipelines, query layers and dashboards in Python, SQL and Elasticsearch. Expanding into big data engineering next.",
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
          desc: "Relevant coursework: Artificial Intelligence & Machine Learning, Cloud Computing, Serverless & Automation, Relational Databases, Data Communication & Networking.",
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
      body: "I'm open to Cloud AI, automation and data engineering roles where reliability matters.",
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
      title: "Rigel Santos | Ingeniero de IA en la Nube",
      description: "Portafolio de Rigel Santos, ingeniero de IA en la nube: plataformas RAG y Text-to-SQL, pipelines de datos en tiempo real y automatización serverless en Huawei Cloud.",
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
      eyebrow: "Nube · IA · Automatización · Datos",
      headlineStart: "Construyo sistemas de IA en la nube que convierten datos en",
      headlineAccent: "acción.",
      intro: "Ingeniero de IA en la nube en Huawei Cloud. Diseño plataformas RAG y Text-to-SQL, pipelines de datos en tiempo real y automatización serverless para clientes empresariales, desde la arquitectura y la prueba de concepto hasta producción.",
      primary: "Ver casos de estudio",
      secondary: "Iniciar conversación",
      profileLabel: "Señal de perfil",
      profileStatus: "ACTIVO",
      profileNote: "Technical Account Manager (pasante) en Huawei Cloud para clientes ISP, telecom y ERP. Ingeniería en Telecomunicaciones, Sistemas y Electrónica en la UNAM, agosto 2026.",
      proof: [
        { value: "5 min", label: "resolución de incidentes en PoC de NOLI (antes 45–120)" },
        { value: "03", label: "plataformas de IA empresariales" },
        { value: "HCIP", label: "arquitecto de soluciones cloud" },
        { value: "EN / ES", label: "trabajo bilingüe" },
      ],
    },
    work: {
      label: "Trabajo seleccionado",
      title: "Sistemas de IA para operaciones empresariales",
      intro: "Tres plataformas empresariales sobre Huawei Cloud: respuesta a incidentes con LLM, analítica Text-to-SQL y búsqueda de conocimiento con RAG.",
      badge: "SISTEMA VERIFICADO",
      cta: "Explorar sistema",
      more: {
        label: "También entregado",
        type: "RAG empresarial · Plataforma de conocimiento",
        title: "Pangolin Brain",
        description: "Una plataforma de centro de conocimiento para un operador móvil mexicano de primer nivel, basada en la base de conocimiento de Huawei Cloud Pangu: ingesta de documentos, fragmentación y embeddings en bases de datos vectoriales para búsqueda semántica y respuestas de LLM fundamentadas en fuentes.",
        stack: ["RAG", "Embeddings", "Vector databases", "Semantic search", "Huawei Cloud Pangu"],
      },
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
          summary: "Asesor técnico para clientes ISP, telecom y ERP: plataformas con LLM, pipelines de datos en tiempo real, ETL serverless y landing zones multi-VPC seguras, desde la arquitectura hasta producción.",
          bullets: [
            "Asesor técnico principal de clientes ISP, telecom y ERP: guía de arquitectura, planeación de capacidad, migraciones multi-cloud y análisis de causa raíz en cargas productivas, como punto de escalamiento durante incidentes críticos.",
            "Entregué plataformas con LLM sobre Huawei Cloud: NOLI, un sistema de respuesta a incidentes para el NOC de un importante ISP mexicano que redujo el tiempo de resolución de 45–120 minutos a solo 5 en la prueba de concepto; insAIght, analítica Text-to-SQL sobre tres bases de datos de negocio; y Pangolin Brain, una base de conocimiento RAG empresarial.",
            "Construí pipelines de datos en tiempo real (logs de equipos → Datadog → balanceador de carga → Elasticsearch) y las capas de consulta y agregación detrás de los dashboards de operadores y los reportes gerenciales automáticos.",
            "Automaticé operaciones en la nube con funciones serverless y Python: un ETL orientado a eventos que envía logs de auditoría a Splunk SIEM, alertas ante anomalías en bases de datos y scripts para gestión de instancias y configuración.",
            "Diseñé landing zones multi-VPC seguras (Enterprise Router hub-and-spoke, VPCs de DMZ e inspección, conectividad privada hacia endpoints de modelos de IA) aprovisionadas con Terraform, con IAM de mínimo privilegio y políticas de WAF y Cloud Firewall validadas mediante pruebas de penetración.",
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
      title: "Nube, IA, automatización y datos",
      learningTag: "en curso",
      items: [
        {
          title: "Nube e infraestructura",
          desc: "Landing zones, redes VPC, contenedores e infraestructura como código en Huawei Cloud, con bases en Google Cloud y OCI.",
        },
        {
          title: "IA y sistemas con LLM",
          desc: "Pipelines RAG, búsqueda vectorial, Text-to-SQL y flujos agénticos fundamentados en datos empresariales.",
        },
        {
          title: "Automatización",
          desc: "Funciones serverless, ETL orientado a eventos y automatización de configuración que eliminan pasos manuales de la operación.",
        },
        {
          title: "Datos y analítica",
          desc: "Pipelines, capas de consulta y dashboards en Python, SQL y Elasticsearch. Próximo paso: ingeniería de big data.",
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
          desc: "Materias relevantes: Inteligencia Artificial y Machine Learning, Cómputo en la Nube, Serverless y Automatización, Bases de Datos Relacionales, Comunicación de Datos y Redes.",
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
      body: "Busco roles de IA en la nube, automatización e ingeniería de datos donde la confiabilidad importe.",
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
