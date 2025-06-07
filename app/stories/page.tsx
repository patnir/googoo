import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const stories = [
  {
    slug: "honey-adventure",
    title: "The Great Honey Adventure",
    description: "Goo Goo discovers a magical beehive and learns about friendship with the busy bees.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "forest-friends",
    title: "New Friends in the Forest",
    description: "When Goo Goo gets lost, woodland creatures help him find his way home.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "rainy-day",
    title: "The Rainy Day Surprise",
    description: "A stormy day leads to an unexpected adventure and a beautiful rainbow.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "winter-wonder",
    title: "Winter Wonderland",
    description: "Goo Goo's first snow day brings magical discoveries and cozy moments.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "birthday-party",
    title: "The Best Birthday Party",
    description: "Goo Goo learns that the best gifts come from the heart.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "sleepy-time",
    title: "Sleepy Time Stories",
    description: "Gentle tales perfect for winding down and drifting off to dreamland.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 font-serif hover:text-purple-600 transition-colors">
              Goo Goo Stories
            </h1>
          </Link>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Choose your favorite adventure and let the magic begin! ✨
          </p>
        </header>

        {/* Stories Grid */}
        <main className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stories.map((story) => (
              <Card
                key={story.slug}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-3xl overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={`Illustration for ${story.title}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3 font-serif group-hover:text-purple-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-purple-700 text-sm leading-relaxed mb-4">{story.description}</p>

                    <Link href={`/stories/${story.slug}`}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold py-2 transition-all duration-200">
                        📖 Read Story
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/70 border-2 border-purple-300 text-purple-700 hover:bg-purple-100 rounded-full px-8 py-3 font-semibold"
              >
                🏠 Back to Home
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
