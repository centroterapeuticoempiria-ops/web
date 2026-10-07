/**
 * Centralized site URL helper.
 *
 * Official production canonical domain:
 * https://www.centroempiria.com
 *
 * Resolution order:
 * 1. `NEXT_PUBLIC_SITE_URL` — explicit override from environment variables.
 * 2. `VERCEL_PROJECT_PRODUCTION_URL` — only if it represents the custom domain (not *.vercel.app).
 * 3. Default fallback — canonical production domain: `https://www.centroempiria.com`.
 */
export const getSiteUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim().length > 0) {
    return envUrl.trim().replace(/\/+$/, "");
  }

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelUrl && vercelUrl.trim().length > 0 && !vercelUrl.includes("vercel.app")) {
    return `https://${vercelUrl.trim()}`.replace(/\/+$/, "");
  }

  return "https://www.centroempiria.com";
};
