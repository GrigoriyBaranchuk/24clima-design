import * as React from "react";
import type { LinkComponentType } from "./types";

export interface HeaderNavLinkProps {
	href: string;
	children: React.ReactNode;
	/** External → plain <a target=_blank>. Internal → LinkComponent (or <a>). */
	external?: boolean;
	/** App's routing link (e.g. next-intl <Link>). Ignored when external. */
	LinkComponent?: LinkComponentType;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

// Canonical desktop nav item look from 24clima.com.
const NAV_CLASS =
	"text-base font-medium text-gray-700 transition-colors hover:text-brand-green-dark";

/**
 * Desktop nav item. Internal links defer routing to the app's LinkComponent
 * so locale prefixes / client transitions stay app-owned; external links get
 * the standard new-tab treatment.
 */
export function HeaderNavLink({
	href,
	children,
	external = false,
	LinkComponent,
	className,
	onClick,
}: HeaderNavLinkProps) {
	const cls = [NAV_CLASS, className ?? ""].filter(Boolean).join(" ");

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={cls}
				onClick={onClick}
			>
				{children}
			</a>
		);
	}

	if (LinkComponent) {
		return (
			<LinkComponent href={href} className={cls} onClick={onClick}>
				{children}
			</LinkComponent>
		);
	}

	return (
		<a href={href} className={cls} onClick={onClick}>
			{children}
		</a>
	);
}
