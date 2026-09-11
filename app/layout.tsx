import type { Metadata } from 'next'
import { EB_Garamond, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import ScrollHandler from '@/components/ScrollHandler'
import { SmoothScroll } from '@/components/SmoothScroll'

// EB Garamond does everything: headings, body, nav, buttons. Real italics are
// loaded because display lines mix roman and italic within one sentence.
const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
})

// Mono is reserved for data and tabular figures — never interface chrome.
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
        url: '/opengraph-image',
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
    images: ['/opengraph-image'],
  },

  alternates: {
    canonical: 'https://deepbioltd.com',
  },

  other: {
    'theme-color': '#FAF8F2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${garamond.variable} ${mono.variable}`}>
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
      <body className="font-serif bg-marble text-ink antialiased overflow-x-hidden">
        <div className="relative min-h-screen overflow-x-hidden">
          <SmoothScroll />
          <ScrollHandler />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
