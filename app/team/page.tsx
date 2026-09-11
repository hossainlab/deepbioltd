import { Metadata } from 'next'
import { TeamPage } from '@/components/TeamPage'

export const metadata: Metadata = {
  title: 'Team | DeepBio Limited',
  description:
    'The researchers and operations staff behind DeepBio Limited, with their roles, external affiliations and published work.',
}

export default function Team() {
  return <TeamPage />
}
