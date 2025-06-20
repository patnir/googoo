import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-3 font-serif">Goo Goo Bear</h1>
          <div className="w-16 md:w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </header>

        {/* Hero Section - Images First for Mobile */}
        <main className="max-w-4xl mx-auto">
          {/* Character Images - Prominent at top */}
          <div className="flex justify-center mb-8">
            <div className="relative max-w-2xl mx-auto">
              {/* Combined character image layout for mobile */}
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                {/* Goo Goo */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-3 border-amber-300 transform rotate-1">
                  <Image
                    src="/goo-goo-bear.png"
                    alt="Goo Goo - A friendly bear"
                    width={400}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                {/* Carolyn */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-3 border-amber-300 transform -rotate-1">
                  <Image
                    src="/carolyn.png"
                    alt="Carolyn - Goo Goo's best friend"
                    width={400}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 text-3xl animate-bounce">🌟</div>
              <div className="absolute -bottom-2 -left-3 text-3xl animate-pulse">🌸</div>
            </div>
          </div>

          {/* Main Title and CTA */}
          <div className="text-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-amber-200 mx-auto max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 font-serif">
                Meet Goo Goo and Carolyn 🐻
              </h2>

              <p className="text-base md:text-lg text-amber-800 leading-relaxed mb-6">
                Join their magical adventures in forests, meadows, and everyday moments full of wonder!
              </p>

              <Link href="/stories">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
                >
                  📚 Read Stories
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

