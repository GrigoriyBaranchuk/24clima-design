import * as React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export interface SocialLinksProps {
	/** wa.me (or tel) link. WhatsApp button omitted when absent. */
	whatsapp?: string;
	/** Instagram profile URL. Button omitted when absent. */
	instagram?: string;
	/** Facebook page URL. Button omitted when absent. */
	facebook?: string;
	/** aria-labels (i18n from the app). Defaults to the network name. */
	labels?: { whatsapp?: string; instagram?: string; facebook?: string };
	/** onClick passthrough, e.g. WhatsApp conversion tracking. */
	onWhatsAppClick?: React.MouseEventHandler<HTMLAnchorElement>;
	className?: string;
}

const BASE =
	"w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80";

/**
 * Row of round social buttons, matching the 24clima.com footer.
 * Any button whose href is not supplied is omitted.
 *
 * NOTE: Instagram gradient and Facebook (#1877F2) use hardcoded THIRD-PARTY
 * brand colours on purpose — these are the platforms' own brand identities,
 * not 24clima design tokens. Only WhatsApp uses our bg-whatsapp token.
 */
export function SocialLinks({
	whatsapp,
	instagram,
	facebook,
	labels,
	onWhatsAppClick,
	className,
}: SocialLinksProps) {
	return (
		<div
			className={["flex items-center gap-4", className ?? ""]
				.filter(Boolean)
				.join(" ")}
		>
			{whatsapp ? (
				<a
					href={whatsapp}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={labels?.whatsapp ?? "WhatsApp"}
					onClick={onWhatsAppClick}
					className={`${BASE} bg-whatsapp text-white hover:bg-whatsapp-hover hover:opacity-100`}
				>
					<WhatsAppIcon size={20} />
				</a>
			) : null}

			{instagram ? (
				<a
					href={instagram}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={labels?.instagram ?? "Instagram"}
					// Third-party brand gradient — intentionally hardcoded.
					className={`${BASE} bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white`}
				>
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
						focusable="false"
					>
						<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
					</svg>
				</a>
			) : null}

			{facebook ? (
				<a
					href={facebook}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={labels?.facebook ?? "Facebook"}
					// Third-party brand colour (#1877F2) — intentionally hardcoded.
					className={`${BASE} bg-[#1877F2] text-white`}
				>
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
						focusable="false"
					>
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
					</svg>
				</a>
			) : null}
		</div>
	);
}
