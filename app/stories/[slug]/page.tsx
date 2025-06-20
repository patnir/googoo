"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { use, useState } from "react"

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
        image: "/scene2.png",
      },
      {
        title: "Chapter 3: Yosemite Dreams",
        content:
          "In Yosemite, Goo Goo's cousin Grizzly Gary showed them the towering sequoia trees and taught them about keeping the park clean for all animals. Carolyn and Goo Goo were amazed by the beautiful waterfalls and massive granite cliffs.",
        image: "/scene3.png",
      },
      {
        title: "Chapter 4: Home Sweet Home",
        content:
          "After visiting all her cousins and learning about nature conservation, Goo Goo and Carolyn headed home with wonderful memories and new appreciation for America's wild places. They promised to visit again next summer!",
        image: "/scene4.png",
      },
    ],
  },
  "summer-overalls": {
    title: "Summer Overalls",
    chapters: [
      {
        title: "Chapter 1: A Warmer Day",
        content:
          "The flowers were blooming and the air felt different. Winter was over. Goo Goo slipped on her mint green sweater, like she always did, and headed outside to play.",
        image: "/scene18.png",
      },
      {
        title: "Chapter 2: Too Hot",
        content:
          "The sun was bright. The birds were singing. But Goo Goo was too warm. Her sweater felt heavy in the heat. She sat under a tree and fanned herself with a big leaf.",
        image: "/scene19.png",
      },
      {
        title: "Chapter 3: A New Idea",
        content:
          "Carolyn watched Goo Goo resting in the shade. She went inside and opened her sewing basket. She found soft, red and white checkered fabric. It gave her an idea.",
        image: "/scene20.png",
      },
      {
        title: "Chapter 4: Sewing Time",
        content:
          "Carolyn snipped and stitched. Rosie the rabbit brought string. The older girls minded Goo Goo. Oliver the owl flapped gently to keep her cool. Piece by piece, something new began to take shape.",
        image: "/scene21.png",
      },
      {
        title: "Chapter 5: A Perfect Fit",
        content:
          "When the overalls were ready, Goo Goo tried them on. They were light, breezy, and just right for summer. She twirled in the sun and smiled. The sweater could wait for fall.",
        image: "/scene22.png",
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
        image: "/scene9.png",
      },
      {
        title: "Chapter 2: Meeting the Bees",
        content:
          "Following her nose, Goo Goo discovered a beautiful beehive nestled in an old oak tree. The busy bees were working hard, and their leader, Queen Buzzy, welcomed her with a warm smile.",
        image: "/scene10.png",
      },
      {
        title: "Chapter 3: Learning to Help",
        content:
          "Queen Buzzy taught Goo Goo how to help gather nectar from the flowers. Together, they worked as a team, and Goo Goo learned that the sweetest honey comes from friendship and cooperation.",
        image: "/scene11.png",
      },
      {
        title: "Chapter 4: The Sweet Reward",
        content:
          "At the end of the day, Queen Buzzy shared a special jar of honey with Goo Goo. As she tasted the golden sweetness, she realized that sharing adventures with friends made everything even more delicious.",
        image: "/scene12.png",
      },
    ],
  },
  "seattle-catapult-adventure": {
    title: "Goo Goo's Trip to Seattle",
    chapters: [
      {
        title: "Chapter 1: Missing Carolyn",
        content:
          "Carolyn was in Seattle for the summer, and Goo Goo missed her so much. When Carolyn called to say hello and talk about the big tall Space Needle, Goo Goo wished she could be there too.",
        image: "/scene13.png",
      },
      {
        title: "Chapter 2: A Big Idea",
        content:
          "Then Goo Goo had a silly idea — what if she built a catapult to fly all the way to Seattle? Her forest friends giggled, but they all wanted to help.",
        image: "/scene14.png",
      },
      {
        title: "Chapter 3: Building the Catapult",
        content:
          "Rosie the rabbit found bendy branches, Oliver the owl drew a plan, and everyone helped tie, twist, and tug. Soon, the biggest catapult in the forest was ready!",
        image: "/scene15.png",
      },
      {
        title: "Chapter 4: Up, Up, Up!",
        content:
          "With a countdown and a BOING! Goo Goo flew through the sky! She zipped past clouds, waved at birds, and saw rivers and mountains far below.",
        image: "/scene16.png",
      },
      {
        title: "Chapter 5: Back Together",
        content:
          "At last, Goo Goo landed with a gentle bump — right on Carolyn's balcony! Carolyn laughed, Goo Goo squeaked, and they hugged and twirled with joy. Best friends, together again.",
        image: "/scene17.png",
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
        image: "/scene5.png",
      },
      {
        title: "Chapter 2: A Helping Paw",
        content:
          "Just when Goo Goo felt most scared, a friendly rabbit named Rosie hopped out from behind a mushroom. 'Don't worry,' she said with a gentle smile, 'we'll help you find your way back to Carolyn!'",
        image: "/scene6.png",
      },
      {
        title: "Chapter 3: The Forest Family",
        content:
          "Soon, Rosie introduced Goo Goo to Oliver the wise owl and Penny the playful squirrel. Together, they formed a rescue team, each using their special skills to help guide Goo Goo back to her best friend.",
        image: "/scene7.png",
      },
      {
        title: "Chapter 4: Home Sweet Home",
        content:
          "As the sun set, Goo Goo's new friends led her safely back to Carolyn, who had been searching everywhere. She learned that even when you're lost, kindness and friendship can always light the way back to where you belong.",
        image: "/scene8.png",
      },
    ],
  },
}

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
