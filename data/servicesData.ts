
import React from 'react';
import { ServiceCategory } from '../types.ts';
import { CpuIcon, DnaIcon, FlaskConicalIcon, BriefcaseIcon, ShapesIcon, LayersIcon, BookTextIcon, HeartPulseIcon } from '../components/icons/Icons.tsx';

export const serviceCategories: ServiceCategory[] = [
    {
        id: 'genomics-solutions',
        title: 'Genomics & Variant Analysis',
        description: 'Explore genomic variation and its implications in health and disease with our comprehensive analysis services.',
        icon: React.createElement(DnaIcon),
        services: [
            { id: 'genomic-analysis', title: 'Genomic Analysis Service', description: 'Holistic analysis of genomic data for deep insights into disease and traits.', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Genomics' },
            { id: 'ngs-data-analysis', title: 'NGS Data Analysis', description: 'End-to-end analysis for data from all major NGS platforms, including Illumina and PacBio.', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=NGS' },
            { id: 'variant-calling', title: 'Variant Calling (SNPs, INDELs)', description: 'Accurate identification of single nucleotide polymorphisms and insertions/deletions.', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Variant+Calling' },
            { id: 'cnv-analysis', title: 'Copy Number Variation (CNV) Analysis', description: 'Detecting gains and losses of genomic regions associated with diseases.', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=CNV' },
            { id: 'gwas', title: 'Genome-Wide Association Studies (GWAS)', description: 'Identifying genetic variants associated with specific traits or diseases across populations.', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=GWAS' },
            { id: 'genome-assembly', title: 'Genome Assembly (de novo and hybrid)', description: 'Constructing complete genomes from sequencing reads, even for novel organisms.', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Assembly' },
            { id: 'snp-epistasis-analysis', title: 'SNP and Epistasis Analysis', description: 'Investigating complex gene-gene interactions to uncover hidden genetic effects.', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Epistasis' },
            { id: 'genetic-linkage-analysis', title: 'Genetic Linkage Analysis', description: 'Mapping disease genes by tracking inheritance patterns in families.', image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Linkage' },
        ]
    },
    {
        id: 'structural-biology',
        title: 'Structural & Functional Bioinformatics',
        description: 'From atomic-level simulations to large-scale screening, we fuel drug discovery and protein engineering.',
        icon: React.createElement(ShapesIcon),
        services: [
            { id: 'protein-modeling', title: 'Protein Structure Prediction & Modeling', description: 'Accurate 3D structure prediction and refinement for proteins using AlphaFold and more.', image: 'https://placehold.co/400x300/4DB8FF/FFFFFF?text=Protein' },
            { id: 'molecular-docking', title: 'Molecular Docking', description: 'Predict the binding affinity and interaction of small molecules with target proteins.', image: 'https://placehold.co/400x300/4DB8FF/FFFFFF?text=Docking' },
            { id: 'molecular-dynamics', title: 'Molecular Dynamics Simulation', description: 'Simulate the movements and interactions of molecules to understand biological processes.', image: 'https://placehold.co/400x300/4DB8FF/FFFFFF?text=MD+Sim' },
            { id: 'insilico-drug-design', title: 'Insilico Drug Design', description: 'Design novel drug candidates with improved efficacy and safety profiles computationally.', image: 'https://placehold.co/400x300/4DB8FF/FFFFFF?text=Drug+Design' },
            { id: 'virtual-screening', title: 'Virtual Screening', description: 'High-throughput computational screening of large compound libraries to find potential hits.', image: 'https://placehold.co/400x300/4DB8FF/FFFFFF?text=Screening' },
            { id: 'pathway-integration', title: 'Gene–Protein–Pathway Integration', description: 'Connect genomic and proteomic data with biological pathways for a systems-level view.', image: 'https://placehold.co/400x300/4DB8FF/FFFFFF?text=Integration' },
        ]
    },
    {
        id: 'bulk-transcriptomics',
        title: 'Bulk Transcriptomics',
        description: 'Uncover molecular signatures, biomarkers, and cellular mechanisms from population-level RNA data.',
        icon: React.createElement(LayersIcon),
        services: [
            { id: 'dge-analysis', title: 'Differential Gene Expression (DGE) Analysis', description: 'Identify genes that are up- or down-regulated between experimental conditions.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=DGE' },
            { id: 'transcriptome-assembly', title: 'Transcriptome Assembly', description: 'Reconstruct full-length transcripts from RNA-seq data, with or without a reference.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=Transcriptome' },
            { id: 'functional-characterization', title: 'Functional Characterization (GO, KEGG)', description: 'Determine the biological functions and pathways associated with your gene lists.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=Functional' },
            { id: 'pathway-enrichment-analysis', title: 'Pathway Analysis & Enrichment Studies', description: 'Discover which biological pathways are significantly impacted in your experiment.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=Pathway' },
            { id: 'mirna-profiling', title: 'MicroRNA Expression Profiling', description: 'Analyze the expression of small non-coding RNAs that regulate gene expression.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=miRNA' },
            { id: 'ncrna-function', title: 'Non-coding RNA Function Elucidation', description: 'Investigate the roles of lncRNAs, circRNAs, and other non-coding transcripts.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=lncRNA' },
        ]
    },
    {
        id: 'single-cell-transcriptomics',
        title: 'Single-Cell Transcriptomics',
        description: 'Resolve cellular heterogeneity and uncover rare cell populations with high-resolution single-cell analytics.',
        icon: React.createElement(BookTextIcon),
        services: [
            { id: 'single-cell-rna-seq', title: 'Single-Cell RNA-Seq Service', description: 'Comprehensive scRNA-Seq data analysis from QC to advanced interpretation.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=scRNA-Seq' },
            { id: 'sc-clustering-annotation', title: 'Single-cell Clustering & Cell Type Annotation', description: 'Identify distinct cell populations and annotate them based on marker gene expression.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=Clustering' },
            { id: 'sc-dge-analysis', title: 'Differential Expression in Single Cells', description: 'Find genes that are differentially expressed between conditions within specific cell types.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=scDGE' },
            { id: 'sc-trajectory-analysis', title: 'Lineage Tracing and Pseudotime Analysis', description: 'Model dynamic biological processes like cell differentiation and development.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=Trajectory' },
            { id: 'sc-cell-communication', title: 'Cell–Cell Communication Mapping', description: 'Infer signaling networks and interactions between different cell types in a tissue.', image: 'https://placehold.co/400x300/205E92/FFFFFF?text=Communication' },
        ]
    },
    {
        id: 'epigenomics',
        title: 'Epigenomics & Regulatory Genomics',
        description: 'Study the mechanisms of gene regulation through chromatin structure and epigenetic modifications.',
        icon: React.createElement(FlaskConicalIcon),
        services: [
            { id: 'dna-methylation-analysis', title: 'DNA Methylation Analysis (WGBS/RRBS)', description: 'Analyze genome-wide DNA methylation patterns to understand epigenetic control.', image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=Methylation' },
            { id: 'atac-seq-analysis', title: 'Chromatin Accessibility Analysis (ATAC-seq)', description: 'Identify regions of open chromatin to map active regulatory elements in the genome.', image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=ATAC-seq' },
            { id: 'chip-seq-analysis', title: 'Histone Modification Studies (ChIP-seq)', description: 'Map the binding sites of transcription factors and locations of histone modifications.', image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=ChIP-seq' },
            { id: 'epigenomics-integration', title: 'Integrative Epigenomic Analysis', description: 'Combine methylation, chromatin, and expression data for a complete regulatory picture.', image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=Epi-Integration' },
        ]
    },
    {
        id: 'microbiome-metagenomics',
        title: 'Microbiome & Metagenomics',
        description: 'Profile microbial communities to understand their composition, function, and impact on host health.',
        icon: React.createElement(HeartPulseIcon),
        services: [
            { id: 'microbiome-diversity-analysis', title: 'Microbiome Diversity Analysis (16S/Shotgun)', description: 'Characterize the taxonomic composition and diversity of microbial communities.', image: 'https://placehold.co/400x300/EF4444/FFFFFF?text=Microbiome' },
            { id: 'metagenomics-functional-annotation', title: 'Functional Annotation in Metagenomics', description: 'Determine the functional potential of a microbial community by analyzing its collective genes.', image: 'https://placehold.co/400x300/EF4444/FFFFFF?text=Meta-Functions' },
            { id: 'pathogen-detection', title: 'Pathogen Detection in Metagenomic Samples', description: 'Identify and quantify pathogenic microorganisms within complex samples.', image: 'https://placehold.co/400x300/EF4444/FFFFFF?text=Pathogen' },
            { id: 'microbiome-host-interaction', title: 'Microbiome–Host Interaction Studies', description: 'Investigate the complex interplay between microbial communities and their hosts.', image: 'https://placehold.co/400x300/EF4444/FFFFFF?text=Host-Microbe' },
        ]
    },
    {
        id: 'ai-solutions',
        title: 'AI-Powered Bioinformatics',
        description: 'Accelerate discovery with machine learning and deep learning services for complex biological data.',
        icon: React.createElement(CpuIcon),
        services: [
            { id: 'ai-gene-expression', title: 'AI for Gene Expression Analysis', description: 'Uncover complex patterns in gene expression data using advanced machine learning models.', image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=AI+Gene' },
            { id: 'ai-cell-type-annotation', title: 'Deep Learning for Cell Type Annotation', description: 'Accurate, automated cell type identification in scRNA-seq using CNNs and Transfer Learning.', image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=AI+Cell' },
            { id: 'ai-biomarker-discovery', title: 'AI-Driven Biomarker Discovery', description: 'Employ feature selection and interpretability (SHAP) to find meaningful clinical biomarkers.', image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=AI+Biomarker' },
            { id: 'ai-survival-modeling', title: 'AI for Survival Modeling & Risk Stratification', description: 'Leverage DeepSurv and Random Survival Forests for accurate patient outcome prediction.', image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=AI+Survival' },
            { id: 'ai-multi-omics-integration', title: 'AI for Multi-Omics Integration', description: 'Build holistic biological models by integrating transcriptomics, proteomics, and genomics data.', image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=AI+Multi-Omics' },
            { id: 'ai-drug-repurposing', title: 'AI for Drug Repurposing', description: 'Use GNNs and other deep learning methods to find new therapeutic uses for existing drugs.', image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=AI+Drug+Repurpose' },
            { id: 'ai-nlp-literature-mining', title: 'NLP for Literature Mining', description: 'Extract insights and relationships from millions of scientific papers using BioBERT and SciSpacy.', image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=AI+NLP' },
        ]
    },
    {
        id: 'custom-solutions',
        title: 'Custom & Public Health Solutions',
        description: 'Bespoke solutions and services for unique research challenges and public health informatics.',
        icon: React.createElement(BriefcaseIcon),
        services: [
            { id: 'bioinformatics-services', title: 'Custom Bioinformatics Solutions', description: 'Tailored analysis and workflow development for your unique research questions.', image: 'https://placehold.co/400x300/6B7280/FFFFFF?text=Custom' },
            { id: 'biomedical-informatics', title: 'Public Health Informatics', description: 'Using data science to monitor disease, predict trends, and inform public health policy.', image: 'https://placehold.co/400x300/6B7280/FFFFFF?text=Public+Health' },
            { id: 'statistical-analysis', title: 'Statistical Analysis & Consulting', description: 'Expert statistical support for experimental design, data analysis, and result interpretation.', image: 'https://placehold.co/400x300/6B7280/FFFFFF?text=Stats' },
            { id: 'drug-development', title: 'Computational Drug Development Support', description: 'Providing computational expertise across the entire drug development lifecycle.', image: 'https://placehold.co/400x300/6B7280/FFFFFF?text=Drug+Dev' },
        ]
    }
];