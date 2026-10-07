import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { resourcesData } from "@/data/resources";
import { getSiteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();

  // Core static routes
  const staticRoutes = [
    "",
    "/nosotros",
    "/areas-de-atencion",
    "/valoracion-fonoaudiologica",
    "/nuestro-espacio",
    "/nuestro-proceso",
    "/para-familias",
    "/recursos",
    "/preguntas-frecuentes",
    "/contacto",
    "/politica-de-privacidad",
    "/politica-tratamiento-datos",
    "/autorizacion-tratamiento-datos",
    "/terminos-y-condiciones",
    "/politica-cookies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      route === ""
        ? 1.0
        : route === "/valoracion-fonoaudiologica"
          ? 0.9
          : route.startsWith("/politica") || route.startsWith("/autorizacion") || route.startsWith("/terminos")
            ? 0.3
            : 0.8,
  }));

  // Dynamic service routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/areas-de-atencion/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic resource/article routes
  const resourceRoutes = resourcesData.map((article) => ({
    url: `${baseUrl}/recursos/${article.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...resourceRoutes];
}
