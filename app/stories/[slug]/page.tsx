"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const storyData: Record<string, any> = {
  "national-park-adventure": {
    title: "Cousins in the National Parks",
    chapters: [
      {
        title: "Chapter 1: The Big Adventure Begins",
        content:
          "Carolyn surprised Goo Goo with exciting news - they were going on a road trip to visit her bear cousins in America's national parks! Goo Goo could hardly contain her excitement as they packed their camping gear and favorite snacks.",
        image: "/scene1.png",
      },
      {
        title: "Chapter 2: Yellowstone Wonders",
        content:
          "Their first stop was Yellowstone, where Goo Goo met her cousin Bella the Black Bear. Together they watched Old Faithful erupt and learned about how the park rangers help protect the wildlife. Carolyn took lots of pictures of their adventures.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Chapter 3: Yosemite Dreams",
        content:
          "In Yosemite, Goo Goo's cousin Grizzly Gary showed them the towering sequoia trees and taught them about keeping the park clean for all animals. Carolyn and Goo Goo were amazed by the beautiful waterfalls and massive granite cliffs.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Chapter 4: Home Sweet Home",
        content:
          "After visiting all her cousins and learning about nature conservation, Goo Goo and Carolyn headed home with wonderful memories and new appreciation for America's wild places. They promised to visit again next summer!",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "honey-adventure": {
    title: "The Great Honey Adventure",
    chapters: [
      {
        title: "Chapter 1: The Sweet Discovery",
        content:
          "One sunny morning, Goo Goo was wandering through the meadow when she caught the most wonderful smell. It was sweet and golden, floating on the warm breeze like a magical invitation.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Chapter 2: Meeting the Bees",
        content:
          "Following her nose, Goo Goo discovered a beautiful beehive nestled in an old oak tree. The busy bees were working hard, and their leader, Queen Buzzy, welcomed her with a warm smile.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Chapter 3: Learning to Help",
        content:
          "Queen Buzzy taught Goo Goo how to help gather nectar from the flowers. Together, they worked as a team, and Goo Goo learned that the sweetest honey comes from friendship and cooperation.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Chapter 4: The Sweet Reward",
        content:
          "At the end of the day, Queen Buzzy shared a special jar of honey with Goo Goo. As she tasted the golden sweetness, she realized that sharing adventures with friends made everything even more delicious.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "forest-friends": {
    title: "New Friends in the Forest",
    chapters: [
      {
        title: "Chapter 1: Lost in the Woods",
        content:
          "Goo Goo had wandered deeper into the forest than ever before while playing hide and seek with Carolyn. The tall trees seemed to whisper secrets, but now she couldn't find her way back. Her heart began to worry.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Chapter 2: A Helping Paw",
        content:
          "Just when Goo Goo felt most scared, a friendly rabbit named Rosie hopped out from behind a mushroom. 'Don't worry,' she said with a gentle smile, 'we'll help you find your way back to Carolyn!'",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Chapter 3: The Forest Family",
        content:
          "Soon, Rosie introduced Goo Goo to Oliver the wise owl and Penny the playful squirrel. Together, they formed a rescue team, each using their special skills to help guide Goo Goo back to her best friend.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Chapter 4: Home Sweet Home",
        content:
          "As the sun set, Goo Goo's new friends led her safely back to Carolyn, who had been searching everywhere. She learned that even when you're lost, kindness and friendship can always light the way back to where you belong.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
}

export default function StoryReader({ params }: { params: { slug: string } }) {
  const [currentChapter, setCurrentChapter] = useState(0)
  const story = storyData[params.slug]

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
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2 font-serif">{story.title}</h1>
          <div className="flex items-center justify-center gap-2 text-green-600">
            <span className="text-sm font-medium">
              Chapter {currentChapter + 1} of {story.chapters.length}
            </span>
          </div>
        </header>

        {/* Story Content */}
        <main className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-3xl shadow-xl mb-8">
            <CardContent className="p-0">
              {/* Chapter Image */}
              <div className="relative">
                <Image
                  src={chapter.image || "/placeholder.svg"}
                  alt={`Illustration for ${chapter.title}`}
                  width={400}
                  height={300}
                  className="w-full h-64 md:h-80 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-t-3xl"></div>
              </div>

              {/* Chapter Content */}
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 font-serif">{chapter.title}</h2>
                <p className="text-lg text-green-800 leading-relaxed font-medium">{chapter.content}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Previous Button */}
            <Button
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
              disabled={isFirstChapter}
              variant={isFirstChapter ? "outline" : "default"}
              size="lg"
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 ${isFirstChapter
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white hover:shadow-lg"
                }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>

            {/* Back to Stories */}
            <Link href="/stories">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/70 border-2 border-green-300 text-green-700 hover:bg-green-100 rounded-full px-6 py-3 font-semibold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                All Stories
              </Button>
            </Link>

            {/* Next Button */}
            <Button
              onClick={() => setCurrentChapter(Math.min(story.chapters.length - 1, currentChapter + 1))}
              disabled={isLastChapter}
              variant={isLastChapter ? "outline" : "default"}
              size="lg"
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 ${isLastChapter
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white hover:shadow-lg"
                }`}
            >
              {isLastChapter ? "The End" : "Next"}
              {!isLastChapter && <ChevronRight className="w-5 h-5 ml-2" />}
            </Button>
          </div>

          {/* Chapter Progress */}
          <div className="mt-8 text-center">
            <div className="flex justify-center gap-2 mb-4">
              {story.chapters.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentChapter(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentChapter
                    ? "bg-green-600 scale-125"
                    : index < currentChapter
                      ? "bg-green-400"
                      : "bg-green-200"
                    }`}
                  aria-label={`Go to chapter ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
