import { Metadata } from 'next';
import { CaseStudiesPage } from '@/components/CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Case Studies | DeepBio Limited',
  description: 'Discover how DeepBio Limited leverages bioinformatics and AI to solve complex biological challenges through our collection of success stories and use cases.',
};

export default function Page() {
  return <CaseStudiesPage />;
}
