import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Sajadur Rahman",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c1a",
    theme_color: "#0c0c1a",
    icons: [
      {
        src: "/sajadur-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/sajadur-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

