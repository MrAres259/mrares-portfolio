import hcipCs from "@/assets/hcip_cs.png";
import googleCloud from "@/assets/google_cloud.png";
import netBasics from "@/assets/net_basics.png";
import googleIt from "@/assets/google_it.png";
import googleUx from "@/assets/google_ux.png";
import gitGithub from "@/assets/git_github.png";

export type Lang = "en" | "es";
export type ProjectId = "insaight" | "noli";
export type SkillLevel = "advanced" | "core" | "foundational";
export type Certification = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
  certNo?: string;
};
export type ProjectData = {
  path: string;
  cover: string;
  stack: string[];
  gallery: string[];
};

export const person: { name: string; alias: string } = {
  name: "Rigel Santos",
  alias: "MrAres259",
};

export const links: {
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
} = {
  email: "mr.santosc259@gmail.com",
  linkedin: "https://www.linkedin.com/in/miguel-rigel-santos-carpio-202a91172",
  github: "https://github.com/MrAres259",
  instagram: "https://www.instagram.com/mr.ares259/",
};

export const skillGroups: { name: string; level: SkillLevel }[][] = [
  [
    { name: "Huawei Cloud", level: "advanced" },
    { name: "Google Cloud", level: "foundational" },
    { name: "Terraform", level: "core" },
    { name: "Docker & K8s", level: "core" },
    { name: "Serverless (FaaS)", level: "core" },
  ],
  [
    { name: "AI/LLM Integration", level: "core" },
    { name: "Agent Swarming", level: "core" },
    { name: "RAG Pipelines", level: "core" },
    { name: "Elasticsearch", level: "core" },
    { name: "PostgreSQL", level: "core" },
    { name: "GaussDB", level: "core" },
  ],
  [
    { name: "WAF Pen Testing", level: "core" },
    { name: "Cloud Firewall", level: "core" },
    { name: "Enterprise Routing", level: "core" },
  ],
  [
    { name: "Python", level: "core" },
    { name: "TypeScript", level: "core" },
    { name: "SQL", level: "core" },
    { name: "API Integration", level: "core" },
  ],
];

export const certifications: Certification[] = [
  {
    title: "HCIP-Cloud Service Solutions Architect",
    issuer: "Huawei",
    date: "2026",
    image: hcipCs,
    url: "https://e.huawei.com/cn/talent/#/cert/certificate-verification",
    certNo: "010202602521810435131409",
  },
  {
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    date: "2024",
    image: googleCloud,
    url: "https://www.skills.google/public_profiles/423a0a4c-eb10-4534-93b6-ab302b738f23/badges/2086098",
  },
  {
    title: "Cisco Networking Basics",
    issuer: "Cisco",
    date: "2024",
    image: netBasics,
    url: "https://www.credly.com/badges/40cdeeb1-2ff9-4e9b-853c-24b11a001c9e",
  },
  {
    title: "Google IT Support",
    issuer: "Coursera",
    date: "2023",
    image: googleIt,
    url: "https://www.credly.com/badges/0d8c4c4f-bb48-4310-be03-be1b26b8d6ca",
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Coursera",
    date: "Mar 2023",
    image: googleUx,
    url: "https://www.credly.com/badges/53475eec-f46d-44d5-b9bf-f61fff271c29",
  },
  {
    title: "Git & GitHub Essentials",
    issuer: "Microsoft",
    date: "2024",
    image: gitGithub,
    url: "https://www.credly.com/badges/58c004e9-65fc-4127-9da0-36bd323fa082",
  },
];

export const projectIds: ProjectId[] = ["insaight", "noli"];

export const projects: Record<ProjectId, ProjectData> = {
  insaight: {
    path: "/project/insaight",
    cover: "/insaight/1.png",
    stack: [
      "Huawei Cloud MaaS",
      "DeepSeek-V4-Flash",
      "FunctionGraph",
      "CCI 2.0",
      "Serverless",
      "SMN SDK",
      "SQL",
      "Python",
    ],
    gallery: [
      "/insaight/1.png",
      "/insaight/2.png",
      "/insaight/3.png",
      "/insaight/4.png",
      "/insaight/6.png",
      "/insaight/7.png",
    ],
  },
  noli: {
    path: "/project/noli",
    cover: "/noli/live-monitoring.png",
    stack: [
      "Huawei Cloud CSS",
      "Elasticsearch",
      "MaaS",
      "DeepSeek-V4-Flash",
      "GLM 5.2",
      "FastAPI",
      "Next.js",
      "Python",
      "SMN",
    ],
    gallery: [
      "/noli/Noli-Arch.png",
      "/noli/nl-to-elasticsearch.jpg",
      "/noli/root-cause-remediation.jpg",
      "/noli/live-monitoring.png",
      "/noli/Telegram notifications.png",
      "/noli/SMS notifications.png",
    ],
  },
};
