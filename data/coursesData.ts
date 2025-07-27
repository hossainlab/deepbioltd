
import { Course } from '../types.ts';

export const allCourses: Course[] = [
    // Course 1
    {
    id: 'fundamentals-of-bioinformatics',
    title: 'Fundamentals of Bioinformatics',
    description: 'An essential course introducing the key concepts, tools, and applications of bioinformatics for life scientists.',
    longDescription: 'This beginner-friendly course offers a comprehensive foundation in bioinformatics for students, researchers, and professionals in the life sciences. Participants will explore biological databases, sequence alignment, gene and protein analysis, and the use of computational tools in modern biology. The course emphasizes real-world applications and equips learners with the practical skills to analyze and interpret biological data.',
    image: 'https://placehold.co/400x250/4B0082/FFFFFF?text=Bioinformatics',
    level: 'Beginner',
    duration: '4 Weeks',
    color: '#4B0082',
    whatYouWillLearn: [
        "Understand the scope and significance of bioinformatics in modern biology.",
        "Navigate and utilize major biological databases (e.g., NCBI, Ensembl, UniProt).",
        "Perform basic sequence alignment and similarity searches using BLAST.",
        "Analyze gene and protein data using bioinformatics tools and interpret biological meaning."
    ],
    prerequisites: [
        "Basic understanding of molecular biology and genetics.",
        "No programming background required."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a bioinformatics researcher with expertise in computational biology, molecular genetics, and data-driven biomedical research. He has led numerous training programs on bioinformatics and data science for life scientists.",
        image: "https://placehold.co/100x100/4B0082/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Introduction to Bioinformatics",
            content: [
                "What is Bioinformatics?",
                "Historical Background and Milestones",
                "Applications in Genomics, Proteomics, and Medicine"
            ]
        },
        {
            title: "Module 2: Biological Databases",
            content: [
                "Types of Biological Databases",
                "Exploring NCBI, Ensembl, and UniProt",
                "FASTA Format and Sequence Retrieval"
            ]
        },
        {
            title: "Module 3: Sequence Alignment and Tools",
            content: [
                "Pairwise and Multiple Sequence Alignment",
                "BLAST and its Variants",
                "Interpreting Alignment Results"
            ]
        },
        {
            title: "Module 4: Gene and Protein Analysis",
            content: [
                "Gene Structure and Annotation",
                "Protein Structure Basics",
                "Using Online Tools for Functional Prediction"
            ]
        }
    ]
},

