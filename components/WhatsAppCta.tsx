import * as React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export type WhatsAppCtaSize = "sm" | "md" | "lg";

export interface WhatsAppCtaProps
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
	/** wa.me deep link (build with the app's own phone/message helper). */
	href: string;
	/** Button label — comes from the app (i18n lives in the app). */
	children: React.ReactNode;
	/** Adds the shared .whatsapp-pulse attention animation. */
	pulse?: boolean;
	/** Padding / text / icon scale. Default "md". */
	size?: WhatsAppCtaSize;
}

const SIZE: Record<WhatsAppCtaSize, { pad: string; icon: number }> = {
	sm: { pad: "px-4 py-2 text-sm gap-1.5", icon: 18 },
	md: { pad: "px-5 py-2.5 text-base gap-2", icon: 20 },
	lg: { pad: "px-7 py-3.5 text-lg gap-2.5", icon: 24 },
};

/**
 * DESIGN.md §6 primary WhatsApp CTA. Renders as an external anchor
 * (target=_blank) since wa.me always leaves the app. Purely visual — the
 * caller supplies href, label and any tracking via onClick.
 */
export function WhatsAppCta({
	href,
	children,
	pulse = false,
	size = "md",
	className,
	...props
}: WhatsAppCtaProps) {
	const s = SIZE[size];
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={[
				"inline-flex items-center justify-center rounded-full font-semibold text-white",
				// Контрастный вариант: белый текст на базовом --color-whatsapp
				// даёт 1.98 при норме WCAG AA 4.5:1 (см. DESIGN.md §2).
				"bg-whatsapp-contrast hover:bg-whatsapp-contrast-hover",
				"transition-transform active:scale-[0.97]",
				s.pad,
				pulse ? "whatsapp-pulse" : "",
				className ?? "",
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			<WhatsAppIcon size={s.icon} />
			{children}
		</a>
	);
}
