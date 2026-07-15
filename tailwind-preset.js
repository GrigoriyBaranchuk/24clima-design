/**
 * @24clima/design — общий Tailwind preset для 24clima.com и shop.24clima.com.
 *
 * Подключение в tailwind.config.ts приложения:
 *   presets: [require("@24clima/design/tailwind-preset")]
 *
 * Требует подключённого tokens.css (переменные --background, --color-brand-* и т.д.).
 * Шрифты: приложение либо задаёт --font-inter/--font-lora через next/font,
 * либо грузит Google Fonts с семействами "Inter"/"Lora" — тогда срабатывает
 * fallback в var(--font-inter, Inter).
 *
 * Плагины (tailwindcss-animate и т.п.) сюда НЕ добавлять — они остаются
 * в конфигах приложений, чтобы пакет оставался без зависимостей.
 */
module.exports = {
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				brand: {
					green: "var(--color-brand-green)",
					"green-dark": "var(--color-brand-green-dark)",
					navy: "var(--color-brand-navy)",
					"navy-dark": "var(--color-brand-navy-dark)",
					"navy-deepest": "var(--color-brand-navy-deepest)",
				},
				whatsapp: {
					DEFAULT: "var(--color-whatsapp)",
					hover: "var(--color-whatsapp-hover)",
				},
			},
			fontFamily: {
				sans: ["var(--font-inter, Inter)", "system-ui", "sans-serif"],
				serif: ["var(--font-lora, Lora)", "Georgia", "serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
				screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1280px",
					"2xl": "1536px",
				},
			},
			transitionTimingFunction: {
				"out-emil": "cubic-bezier(0.23, 1, 0.32, 1)",
			},
			transitionDuration: {
				220: "220ms",
			},
		},
	},
};
