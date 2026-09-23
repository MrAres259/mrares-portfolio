import { describe, expect, it } from "vitest";
import { translations } from "@/lib/content";
import { certifications, projectIds, projects, skillGroups } from "@/lib/portfolio-data";

const shape = (v: unknown): unknown =>
  Array.isArray(v)
    ? v.map(shape)
    : v && typeof v === "object"
      ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, shape(x)]))
      : typeof v;

const strings = (v: unknown): string[] =>
  typeof v === "string" ? [v] : v && typeof v === "object" ? Object.values(v).flatMap(strings) : [];

describe("content", () => {
  it("en and es have the same shape", () => {
    expect(shape(translations.es)).toEqual(shape(translations.en));
  });

  it("has no empty strings", () => {
    for (const lang of ["en", "es"] as const) {
      expect(strings(translations[lang]).filter((s) => !s.trim())).toEqual([]);
    }
  });

  it("gallery captions line up with images", () => {
    for (const lang of ["en", "es"] as const) {
      for (const id of projectIds) {
        expect(translations[lang].projects[id].gallery).toHaveLength(projects[id].gallery.length);
      }
    }
  });

  it("has one skill group per capability", () => {
    expect(skillGroups).toHaveLength(translations.en.capabilities.items.length);
  });

  it("features the cert that has a number", () => {
    expect(certifications[0].certNo).toBeTruthy();
  });
});
