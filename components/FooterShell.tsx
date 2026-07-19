import * as React from "react";

export interface FooterShellProps {
	/** Footer columns — compose from FooterColumn (+ a brand block). */
	children: React.ReactNode;
	/** Bottom bar content (copyright, legal). Rendered below a hairline. */
	bottomBar?: React.ReactNode;
	className?: string;
}

/**
 * Canonical navy footer shell shared by both apps. Server-safe (no state).
 * 4-column grid; first child is expected to span 2 columns (brand block).
 */
export function FooterShell({
	children,
	bottomBar,
	className,
}: FooterShellProps) {
	return (
		<footer
			className={[
				"bg-brand-navy-dark text-white",
				className ?? "",
			]
				.filter(Boolean)
				.join(" ")}
		>
			<div className="container mx-auto px-4 lg:px-8 py-16">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-4 [&>*:first-child]:lg:col-span-2">
					{children}
				</div>
			</div>

			{bottomBar ? (
				<div className="border-t border-white/10">
					<div className="container mx-auto px-4 lg:px-8 py-6">
						{bottomBar}
					</div>
				</div>
			) : null}
		</footer>
	);
}
