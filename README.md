# FORMA Athletic Club

Landing page portfolio untuk **FORMA Athletic Club** — boutique strength & conditioning gym fiktif di East Austin, TX.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS tokens
- **Font:** Barlow + Barlow Condensed via `next/font/google`
- **Package Manager:** Bun 1.4
- **Deploy:** Vercel

## Run Locally

```bash
bun install
bun dev          # http://localhost:3000
bun run build    # production build
bun start        # serve production build
```

Atau pakai npm:

```bash
npm install
npm run dev
npm run build
npm start
```

## Struktur Project

```
forma/
├── public/
│   └── images/           # foto hero, programs, facilities, coaches, trial
├── src/
│   ├── app/
│   │   ├── globals.css   # design token + semua styling
│   │   ├── layout.tsx    # root layout, font, schema LD+JSON
│   │   └── page.tsx      # single-page, semua section
│   ├── components/
│   │   └── sections/     # 14 section components
│   │       ├── Announcement.tsx
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── Band.tsx
│   │       ├── Intro.tsx
│   │       ├── Programs.tsx
│   │       ├── Facilities.tsx
│   │       ├── Schedule.tsx
│   │       ├── Coaches.tsx
│   │       ├── Pricing.tsx
│   │       ├── Testimonials.tsx
│   │       ├── FAQ.tsx
│   │       ├── Trial.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── data.ts       # semua konten, jadwal, pricing, schema
└── docs/                 # QA report, screenshots, lighthouse
```

## Design Token

| Token     | Value       | Usage               |
| --------- | ----------- | ------------------- |
| `--dark`  | `#0F0F0F`   | Section gelap bg    |
| `--light` | `#F1F0EC`   | Body bg             |
| `--ink`   | `#111111`   | Teks utama          |
| `--ink-2` | `#4A4945`   | Teks sekunder       |
| `--muted` | `#6B6A65`   | Label, caption      |
| `--volt`  | `#D4FF3F`   | Aksen utama         |
| `--line`  | `#DCDAD4`   | Border light        |
| `--alert` | `#B3261E`   | Error, spots habis  |

## Sumber Foto

Semua foto dari **Unsplash** via `next/image` remote pattern. Foto bersifat placeholder untuk portfolio.

| Slot             | Unsplash Photo ID               |
| ---------------- | ------------------------------- |
| Hero             | `photo-1534438327276-14e5300c3a48` |
| Strength         | (same as hero, reused)          |
| Conditioning     | `photo-1599058917212-d750089bc07e` |
| Boxing           | `photo-1549719386-74dfcbf7dbed` |
| Recovery         | `photo-1518611012118-696072aa579a` |
| Facility Floor   | `photo-1540497077202-7c8a3999166f` |
| Facility Turf    | `photo-1593079831268-3381b0db4a77` |
| Facility Boxing  | `photo-1583473848882-f9a5bc7fd2ee` |
| Facility Sauna   | `photo-1554244933-d876deb6b2ff` |
| Coach Marcus     | `photo-1594381898411-846e7d193883` |
| Coach Dani       | `photo-1609899537878-88d5ba429bdb` |
| Coach Theo       | `photo-1597452485669-2c7bb5fef90d` |
| Coach Priya      | `photo-1518310383802-640c2de311b2` |
| Trial            | — (placeholder `.ph` div)       |
| Coach Hero       | — (placeholder `.ph` div)       |

## Schema Markup

- `ExerciseGym` — nama, alamat, jam operasi, range harga
- `FAQPage` — 5 FAQ item

## Catatan Rebuild Elementor

- Semua styling inline di `globals.css`, tidak ada Tailwind utility class di markup — mudah dipetakan ke Elementor custom CSS
- Konten terpusat di `lib/data.ts` — salin langsung ke Elementor widget
- Font: Barlow + Barlow Condensed (Google Fonts, tersedia di Elementor)
- Tidak ada border-radius di seluruh desain
- Section ID: `#programs`, `#schedule`, `#coaches`, `#membership`, `#faq` — pertahankan untuk anchor link
- Marquee band bisa diganti dengan Elementor marquee widget atau plugin
- Tab program bisa pakai Elementor Tabs widget dengan custom styling
- Schedule grid bisa pakai Elementor Table/Loop Grid
- FAQ pakai native `<details>` — di Elementor pakai Accordion widget
- Trial form: di Elementor pakai Form widget + conditional fields
