import { Metadata } from 'next'
import { Contact } from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact | DeepBio Limited',
  description:
    'Start a bioinformatics project with DeepBio Limited. Send your data type, volume and research question for a written scope with a fixed price.',
}

export default function ContactRoute() {
  return (
    <div className="min-h-screen bg-paper pt-36 pb-24 md:pt-44 md:pb-32">
      <Contact />
    </div>
  )
}
