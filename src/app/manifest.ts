import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Customized",
    description: "A product studio. We build software, tailored to fit.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f6f7fb",
    theme_color: "#5b6cff",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
