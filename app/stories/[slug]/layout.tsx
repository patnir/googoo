import { storyData } from '@/lib/storyData'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const story = storyData[slug]

  if (!story) {
    return {
      title: 'Story Not Found - Goo Goo Bear',
      description: 'This story adventure hasn\'t been written yet!',
    }
  }

  const storyTitle = `${story.title} - Goo Goo Bear`
  const storyUrl = `https://googoobear.com/stories/${slug}`
  const previewImage = story.chapters[0]?.image || story.image

  return {
    title: storyTitle,
    description: story.description,
    openGraph: {
      title: storyTitle,
      description: story.description,
      url: storyUrl,
      siteName: 'Goo Goo Bear',
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: story.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: storyTitle,
      description: story.description,
      images: [previewImage],
      creator: '@googoobear',
    },
  }
}

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

