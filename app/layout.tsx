import type { Metadata } from 'next'
import { Silkscreen, VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const silkscreen = Silkscreen({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-silkscreen'
});

const vt323 = VT323({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-vt323'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pokenote.vercel.app"),
  title: 'Pokemon Emoji Combos for Instagram Notes | PokeNote',
  description: 'Copy Pokemon emoji combos that summon Pokemon in Instagram Notes. Click a Pokemon and paste the combo into your IG Note.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico'},
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Pokemon Emoji Combos for Instagram Notes | PokeNote",
    description:
      "Copy Pokemon emoji combos that summon Pokemon in Instagram Notes.",
    url: "https://pokenote.vercel.app",
    siteName: "PokeNote",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PokeNote website preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokemon Emoji Combos for Instagram Notes | PokeNote",
    description:
      "Copy Pokemon emoji combos that summon Pokemon in Instagram Notes.",
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${silkscreen.variable} ${vt323.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
