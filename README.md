# Influur · AI Campaign Generator (concept)

A concept interface for an AI tool that helps brands launch influencer campaigns. You describe the vibe, target or mission in plain language, pick a platform, and the app generates a campaign concept with a matched creator.

**🔗 Live demo:** [v0-react-influur.vercel.app](https://v0-react-influur.vercel.app)

> Independent design-engineering concept inspired by Influur. Not an official Influur product.

---

## ✨ Highlights

- **Prompt-first input.** One AI chat-style box is the whole starting point, so creating a campaign feels as simple as sending a message.
- **Platform targeting.** Quick chips for Instagram, TikTok, YouTube and X set the context without extra forms.
- **Motion with purpose.** An animated grid of creator imagery sets the tone on the landing screen, and the result page reveals the generated campaign with scroll-driven motion.
- **Generated campaign result.** A results view shows the matched creator, campaign visuals and video.

## 🛠 Built with

| Area | Tools |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS, shadcn/ui (Radix primitives) |
| Motion | Framer Motion, GSAP |
| Prototyping | v0, deployed on Vercel |

## 📁 Structure

```
app/
  page.tsx            # prompt + platform selection
  result/page.tsx     # generated campaign view
components/
  animated-ai-chat.tsx  # AI prompt input
  GridMotion.tsx        # animated creator grid background
  StarBorder.tsx        # animated border accent
  menu-bar.tsx          # top navigation
  card/                 # result cards and grid
```

## 🚀 Run locally

```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

## 🧠 Design notes

The goal was to make a powerful AI workflow feel effortless: one input, one decision (platform), one clear result. Visual energy comes from motion and imagery instead of extra UI, keeping the interface itself calm.

---

Designed and built by **[Kiran Chand Yellamelli](https://github.com/KiranChandY)** · [Portfolio](https://kiranchandy.framer.website) · [LinkedIn](https://www.linkedin.com/in/kiran-chandy/)