// Course 2
{
    id: 'big-data-cancer-bioinformatics',
    title: 'Big Data in Cancer Bioinformatics',
    description: 'A practical course on exploring and analyzing large-scale cancer datasets using bioinformatics tools and databases.',
    longDescription: 'This course introduces learners to the use of big data in cancer research, focusing on public datasets such as TCGA, GTEx, and cBioPortal. Designed for students and researchers in the life sciences, this course provides hands-on experience in accessing, analyzing, and visualizing high-throughput genomic and transcriptomic data to gain insights into cancer biology. Participants will learn how to integrate multi-omics data, identify biomarkers, and interpret results in a clinical research context.',
    image: 'https://placehold.co/400x250/800000/FFFFFF?text=Cancer+Bioinformatics',
    level: 'Intermediate',
    duration: '6 Weeks',
    color: '#800000',
    whatYouWillLearn: [
        "Understand key data sources and repositories in cancer bioinformatics.",
        "Access and analyze datasets from TCGA, GTEx, and cBioPortal.",
        "Use R and Python tools to visualize and interpret multi-omics cancer data.",
        "Identify potential biomarkers and therapeutic targets through integrative analysis."
    ],
    prerequisites: [
        "Basic knowledge of bioinformatics and molecular biology.",
        "Familiarity with R or Python is recommended."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a cancer bioinformatics researcher with expertise in multi-omics analysis, biomarker discovery, and machine learning in oncology. He has led several large-scale projects on cancer genomics and public health informatics.",
        image: "https://placehold.co/100x100/800000/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Introduction to Cancer Bioinformatics",
            content: [
                "Overview of Cancer Genomics",
                "Big Data in Oncology Research",
                "Ethical and Clinical Relevance"
            ]
        },
        {
            title: "Module 2: Cancer Data Portals and Repositories",
            content: [
                "TCGA and GTEx Overview",
                "cBioPortal and ICGC",
                "Data Formats and Downloading Data"
            ]
        },
        {
            title: "Module 3: Transcriptomic and Genomic Data Analysis",
            content: [
                "Gene Expression Analysis from TCGA",
                "Mutation and CNV Analysis",
                "Introduction to OncoPrints and Survival Analysis"
            ]
        },
        {
            title: "Module 4: Multi-Omics Integration and Visualization",
            content: [
                "Combining Expression, Methylation, and Mutation Data",
                "Using R (e.g., TCGAbiolinks) and Python (e.g., cBioPortal API)",
                "Heatmaps, Volcano Plots, and Pathway Enrichment"
            ]
        },
        {
            title: "Module 5: Biomarker Discovery and Clinical Interpretation",
            content: [
                "Biomarker Identification Strategies",
                "Drug-Gene Interaction Databases",
                "Translating Genomic Findings into Clinical Applications"
            ]
        },
        {
            title: "Module 6: Capstone Project",
            content: [
                "Choose a Cancer Type of Interest",
                "Formulate a Research Question",
                "Perform End-to-End Analysis and Present Findings"
            ]
        }
    ]
},
// Course 3
{
    id: 'bulk-rna-seq-analysis',
    title: 'Bulk RNA-Seq Analysis',
    description: 'A hands-on course for analyzing differential gene expression using bulk RNA sequencing data.',
    longDescription: 'This course is designed to teach biologists, bioinformaticians, and health researchers the complete workflow of bulk RNA-seq data analysis. Learners will gain practical experience in quality control, alignment, quantification, differential expression analysis, and functional annotation using R and popular RNA-seq packages. The course includes real-world examples from human diseases such as cancer and neurological disorders, preparing students to perform publication-ready transcriptomics research.',
    image: 'https://placehold.co/400x250/2E8B57/FFFFFF?text=Bulk+RNA-Seq',
    level: 'Intermediate',
    duration: '5 Weeks',
    color: '#2E8B57',
    whatYouWillLearn: [
        "Understand the complete RNA-seq analysis pipeline from raw data to results.",
        "Perform quality control, alignment, and quantification of RNA-seq reads.",
        "Conduct differential gene expression analysis using DESeq2 and edgeR.",
        "Interpret and visualize results with functional enrichment and pathway analysis."
    ],
    prerequisites: [
        "Basic understanding of molecular biology and gene expression.",
        "Familiarity with R and command line is recommended."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a bioinformatics scientist specializing in transcriptomics, cancer biology, and gene expression analysis. He has trained hundreds of students and researchers in RNA-seq data analysis workflows.",
        image: "https://placehold.co/100x100/2E8B57/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Introduction to RNA-Seq",
            content: [
                "What is RNA-Seq?",
                "Study Design and Experimental Considerations",
                "Overview of the RNA-Seq Workflow"
            ]
        },
        {
            title: "Module 2: Preprocessing and Quality Control",
            content: [
                "Downloading FASTQ Data from GEO/SRA",
                "Quality Control using FastQC",
                "Read Trimming and Filtering"
            ]
        },
        {
            title: "Module 3: Read Alignment and Quantification",
            content: [
                "Reference Genome and Annotation Files",
                "Alignment with STAR and HISAT2",
                "Counting Reads with featureCounts or HTSeq"
            ]
        },
        {
            title: "Module 4: Differential Expression Analysis",
            content: [
                "Introduction to DESeq2 and edgeR",
                "Filtering, Normalization, and Dispersion Estimation",
                "Visualizations: MA Plots, Volcano Plots, Heatmaps"
            ]
        },
        {
            title: "Module 5: Functional Analysis and Interpretation",
            content: [
                "Gene Ontology and KEGG Pathway Analysis",
                "ClusterProfiler and enrichR in R",
                "Preparing Results for Publication"
            ]
        }
    ]
},
// Course 4
{
    id: 'single-cell-rna-seq-analysis',
    title: 'Single Cell RNA-Seq Analysis',
    description: 'A comprehensive course on analyzing single-cell transcriptomics data for biological discovery.',
    longDescription: 'This course introduces learners to the principles and practice of single-cell RNA sequencing (scRNA-seq) analysis. It is designed for biologists, bioinformaticians, and health researchers aiming to explore cellular heterogeneity, identify cell types, and uncover regulatory mechanisms at single-cell resolution. Through hands-on tutorials in Python using Scanpy and R using Seurat, participants will learn the full scRNA-seq pipeline from raw data processing to clustering, visualization, and interpretation of results.',
    image: 'https://placehold.co/400x250/4682B4/FFFFFF?text=scRNA-Seq',
    level: 'Intermediate to Advanced',
    duration: '6 Weeks',
    color: '#4682B4',
    whatYouWillLearn: [
        "Understand the unique challenges and advantages of single-cell RNA-seq data.",
        "Perform quality control, normalization, and dimensionality reduction.",
        "Identify cell clusters and annotate cell types using marker genes.",
        "Visualize single-cell data using t-SNE, UMAP, and dot plots.",
        "Conduct trajectory inference and differential expression between cell populations."
    ],
    prerequisites: [
        "Basic knowledge of RNA-seq and gene expression analysis.",
        "Familiarity with R or Python (preferably both) is recommended."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a computational biologist specializing in single-cell omics and cancer biology. He leads research on intratumoral heterogeneity using scRNA-seq, and has mentored students in hands-on single-cell analysis with Seurat and Scanpy.",
        image: "https://placehold.co/100x100/4682B4/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Introduction to Single-Cell Transcriptomics",
            content: [
                "What is scRNA-seq?",
                "Technologies: 10x Genomics, Smart-seq2, Drop-seq",
                "Experimental Design and Biological Questions"
            ]
        },
        {
            title: "Module 2: Preprocessing and Quality Control",
            content: [
                "Processing 10x Genomics Data",
                "Quality Control Metrics (n_genes, n_counts, mitochondrial content)",
                "Filtering and Normalization"
            ]
        },
        {
            title: "Module 3: Dimensionality Reduction and Clustering",
            content: [
                "Highly Variable Genes and PCA",
                "t-SNE and UMAP for Visualization",
                "Clustering Cells and Visualizing Marker Expression"
            ]
        },
        {
            title: "Module 4: Cell Type Annotation and Differential Expression",
            content: [
                "Identifying Marker Genes",
                "Manual Annotation vs Automated Methods",
                "Differential Expression Between Clusters or Conditions"
            ]
        },
        {
            title: "Module 5: Advanced Topics",
            content: [
                "Trajectory Inference (PAGA, Monocle, Slingshot)",
                "Batch Correction (Harmony, Scanorama)",
                "Integration of Multiple scRNA-seq Datasets"
            ]
        },
        {
            title: "Module 6: Capstone Project",
            content: [
                "Choose a Public scRNA-seq Dataset",
                "Complete End-to-End Analysis",
                "Prepare Results for Presentation or Publication"
            ]
        }
    ]
},
// Course 5
{
    id: 'molecular-modelling-colab',
    title: 'Molecular Modelling and Simulation on Google Colab',
    description: 'A practical course to perform molecular modelling and simulations using free, cloud-based tools.',
    longDescription: 'This course is designed for biology, chemistry, and bioinformatics students interested in molecular dynamics and structure-based drug discovery. Using Google Colab and open-source tools like YASARA, PyMOL, and GROMACS (via web APIs or Python wrappers), learners will gain hands-on experience in molecular visualization, energy minimization, docking, and dynamics simulation without the need for local high-performance computing. The course emphasizes reproducibility, accessibility, and automation in computational molecular science.',
    image: 'https://placehold.co/400x250/9932CC/FFFFFF?text=Molecular+Modelling',
    level: 'Intermediate',
    duration: '5 Weeks',
    color: '#9932CC',
    whatYouWillLearn: [
        "Understand the principles of molecular modelling and simulation.",
        "Visualize molecular structures and prepare systems for simulation.",
        "Perform energy minimization, molecular docking, and molecular dynamics simulations.",
        "Use Google Colab to run reproducible and scalable simulations for free.",
        "Interpret simulation results with plots and trajectory analysis."
    ],
    prerequisites: [
        "Basic knowledge of structural biology, proteins, and small molecules.",
        "Some familiarity with Python and Google Colab is recommended."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a computational biology researcher with experience in protein-ligand modelling, drug discovery, and simulation workflows on cloud platforms. He focuses on accessible, reproducible research tools for resource-limited settings.",
        image: "https://placehold.co/100x100/9932CC/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Introduction to Molecular Modelling",
            content: [
                "Overview of Molecular Modelling Techniques",
                "Applications in Drug Discovery and Biology",
                "Tools and Resources for Cloud-Based Modelling"
            ]
        },
        {
            title: "Module 2: Structure Preparation and Visualization",
            content: [
                "Downloading Structures from PDB",
                "Using PyMOL and Py3Dmol on Colab",
                "Protein and Ligand Preparation"
            ]
        },
        {
            title: "Module 3: Molecular Docking",
            content: [
                "Theory of Docking",
                "Docking with AutoDock Vina on Colab",
                "Scoring Functions and Binding Pose Analysis"
            ]
        },
        {
            title: "Module 4: Molecular Dynamics Simulation",
            content: [
                "Principles of Molecular Dynamics",
                "Running Simulations with YASARA on Google Colab",
                "Trajectory Visualization and RMSD Analysis"
            ]
        },
        {
            title: "Module 5: Reproducible Pipelines and Case Studies",
            content: [
                "Creating Shareable, Reproducible Colab Notebooks",
                "Case Study: Protein-Ligand Complex Modelling",
                "Tips for Publishing Simulation Results"
            ]
        }
    ]
},
// Course 6
{
    id: 'biomarker-discovery-data-analysis',
    title: 'Analysis of Biomedical Data for Biomarker Discovery',
    description: 'A practical course on analyzing biomedical datasets to identify diagnostic and prognostic biomarkers.',
    longDescription: 'This course is designed for life science students and researchers interested in discovering biomarkers from biomedical data. Participants will learn how to analyze transcriptomic, proteomic, and clinical datasets using statistical and machine learning approaches. The course emphasizes practical workflows, public data sources (such as GEO, TCGA, and CPTAC), and reproducible research methods. Case studies in cancer, infectious diseases, and neurological disorders will be used to illustrate real-world applications of biomarker discovery.',
    image: 'https://placehold.co/400x250/B22222/FFFFFF?text=Biomarker+Discovery',
    level: 'Intermediate to Advanced',
    duration: '6 Weeks',
    color: '#B22222',
    whatYouWillLearn: [
        "Understand the principles of biomarker discovery and validation.",
        "Access and preprocess biomedical datasets from public repositories.",
        "Apply statistical tests and machine learning for biomarker identification.",
        "Evaluate biomarker performance using ROC curves, AUC, and survival analysis.",
        "Build reproducible biomarker pipelines using R and Python."
    ],
    prerequisites: [
        "Basic understanding of molecular biology and statistics.",
        "Familiarity with R or Python is required."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a computational biologist with experience in multi-omics data analysis, machine learning, and biomarker discovery in cancer and infectious diseases. He has trained researchers across the globe in data-driven health science.",
        image: "https://placehold.co/100x100/B22222/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Introduction to Biomarker Discovery",
            content: [
                "Types of Biomarkers: Diagnostic, Prognostic, Predictive",
                "Overview of Omics Technologies and Data Types",
                "Study Design and Ethical Considerations"
            ]
        },
        {
            title: "Module 2: Data Sources and Preprocessing",
            content: [
                "Accessing Public Data: GEO, TCGA, CPTAC, ArrayExpress",
                "Clinical Metadata Integration",
                "Normalization and Batch Correction"
            ]
        },
        {
            title: "Module 3: Statistical Analysis for Biomarkers",
            content: [
                "Differential Expression Analysis",
                "Survival Analysis (Kaplan-Meier, Cox Regression)",
                "Statistical Significance vs Biological Relevance"
            ]
        },
        {
            title: "Module 4: Machine Learning for Biomarker Discovery",
            content: [
                "Feature Selection Techniques",
                "Building Classifiers (SVM, Random Forest, Logistic Regression)",
                "Cross-Validation and Overfitting"
            ]
        },
        {
            title: "Module 5: Biomarker Evaluation and Validation",
            content: [
                "ROC Curves, AUC, Sensitivity/Specificity",
                "External Validation Datasets",
                "Clinical Translation and Reporting Standards"
            ]
        },
        {
            title: "Module 6: Capstone Project",
            content: [
                "Choose a Disease Area and Dataset",
                "Perform an End-to-End Biomarker Analysis",
                "Present a Research Summary with Visualizations and Interpretation"
            ]
        }
    ]
},
// Course 7
{
    id: 'intro-metagenomics-data-analysis',
    title: 'Introduction to Metagenomics Data Analysis of Microbial Communities',
    description: 'An introductory course on analyzing microbiome and metagenomics data using bioinformatics tools.',
    longDescription: 'This course is designed for students, researchers, and health professionals who are interested in understanding and analyzing microbial communities through metagenomic data. Participants will learn about sequencing technologies, taxonomic and functional profiling, and the use of public microbiome datasets (e.g., from MG-RAST, Qiita, and ENA). The course includes hands-on training using QIIME2 and online platforms for 16S rRNA and shotgun metagenomics analysis, emphasizing reproducibility and biological interpretation in human and environmental microbiome studies.',
    image: 'https://placehold.co/400x250/228B22/FFFFFF?text=Metagenomics',
    level: 'Beginner to Intermediate',
    duration: '5 Weeks',
    color: '#228B22',
    whatYouWillLearn: [
        "Understand the principles and applications of metagenomics.",
        "Perform quality control and taxonomic profiling of microbial sequences.",
        "Analyze and visualize 16S rRNA and shotgun metagenomic data.",
        "Interpret microbial community composition and diversity metrics.",
        "Use QIIME2 and cloud tools for reproducible microbiome analysis."
    ],
    prerequisites: [
        "Basic understanding of microbiology or molecular biology.",
        "No prior bioinformatics experience required."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a bioinformatics scientist with research experience in microbiome data analysis, public health genomics, and metagenomics pipelines. He has trained researchers across disciplines in microbial data analytics.",
        image: "https://placehold.co/100x100/228B22/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Introduction to Metagenomics",
            content: [
                "What is Metagenomics?",
                "Microbial Communities and the Microbiome",
                "Sequencing Technologies: 16S vs Shotgun"
            ]
        },
        {
            title: "Module 2: Data Sources and Preprocessing",
            content: [
                "Public Databases: MG-RAST, Qiita, ENA",
                "Sequence Data Formats (FASTQ, FASTA)",
                "Quality Control with FastQC and Trimmomatic"
            ]
        },
        {
            title: "Module 3: Taxonomic Profiling and Community Analysis",
            content: [
                "QIIME2 Basics for 16S rRNA Analysis",
                "OTUs vs ASVs: DADA2 and Deblur",
                "Alpha and Beta Diversity Metrics"
            ]
        },
        {
            title: "Module 4: Functional and Comparative Analysis",
            content: [
                "Shotgun Metagenomics and Functional Profiling",
                "Using HUMAnN3 and MetaPhlAn",
                "Differential Abundance and Metadata Integration"
            ]
        },
        {
            title: "Module 5: Case Studies and Reporting",
            content: [
                "Human Gut Microbiome in Health and Disease",
                "Environmental Microbiome Analysis",
                "Data Visualization and Interpretation for Publication"
            ]
        }
    ]
},
// Course 8
{
    id: 'stats-ml-life-sciences',
    title: 'Statistics and Machine Learning for Life Sciences',
    description: 'A foundational course on statistical reasoning and machine learning methods applied to biological and biomedical data.',
    longDescription: 'This course equips students and researchers in the life sciences with the essential skills to apply statistical and machine learning techniques to biological data. Starting from the basics of hypothesis testing and experimental design, learners will progress to supervised and unsupervised machine learning methods. Practical sessions using R and Python will focus on real-world datasets from genomics, transcriptomics, and clinical research. Emphasis is placed on reproducible analysis and biological interpretation of results.',
    image: 'https://placehold.co/400x250/4169E1/FFFFFF?text=Stats+ML+Bio',
    level: 'Intermediate',
    duration: '6 Weeks',
    color: '#4169E1',
    whatYouWillLearn: [
        "Understand key statistical concepts such as p-values, confidence intervals, and distributions.",
        "Design experiments and analyze life sciences data using t-tests, ANOVA, and regression models.",
        "Apply machine learning methods like clustering, classification, and dimensionality reduction.",
        "Use R and Python for data analysis, visualization, and model evaluation.",
        "Interpret results in a biological and clinical context."
    ],
    prerequisites: [
        "Basic biology or biomedical background.",
        "Introductory experience with R or Python recommended, but not required."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a researcher in computational biology and health data science. He specializes in applying statistical models and machine learning to genomics, public health, and cancer research.",
        image: "https://placehold.co/100x100/4169E1/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Fundamentals of Statistics",
            content: [
                "Descriptive vs Inferential Statistics",
                "Probability Distributions (Normal, Binomial, Poisson)",
                "p-values, Confidence Intervals, and Hypothesis Testing"
            ]
        },
        {
            title: "Module 2: Statistical Tests in Biology",
            content: [
                "t-tests, ANOVA, and Chi-square Tests",
                "Correlation and Linear Regression",
                "Practical Use Cases with R/Python"
            ]
        },
        {
            title: "Module 3: Introduction to Machine Learning",
            content: [
                "What is Machine Learning?",
                "Supervised vs Unsupervised Learning",
                "Overfitting, Cross-Validation, and Model Evaluation"
            ]
        },
        {
            title: "Module 4: Supervised Learning for Biological Data",
            content: [
                "Classification with Logistic Regression, k-NN, and Random Forest",
                "Case Study: Cancer Type Prediction from Gene Expression",
                "Model Interpretation and ROC/AUC Analysis"
            ]
        },
        {
            title: "Module 5: Unsupervised Learning and Dimensionality Reduction",
            content: [
                "Clustering with k-means and Hierarchical Clustering",
                "Principal Component Analysis (PCA) and t-SNE",
                "Applications to Transcriptomics and Microbiome Data"
            ]
        },
        {
            title: "Module 6: Capstone Project",
            content: [
                "Choose a Dataset (e.g., TCGA, GEO, or Clinical)",
                "Perform Statistical and Machine Learning Analysis",
                "Prepare Visualizations and Present Findings"
            ]
        }
    ]
},
// Course 9
{
    id: 'python-life-sciences-intro',
    title: 'First Steps with Python in Life Sciences',
    description: 'A beginner-friendly course to learn Python programming through examples from biology and health research.',
    longDescription: 'This course is designed for students, researchers, and professionals in the life sciences who have no prior programming experience. It introduces the Python programming language through practical examples related to biology, genetics, and biomedical research. Learners will gain confidence in writing Python code, handling biological data, and using common libraries such as Biopython, pandas, and matplotlib. The course emphasizes hands-on coding, problem solving, and real-world biological use cases.',
    image: 'https://placehold.co/400x250/1E90FF/FFFFFF?text=Python+Life+Sci',
    level: 'Beginner',
    duration: '4 Weeks',
    color: '#1E90FF',
    whatYouWillLearn: [
        "Understand the basics of Python syntax, variables, and data types.",
        "Write simple programs to solve biological problems.",
        "Use Python libraries to work with DNA/RNA sequences and biological data.",
        "Visualize biological data using matplotlib and seaborn.",
        "Prepare for advanced bioinformatics and data science in biology."
    ],
    prerequisites: [
        "No programming experience required.",
        "Interest in biology, genetics, or biomedical data."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a computational biologist and educator focused on making programming accessible to life science students. He has trained hundreds of beginners in Python and bioinformatics workflows.",
        image: "https://placehold.co/100x100/1E90FF/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Getting Started with Python",
            content: [
                "What is Python and Why Use It in Biology?",
                "Setting up Python and Google Colab",
                "Writing Your First Python Program"
            ]
        },
        {
            title: "Module 2: Variables, Data Types, and Operators",
            content: [
                "Strings, Integers, Floats, and Booleans",
                "Biological Examples: DNA Strings, GC Content",
                "Arithmetic and Logical Operations"
            ]
        },
        {
            title: "Module 3: Control Flow and Functions",
            content: [
                "if/else Statements and Loops",
                "Writing Functions for Reuse",
                "Mini Project: DNA to RNA Converter"
            ]
        },
        {
            title: "Module 4: Working with Libraries and Biological Data",
            content: [
                "Intro to Biopython: Sequences and FASTA Files",
                "Using pandas for Biological Tables (e.g., gene expression)",
                "Plotting Data with matplotlib and seaborn"
            ]
        }
    ]
},
// Course 10
{
    id: 'r-life-sciences-intro',
    title: 'First Steps with R in Life Sciences',
    description: 'An entry-level course to learn R programming through hands-on examples in biology and biomedical data analysis.',
    longDescription: 'This beginner-friendly course introduces the R programming language to life science students and researchers with no prior coding experience. Participants will learn the basics of R, data handling, and visualization with examples from genomics, ecology, and clinical research. The course emphasizes real-life biological datasets, reproducibility, and developing confidence to explore advanced bioinformatics and statistical methods using R.',
    image: 'https://placehold.co/400x250/228B22/FFFFFF?text=R+Life+Sci',
    level: 'Beginner',
    duration: '4 Weeks',
    color: '#228B22',
    whatYouWillLearn: [
        "Understand the basics of R syntax, variables, and data types.",
        "Import and explore biological datasets (CSV, TXT, FASTA).",
        "Use data frames and tidyverse for data cleaning and transformation.",
        "Create biological data visualizations using ggplot2.",
        "Build a strong foundation for future work in bioinformatics and biostatistics."
    ],
    prerequisites: [
        "No programming experience required.",
        "Interest in life sciences, genomics, or public health data."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a computational biology educator with expertise in R-based data analysis, bioinformatics, and reproducible research in life sciences. He teaches programming and data science to biologists across all levels.",
        image: "https://placehold.co/100x100/228B22/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Getting Started with R",
            content: [
                "What is R and Why Use It in Life Sciences?",
                "Installing RStudio or Using R on Google Colab",
                "Running Your First R Script"
            ]
        },
        {
            title: "Module 2: Variables, Vectors, and Data Types",
            content: [
                "Basic Data Types: Numeric, Character, Logical",
                "Creating and Manipulating Vectors",
                "Biological Examples: DNA Strings and Expression Levels"
            ]
        },
        {
            title: "Module 3: Data Frames and the Tidyverse",
            content: [
                "Working with Data Frames in R",
                "Using dplyr for Data Cleaning and Transformation",
                "Mini Project: Gene Expression Summary Table"
            ]
        },
        {
            title: "Module 4: Data Visualization with ggplot2",
            content: [
                "Principles of Data Visualization in Biology",
                "Creating Scatterplots, Barplots, and Heatmaps",
                "Visualizing Biological Trends and Patterns"
            ]
        }
    ]
},
// Course 11
{
    id: 'multiomics-data-integration',
    title: 'Multiomics Data Analysis and Integration',
    description: 'A practical course on integrating genomics, transcriptomics, proteomics, and epigenomics data for biological insights.',
    longDescription: 'This course is designed for researchers and students interested in multiomics data analysis and integration. It covers computational methods to combine diverse omics layers—such as genomics, transcriptomics, proteomics, metabolomics, and epigenomics—to gain a systems-level understanding of biological processes and disease mechanisms. Learners will explore use cases in cancer, immunology, and microbiome research while working with tools like R (MultiAssayExperiment, mixOmics), Python, and network-based methods. Emphasis is placed on reproducibility, interpretation, and biological relevance.',
    image: 'https://placehold.co/400x250/800080/FFFFFF?text=Multiomics',
    level: 'Advanced',
    duration: '6 Weeks',
    color: '#800080',
    whatYouWillLearn: [
        "Understand the types, challenges, and benefits of multiomics data integration.",
        "Access and preprocess genomics, transcriptomics, proteomics, and epigenomics datasets.",
        "Apply integrative methods such as correlation, clustering, and multivariate analysis (e.g., PCA, PLS-DA).",
        "Use R and Python packages for cross-platform data integration and visualization.",
        "Interpret integrative results in disease research, especially cancer and immunology."
    ],
    prerequisites: [
        "Basic knowledge of individual omics (e.g., transcriptomics, proteomics).",
        "Working knowledge of R and/or Python is required."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a systems biology researcher focused on integrating multiomics data for cancer and immunological studies. He has led cross-platform omics projects and developed training programs for biomedical data integration.",
        image: "https://placehold.co/100x100/800080/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Introduction to Multiomics",
            content: [
                "What is Multiomics?",
                "Use Cases in Disease and Personalized Medicine",
                "Challenges in Data Integration"
            ]
        },
        {
            title: "Module 2: Data Sources and Preprocessing",
            content: [
                "Accessing TCGA, GTEx, CPTAC, GEO, and ENCODE",
                "Data Types: Gene Expression, Proteomics, Methylation, etc.",
                "Normalization, Batch Correction, and Quality Control"
            ]
        },
        {
            title: "Module 3: Exploratory and Correlative Analysis",
            content: [
                "Correlation Across Omics Layers",
                "Dimensionality Reduction: PCA, t-SNE, UMAP",
                "Clustering Genes, Proteins, and Samples"
            ]
        },
        {
            title: "Module 4: Integrative Models and Tools",
            content: [
                "Using mixOmics, MOFA, iClusterPlus, and MultiAssayExperiment",
                "Supervised and Unsupervised Integration Approaches",
                "Feature Selection Across Omics"
            ]
        },
        {
            title: "Module 5: Biological Interpretation and Visualization",
            content: [
                "Pathway and Network-Based Integration",
                "Visualization of Integrated Omics Signatures",
                "Case Studies in Cancer and Microbiome Research"
            ]
        },
        {
            title: "Module 6: Capstone Project",
            content: [
                "Choose a Multiomics Dataset (e.g., TCGA BRCA)",
                "Perform End-to-End Integration and Analysis",
                "Present a Report with Visualizations and Biological Insights"
            ]
        }
    ]
},
// Course 12
{
    id: 'spatial-omics-data-analysis',
    title: 'Spatial Omics Data Analysis',
    description: 'An advanced course on analyzing spatial transcriptomics and proteomics data to map cellular organization in tissues.',
    longDescription: 'This course is designed for life science researchers and computational biologists interested in understanding tissue architecture through spatial omics technologies. Covering spatial transcriptomics, spatial proteomics, and spatial multiomics platforms, the course introduces learners to key analysis steps including data preprocessing, visualization, spatial clustering, cell-type deconvolution, and integration with single-cell RNA-seq. Practical sessions using tools like Seurat, Squidpy, Giotto, and Cell2location will enable students to uncover spatially resolved biological patterns in health and disease contexts, such as cancer and neurobiology.',
    image: 'https://placehold.co/400x250/DC143C/FFFFFF?text=Spatial+Omics',
    level: 'Advanced',
    duration: '6 Weeks',
    color: '#DC143C',
    whatYouWillLearn: [
        "Understand key spatial omics technologies (e.g., 10x Visium, Nanostring CosMx, MERFISH).",
        "Preprocess and visualize spatial transcriptomics data.",
        "Perform spatial clustering, spatially variable gene detection, and neighborhood analysis.",
        "Integrate spatial data with single-cell RNA-seq for cell-type mapping.",
        "Use Python (Squidpy, Scanpy) and R (Seurat, Giotto) for spatial data analysis."
    ],
    prerequisites: [
        "Prior experience with RNA-seq or single-cell data analysis.",
        "Intermediate proficiency in R or Python is required."
    ],
    instructor: {
        name: "Md. Jubayer Hossain",
        bio: "Md. Jubayer Hossain is a computational biologist focused on single-cell and spatial omics analysis in cancer and neuroscience. He trains researchers to work with cutting-edge spatial technologies and integrate them with single-cell data.",
        image: "https://placehold.co/100x100/DC143C/FFFFFF?text=JH"
    },
    syllabus: [
        {
            title: "Module 1: Introduction to Spatial Omics",
            content: [
                "What is Spatial Omics?",
                "Overview of Technologies (10x Visium, CosMx, GeoMx, MERFISH, Slide-seq)",
                "Applications in Tumor Microenvironment, Brain, and Immune Tissues"
            ]
        },
        {
            title: "Module 2: Data Preprocessing and Visualization",
            content: [
                "Loading Spatial Transcriptomics Data in R/Python",
                "Spatial Spot Grids and Expression Matrices",
                "Image Alignment and Tissue Segmentation"
            ]
        },
        {
            title: "Module 3: Spatial Feature and Pattern Analysis",
            content: [
                "Spatially Variable Gene Detection",
                "Clustering Spots and Regions",
                "Spatial Neighborhood Enrichment Analysis"
            ]
        },
        {
            title: "Module 4: Cell-Type Mapping and Integration",
            content: [
                "Deconvolution with Cell2location, Stereoscope, RCTD",
                "Integrating Spatial Data with scRNA-seq",
                "Case Study: Tumor Immune Cell Localization"
            ]
        },
        {
            title: "Module 5: Advanced Topics and Multi-modal Spatial Data",
            content: [
                "Spatial Proteomics (CODEX, IMC)",
                "Multi-modal Integration (transcriptome + protein + morphology)",
                "Visualization with Napari, Squidpy, and Giotto Viewer"
            ]
        },
        {
            title: "Module 6: Capstone Project",
            content: [
                "Choose a Public Spatial Dataset (e.g., 10x Visium breast cancer, mouse brain)",
                "Perform a Complete Analysis Pipeline",
                "Submit Report with Biological Interpretation and Visualizations"
            ]
        }
    ]
},
// Course 13

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