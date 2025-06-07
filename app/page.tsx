import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-4 font-serif">Goo Goo Bear</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-amber-200">
                <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">Welcome to Goo Goo's World! 🐻</h2>

                <p className="text-lg text-amber-800 leading-relaxed mb-6">
                  Join our lovable bear friend on gentle adventures through enchanted forests, cozy meadows, and magical
                  places where friendship and kindness always win the day.
                </p>

                <p className="text-base text-amber-700 leading-relaxed mb-8">
                  Each story is crafted with care to spark imagination, teach valuable lessons, and create precious
                  bedtime moments for families to share together.
                </p>

                <Link href="/stories">
                  <Button
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    📚 Read Stories
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-amber-300 transform rotate-2">
                  <Image
                    src="/placeholder.svg?height=400&width=350"
                    alt="Goo Goo - A friendly brown bear with a warm smile, sitting in a meadow surrounded by colorful flowers"
                    width={350}
                    height={400}
                    className="rounded-2xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🌟</div>
                <div className="absolute -bottom-2 -left-4 text-3xl animate-pulse">🌸</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-16">
            <div className="bg-white/50 rounded-2xl p-6 inline-block">
              <p className="text-amber-700 font-medium">
                Perfect for bedtime stories, quiet time, and family reading moments
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
