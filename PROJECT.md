# Goo Goo Bear — Project Guide for LLMs

This document explains what the Goo Goo Bear project is, how the repositories fit together, and every workflow an agent needs to create, update, and publish stories on [googoobear.com](https://googoobear.com).

---

## What this project is

**Goo Goo Bear** is a children's story website featuring illustrated chapter books about **Goo Goo Bear** (a teddy bear) and **Carolyn** (her best friend). Each story has:

- A **cover image** on the homepage
- **5 chapters** (typical length), each with a watercolor illustration and read-aloud narration
- A gentle **closing lesson** in the final chapter (1–2 warm takeaway sentences)

The site is a **content creation machine**: stories are authored as JSON, illustrations are generated with OpenAI, narration with ElevenLabs, and the website is deployed on Vercel.

---

## Repositories

Both repos live as siblings under the same parent folder (e.g. `~/dev/googoo/`):

| Repo | GitHub | Purpose |
|------|--------|---------|
| **googoobear-website** | `patnir/googoo` | Next.js site, story data, all published assets |
| **googoo-images** | `patnir/googbear-images` | Generation scripts, story JSON source files, local `generated/` cache |

```
googoo/
├── googoobear-website/     ← you are here (deployed to googoobear.com)
│   ├── lib/storyData.ts    ← all story text + image paths
│   ├── public/             ← images + audio served to users
│   └── .cursor/skills/create-googoobear-story/
└── googoo-images/
    ├── stories/*.json      ← story source of truth for generation
    ├── generate-story.js   ← OpenAI illustrations
    ├── generate-audio.js   ← ElevenLabs narration
    └── generated/          ← gitignored local output
```

**Rule of thumb:** JSON and scripts live in `googoo-images`. What users see lives in `googoobear-website/public/` and `lib/storyData.ts`. Always keep those in sync.

---

## Characters and art style

Use these consistently in story text and illustration prompts.

**Carolyn**
- Young girl, long straight brown hair, large dark dot eyes, gentle smile
- Often wears a dark blue dress (match reference images)

**Goo Goo Bear**
- Round teddy bear, yellow fur with soft pastel pink/blue/orange patches
- Teal cable-knit sweater
- About two-thirds Carolyn's height when sitting

**Art style**
- Soft watercolor and colored-pencil picture book illustration
- Warm golden palette, muted tones, visible paper grain
- Soft brown/charcoal outlines — never harsh black lines
- Gentle diffused lighting, cozy whimsical mood
- **No text, speech bubbles, watermarks, or logos in images**

**Reference images** (in `googoobear-website/public/`):
- `scene2.png` — **style anchor** (National Parks look; target aesthetic)
- `carolyn-goo-goo.png` — both characters together (sizing reference)
- `carolyn.png`, `goo-goo-bear.png` — individual character refs

---

## Website architecture

**Stack:** Next.js 15, React 19, Tailwind CSS, TypeScript. Deployed on Vercel from `main`.

**Routes:**
| URL | Page |
|-----|------|
| `/` | Homepage — hero + story list |
| `/stories/{slug}` | Story overview |
| `/stories/{slug}/{chapter}` | Chapter reader (illustration + text + audio player) |

**Key files:**

| File | Role |
|------|------|
| `lib/storyData.ts` | All stories: title, description, cover image, chapters (title, content, image path). Also `storyOrder` for homepage ordering. |
| `lib/audio.ts` | Builds audio URL: `/audio/{slug}/chapter-NN.mp3` |
| `components/AudioPlayer.tsx` | Play/pause button on chapter pages |
| `next.config.mjs` | `images.unoptimized: true` — serves images directly from `/public` (Vercel image optimization is disabled) |

**Story data shape:**

```typescript
interface Story {
  title: string
  description: string
  image: string           // cover, e.g. "/story8.png"
  chapters: {
    title: string
    content: string       // narration + on-page text
    image: string         // e.g. "/rainier01.png"
  }[]
}
```

**Assets in `public/`:**
- `storyN.png` — story cover thumbnails (homepage)
- `{prefix}01.png` … `{prefix}05.png` — chapter illustrations
- `audio/{slug}/chapter-01.mp3` … — chapter narration

---

## Secrets and setup

**googoo-images/.env** (never commit):

```
OPENAI_API_KEY=...
ELEVENLABS_API_KEY=...
ELEVENLABS_VOICE_ID=P6K05ygygndZ6kli0Su6
```

Install generation deps once:

```bash
cd ../googoo-images && npm install
```

Run the website locally:

```bash
cd googoobear-website && npm install && npm run dev
```

---

## Workflow 1: Create a new story (full pipeline)

Use the Cursor skill **`.cursor/skills/create-googoobear-story/`** for step-by-step instructions. Summary:

### 1. Write story JSON

Create `../googoo-images/stories/{file-slug}.json`.

- **File slug** is short: `rainier`, `tokyo`
- **`slug` field** inside JSON is kebab-case: `mount-rainier-adventure` (used in URLs)
- **5 chapters** standard; each chapter needs `number`, `title`, `content`, `scene`, `output`
- **`scene`** = detailed illustration prompt (not shown on site)
- **`content`** = narration text (shown on site + read aloud)
- **`storyImage`** = next unused `storyN.png` cover filename
- **Last chapter** must include 1–2 closing lesson sentences (see examples in skill)

Template: `.cursor/skills/create-googoobear-story/story-template.json`

### 2. Register on the website

Add entry to `lib/storyData.ts` under `storyData` (key = JSON `slug`). Prepend slug to `storyOrder` unless user says otherwise.

### 3. Generate illustrations

From `googoo-images/`:

```bash
for i in 1 2 3 4 5; do
  node generate-story.js {file-slug} --chapter $i
done
```

- Model: OpenAI **`gpt-image-2`** via `images.edit` with reference images
- Output: `googoo-images/generated/{output}.png`
- ~1–2 minutes per chapter

### 4. Copy images to the website

```bash
cd ../googoo-images
cp generated/{prefix}*.png ../googoobear-website/public/
cp generated/{best-chapter}.png ../googoobear-website/public/storyN.png  # cover
```

### 5. Generate narration audio

```bash
node generate-audio.js {file-slug}          # all chapters
node generate-audio.js {file-slug} --chapter 3   # one chapter
```

Audio auto-copies to `googoobear-website/public/audio/{slug}/chapter-NN.mp3`.

**Approved voice settings** (do not change without user approval):

| Setting | Value |
|---------|-------|
| Voice ID | `P6K05ygygndZ6kli0Su6` |
| Model | `eleven_multilingual_v2` |
| stability | 0.50 |
| similarity_boost | 0.80 |
| style | 0.20 |
| use_speaker_boost | false |
| speed | 0.88 |

**Narration format:** chapter title, blank line, one sentence per line. Line breaks guide natural pauses. **No SSML** — it sounds robotic.

### 6. Deploy

Only commit/push when the user asks to deploy or publish.

```bash
# googoobear-website
git add lib/storyData.ts public/
git commit -m "Add {title} story with illustrations and chapter narration."
git push origin main

# googoo-images (story source)
git add stories/{file-slug}.json
git commit -m "Add {title} story config."
git push origin main
```

Vercel deploys from `main`. Story URL: `https://googoobear.com/stories/{slug}`

---

## Workflow 2: Edit an existing story

When the user changes text, names, or the closing lesson:

1. Update `../googoo-images/stories/{file-slug}.json`
2. Update matching chapter(s) in `lib/storyData.ts` — **keep both in sync**
3. Regenerate audio for changed chapters only:

   ```bash
   node generate-audio.js {file-slug} --chapter 4
   node generate-audio.js {file-slug} --chapter 5
   ```

4. If illustration prompts (`scene`) changed and user wants new art:

   ```bash
   node generate-story.js {file-slug} --chapter N
   cp generated/{output}.png ../googoobear-website/public/
   ```

5. Commit and push both repos when user asks to publish.

**Closing lesson changes** only affect narration — no new illustration needed unless the user asks.

---

## Workflow 3: Regenerate a single asset

| Goal | Command |
|------|---------|
| New illustration for chapter N | `node generate-story.js {slug} --chapter N` then copy PNG to `public/` |
| New audio for chapter N | `node generate-audio.js {slug} --chapter N` (auto-copies to website) |
| All audio | `node generate-audio.js {slug}` |

After copying images or regenerating audio, commit the changed files in `googoobear-website`.

---

## Workflow 4: Local image optimization (optional)

The website has a local Sharp script — **not** Vercel image optimization:

```bash
npm run optimize-images   # in googoobear-website
```

Creates webp/avif variants in `public/optimized/`. The live site currently uses original PNGs from `/public` with `images.unoptimized: true`.

---

## Workflow 5: TikTok video generation (optional, separate)

`googoo-images/generate-video.js` stitches chapter images + audio into a 9:16 TikTok video. This is **not part of the standard story publish pipeline** and is not required for the website. Only run if the user explicitly asks for a TikTok video.

```bash
node generate-video.js {file-slug}
```

Requires `ffmpeg` and `ffprobe`. Output: `googoo-images/generated/video/{slug}-tiktok.mp4`.

---

## Important gotchas

| Topic | Detail |
|-------|--------|
| **Vercel image optimization** | Disabled via `images.unoptimized: true`. Images are served as static files from `/public`. Do not re-enable without user approval (free tier limit + past thumbnail bugs). |
| **Two sources of story text** | `stories/*.json` (generation) and `lib/storyData.ts` (website). Update both when text changes. |
| **Generated folder** | `googoo-images/generated/` is gitignored. Finals must be copied to `googoobear-website/public/`. |
| **Audio paths** | Derived from slug + chapter number. Slug in JSON must match `storyData` key exactly. |
| **Cover images** | `storyN.png` numbering is manual — pick the next unused number in `public/`. |
| **User pacing** | User prefers smaller steps and check-ins on major changes. Do not commit or push unless asked. |
| **Character names** | Recurring bears in Mount Rainier story: **Winefred** (brown bear) and **Elora** (black bear) — Goo Goo's cousins. |

---

## Existing stories (reference)

Check `lib/storyData.ts` for the full list. Recent machine-generated stories:

| Slug | File slug | Chapters |
|------|-----------|----------|
| `mount-rainier-adventure` | `rainier` | 5 — minivan, camping, marmots/goats, cousins, snowshoes |
| `tokyo-adventure` | `tokyo` | 5 — Tokyo trip |

Homepage order is controlled by `storyOrder` in `lib/storyData.ts`.

---

## Quick reference for agents

**User asks for a new story** → Read `.cursor/skills/create-googoobear-story/SKILL.md` and follow the checklist.

**User asks to change text/names** → Edit JSON + `storyData.ts`, regenerate affected audio, push when asked.

**User asks to fix an illustration** → Regenerate that chapter, copy PNG to `public/`.

**User asks to deploy / send it / push** → Commit + push `googoobear-website` (and `googoo-images` if JSON changed).

**User asks what this project is** → Read this file.
