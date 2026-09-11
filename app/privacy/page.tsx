import { Metadata } from 'next'
import { PrivacyPage } from '@/components/legal/PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | DeepBio Limited',
  description:
    'How DeepBio Limited handles personal data on this website and research data supplied under contract.',
  robots: 'noindex, follow',
}

export default function Privacy() {
  return <PrivacyPage />
}
