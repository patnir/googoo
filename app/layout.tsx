import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goo Goo Bear - Enchanting Children\'s Stories',
  description: 'Join our lovable bear friend on gentle adventures through enchanted forests, cozy meadows, and magical places where friendship and kindness always win the day.',
  generator: 'Next.js',
  applicationName: 'Goo Goo Bear',
  keywords: ['children stories', 'bedtime stories', 'kids books', 'bear stories', 'educational stories'],
  authors: [{ name: 'Goo Goo Bear' }],
  colorScheme: 'light',
  openGraph: {
    title: 'Goo Goo Bear - Enchanting Children\'s Stories',
    description: 'Join our lovable bear friend on gentle adventures through enchanted forests, cozy meadows, and magical places where friendship and kindness always win the day.',
    url: 'https://googoobear.com',
    siteName: 'Goo Goo Bear',
    images: [
      {
        url: '/goo-goo-bear.jpg',
        width: 350,
        height: 400,
        alt: 'Goo Goo - A friendly bear',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goo Goo Bear - Enchanting Children\'s Stories',
    description: 'Join our lovable bear friend on gentle adventures through enchanted forests, cozy meadows, and magical places where friendship and kindness always win the day.',
    images: ['/goo-goo-bear.jpg'],
    creator: '@googoobear',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/goo-goo-bear.jpg',
    apple: '/goo-goo-bear.jpg',
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
