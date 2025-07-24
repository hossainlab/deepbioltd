
import { ServiceLink } from '../types.ts';

export const serviceLinks: ServiceLink[] = [
    { 
        id: 'drug-design', 
        name: 'Drug Design & Modeling', 
        subLinks: [
            { id: 'drug-design', name: 'Overview' },
            { id: 'protein-modeling', name: 'Protein Modeling' },
            { id: 'molecular-docking', name: 'Molecular Docking' },
            { id: 'molecular-dynamics', name: 'Molecular Dynamics' },
            { id: 'virtual-screening', name: 'Virtual Screening' },
        ]
    },
    { 
        id: 'genomic-analysis', 
        name: 'Genomic & Epigenomic Analysis',
        subLinks: [
            { id: 'genomic-analysis', name: 'Overview'},
            { id: 'ngs-data-analysis', name: 'NGS Data Analysis'},
            { id: 'variant-calling', name: 'Variant Calling'},
            { id: 'cnv-analysis', name: 'CNV Analysis'},
            { id: 'gwas', name: 'GWAS'},
            { id: 'chip-seq-analysis', name: 'ChIP-seq Analysis' },
            { id: 'atac-seq-analysis', name: 'ATAC-seq Analysis' },
            { id: 'dna-methylation-analysis', name: 'DNA Methylation' },
        ]
    },
    { 
        id: 'bulk-rna-seq', 
        name: 'Bulk Transcriptomics',
        subLinks: [
            { id: 'bulk-rna-seq', name: 'Overview'},
            { id: 'dge-analysis', name: 'DGE Analysis' },
        ]
    },
    { 
        id: 'single-cell-rna-seq', 
        name: 'Single-Cell Transcriptomics',
        subLinks: [
            { id: 'single-cell-rna-seq', name: 'Overview'},
            { id: 'sc-clustering-annotation', name: 'Clustering & Annotation' },
            { id: 'sc-trajectory-analysis', name: 'Trajectory Analysis' },
        ]
    },
     { 
        id: 'ai-biomarker-discovery', 
        name: 'AI-Powered Solutions',
        subLinks: [
            { id: 'ai-biomarker-discovery', name: 'AI Biomarker Discovery'},
            { id: 'ai-drug-repurposing', name: 'AI Drug Repurposing'},
        ]
    },
    { id: 'microbiome-diversity-analysis', name: 'Microbiome Analysis' },
];