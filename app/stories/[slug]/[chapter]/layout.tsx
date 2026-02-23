import { storyData } from "@/lib/storyData"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; chapter: string }>
}): Promise<Metadata> {
  const { slug, chapter } = await params
  const chapterIndex = parseInt(chapter, 10) - 1
  const story = storyData[slug]

  if (!story || isNaN(chapterIndex) || chapterIndex < 0 || chapterIndex >= story.chapters.length) {
    return {
      title: "Chapter Not Found - Goo Goo Bear",
    }
  }

  const current = story.chapters[chapterIndex]
  const title = `${current.title} - ${story.title} - Goo Goo Bear`
  const url = `https://googoobear.com/stories/${slug}/${chapter}`

  return {
    title,
    description: current.content.slice(0, 160),
    openGraph: {
      title,
      description: current.content.slice(0, 160),
      url,
      siteName: "Goo Goo Bear",
      images: [
        {
          url: current.image,
          width: 800,
          height: 600,
          alt: current.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: current.content.slice(0, 160),
      images: [current.image],
      creator: "@googoobear",
    },
  }
}

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
