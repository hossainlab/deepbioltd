import { Metadata } from 'next';
import { CaseStudiesPage } from '@/components/CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Case Studies | DeepBio Limited',
  description: 'Explore our comprehensive computational biology workflows and real-world applications of our AI-driven laboratory assistant.',
  openGraph: {
    title: 'Case Studies | DeepBio Limited',
    description: 'Explore our comprehensive computational biology workflows and real-world applications of our AI-driven laboratory assistant.',
    images: [
      {
        url: '/case_studies/img/deseq2_qc_volcano_plot.png',
        width: 1200,
        height: 630,
        alt: 'DeepBio Case Studies - DESeq2 Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | DeepBio Limited',
    description: 'Explore our comprehensive computational biology workflows and real-world applications of our AI-driven laboratory assistant.',
    images: ['/case_studies/img/deseq2_qc_volcano_plot.png'],
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
