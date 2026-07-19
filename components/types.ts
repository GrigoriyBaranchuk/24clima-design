import * as React from "react";

/**
 * Framework-agnostic link component contract.
 *
 * The package ships ZERO knowledge of routing (no next/link, no next-intl).
 * Apps pass their own localized <Link> here; when omitted the primitive
 * falls back to a plain <a>. This keeps internal navigation (locale prefix,
 * client-side transitions) an app concern while the visual chrome stays shared.
 */
export type LinkComponentType = React.ComponentType<{
	href: string;
	className?: string;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}>;
