"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { storyData } from "@/lib/storyData"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { use, useState } from "react"

export default function StoryReader({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [currentChapter, setCurrentChapter] = useState(0)
  const story = storyData[slug]

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-2 border-red-200 rounded-3xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Story Not Found</h2>
            <p className="text-red-600 mb-6">This story adventure hasn't been written yet!</p>
            <Link href="/stories">
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full">Back to Stories</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const chapter = story.chapters[currentChapter]
  const isFirstChapter = currentChapter === 0
  const isLastChapter = currentChapter === story.chapters.length - 1

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header - Compact for mobile */}
        <header className="relative text-center mb-6">
          {/* Back button - top left */}
          <Link href="/stories" className="absolute left-0 top-0">
            <Button
              variant="ghost"
              className="text-green-700 hover:bg-green-100 rounded-full p-2"
            >
              <ArrowLeft className="w-8 h-8" />
            </Button>
          </Link>

          <div className="px-12">
            <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-1 font-serif">{story.title}</h1>
          </div>
        </header>

        {/* Story Content - Mobile-first design */}
        <main className="space-y-6">
          {/* Image Section - Prominent and mobile-optimized */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-2xl md:rounded-3xl shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                key={currentChapter}
                src={chapter.image || "/placeholder.svg"}
                alt={`Illustration for ${chapter.title}`}
                width={800}
                height={600}
                className="w-full h-64 sm:h-80 md:h-96 object-contain bg-gradient-to-b from-green-50 to-blue-50"
                priority={currentChapter === 0}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZjFmNWY5Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LXNpemU9IjE2cHgiPkxvYWRpbmcuLi48L3RleHQ+Cjwvc3ZnPg=="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              />
            </div>
          </div>

          {/* Story Text - Readable and well-spaced */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-4 font-serif">{chapter.title}</h2>
            <p className="text-base md:text-lg text-green-800 leading-relaxed font-medium">{chapter.content}</p>
          </div>

          {/* Chapter indicator */}
          <div className="flex justify-center py-2">
            <div className="text-green-600 text-sm font-medium">
              Chapter {currentChapter + 1} of {story.chapters.length}
            </div>
          </div>

          {/* Navigation - Mobile-optimized with better spacing */}
          <div className="pb-8">
            {/* Primary Navigation Row */}
            <div className="flex gap-3">
              {/* Previous Button */}
              <Button
                onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                disabled={isFirstChapter}
                size="lg"
                className={`flex-1 rounded-xl py-4 font-semibold text-base transition-all duration-200 ${isFirstChapter
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
                  }`}
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>

              {/* Next Button */}
              <Button
                onClick={() => setCurrentChapter(Math.min(story.chapters.length - 1, currentChapter + 1))}
                disabled={isLastChapter}
                size="lg"
                className={`flex-1 rounded-xl py-4 font-semibold text-base transition-all duration-200 ${isLastChapter
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
                  }`}
              >
                {isLastChapter ? "The End" : "Next"}
                {!isLastChapter && <ChevronRight className="w-5 h-5 ml-2" />}
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
