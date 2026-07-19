"use client";

import * as React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export interface WhatsAppFabProps
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
	/** wa.me deep link. */
	href: string;
	/** aria-label (i18n from the app). */
	label: string;
	/**
	 * When set, the FAB stays hidden until window.scrollY exceeds this many px,
	 * then fades / slides in. When omitted, the FAB is always visible.
	 */
	revealAfterScroll?: number;
	/** Icon edge length in px. Default 28. */
	iconSize?: number;
}

/**
 * Floating round WhatsApp action button. Fixed bottom-right, pulsing.
 * Shadow is allowed here (DESIGN.md §1: tenи только на плавающих элементах).
 */
export function WhatsAppFab({
	href,
	label,
	revealAfterScroll,
	iconSize = 28,
	className,
	...props
}: WhatsAppFabProps) {
	// If no threshold, visible from the start; otherwise start hidden.
	const [visible, setVisible] = React.useState(revealAfterScroll === undefined);

	React.useEffect(() => {
		if (revealAfterScroll === undefined) return;
		const onScroll = () => setVisible(window.scrollY > revealAfterScroll);
		onScroll(); // sync with current position on mount
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [revealAfterScroll]);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
			className={[
				"fixed bottom-6 right-6 z-50 flex w-[60px] h-[60px] items-center justify-center",
				"rounded-full bg-whatsapp text-white shadow-lg hover:bg-whatsapp-hover",
				"whatsapp-pulse transition-[opacity,transform] duration-220 ease-out-emil",
				visible
					? "opacity-100 translate-y-0"
					: "pointer-events-none opacity-0 translate-y-4",
				className ?? "",
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			<WhatsAppIcon size={iconSize} />
		</a>
	);
}
