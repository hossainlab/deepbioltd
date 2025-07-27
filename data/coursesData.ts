
import { Course } from '../types.ts';

export const allCourses: Course[] = [
    // Course 1
    { 
        id: 'genomics-fundamentals', 
        title: 'Genomics Fundamentals for Biologists', 
        description: 'An introductory course covering the basics of genomics, sequencing technologies, and data interpretation.',
        longDescription: 'This course provides a comprehensive introduction to the field of genomics. It is designed for biologists, clinicians, and researchers who are new to genomics and want to understand its fundamental principles and applications. We will cover DNA sequencing technologies, genome assembly, variant calling, and the interpretation of genomic data in a biological context.',
        image: 'https://placehold.co/400x250/205E92/FFFFFF?text=Genomics',
        level: 'Beginner',
        duration: '4 Weeks', 
        color: '#205E92',
        whatYouWillLearn: [
            "Understand the basic principles of genomics and DNA sequencing.",
            "Learn about different next-generation sequencing (NGS) platforms.",
            "Perform basic quality control and analysis of sequencing data.",
            "Interpret genomic variants and their potential functional impact."
        ],
        prerequisites: ["A basic understanding of molecular biology.", "No prior programming experience required."],
        instructor: {
            name: "Dr. Evelyn Reed",
            bio: "Dr. Reed is a leading expert in genomics with over 15 years of research experience in the field. She specializes in the application of NGS technologies to study genetic diseases.",
            image: "https://placehold.co/100x100/205E92/FFFFFF?text=ER"
        },
        syllabus: [
            { title: "Module 1: Introduction to Genomics", content: ["History of Genomics", "The Human Genome Project", "Basics of DNA and Genes"] },
            { title: "Module 2: Sequencing Technologies", content: ["Sanger Sequencing", "Next-Generation Sequencing (NGS)", "Third-Generation Sequencing"] },
            { title: "Module 3: Genomic Data Analysis", content: ["Data Formats (FASTQ, BAM, VCF)", "Quality Control (FastQC)", "Read Alignment"] },
            { title: "Module 4: Applications", content: ["Variant Calling and Annotation", "Introduction to GWAS", "Clinical Genomics"] }
        ]
    },
     // Course 2
    { 
        id: 'advanced-transcriptomics-analysis', 
        title: 'Advanced Transcriptomics Data Analysis', 
        description: 'Deep dive into RNA-seq data analysis, differential gene expression, and functional annotation.', 
        image: 'https://placehold.co/400x250/4DB8FF/FFFFFF?text=Transcriptomics', 
        level: 'Advanced', 
        duration: '6 Weeks', 
        color: '#4DB8FF',
        longDescription: 'This advanced course is designed for researchers who have some experience with RNA-seq and want to deepen their analytical skills. We will cover advanced topics such as complex experimental designs, batch effect correction, pathway analysis, and integration with other omics data.',
        whatYouWillLearn: [
            "Master differential gene expression analysis with DESeq2 and edgeR.",
            "Perform functional enrichment analysis (GO, KEGG).",
            "Understand and correct for batch effects in large datasets.",
            "Visualize transcriptomics data for publication."
        ],
        prerequisites: ["Experience with command-line tools.", "Basic knowledge of R programming.", "Prior experience with basic RNA-seq analysis."],
        instructor: {
            name: "Dr. John Smith",
            bio: "Dr. Smith is a computational biologist specializing in transcriptomics and systems biology. His research focuses on understanding gene regulatory networks in cancer.",
            image: "https://placehold.co/100x100/4DB8FF/FFFFFF?text=JS"
        },
        syllabus: [
            { title: "Module 1: Experimental Design", content: ["Complex Designs", "Power Analysis", "Batch Effects"] },
            { title: "Module 2: Advanced Differential Expression", content: ["Advanced DESeq2 models", "Limma-Voom", "Statistical Considerations"] },
            { title: "Module 3: Functional Analysis", content: ["Gene Set Enrichment Analysis (GSEA)", "Pathway Topology", "Network Analysis"] },
            { title: "Module 4: Data Integration", content: ["Integrating with Proteomics", "Integrating with Epigenomics", "Multi-omics Factor Analysis"] }
        ]
    },
     // Course 
    { 
        id: 'insilico-drug-design-techniques', 
        title: 'Insilico Drug Design Techniques', 
        description: 'Hands-on training in computational drug design, including molecular docking, MD simulations, and QSAR.', 
        image: 'https://placehold.co/400x250/F59E0B/FFFFFF?text=Drug+Design', 
        level: 'Advanced', 
        duration: '12 Weeks', 
        color: '#F59E0B',
        longDescription: 'A comprehensive, hands-on course covering the theoretical principles and practical applications of computer-aided drug design (CADD). Participants will learn to use industry-standard software for molecular modeling, virtual screening, and lead optimization.',
        whatYouWillLearn: [
            "Perform molecular docking to predict protein-ligand interactions.",
            "Set up and run molecular dynamics (MD) simulations.",
            "Build QSAR models to predict compound activity.",
            "Apply virtual screening techniques to identify novel hits."
        ],
        prerequisites: ["Strong background in chemistry or biochemistry.", "Familiarity with protein structure concepts.", "Basic command-line skills are recommended."],
        instructor: {
            name: "Dr. Carol Davis",
            bio: "Dr. Davis is a medicinal chemist with over 20 years of experience in drug discovery. Her expertise lies in structure-based drug design and cheminformatics.",
            image: "https://placehold.co/100x100/F59E0B/FFFFFF?text=CD"
        },
        syllabus: [
            { title: "Module 1: Introduction to CADD", content: ["Drug Discovery Pipeline", "Role of Computation", "Molecular Visualization"] },
            { title: "Module 2: Structure-Based Design", content: ["Protein Preparation", "Molecular Docking", "Scoring Functions"] },
            { title: "Module 3: Ligand-Based Design", content: ["Pharmacophore Modeling", "Quantitative Structure-Activity Relationship (QSAR)"] },
            { title: "Module 4: Advanced Topics", content: ["Molecular Dynamics Simulations", "Free Energy Calculations", "Virtual Screening Case Study"] }
        ]
    },
];