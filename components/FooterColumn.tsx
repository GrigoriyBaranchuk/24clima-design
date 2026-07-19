import * as React from "react";
import type { LinkComponentType } from "./types";

export interface FooterLinkProps {
	href: string;
	children: React.ReactNode;
	/** External → plain <a target=_blank>. Internal → LinkComponent (or <a>). */
	external?: boolean;
	LinkComponent?: LinkComponentType;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

// Canonical footer link look from 24clima.com.
const FOOTER_LINK_CLASS =
	"block mb-3 text-sm text-gray-400 transition-colors hover:text-brand-green";

/** A single footer link primitive. */
export function FooterLink({
	href,
	children,
	external = false,
	LinkComponent,
	className,
	onClick,
}: FooterLinkProps) {
	const cls = [FOOTER_LINK_CLASS, className ?? ""].filter(Boolean).join(" ");

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

export interface FooterColumnProps {
	/** Column heading text (i18n from the app). */
	heading: React.ReactNode;
	/** Link list — typically FooterLink children. */
	children: React.ReactNode;
	className?: string;
}

/** Footer column: uppercase heading + a vertical link list. */
export function FooterColumn({
	heading,
	children,
	className,
}: FooterColumnProps) {
	return (
		<div className={className}>
			<h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
				{heading}
			</h4>
			{children}
		</div>
	);
}
