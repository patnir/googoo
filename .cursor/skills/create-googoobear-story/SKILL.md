---
name: create-googoobear-story
description: >-
  Create and publish a new Goo Goo Bear illustrated story on googoobear.com —
  story JSON, OpenAI chapter illustrations, ElevenLabs narration, website
  registration, and deploy. Use when the user asks for a new story, chapter
  images, narration audio, or to publish/deploy a story to the website.
---

# Create a Goo Goo Bear Story

End-to-end workflow for a new illustrated story with chapter narration on [googoobear.com](https://googoobear.com).

## Repositories

| Repo | Path (sibling) | Role |
|------|----------------|------|
| **googoobear-website** | this repo | Site, `lib/storyData.ts`, `public/` assets |
| **googoo-images** | `../googoo-images` | Generation scripts, `stories/*.json`, local `generated/` output |

Both repos share the same parent directory (e.g. `~/dev/googoo/`).

## Prerequisites

**googoo-images/.env** (never commit):
```
OPENAI_API_KEY=...
ELEVENLABS_API_KEY=...
ELEVENLABS_VOICE_ID=P6K05ygygndZ6kli0Su6
```

Install deps once in `googoo-images`: `npm install`

## Workflow checklist

```
- [ ] 1. Write story JSON in googoo-images/stories/{file-slug}.json
- [ ] 2. Register story in lib/storyData.ts (+ storyOrder)
- [ ] 3. Generate chapter illustrations (OpenAI gpt-image-2)
- [ ] 4. Copy images + cover to public/
- [ ] 5. Generate chapter audio (ElevenLabs)
- [ ] 6. Commit + push googoobear-website (deploys via Vercel)
- [ ] 7. Commit + push googoo-images story JSON
```

Run steps in order. Check in with the user between major steps if they prefer incremental review.

---

## Step 1: Story JSON

Create `../googoo-images/stories/{file-slug}.json`. The **file slug** is short (`rainier`, `tokyo`); the **site slug** inside JSON is kebab-case (`mount-rainier-adventure`).

Copy structure from [story-template.json](story-template.json) or existing stories (`stories/tokyo.json`, `stories/rainier.json`).

### Fields

| Field | Notes |
|-------|-------|
| `slug` | URL slug → `/stories/{slug}/1` |
| `title` | Display title |
| `description` | One-line summary for story cards |
| `storyImage` | Cover filename in `public/` (e.g. `story9.png`) — pick next unused `storyN.png` |
| `styleAnchor` | Always `../googoobear-website/public/scene2.png` (National Parks watercolor style) |
| `references` | Character refs: `carolyn-goo-goo.png`, `carolyn.png`, `goo-goo-bear.png` |
| `chapters[].number` | 1-based |
| `chapters[].title` | `Chapter N: …` |
| `chapters[].content` | Narration text — short sentences, read aloud naturally |
| `chapters[].scene` | Detailed illustration prompt (setting, action, mood, lighting) |
| `chapters[].output` | Chapter image filename (e.g. `rainier01.png`) |

### Writing guidelines

- **5 chapters** is the standard length (adjust if user asks).
- **content**: Simple picture-book prose. One or two sentences per beat.
- **scene**: Be specific — characters, props, background, lighting. Include visual details the user requested (snow, animals, vehicles, etc.).
- **No text in images** — the model prompt already forbids speech bubbles and watermarks.

---

## Step 2: Register on the website

Edit `lib/storyData.ts`:

1. Add a new key under `storyData` matching `slug` from JSON.
2. Map each chapter: `title`, `content`, `image: "/{output}"`.
3. Set story-level `image: "/{storyImage}"`.
4. Prepend the slug to `storyOrder` so it appears first on the homepage (unless user says otherwise).

Audio paths are derived automatically: `/audio/{slug}/chapter-01.mp3` via `lib/audio.ts`.

---

## Step 3: Generate illustrations

From `googoo-images/`:

```bash
# One chapter at a time (API ~1–2 min each)
node generate-story.js {file-slug} --chapter 1
node generate-story.js {file-slug} --chapter 2
# … repeat for all chapters
```

Or loop all chapters:

```bash
for i in 1 2 3 4 5; do
  node generate-story.js {file-slug} --chapter $i
done
```

Output lands in `googoo-images/generated/{output}`.

**Model**: OpenAI `gpt-image-2` via `images.edit` with reference images. **Do not change** unless user asks.

Regenerate a single chapter if the user rejects an image — same command with that chapter number.

---

## Step 4: Copy images to public/

```bash
cd ../googoo-images
cp generated/{prefix}*.png ../googoobear-website/public/
```

**Cover image**: Copy the best chapter image (usually chapter 2 or a hero scene) to `public/{storyImage}`:

```bash
cp generated/rainier02.png ../googoobear-website/public/story8.png
```

---

## Step 5: Generate narration audio

From `googoo-images/`:

```bash
# All chapters
node generate-audio.js {file-slug}

# Single chapter
node generate-audio.js {file-slug} --chapter 3
```

Audio is saved locally and **auto-copied** to `googoobear-website/public/audio/{slug}/chapter-NN.mp3`.

### Voice settings (approved — do not change without user approval)

| Setting | Value |
|---------|-------|
| Voice ID | `P6K05ygygndZ6kli0Su6` |
| Model | `eleven_multilingual_v2` |
| stability | 0.50 |
| similarity_boost | 0.80 |
| style | 0.20 |
| use_speaker_boost | false |
| speed | 0.88 |

Narration format: chapter title, blank line, then one sentence per line (line breaks guide pauses — **no SSML**).

---

## Step 6: Deploy

Commit and push **googoobear-website** only when the user asks to deploy/send/publish:

```bash
git add lib/storyData.ts public/
git commit -m "Add {title} story with illustrations and chapter narration."
git push origin main
```

Vercel deploys from `main`. Story URL: `https://googoobear.com/stories/{slug}`

---

## Step 7: Commit story source

Commit the JSON in **googoo-images**:

```bash
cd ../googoo-images
git add stories/{file-slug}.json
git commit -m "Add {title} story config."
git push origin main
```

Generated images/audio in `googoo-images/generated/` are gitignored — finals live in `googoobear-website/public/`.

---

## Character & art reference

**Carolyn**: young girl, long straight brown hair, large dark dot eyes, gentle smile.

**Goo Goo Bear**: round teddy bear, yellow fur with soft pastel pink/blue/orange patches, teal cable-knit sweater. About two-thirds Carolyn's height when sitting.

**Art style**: soft watercolor and colored-pencil picture book; warm golden palette; muted tones; paper grain; soft brown outlines; gentle diffused lighting; cozy whimsical mood.

**Style anchor**: `public/scene2.png` (Yellowstone / National Parks — the target look).

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `Missing OPENAI_API_KEY` | Add key to `googoo-images/.env` |
| `Missing ELEVENLABS_API_KEY` | Add key to `googoo-images/.env` |
| Image wrong style/characters | Regenerate with `--chapter N`; tighten `scene` prompt |
| Audio sounds robotic | Ensure no SSML; use line-break formatting only |
| Story thumbnail broken | Confirm `next.config.mjs` has `images.unoptimized: true` |
| Play button missing on chapter | Audio file must exist at `public/audio/{slug}/chapter-NN.mp3` |

---

## Additional resources

- JSON template: [story-template.json](story-template.json)
- Live examples: `../googoo-images/stories/tokyo.json`, `../googoo-images/stories/rainier.json`
