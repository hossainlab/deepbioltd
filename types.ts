

import React from 'react';

export interface IconProps {
  color?: string;
  size?: number;
  className?: string;
}

export type Page = 'home' | 'about' | 'services' | 'tools' | 'workflows' | 'resources' | 'courses' | 'research' | 'team' | 'contact' | 'careers' | 'estimator';

export type ServiceId = 
    'molecular-dynamics' | 
    'molecular-docking' |
    'drug-design' |
    'protein-modeling' |
    'genomic-analysis' |
    'genomics' | 
    'transcriptomics' | 
    'cheminformatics' | 
    'multi-omics' | 
    'insilico-drug-design' | 
    'molecular-simulations' | 
    'biomedical-informatics' | 
    'ai-health-innovation' | 
    'drug-discovery' | 
    'vaccine-design' |
    'bioinformatics-services' |
    'virtual-screening' |
    'statistical-analysis' |
    'drug-development' |
    'ngs-data-analysis' |
    'bulk-rna-seq' |
    'single-cell-rna-seq' |
    'ai-gene-expression' |
    'ai-cell-type-annotation' |
    'ai-biomarker-discovery' |
    'ai-survival-modeling' |
    'ai-multi-omics-integration' |
    'ai-drug-repurposing' |
    'ai-nlp-literature-mining' |
    'variant-calling' |
    'snp-epistasis-analysis' |
    'cnv-analysis' |
    'genetic-linkage-analysis' |
    'gwas' |
    'genome-assembly' |
    'metabolic-pathway-reconstruction' |
    'pathway-integration' |
    'dge-analysis' |
    'transcriptome-assembly' |
    'gene-annotation-profiling' |
    'functional-characterization' |
    'pathway-enrichment-analysis' |
    'cfrna-analysis' |
    'mirna-profiling' |
    'ncrna-function' |
    'sc-clustering-annotation' |
    'sc-dge-analysis' |
    'sc-trajectory-analysis' |
    'sc-cell-communication' |
    'dna-methylation-analysis' |
    'atac-seq-analysis' |
    'chip-seq-analysis' |
    'epigenomics-integration' |
    'microbiome-diversity-analysis' |
    'pathogen-detection' |
    'metagenomics-functional-annotation' |
    'microbiome-host-interaction' |
    'network-construction' |
    'ppi-analysis' |
    'regulatory-network-modeling' |
    'epistasis-mapping' |
    'not-found';

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  image: string;
}

export interface ServiceCategory {
    id: string;
    title:string;
    description: string;
    icon: React.ReactElement<IconProps>;
    services: Service[];
}

export interface ServiceLink {
    id: ServiceId;
    name: string;
    subLinks?: { name: string; id: ServiceId }[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  whatYouWillLearn: string[];
  prerequisites: string[];
  instructor: {
    name: string;
    bio: string;
    image: string;
  };
  syllabus: {
    title: string;
    content: string[];
  }[];
}

export interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  preferredQualifications: string[];
  whatWeOffer: string[];
}

export interface EstimateResult {
  recommendedServices: string[];
  estimatedTimeline: string;
  estimatedCostRange: string;
  potentialRoadblocks?: string;
  assumptions?: string;
}
