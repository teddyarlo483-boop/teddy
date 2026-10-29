/** Single source of truth for business details. Replace every [PLACEHOLDER]. */
export const site = {
  name: "West Coast Epoxy Works",
  tagline: "Durable Surfaces. Lasting Impressions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com",
  phone: "[PHONE NUMBER]",
  email: "[EMAIL ADDRESS]",
  address: "", // leave empty until confirmed
  hours: "[BUSINESS HOURS]",
  serviceAreas: [] as string[], // e.g. ["City A", "City B"]. Empty = service-areas page shows a general contact CTA.
  social: { instagram: "", facebook: "", linkedin: "" } as Record<string, string>,
  logo: {
    horizontal: "/assets/brand/logo-horizontal.svg",
    stacked: "/assets/brand/logo-stacked.svg",
    monogram: "/assets/brand/monogram.svg",
    darkMono: "/assets/brand/logo-dark-mono.svg",
    lightMono: "/assets/brand/logo-light-mono.svg",
  },
  /** Image paths live in /public/images. Empty string = labelled placeholder. See IMAGES.md. */
  images: { hero: "", prep: "", gallery: "", about: "", process: "", commercial: "", residential: "" },
};
export const isSet = (v: string) => !!v && !v.startsWith("[");
export const telHref = () => (isSet(site.phone) ? `tel:${site.phone.replace(/[^+\d]/g, "")}` : "/contact");
export const mailHref = () => (isSet(site.email) ? `mailto:${site.email}` : "/contact");
