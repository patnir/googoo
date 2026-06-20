import { damianStory } from "@/lib/damianData"
import type { Metadata } from "next"

const pageTitle = `${damianStory.title} - Damian`
const pageUrl = "https://googoobear.com/damian"
const shareImage = damianStory.image

export const metadata: Metadata = {
  title: pageTitle,
  description: damianStory.description,
  openGraph: {
    title: pageTitle,
    description: damianStory.description,
    url: pageUrl,
    siteName: "Goo Goo Bear",
    images: [
      {
        url: shareImage,
        width: 1536,
        height: 1024,
        alt: `${damianStory.title} — Damian at the berry farm`,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: damianStory.description,
    images: [shareImage],
    creator: "@googoobear",
  },
}

export default function DamianLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
