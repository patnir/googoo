import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goo Goo Bear - Enchanting Children\'s Stories',
  description: 'Join Goo Goo and Carolyn on gentle adventures through enchanted forests, cozy meadows, and magical places where friendship and kindness always win the day.',
  generator: 'Next.js',
  applicationName: 'Goo Goo Bear',
  keywords: ['children stories', 'bedtime stories', 'kids books', 'bear stories', 'educational stories', 'girl and bear stories'],
  authors: [{ name: 'Goo Goo Bear and Carolyn' }],
  colorScheme: 'light',
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
        url: '/carolyn-and-goo-goo.png',
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
    images: ['/carolyn-and-goo-goo.png'],
    creator: '@googoobear',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/carolyn-and-goo-goo.png',
    apple: '/carolyn-and-goo-goo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
