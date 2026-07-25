/** Social/media icon set used in the hero social row. */

export function LinkedInIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

export function BehanceIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 7h-7V5h7v2zm1.73 10c-.44 1.3-2.03 3-5.1 3-3.07 0-5.56-1.73-5.56-5.68 0-3.91 2.32-5.92 5.46-5.92 3.08 0 4.97 1.78 5.38 4.43.08.5.11 1.19.1 2.14H15.97c.13 3.21 3.48 3.31 4.59 2.03h3.17zm-7.69-4h4.97c-.11-1.55-1.14-2.22-2.48-2.22-1.47 0-2.28.77-2.49 2.22zM6.96 20H0V5.02h6.95c5.48.08 5.58 5.45 2.72 6.9 3.46 1.26 3.58 8.08-2.71 8.08zM3 11h3.58c2.51 0 2.91-3-.31-3H3v3zm3.39 3H3v3.02h3.34c3.06 0 2.87-3.02.05-3.02z" />
    </svg>
  );
}

export function EmailIcon() {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x={2} y={5} width={20} height={14} rx={2} />
      <path d="M3 6 L12 13 L21 6" />
    </svg>
  );
}

/** Scroll/document glyph — the "contact" shortcut in the social row. */
export function ScrollIcon() {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 H15 L19 6 V22 H6 Z" />
      <path d="M15 2 V6 H19" />
      <path d="M9 12 H15 M9 16 H15" />
    </svg>
  );
}

const socialIcons = {
  linkedin: LinkedInIcon,
  behance: BehanceIcon,
  email: EmailIcon,
} as const;

export function SocialIcon({ icon }: { icon: keyof typeof socialIcons }) {
  const Icon = socialIcons[icon];
  return <Icon />;
}
