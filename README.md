# @24clima/design

Единый дизайн-источник для [24clima.com](https://24clima.com) (репо `24Clima`)
и [shop.24clima.com](https://shop.24clima.com) (репо `24clima-shop`, `apps/shop-web`).

| Файл | Что это |
|---|---|
| `tokens.css` | CSS-переменные (цвета, типографика, радиусы) + 2 общих класса |
| `tailwind-preset.js` | Общий Tailwind preset (colors, fonts, container, easing) |
| `DESIGN.md` | Бренд-бук: правила использования токенов и паттерны |

## Подключение в приложение

```jsonc
// package.json — зависимость закреплена ТЕГОМ, не веткой
"dependencies": {
  "@24clima/design": "github:GrigoriyBaranchuk/24clima-design#v0.1.0"
}
```

```ts
// tailwind.config.ts
export default {
  presets: [require("@24clima/design/tailwind-preset")],
  // локальные extend-ключи приложения — поверх пресета
}
```

```tsx
// корневой app/layout.tsx — СТРОГО в этом порядке
import "@24clima/design/tokens.css";
import "./globals.css";
```

Шрифты: либо `next/font` с variable `--font-inter` / `--font-lora`,
либо Google Fonts с семействами `Inter` / `Lora`.

## Как выпустить изменение дизайна

```bash
cd ~/Projects/24clima-design
# 1. правишь tokens.css / tailwind-preset.js / DESIGN.md
# 2. bump версии + тег
npm version patch          # обновит package.json и создаст тег vX.Y.Z
git push origin main --tags
```

Затем в каждом приложении (обновление тега + lockfile обязательно коммитится,
иначе Vercel/CI со старым lockfile не увидит изменений):

```bash
# 24clima-site (bun)
cd ~/Projects/24clima-site
# поменять #vX.Y.Z в package.json на новый тег
bun install && bun run build
git add package.json bun.lock && git commit -m "chore(design): bump @24clima/design to vX.Y.Z"

# 24clima-shop (npm)
cd ~/Projects/24clima-shop/apps/shop-web
# поменять #vX.Y.Z в package.json на новый тег
npm install && npm run build
git add package.json package-lock.json && git commit -m "chore(design): bump @24clima/design to vX.Y.Z"
```

## Откат

Вернуть предыдущий тег в package.json приложения, `bun install` / `npm install`,
закоммитить lockfile, задеплоить.

## Правила

- Репозиторий публичный: Vercel ставит git-зависимость без credentials.
  Секретов и приватных данных здесь быть не должно — только дизайн.
- Никаких lifecycle-скриптов (`prepare`, `postinstall`) в package.json —
  git-зависимости при их наличии собираются при каждом install.
- Никаких runtime-зависимостей — пакет остаётся статическими файлами.
- Новые общие классы — только через таблицу в DESIGN.md §5.
