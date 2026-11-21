import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HideOnHome } from '@/components/HideOnHome'
import ScrollHandler from '@/components/ScrollHandler'

// One family for the whole interface. Inter is a neutral, highly legible
// grotesque built for screens, so long reading lists stay clean at small sizes.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Mono is reserved for numbers, units and axis labels — never interface chrome.
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://deepbioltd.com'),
  title: 'DeepBio | Biological Foundation Models for Scientific Discovery',
  description: 'DeepBio is an applied research lab at the intersection of computational biology, machine learning, and life sciences.',
  keywords: ['Biological Foundation Models', 'AI for Biology', 'Computational Biology', 'Machine Learning', 'Scientific Discovery', 'DeepBio Limited'],
  authors: [{ name: 'DeepBio Limited' }],
  creator: 'DeepBio Limited',
  publisher: 'DeepBio Limited',
  robots: 'index, follow',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepbioltd.com',
    siteName: 'DeepBio Limited',
    title: 'DeepBio | Biological Foundation Models for Scientific Discovery',
    description: 'DeepBio is an applied research lab at the intersection of computational biology, machine learning, and life sciences.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'DeepBio - Biological Foundation Models for Scientific Discovery',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@deepbioltd',
    creator: '@deepbioltd',
    title: 'DeepBio | Biological Foundation Models for Scientific Discovery',
    description: 'DeepBio is an applied research lab at the intersection of computational biology, machine learning, and life sciences.',
    images: ['/opengraph-image'],
  },

  alternates: {
    canonical: 'https://deepbioltd.com',
  },

  other: {
    'theme-color': '#071A2C',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DeepBio Limited",
              "url": "https://deepbioltd.com",
              "logo": "https://deepbioltd.com/logo.png",
              "description": "Applied research lab developing and evaluating biological foundation models for scientific discovery.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhaka",
                "addressCountry": "BD"
              },
              "sameAs": [
                "https://linkedin.com/company/deepbio-limited",
                "https://twitter.com/deepbioltd"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans bg-paper text-ink antialiased overflow-x-clip">
        <div className="relative min-h-screen overflow-x-clip">
          <ScrollHandler />
          <HideOnHome><Navbar /></HideOnHome>
          <main>{children}</main>
          <HideOnHome><Footer /></HideOnHome>
        </div>
      </body>
    </html>
  )
}
