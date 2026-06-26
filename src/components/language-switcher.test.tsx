import { describe, it, expect, vi, beforeEach, type Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./language-switcher";

vi.mock("next/navigation", () => ({ usePathname: vi.fn() }));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

describe("LanguageSwitcher", () => {
  beforeEach(() => {
    (usePathname as Mock).mockReset();
  });

  it("from English, links to the Arabic page", () => {
    (usePathname as Mock).mockReturnValue("/en");
    render(<LanguageSwitcher locale="en" label="العربية" aria="Switch to Arabic" />);

    const link = screen.getByRole("link", { name: "Switch to Arabic" });
    expect(link).toHaveAttribute("href", "/ar");
    expect(link).toHaveAttribute("hreflang", "ar");
    expect(link).toHaveTextContent("العربية");
  });

  it("from Arabic, links back to the English page", () => {
    (usePathname as Mock).mockReturnValue("/ar");
    render(<LanguageSwitcher locale="ar" label="English" aria="Switch to English" />);

    const link = screen.getByRole("link", { name: "Switch to English" });
    expect(link).toHaveAttribute("href", "/en");
    expect(link).toHaveAttribute("hreflang", "en");
  });
});
