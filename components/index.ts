/**
 * @24clima/design — shared React components (v0.2.0).
 *
 * Framework-light: React only. No next-intl, no next/link, no radix/shadcn.
 * All labels come via props; internal links render through a LinkComponent
 * prop (defaults to <a>). Consumers must add
 *   transpilePackages: ["@24clima/design"]
 * because raw .tsx is shipped as-is (no build step).
 */
export type { LinkComponentType } from "./types";

export { WhatsAppIcon } from "./WhatsAppIcon";
export type { WhatsAppIconProps } from "./WhatsAppIcon";

export { WhatsAppCta } from "./WhatsAppCta";
export type { WhatsAppCtaProps, WhatsAppCtaSize } from "./WhatsAppCta";

export { WhatsAppFab } from "./WhatsAppFab";
export type { WhatsAppFabProps } from "./WhatsAppFab";

export { HeaderShell } from "./HeaderShell";
export type { HeaderShellProps } from "./HeaderShell";

export { HeaderNavLink } from "./HeaderNavLink";
export type { HeaderNavLinkProps } from "./HeaderNavLink";

export { FooterShell } from "./FooterShell";
export type { FooterShellProps } from "./FooterShell";

export { FooterColumn, FooterLink } from "./FooterColumn";
export type { FooterColumnProps, FooterLinkProps } from "./FooterColumn";

export { SocialLinks } from "./SocialLinks";
export type { SocialLinksProps } from "./SocialLinks";
