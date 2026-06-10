import type { Metadata } from 'next';
import { BioHPCLabPage } from '@/components/BioHPCLabPage';

export const metadata: Metadata = {
  title: 'BioHPC Lab | DeepBio Limited',
  description: 'National Genomic Infrastructure & High-Performance Computing cluster dedicated to genomic surveillance and pathogen research in Bangladesh.',
  openGraph: {
    title: 'BioHPC Lab | National Genomic Computing Infrastructure',
    description: 'Empowering Bangladesh\'s Bioinformatics Revolution with open-access HPC resources.',
    images: ['/images/biohpc/BioHPCLab_Welcome.png'],
  },
};

export default function BioHPC() {
  return <BioHPCLabPage />;
}
