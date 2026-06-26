import { describe, it, expect } from "vitest";
import { SITE, mailtoHref, whatsappHref } from "./site";

describe("site config", () => {
  it("has a valid contact email", () => {
    expect(SITE.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    expect(mailtoHref).toBe(`mailto:${SITE.email}`);
  });

  it("builds a wa.me link from a digits-only number", () => {
    expect(SITE.whatsapp).toMatch(/^\d+$/);
    expect(whatsappHref).toBe(`https://wa.me/${SITE.whatsapp}`);
  });

  it("uses https URLs with no trailing slash on the canonical site", () => {
    expect(SITE.url).toMatch(/^https:\/\//);
    expect(SITE.url.endsWith("/")).toBe(false);
    expect(SITE.portfolio).toMatch(/^https:\/\//);
    expect(SITE.mihna).toMatch(/^https:\/\//);
  });
});
