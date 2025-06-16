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
                <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">Meet Goo Goo and Carolyn 🐻</h2>

                <p className="text-lg text-amber-800 leading-relaxed mb-6">
                  Come along with Goo Goo and Carolyn as they explore forests, meadows, and their own backyard.
                  Their simple adventures show how everyday moments can be full of wonder.
                </p>

                <p className="text-base text-amber-700 leading-relaxed mb-8">
                  These stories share quiet moments between a young child and her beloved bear, where imagination
                  leads the way and friendship makes everything better. Join them as they discover little bits of
                  magic in their daily adventures.
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
                {/* Goo Goo's Image */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-amber-300 transform rotate-2">
                  <Image
                    src="/goo-goo-bear.png"
                    alt="Goo Goo - A friendly bear"
                    width={350}
                    height={400}
                    className="rounded-2xl"
                  />
                </div>
                {/* Carolyn's Image */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-amber-300 transform -rotate-2 mb-4">
                  <Image
                    src="/carolyn.png"
                    alt="Carolyn - Goo Goo's best friend"
                    width={350}
                    height={400}
                    className="rounded-2xl"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🌟</div>
                <div className="absolute -bottom-2 -left-4 text-3xl animate-pulse">🌸</div>
                <div className="absolute top-1/2 right-0 text-3xl animate-pulse">💫</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          {/* <div className="text-center mt-16">
            <div className="bg-white/50 rounded-2xl p-6 inline-block">
              <p className="text-amber-700 font-medium">
                Stories for sharing at bedtime, quiet time, or anytime
              </p>
            </div>
          </div> */}
        </main>
      </div>
    </div>
  )
}
