# 24clima — Design System

> Единый бренд-бук для **24clima.com** (маркетинговый сайт) и **shop.24clima.com** (магазин).
> Источник правды — этот репозиторий: токены в `tokens.css`, Tailwind-маппинг в `tailwind-preset.js`.
> Правки дизайна делаются ЗДЕСЬ, затем выкатываются в оба проекта (см. README.md).

---

## 1. Бренд и атмосфера

24clima — HVAC/R-сервис в Панаме (WOW Soluciones Panama). Ощущение: профессионализм,
надёжность, скорость обслуживания. Визуальный язык — сдержанный, Apple-style:
контент и CTA на первом плане, хром отступает.

**Ключевые принципы:**
- Navy + green — единственная акцентная пара. Второй акцентный цвет не вводить.
- WhatsApp — главный конверсионный канал: зелёная кнопка «Escríbenos» всегда заметна.
- Глубина создаётся сменой фона (navy ↔ white ↔ light-gray), а не тенями.
- Тени — только на плавающих элементах (FAB, sticky bar), не на кнопках.
- Все интерактивные элементы: min 44×44px touch target.
- Анимации уважают `prefers-reduced-motion`; бесконечные анимации запрещены (CWV).

---

## 2. Цвета

### Brand
| Токен | Значение | Роль |
|---|---|---|
| `--color-brand-navy` | `#1e3a5f` | Основной бренд: хедер, hero, акценты |
| `--color-brand-navy-dark` | `#0d2240` | Середина градиентов |
| `--color-brand-navy-deepest` | `#0a1628` | Край градиентов |
| `--color-brand-green` | `#7BC043` | CTA, активные состояния, успех |
| `--color-brand-green-dark` | `#0F9D58` | Ховер/нажатие зелёных элементов |
| `--color-whatsapp` | `#25D366` | Кнопки WhatsApp |
| `--color-whatsapp-hover` | `#20BD5A` | Ховер WhatsApp |

Tailwind: `bg-brand-navy`, `text-brand-green`, `bg-whatsapp hover:bg-whatsapp-hover` и т.д.

### Семантические (shadcn, HSL)
`--background`, `--foreground`, `--primary` (= green), `--secondary` (= cyan-blue),
`--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring` — см. `tokens.css`.
В коде использовать семантические классы (`bg-background`, `text-muted-foreground`),
а не хардкод hex.

### Тёмная тема
НЕ входит в общий контракт. `.dark`-блок принадлежит каждому приложению
(сейчас есть только в shop). Общие токены описывают светлую тему.

---

## 3. Типографика

| Роль | Шрифт | Как подключается |
|---|---|---|
| Sans (весь UI) | **Inter** | `font-sans` → `var(--font-inter, Inter)` |
| Serif (цитаты, чтение статей) | **Lora** | `font-serif` → `var(--font-lora, Lora)` |

- Сайт задаёт `--font-inter`/`--font-lora` через `next/font` (variable-классы на обёртке).
- Shop грузит Google Fonts с семействами `Inter`/`Lora` — срабатывает fallback пресета.
- Новому проекту достаточно любого из двух способов.

**Правила:**
- Body: `--text-body` = 1rem, line-height `--leading-body` = 1.625.
- Заголовки: weight 600–700, line-height `--leading-heading` = 1.25.
- Inputs: font-size ≥ 16px (предотвращает авто-зум iOS).
- Serif — только для акцентных цитат и лонгридов, не для UI.

---

## 4. Формы и радиусы

- Базовый радиус: `--radius` = 0.625rem → `rounded-lg` / `rounded-md` / `rounded-sm`.
- Карточки: `rounded-lg`+, фон светло-серый или белый, без явных borders.
- Кнопки-CTA: pill (`rounded-full`), без теней.
- Переходы: 220ms, easing `out-emil` (`cubic-bezier(0.23, 1, 0.32, 1)`) —
  Tailwind: `duration-220 ease-out-emil`.

---

## 5. Общие компоненты-классы (из tokens.css)

| Класс | Что делает | Где использовать |
|---|---|---|
| `.hero-gradient` | Фирменный navy-градиент 135° | Hero-секции, баннеры |
| `.whatsapp-pulse` | Пульс WhatsApp-кнопки, 2s × 5 итераций | Главная CTA WhatsApp |

Это ПОЛНЫЙ список общих классов. Новые общие классы добавляются только сюда
(с записью в этой таблице), локальные — в globals.css приложения.

---

## 6. Компонентные паттерны

### Кнопки
- **Primary (WhatsApp):** фон `whatsapp`, белый текст, pill, `active:scale-[0.97]`.
- **Primary (общая):** фон `brand-green`, ховер `brand-green-dark`, белый текст, pill.
- **Secondary (outline):** прозрачный фон, border, текст navy (на светлом) / white (на тёмном).
- **Ghost:** `bg-white/15` на тёмном, светло-серый на светлом.
- Тени на кнопках запрещены (кроме FAB).

### Карточки
- Фон светло-серый (`muted`) или белый, радиус `rounded-lg`+, паддинг 12–16px.
- Ховер: `card-hover`-паттерн (подъём ~4-5px + мягкая тень) — класс локален
  в каждом приложении, но поведение должно совпадать.

### Hero
- `.hero-gradient` + белый текст, два CTA: WhatsApp (primary) + второе действие (ghost/outline).

---

## 7. Мобильная версия (app-like)

Полная мобильная спека (bottom nav, compact header, FAB WhatsApp, safe areas) —
в `DESIGN.md` репозитория 24clima-site; она построена на этих же токенах.
Shop на мобильном следует тем же принципам: карточный интерфейс,
WhatsApp-first CTA, touch targets ≥ 44px, body ≥ 15px.

---

## 8. Применение в shop.24clima.com

- Карточки товаров = те же правила карточек (раздел 6).
- Цены: `font-semibold`, акцент `brand-green` для итоговой цены/скидки.
- Кнопка «Comprar / Cotizar por WhatsApp» = Primary WhatsApp.
- Статусы заказов: `primary`/`destructive`/`muted` — семантические токены, не свои цвета.
- Язык контента: испанский (es), как на сайте.

---

## 9. Do / Don't

**DO**
- Использовать токены и классы пресета (`brand-*`, `whatsapp`, семантические shadcn).
- Зелёный — ТОЛЬКО для CTA/активных состояний/успеха.
- Уважать `prefers-reduced-motion`.

**DON'T**
- Не хардкодить hex-цвета в компонентах — только токены.
- Не добавлять новые «общие» стили в приложениях — только через этот пакет.
- Не вводить бесконечные анимации.
- Не менять значения токенов в globals.css приложений — они там больше не живут.

---

## 10. Как менять дизайн (workflow)

1. Правка в этом репозитории (`tokens.css` / `tailwind-preset.js` / `DESIGN.md`).
2. Bump `version` в package.json + git tag `vX.Y.Z` + push (см. README.md).
3. В обоих проектах обновить тег зависимости и lockfile, задеплоить.

Изменение значения токена автоматически меняет ОБА проекта после обновления
зависимости — это и есть механизм синхронизации.
