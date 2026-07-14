export interface NavLink {
  label: string;
  href: string;
  type: "route" | "anchor";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const BRAND = {
  name: "Rao Muhammad Ali",
  shortName: "RMA",
  title: "SQA Engineer",
  tagline: "Crafting quality into every line of code.",
  email: "rao.muhammadali@email.com",
  location: "Pakistan",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", type: "route" },
  { label: "About", href: "/about", type: "route" },
  { label: "Projects", href: "/projects", type: "route" },
  { label: "Experience", href: "/experience", type: "route" },
  { label: "Contact", href: "/contact", type: "route" },
  { label: "Resume", href: "/resume", type: "route" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rao-muhammad-ali",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/rao-muhammad-ali",
    icon: "github",
  },
];
