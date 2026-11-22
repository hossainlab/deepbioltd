import { Metadata } from 'next'
import { TermsPage } from '@/components/legal/TermsPage'

export const metadata: Metadata = {
  title: 'Terms of Use | DeepBio Limited',
  description:
    'Terms governing use of the DeepBio Limited website, including deliverable ownership and the absence of medical advice.',
  robots: 'noindex, follow',
}

export default function Terms() {
  return <TermsPage />
}
