import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getStoryList } from "@/lib/storyData"
import Image from "next/image"
import Link from "next/link"

const stories = getStoryList()

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-4">
        {/* Header */}
        <header className="text-center my-8">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 font-serif hover:text-purple-600 transition-colors">
              Goo Goo Stories
            </h1>
          </Link>
        </header>

        {/* Stories Grid */}
        <main className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stories.map((story) => (
              <Card
                key={story.slug}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-3xl overflow-hidden flex flex-col"
              >
                <CardContent className="p-0 flex flex-col flex-grow">
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

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-purple-900 mb-3 font-serif group-hover:text-purple-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-purple-700 text-sm leading-relaxed mb-4 flex-grow">{story.description}</p>

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
