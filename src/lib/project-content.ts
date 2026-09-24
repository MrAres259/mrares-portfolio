import type { Lang, ProjectId } from "./portfolio-data";

export type ProjectCopy = {
  type: string;
  title: string;
  description: string;
  outcome: string;
  kicker: string;
  summary: string;
  overview: string;
  chapters: { title: string; body: string }[];
  gallery: { caption: string; note?: string }[];
};

export const projectCopy: Record<Lang, Record<ProjectId, ProjectCopy>> = {
  en: {
    insaight: {
      type: "Business intelligence · Text-to-SQL",
      title: "InsAIght 1.2",
      description:
        "A full-stack BI platform that turns natural-language questions into SQL across three business databases and answers with narrative insights and dynamic charts, using LLMs on Huawei Cloud.",
      outcome: "Schema-aware RAG + Text-to-SQL, with every query validated before it runs",
      kicker: "Business intelligence assistant",
      summary: "A schema-aware Text-to-SQL layer between people and three business databases.",
      overview:
        "InsAIght 1.2 is a Business Intelligence (BI) Chatbot/Assistant designed to let users query databases using natural language. It acts as an intelligent intermediary between users and different business databases (home, mobile, and enterprise), translating conversational questions into SQL queries, executing them, and returning natural language explanations along with data visualizations.",
      chapters: [
        {
          title: "Natural Language to SQL",
          body: "The core feature uses the Huawei Cloud MaaS API (DeepSeek-V4-Flash model) to translate user questions into valid SQL queries, dynamically fetching the live database schema and a 'Business Context' dictionary beforehand.",
        },
        {
          title: "Semantic Routing & Pre-caching",
          body: "A 'Router' LLM classifies incoming messages to match predefined optimized SQL templates for common questions, or detects malicious intents and casual chat.",
        },
        {
          title: "Security Guardrails",
          body: "The application is strictly read-only. If the Router detects an intent to modify the database, it blocks the request and triggers an automated security alert using the Huawei Cloud SMN SDK.",
        },
        {
          title: "Self-Correction & Validation",
          body: "If the generated SQL contains syntax errors, the app catches it using an EXPLAIN query and prompts the LLM to self-correct before executing it on the live database.",
        },
        {
          title: "Natural Language Results & Visualization",
          body: "Raw data is sent to a third LLM agent that writes a friendly explanation and outputs a JSON configuration detailing what type of chart to render (pie, bar, line) based on the user's prompt.",
        },
        {
          title: "Token Tracking & Admin",
          body: "Features session-based authentication for an admin panel that logs Token usage from the MaaS API into a global table for tracking AI costs.",
        },
      ],
      gallery: [
        { caption: "Home Internet · SQL and results table" },
        { caption: "Home Internet · Active customers by region" },
        { caption: "Enterprise · Question, SQL and analysis" },
        { caption: "Enterprise · P1/P2 incidents per month, 2025" },
        { caption: "Mobile · Question, SQL and analysis" },
        { caption: "Mobile · Postpaid revenue by device maker" },
      ],
    },
    noli: {
      type: "Telecom NOC · LLM log analytics",
      title: "NetOps Log Intelligence (NOLI)",
      description:
        "An LLM-powered log analytics and incident-response platform for a major Mexican ISP's NOC, fed by a streaming pipeline from device logs to Elasticsearch.",
      outcome: "Incident resolution cut from 45–120 minutes to as little as 5 in proof of concept",
      kicker: "AI-assisted network operations",
      summary: "An LLM-powered NOC platform that cut incident resolution from 45–120 minutes to as little as 5 in proof of concept.",
      overview:
        "In this use case for a leading Telecom provider, NOLI (NetOps Log Intelligence) was developed to streamline their Network Operations Center (NOC). The client needed to migrate monitoring from Datadog to an Elasticsearch cluster while minimizing incident resolution times. NOLI acts as an AI-powered NOC assistant, leveraging Huawei Cloud CSS for data storage and DeepSeek-V4-Flash and GLM 5.2 via MAAS to process natural language questions into complex Elasticsearch queries, generate root-cause analyses, and trigger automated remediation scripts in real-time.",
      chapters: [
        {
          title: "System Architecture",
          body: "NOLI integrates Huawei Cloud CSS for robust log storage with DeepSeek-V4-Flash and GLM 5.2 through MaaS. This creates a highly scalable and intelligent pipeline that parses logs, identifies anomalies, and interacts via SMN and external APIs for seamless network operations.",
        },
        {
          title: "Question Asking (NL to ES)",
          body: "Translates natural language questions directly into structured Elasticsearch DSL queries using the DeepSeek-V4-Flash and GLM 5.2 models, retrieving network logs related to outages instantly.",
        },
        {
          title: "AI Root Cause & Remediation",
          body: "After fetching logs, a second LLM analyzes the results to identify cascading failure root causes. It then equips analysts with interactive 'Proceed' actions to securely execute backend Python scripts that automatically resolve the incidents.",
        },
        {
          title: "Monitoring Dashboard",
          body: "A real-time monitoring dashboard that successfully migrated a major ISP client's productive application metrics from Datadog to CSS Elasticsearch, featuring Recharts time-series visualizations.",
        },
        {
          title: "Live-Network Monitor & Telegram Alerts",
          body: "An autonomous background loop constantly evaluates site health and sends instant notifications to the NOC team via a Telegram Bot when a critical state is detected.",
        },
        {
          title: "Automated SMS Escalation",
          body: "For sustained critical incidents, the system autonomously triggers an SMS escalation via the Huawei Cloud SMN SDK to notify on-call engineers.",
        },
      ],
      gallery: [
        { caption: "System architecture" },
        {
          caption: "AI NOC Assistant Interface",
          note: "A clean conversational interface where users can ask natural language questions (e.g., 'What caused the outage in HQ?') to dynamically generate and execute Elasticsearch queries.",
        },
        {
          caption: "Root Cause Analysis & Remediation",
          note: "The model identifies cascading failures—like a Layer 2 Loop or BGP instability—and presents an automated, one-click execution of backend Python scripts to resolve the issue directly.",
        },
        {
          caption: "Production App Dashboard Migration",
          note: "Real-time monitoring dashboard displaying concurrent users and API health metrics, fully migrated from Datadog to CSS Elasticsearch with Recharts.",
        },
        {
          caption: "Instant Telegram Alerts",
          note: "An autonomous background worker constantly evaluates threshold values and pushes critical, warning, and recovery notifications to the NOC team via a Telegram Bot.",
        },
        {
          caption: "Huawei Cloud SMN Escalation",
          note: "For sustained critical incidents (e.g., failing to recover within 4 minutes), the system autonomously triggers an SMS escalation via the Huawei Cloud SMN SDK.",
        },
      ],
    },
  },
  es: {
    insaight: {
      type: "Inteligencia de negocio · Text-to-SQL",
      title: "InsAIght 1.2",
      description:
        "Una plataforma de BI full-stack que convierte preguntas en lenguaje natural en SQL sobre tres bases de datos de negocio y responde con análisis narrativos y gráficas dinámicas, usando LLMs en Huawei Cloud.",
      outcome: "RAG + Text-to-SQL con conocimiento del esquema; cada consulta se valida antes de ejecutarse",
      kicker: "Asistente de inteligencia de negocio",
      summary: "Una capa Text-to-SQL con conocimiento del esquema entre las personas y tres bases de datos de negocio.",
      overview:
        "InsAIght 1.2 es un Chatbot/Asistente de Inteligencia Empresarial (BI) diseñado para permitir a los usuarios consultar bases de datos usando lenguaje natural. Actúa como un intermediario inteligente entre los usuarios y diferentes bases de datos (hogar, móvil y empresarial), traduciendo preguntas conversacionales a consultas SQL, ejecutándolas y devolviendo explicaciones junto con visualizaciones de datos.",
      chapters: [
        {
          title: "Lenguaje Natural a SQL",
          body: "La característica principal utiliza la API de MaaS de Huawei Cloud (modelo DeepSeek-V4-Flash) para traducir las preguntas a consultas SQL, obteniendo dinámicamente el esquema y el diccionario de contexto de negocios.",
        },
        {
          title: "Enrutamiento Semántico y Pre-caché",
          body: "Un LLM 'Router' clasifica los mensajes para usar plantillas SQL optimizadas, o detecta chat casual e intenciones maliciosas.",
        },
        {
          title: "Medidas de Seguridad",
          body: "La aplicación es estrictamente de solo lectura. Si el enrutador detecta intención de modificar la base de datos, bloquea la solicitud y dispara una alerta usando el SDK de Huawei Cloud SMN.",
        },
        {
          title: "Auto-corrección y Validación",
          body: "Si el SQL generado contiene errores, la aplicación lo captura usando una consulta EXPLAIN y pide al LLM que se auto-corrija antes de ejecutarlo.",
        },
        {
          title: "Resultados y Visualizaciones",
          body: "Los datos crudos se envían a un tercer agente LLM que escribe una explicación amigable y genera una configuración JSON detallando qué tipo de gráfico renderizar (pastel, barras, líneas).",
        },
        {
          title: "Seguimiento de Tokens y Admin",
          body: "Cuenta con autenticación basada en sesiones para un panel de administración que registra el uso de tokens de la API de MaaS para rastrear costos de IA.",
        },
      ],
      gallery: [
        { caption: "Home Internet · SQL y tabla de resultados" },
        { caption: "Home Internet · Clientes activos por región" },
        { caption: "Enterprise · Pregunta, SQL y análisis" },
        { caption: "Enterprise · Incidentes P1/P2 por mes, 2025" },
        { caption: "Mobile · Pregunta, SQL y análisis" },
        { caption: "Mobile · Ingresos Pospago por fabricante" },
      ],
    },
    noli: {
      type: "NOC de telecom · Analítica de logs con LLM",
      title: "NetOps Log Intelligence (NOLI)",
      description:
        "Una plataforma de analítica de logs y respuesta a incidentes con LLM para el NOC de un importante ISP mexicano, alimentada por un pipeline en streaming desde los logs de los equipos hasta Elasticsearch.",
      outcome: "Resolución de incidentes reducida de 45–120 minutos a solo 5 en la prueba de concepto",
      kicker: "Operaciones de red asistidas por IA",
      summary: "Una plataforma NOC con LLM que redujo la resolución de incidentes de 45–120 minutos a solo 5 en la prueba de concepto.",
      overview:
        "En este caso de uso para un importante proveedor de telecomunicaciones, se desarrolló NOLI (NetOps Log Intelligence) para optimizar su Centro de Operaciones de Red (NOC). El cliente necesitaba migrar el monitoreo de Datadog a un clúster de Elasticsearch y minimizar los tiempos de resolución de incidentes. NOLI actúa como un asistente NOC con IA, aprovechando Huawei Cloud CSS para el almacenamiento y DeepSeek-V4-Flash y GLM 5.2 vía MAAS para procesar preguntas en lenguaje natural en consultas complejas, generar análisis de causa raíz y activar scripts de remediación automatizada en tiempo real.",
      chapters: [
        {
          title: "Arquitectura del Sistema",
          body: "NOLI integra Huawei Cloud CSS para el almacenamiento robusto de logs con DeepSeek-V4-Flash y GLM 5.2 a través de MaaS. Esto crea un flujo escalable e inteligente que analiza logs, identifica anomalías e interactúa vía SMN y APIs para operaciones de red fluidas.",
        },
        {
          title: "Consultas en Lenguaje Natural",
          body: "Traduce preguntas en lenguaje natural directamente a consultas estructuradas de Elasticsearch DSL usando los modelos DeepSeek-V4-Flash y GLM 5.2, recuperando logs de red relacionados con caídas al instante.",
        },
        {
          title: "Causa Raíz y Remediación con IA",
          body: "Tras obtener los logs, el LLM analiza los resultados para identificar las causas raíz. Luego, equipa a los analistas con acciones interactivas ('Proceed') para ejecutar scripts de backend en Python que resuelven los incidentes de red al instante.",
        },
        {
          title: "Dashboard de Monitoreo",
          body: "Un panel de monitoreo en tiempo real que migró exitosamente las métricas de una aplicación productiva de un importante ISP desde Datadog a CSS Elasticsearch, con visualizaciones de series temporales (Recharts).",
        },
        {
          title: "Monitor en Vivo y Alertas por Telegram",
          body: "Un ciclo de fondo autónomo evalúa constantemente la salud del sitio y envía notificaciones instantáneas al equipo del NOC vía un Bot de Telegram cuando se detecta un estado crítico.",
        },
        {
          title: "Escalamiento Automatizado por SMS",
          body: "Para incidentes críticos prolongados, el sistema activa de forma autónoma un escalamiento por SMS usando el SDK de Huawei Cloud SMN para notificar a los ingenieros de guardia.",
        },
      ],
      gallery: [
        { caption: "Arquitectura del sistema" },
        {
          caption: "Interfaz del Asistente NOC con IA",
          note: "Una interfaz conversacional limpia donde los usuarios pueden hacer preguntas en lenguaje natural (ej. '¿Qué causó la interrupción en HQ?') para generar y ejecutar dinámicamente consultas de Elasticsearch.",
        },
        {
          caption: "Análisis de Causa Raíz y Remediación",
          note: "El modelo identifica fallas en cascada (como un bucle de Capa 2 o inestabilidad BGP) y presenta una ejecución automatizada con un solo clic de scripts Python para resolver el problema directamente.",
        },
        {
          caption: "Migración de Dashboard de App Productiva",
          note: "Dashboard de monitoreo en tiempo real mostrando usuarios concurrentes y métricas de salud de la API, totalmente migrado de Datadog a CSS Elasticsearch con Recharts.",
        },
        {
          caption: "Alertas Instantáneas por Telegram",
          note: "Un trabajador autónomo en segundo plano evalúa constantemente los valores umbral y envía notificaciones de estado crítico, advertencia y recuperación al equipo del NOC vía un Bot de Telegram.",
        },
        {
          caption: "Escalamiento con Huawei Cloud SMN",
          note: "Para incidentes críticos prolongados (ej. sin recuperación en 4 minutos), el sistema activa automáticamente un escalamiento por SMS usando el SDK de Huawei Cloud SMN.",
        },
      ],
    },
  },
};
