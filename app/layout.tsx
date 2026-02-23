import type { Metadata, Viewport } from 'next';
import { Lora, Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://googoobear.com'),
  title: 'Goo Goo Bear - Enchanting Children\'s Stories',
  description: 'Join Goo Goo and Carolyn on gentle adventures through enchanted forests, cozy meadows, and magical places where friendship and kindness always win the day.',
  generator: 'Next.js',
  applicationName: 'Goo Goo Bear',
  keywords: ['children stories', 'bedtime stories', 'kids books', 'bear stories', 'educational stories', 'girl and bear stories'],
  authors: [{ name: 'Goo Goo Bear and Carolyn' }],
  other: {
    'pinterest-rich-pin': 'true',
    'og:image:width': '350',
    'og:image:height': '400',
    'og:type': 'article',
    'og:rich_attachment': 'true',
    'pinterest': 'true'
  },
  openGraph: {
    title: 'Goo Goo Bear - Enchanting Children\'s Stories',
    description: 'Join Goo Goo and Carolyn on gentle adventures through enchanted forests, cozy meadows, and magical places where friendship and kindness always win the day.',
    url: 'https://googoobear.com',
    siteName: 'Goo Goo Bear',
    images: [
      {
        url: '/carolyn-goo-goo.png',
        width: 350,
        height: 400,
        alt: 'Goo Goo - A friendly bear',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goo Goo Bear - Enchanting Children\'s Stories',
    description: 'Join Goo Goo and Carolyn on gentle adventures through enchanted forests, cozy meadows, and magical places where friendship and kindness always win the day.',
    images: ['/carolyn-goo-goo.png'],
    creator: '@googoobear',
  },
  icons: {
    icon: '/carolyn-goo-goo.png',
    apple: '/carolyn-goo-goo.png',
  },
}

const isUnderConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION !== "false";

function UnderConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-4">
        <header className="text-center my-8">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-2 font-serif">Goo Goo Bear</h1>
        </header>
        <main className="max-w-4xl mx-auto">
          <p className="font-serif">This page is under construction. Please check back soon!</p>
        </main>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (isUnderConstruction) {
    return (
      <html lang="en">
        <body className={`${nunito.variable} ${lora.variable}`}><UnderConstruction /></body>
      </html>
    )
  }
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${lora.variable} bg-[#fdf8f0]`}>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">{children}</div>
          <footer className="py-6 text-center">
            <p className="text-sm text-amber-400 font-serif">
              Goo Goo Bear
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
