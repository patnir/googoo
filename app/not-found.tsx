import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdf8f0] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <Image
          src="/goo-goo-bear.png"
          alt="Goo Goo Bear looking lost"
          width={200}
          height={200}
          className="mx-auto mb-6 rounded-2xl"
        />
        <h1 className="text-3xl font-bold text-amber-900 font-serif mb-3">
          Oh no, Goo Goo got lost!
        </h1>
        <p className="text-lg text-amber-700 mb-8 font-serif">
          This page wandered off into the forest. Let's head back to somewhere safe.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="py-3 px-6 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/stories"
            className="py-3 px-6 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold transition-colors"
          >
            Read Stories
          </Link>
        </div>
      </div>
    </div>
  )
}
