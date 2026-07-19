"use client";

import * as React from "react";

export interface HeaderShellProps {
	/** Brand logo / wordmark. App owns the actual <Link> and localized alt. */
	logo: React.ReactNode;
	/** Desktop nav items (compose from HeaderNavLink + app dropdowns). */
	nav?: React.ReactNode;
	/** Desktop right slot: language switcher, phone, cart, primary CTA. */
	actions?: React.ReactNode;
	/** Mobile right slot: burger / drawer trigger + compact lang badge. */
	mobileMenu?: React.ReactNode;
	/** scrollY (px) past which the header switches to the scrolled look. */
	scrollThreshold?: number;
	className?: string;
}

/**
 * Canonical header chrome shared by 24clima.com and the shop.
 *
 * Owns ONLY: fixed positioning, mobile (h-12) / desktop (h-20) heights,
 * background + scroll behaviour. Everything textual/interactive is a slot.
 *
 * Backgrounds (matches 24clima.com, with the off-book mobile #0d1b2a
 * normalized to the brand-navy-dark token):
 *   unscrolled → mobile brand-navy-dark, desktop white/95 + blur
 *   scrolled   → white everywhere + shadow
 */
export function HeaderShell({
	logo,
	nav,
	actions,
	mobileMenu,
	scrollThreshold = 20,
	className,
}: HeaderShellProps) {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > scrollThreshold);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollThreshold]);

	return (
		<header
			className={[
				"fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
				scrolled
					? "bg-white lg:bg-white/95 lg:backdrop-blur-md shadow-lg"
					: "bg-brand-navy-dark lg:bg-white/95 lg:backdrop-blur-md shadow-sm",
				className ?? "",
			]
				.filter(Boolean)
				.join(" ")}
		>
			<nav className="container mx-auto px-4 lg:px-8">
				{/* ===== MOBILE ===== */}
				<div className="flex lg:hidden items-center justify-between h-12">
					{logo}
					<div className="flex items-center gap-2">{mobileMenu}</div>
				</div>

				{/* ===== DESKTOP ===== */}
				<div className="hidden lg:flex items-center justify-between h-20">
					{logo}
					<div className="flex items-center gap-7">{nav}</div>
					<div className="flex items-center gap-4">{actions}</div>
				</div>
			</nav>
		</header>
	);
}
