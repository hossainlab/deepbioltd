import React from 'react';
import { ActivityIcon, LightbulbIcon, UsersIcon, BinocularsIcon, PencilIcon, DocumentStackIcon } from '../components/icons/Icons.tsx';
import { ServicePageData } from '../components/services/ServicePageTemplate.tsx';

export const servicePageData: Record<string, ServicePageData> = {
  'bulk-rna-seq': {
    id: 'bulk-rna-seq',
    title: 'Bulk RNA-Seq Analysis',
    description: 'Bulk RNA sequencing (RNA-Seq) is a powerful method for measuring the average gene expression levels across a population of cells in a sample. It is widely used to compare expression profiles between different conditions, identify differentially expressed genes, and uncover the biological pathways involved in a response. Our expert analysis services help you get the most out of your RNA-Seq data.',
    heroColor: '#205E92',
    mainImage: 'https://placehold.co/600x400/F9FAFB/205E92?text=Bulk+RNA-Seq+Workflow',
    features: [
      {
        icon: React.createElement(ActivityIcon, { className: 'text-primary', size: 32 }),
        title: 'Differential Expression Analysis',
        description: 'Identification of genes that are significantly up- or down-regulated between experimental groups using robust statistical methods (e.g., DESeq2, edgeR).'
      },
      {
        icon: React.createElement(LightbulbIcon, { className: 'text-primary', size: 32 }),
        title: 'Pathway & Enrichment Analysis',
        description: 'Functional analysis (e.g., GO, KEGG) to determine which biological pathways are enriched among the differentially expressed genes.'
      },
      {
        icon: React.createElement(UsersIcon, { className: 'text-primary', size: 32 }),
        title: 'Data Visualization',
        description: 'Creation of publication-quality plots such as heatmaps, volcano plots, and PCA plots to visualize expression patterns and sample relationships.'
      }
    ],
    workflowSteps: [
      { name: 'QC & Trim' },
      { name: 'Alignment' },
      { name: 'Quantification' },
      { name: 'DE Analysis' }
    ],
    deliverables: [
      'Raw and normalized expression count tables.',
      'Lists of differentially expressed genes with statistical significance.',
      'High-resolution, publication-ready figures for visualization.',
      'A comprehensive report detailing the methods, results, and interpretation.'
    ],
    references: [
      'Our differential expression and functional analysis workflows utilize gold-standard R/Bioconductor packages.',
      '- Love, M. I., Huber, W., & Anders, S. (2014). Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2. Genome biology.',
      '- Robinson, M. D., McCarthy, D. J., & Smyth, G. K. (2010). edgeR: a Bioconductor package for differential expression analysis of digital gene expression data. Bioinformatics.'
    ]
  },

  'drug-design': {
    id: 'drug-design',
    title: 'Drug Design Service',
    description: 'Drug design involves the rational design of molecules that can interact with specific biological targets to achieve a desired therapeutic effect. It encompasses various approaches, including but not limited to structure-based drug design and ligand-based drug design. With the development of science and technology, the role of computer-aided drug design in research and development has become increasingly prominent. It utilizes powerful computing power and advanced algorithms to rapidly analyze and simulate molecular structure data.',
    heroColor: '#EF4444',
    mainImage: 'https://placehold.co/600x400/F9FAFB/EF4444?text=Drug+Design+Process',
    features: [
      {
        icon: React.createElement(BinocularsIcon, { className: 'text-primary', size: 32 }),
        title: 'Enhanced Target Specificity',
        description: 'Drug design enables creation of highly target-specific molecules. This minimizes off-target effects, thus enhancing drug safety and efficacy.'
      },
      {
        icon: React.createElement(PencilIcon, { className: 'text-primary', size: 32 }),
        title: 'Rational Optimization',
        description: 'Drug design offers a rational way to optimize candidates. Computational modeling and structure-activity studies help modify a molecule\'s chemical structure.'
      },
      {
        icon: React.createElement(DocumentStackIcon, { className: 'text-primary', size: 32 }),
        title: 'Accelerated Discovery Process',
        description: 'Advanced tech and computational tools in drug design speed up discovery. Molecular modeling also guides efficient synthesis of new molecules.'
      }
    ],
    workflowSteps: [
      { name: 'Target ID' },
      { name: 'Virtual Screening' },
      { name: 'Hit-to-Lead' },
      { name: 'Lead Optimization' },
      { name: 'Preclinical' }
    ],
    capabilities: [
      {
        title: 'By Design Methods',
        items: [
          'Structure-based Drug Design (SBDD)',
          'Ligand-based Drug Design (LBDD)',
          'De Novo Drug Design Service',
          'Fragment-based Drug Design',
          'AI-based Drug Design'
        ]
      },
      {
        title: 'By Modality',
        items: [
          'Small Molecule Drug Design',
          'Protein & Peptide Drug Design',
          'Nucleic Acid Drug Design',
          'Antibody Drug Design',
          'PROTAC Design'
        ]
      }
    ],
    references: [
      'Our CADD workflows are guided by industry best practices and cutting-edge research. A detailed list of software and methods will be included in the project report. Key literature informing our approach includes:',
      '- Kitchen, D. B., et al. (2004). Docking and scoring in virtual screening for drug discovery: methods and applications. Nature reviews Drug discovery.',
      '- Jorgensen, W. L. (2004). The many roles of computation in drug discovery. science.'
    ]
  },

  // Coming soon services
  'single-cell-rna-seq': {
    id: 'single-cell-rna-seq',
    title: 'Single-Cell RNA-Seq Analysis',
    description: 'Advanced single-cell RNA sequencing analysis to understand cellular heterogeneity and gene expression patterns at the single-cell level.',
    isComingSoon: true
  },

  'molecular-docking': {
    id: 'molecular-docking',
    title: 'Molecular Docking Services',
    description: 'Computational prediction of molecular interactions and binding affinities for drug discovery and protein-ligand studies.',
    isComingSoon: true
  },

  'genomic-analysis': {
    id: 'genomic-analysis',
    title: 'Genomic Analysis',
    description: 'Comprehensive genomic data analysis including variant calling, structural variation detection, and population genetics.',
    isComingSoon: true
  },

  'virtual-screening': {
    id: 'virtual-screening',
    title: 'Virtual Screening',
    description: 'High-throughput computational screening of chemical libraries to identify potential drug candidates.',
    isComingSoon: true
  },

  'protein-modeling': {
    id: 'protein-modeling',
    title: 'Protein Modeling',
    description: 'Three-dimensional protein structure prediction and modeling using computational methods and AI techniques.',
    isComingSoon: true
  }
};