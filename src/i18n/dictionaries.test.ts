import { describe, it, expect } from "vitest";
import { LOCALES } from "./config";
import { getDictionary } from "./dictionaries";

/** Collect every leaf path "a.b.0.c" reachable in an object/array tree. */
function paths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((v, i) => paths(v, prefix ? `${prefix}.${i}` : `${i}`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) =>
      paths(v, prefix ? `${prefix}.${k}` : k),
    );
  }
  return [prefix];
}

function leaves(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(leaves);
  if (value && typeof value === "object") return Object.values(value).flatMap(leaves);
  return [String(value)];
}

describe("dictionaries", () => {
  const en = getDictionary("en");

  it("every locale has the exact same key shape as English", () => {
    const enPaths = paths(en).sort();
    for (const locale of LOCALES) {
      const localePaths = paths(getDictionary(locale)).sort();
      expect(localePaths, `locale "${locale}" key shape`).toEqual(enPaths);
    }
  });

  it("no translation string is empty", () => {
    for (const locale of LOCALES) {
      for (const leaf of leaves(getDictionary(locale))) {
        expect(leaf.trim().length, `empty string in "${locale}"`).toBeGreaterThan(0);
      }
    }
  });

  it("the hero body keeps the {mihna} placeholder in both locales", () => {
    for (const locale of LOCALES) {
      expect(getDictionary(locale).hero.body).toContain("{mihna}");
    }
  });

  it("Arabic copy is actually Arabic, not the English fallback", () => {
    const ar = getDictionary("ar");
    expect(ar.nav.startProject).not.toBe(en.nav.startProject);
    expect(/[؀-ۿ]/.test(ar.cta.contact)).toBe(true);
  });
});
