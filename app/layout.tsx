import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import ScrollHandler from '@/components/ScrollHandler'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://deepbioltd.com'),
  title: 'DeepBio Limited - Leading Bioinformatics and AI Research in Bangladesh',
  description: 'DeepBio Limited is a premier bioinformatics and AI startup based in Bangladesh, specializing in genomic surveillance, clinical diagnostics, and computational biology research.',
  keywords: ['Bioinformatics Bangladesh', 'AI Healthcare', 'Genomics Research', 'DeepBio Limited', 'Clinical AI', 'South Asia Life Science'],
  authors: [{ name: 'DeepBio Limited' }],
  creator: 'DeepBio Limited',
  publisher: 'DeepBio Limited',
  robots: 'index, follow',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepbioltd.com',
    siteName: 'DeepBio Limited',
    title: 'DeepBio Limited | Leading Bioinformatics & AI Research in Bangladesh',
    description: 'Transform life science data into impactful solutions. Premier bioinformatics and AI research hub specializing in genomic surveillance, clinical diagnostics, and computational biology in Bangladesh.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DeepBio Limited - Data-Driven Life Science Research',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@deepbioltd',
    creator: '@deepbioltd',
    title: 'DeepBio Limited | Leading Bioinformatics & AI Research in Bangladesh',
    description: 'Transform life science data into impactful solutions. Premier bioinformatics and AI research hub specializing in genomic surveillance, clinical diagnostics, and computational biology.',
    images: ['/og-image.png'],
  },

  alternates: {
    canonical: 'https://deepbioltd.com',
  },

  other: {
    'theme-color': '#205E92',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
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
              "description": "Leading bioinformatics and AI research hub based in Dhaka, Bangladesh.",
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
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <div className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900">
          <ScrollHandler />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
