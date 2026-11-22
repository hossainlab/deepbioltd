/**
 * Training courses for the minimal /training index and /training/[slug]
 * syllabus pages. Course list carried over from the former Training page
 * (backups/homepage-2026-11-15/training → components/TrainingPage.tsx).
 *
 * Every syllabus has the same sections, in this order: Overview, Course Team,
 * Learning Objectives, Syllabus, ISCB Competency, Assessment, Grading Rubric,
 * Learner Use of Generative AI, Evaluating the Course, Supplementary Resources.
 * Courses are mapped to the ISCB Competency Framework 3.0 (lib/training/iscb.ts).
 */

import type { IscbCode } from './iscb'
import { aiBiologicalDiscovery } from './ai-biological-discovery'
import { agenticAiCompBio } from './agentic-ai-comp-bio'

/** A reading, linked when it has a public URL. */
export interface Reading {
  title: string
  href?: string
}

/**
 * One week of the syllabus. Practical courses use `topics` and `lab`; seminar
 * courses use `theme`, `readings`, `objectives` and `questions`. Every field
 * after `title` is optional and renders only when set.
 */
export interface CourseWeek {
  title: string
  theme?: string
  topics?: string[]
  /** The hands-on lab or exercise for the week. */
  lab?: string
  readings?: Reading[]
  optionalReadings?: Reading[]
  /** Short note, e.g. how a choose-your-track week works. */
  note?: string
  objectives?: string[]
  questions?: string[]
  /** Assignment or exam set or due this week. */
  assignment?: string
}

export interface CourseAssessment {
  item: string
  /** Share of the final grade, in percent. Weights in a course sum to 100. */
  weight: number
  description?: string
  /** When it is due, e.g. "Week 3" or "Ongoing". */
  due?: string
}

export interface RubricRow {
  criterion: string
  /** One descriptor per rubric level, in the order of the level headings. */
  levels: string[]
}

/** A course's policy on learner use of generative AI. */
export interface AiPolicy {
  lead?: string
  groups: { heading?: string; items: string[] }[]
  closing?: string[]
}

/** How a course is evaluated; items with a label render it in bold. */
export interface CourseEvaluation {
  lead?: string
  items: { label?: string; text: string }[]
}

/**
 * One person on a course team. Give `name` exactly as in lib/team/data.ts to
 * pull that member's photo and LinkedIn; anyone else is a guest and can carry
 * their own `image` and `linkedin`. Leave `name` out for a "to be announced" slot.
 */
export interface CourseTeamMember {
  /** Role on this course, e.g. Lead instructor or Teaching assistant. */
  role: string
  name?: string
  image?: string
  linkedin?: string
}

/** Placeholder team shown until a course lists its own. */
export const placeholderTeam: CourseTeamMember[] = [
  { role: 'Lead instructor' },
  { role: 'Instructor' },
  { role: 'Teaching assistant' },
  { role: 'Teaching assistant' },
]

export interface Course {
  slug: string
  title: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Graduate seminar'
  /** Who the course is for, when the level alone does not say. */
  audience?: string
  /** Teaching format, e.g. weekly seminar hours. */
  format?: string
  /** Set text the course is built on. */
  primaryText?: { citation: string; href: string; doi?: string }
  /** Length in weeks; the syllabus has one entry per week. */
  weeks: number
  /** One-sentence lede for the index card and article subtitle. */
  summary: string
  overview: string[]
  prerequisites: string
  tools?: string[]
  /** Course team; falls back to placeholderTeam when not set. */
  team?: CourseTeamMember[]
  objectives: string[]
  syllabus: CourseWeek[]
  /** Which ISCB 3.0 competencies the course builds, and how. */
  competencies: { code: IscbCode; how: string }[]
  assessment: CourseAssessment[]
  assessmentNote?: string
  /** Overrides the shared rubric when a course needs its own criteria. */
  rubric?: RubricRow[]
  /** Level headings for a course rubric; defaults to RUBRIC_LEVELS. */
  rubricLevels?: string[]
  rubricIntro?: string
  rubricNotes?: string[]
  /** Set to false to hide the shared grade bands. */
  showGradeBands?: boolean
  /** Overrides the shared generative AI policy. */
  aiPolicy?: AiPolicy
  /** Course-specific paragraphs added after the (shared or own) AI policy. */
  aiPolicyExtra?: string[]
  /** Overrides the shared course evaluation. */
  evaluation?: CourseEvaluation
  resources: { label: string; href: string }[]
  /** Attribution for adapted material, shown under Supplementary Resources. */
  credit?: { text: string; source: { label: string; href: string }; license: { label: string; href: string } }
}

export const RUBRIC_LEVELS = ['Excellent', 'Proficient', 'Developing', 'Beginning']

/** Shared rubric for labs and the capstone project, used unless a course sets its own. */
export const defaultRubric: RubricRow[] = [
  {
    criterion: 'Scientific question',
    levels: [
      'Question is specific, biologically motivated and answerable with the data.',
      'Question is clear and answerable; motivation is brief.',
      'Question is broad or only partly answerable with the data.',
      'No clear question, or one the data cannot address.',
    ],
  },
  {
    criterion: 'Methods and correctness',
    levels: [
      'Methods suit the data, parameters are justified, and checks catch errors.',
      'Methods suit the data with minor unjustified choices.',
      'Methods run but some choices are wrong for the data.',
      'Methods are missing, wrong, or do not run.',
    ],
  },
  {
    criterion: 'Reproducibility',
    levels: [
      'Code, versions and data sources are recorded; another learner can rerun it end to end.',
      'Code and data are shared; small gaps in versions or steps.',
      'Code is shared but cannot be rerun without help.',
      'Results cannot be traced back to code or data.',
    ],
  },
  {
    criterion: 'Interpretation',
    levels: [
      'Results are read in biological context with limitations and alternative explanations.',
      'Results are read correctly in context; limitations are brief.',
      'Interpretation overreaches or misses key context.',
      'Results are restated without interpretation, or misread.',
    ],
  },
  {
    criterion: 'Communication',
    levels: [
      'Figures and text are clear, labelled and fit the audience.',
      'Figures and text are clear with minor labelling gaps.',
      'Hard to follow; figures lack labels or units.',
      'Disorganised; key results are hard to find.',
    ],
  },
]

/** Score bands applied to the weighted total. */
export const gradeBands = [
  { band: '90–100', grade: 'Distinction' },
  { band: '75–89', grade: 'Merit' },
  { band: '60–74', grade: 'Pass' },
  { band: 'Below 60', grade: 'Not yet passed. One resubmission of the capstone is allowed.' },
]

/** Generative AI policy, shared by every course. */
export const aiPolicy: AiPolicy = {
  lead:
    'Generative AI tools such as ChatGPT, Claude, Gemini and GitHub Copilot are part of how bioinformatics is done now, so learners may use them. The goal of the course is still your own understanding, and you are responsible for everything you submit.',
  groups: [
    {
      heading: 'Encouraged',
      items: [
        'Explaining an error message, a function, or a concept you then check against documentation.',
        'Drafting or refactoring code that you run, test and can explain line by line.',
        'Improving the language of text you wrote yourself.',
      ],
    },
    {
      heading: 'Not allowed',
      items: [
        'Submitting generated analysis, figures or interpretation you have not run or checked.',
        'Using AI during the end-of-course quiz or oral check, unless the instructor says otherwise.',
        'Pasting unpublished, confidential or patient-level data into a public AI service.',
      ],
    },
  ],
  closing: [
    'Add a short AI-use note to every submission: which tool, what for, and what you changed. Use that is disclosed is never penalised. Undisclosed use that leads to work you cannot explain is treated as an academic integrity issue.',
  ],
}

/** How DeepBio evaluates and improves each course, shared by every course. */
export const courseEvaluation: CourseEvaluation = {
  items: [
    { text: 'A short anonymous check-in at the midpoint asks what is working and what is not, and the instructor reports back on changes in the following session.' },
    { text: 'An end-of-course survey covers content, pacing, instruction and support, and asks learners to rate their confidence in each learning objective before and after the course.' },
    { text: 'Learner outcomes are compared against the mapped ISCB competencies to see which ones the course actually builds.' },
    { text: 'Instructors review the survey, grades and lab completion rates together, and record changes in the syllabus for the next cohort.' },
  ],
}

export const courses: Course[] = [
  // Flagship seminar, listed first.
  aiBiologicalDiscovery,
  agenticAiCompBio,
  {
    slug: 'bioinformatics-101',
    title: 'Bioinformatics 101',
    level: 'Beginner',
    weeks: 4,
    summary:
      'A first course in bioinformatics: biological databases, sequence alignment and the molecular biology behind them.',
    overview: [
      'Bioinformatics 101 is for life science students and researchers who have never analysed biological data on a computer. It starts from the central dogma and builds up to finding, aligning and interpreting sequences with public tools.',
      'Each week pairs short lectures with a guided lab on real data from NCBI, UniProt and Ensembl. By the end, learners can take a gene of interest from a database search to an annotated alignment and explain what it shows.',
    ],
    prerequisites: 'Undergraduate biology. No programming experience needed.',
    tools: ['NCBI', 'UniProt', 'Ensembl', 'BLAST', 'Clustal Omega', 'Jalview'],
    objectives: [
      'Describe how DNA, RNA and protein sequences are stored and represented in common file formats such as FASTA and GenBank.',
      'Find and retrieve genes, transcripts and proteins from NCBI, UniProt and Ensembl.',
      'Run and interpret pairwise and BLAST searches, including E-values and alignment scores.',
      'Build and inspect a multiple sequence alignment and identify conserved regions.',
      'Choose an appropriate public tool for a basic sequence question and justify the choice.',
    ],
    syllabus: [
      {
        title: 'Biology as data',
        topics: ['Central dogma recap', 'Sequence file formats: FASTA, GenBank', 'Identifiers and accessions'],
        lab: 'Retrieve one gene, its transcripts and its protein from NCBI and Ensembl.',
      },
      {
        title: 'Biological databases',
        topics: ['Primary and secondary databases', 'UniProt entries and annotation', 'Gene Ontology basics'],
        lab: 'Trace a protein’s function, domains and GO terms through UniProt.',
      },
      {
        title: 'Sequence alignment',
        topics: ['Global and local alignment', 'Scoring matrices and gaps', 'BLAST, E-values and bit scores'],
        lab: 'Identify an unknown sequence with BLAST and defend the top hit.',
      },
      {
        title: 'Multiple alignment and capstone',
        topics: ['Multiple sequence alignment', 'Conservation and motifs', 'Introduction to phylogenetic trees'],
        lab: 'Capstone: align a protein family and present its conserved regions.',
      },
    ],
    competencies: [
      { code: 'F3', how: 'Choosing and running NCBI, UniProt, Ensembl and BLAST for a defined question.' },
      { code: 'B3', how: 'Retrieving sequences and converting them between formats before analysis.' },
      { code: 'A3', how: 'Connecting alignment results to the molecular biology they describe.' },
      { code: 'K3', how: 'Presenting the capstone alignment to a non-specialist audience.' },
      { code: 'M3', how: 'Building the habit of reading tool documentation and following database updates.' },
    ],
    assessment: [
      { item: 'Weekly labs', weight: 40, description: 'Four guided labs, submitted as a short report with screenshots and answers.' },
      { item: 'Quizzes', weight: 20, description: 'Short weekly quizzes on concepts and terminology.' },
      { item: 'Capstone', weight: 30, description: 'Alignment of a protein family with a two-page write-up and a five-minute presentation.' },
      { item: 'Participation', weight: 10, description: 'Attendance and contributions in sessions and the course forum.' },
    ],
    resources: [
      { label: 'NCBI Learn', href: 'https://www.ncbi.nlm.nih.gov/learn/' },
      { label: 'EMBL-EBI Training: on-demand courses', href: 'https://www.ebi.ac.uk/training/on-demand' },
      { label: 'UniProt help and tutorials', href: 'https://www.uniprot.org/help' },
      { label: 'Ensembl training materials', href: 'https://www.ensembl.org/info/website/tutorials/index.html' },
      { label: 'Rosalind: bioinformatics problems', href: 'https://rosalind.info/problems/locations/' },
    ],
  },
  {
    slug: 'python-data-science',
    title: 'Python for Data Science in Biology',
    level: 'Intermediate',
    weeks: 6,
    summary:
      'Python, pandas, NumPy and Matplotlib for cleaning, analysing and plotting biological datasets.',
    overview: [
      'This course teaches the Python a working biologist needs to analyse their own data: reading tables, cleaning them, summarising them, testing a hypothesis and drawing a figure that holds up in a paper.',
      'Every week uses a real biological dataset, from gene expression tables to clinical metadata. Learners write their analyses as Jupyter notebooks under version control, so the final project is reproducible by anyone in the class.',
    ],
    prerequisites: 'Bioinformatics 101 or equivalent. No prior Python needed, but basic computer literacy is assumed.',
    tools: ['Python', 'Jupyter', 'pandas', 'NumPy', 'Matplotlib', 'seaborn', 'SciPy', 'Git'],
    objectives: [
      'Write readable Python using variables, data types, control flow and functions.',
      'Load, clean, reshape and merge biological tables with pandas.',
      'Apply descriptive statistics and common hypothesis tests with SciPy, and report them correctly.',
      'Produce publication-quality figures with Matplotlib and seaborn.',
      'Keep an analysis reproducible with notebooks, environments and Git.',
    ],
    syllabus: [
      { title: 'Python foundations', topics: ['Jupyter and the REPL', 'Types, lists and dictionaries', 'Control flow'], lab: 'Compute GC content and codon counts for a set of sequences.' },
      { title: 'Functions and files', topics: ['Writing functions', 'Reading and writing files', 'Parsing FASTA by hand'], lab: 'Write a small FASTA parser and test it.' },
      { title: 'pandas', topics: ['DataFrames and indexing', 'Missing values', 'Group-by and merge'], lab: 'Clean and merge a gene expression table with sample metadata.' },
      { title: 'NumPy and statistics', topics: ['Arrays and vectorisation', 'Descriptive statistics', 't-tests, non-parametric tests, multiple testing'], lab: 'Test for differences between two patient groups and correct for multiple comparisons.' },
      { title: 'Visualisation', topics: ['Matplotlib anatomy', 'seaborn for statistical plots', 'Colour, labels and accessibility'], lab: 'Rebuild a published figure from its source data.' },
      { title: 'Reproducible projects and capstone', topics: ['Virtual environments', 'Git and GitHub', 'Structuring a project'], lab: 'Capstone: a complete, version-controlled analysis of a public dataset.' },
    ],
    competencies: [
      { code: 'H3', how: 'Writing, testing and structuring Python for every analysis in the course.' },
      { code: 'D3', how: 'Choosing statistical tests and visualisations suited to the data.' },
      { code: 'B3', how: 'Cleaning, reshaping and merging raw tables before analysis.' },
      { code: 'E3', how: 'Keeping data and code organised and shareable with Git.' },
      { code: 'K3', how: 'Communicating results through clear figures and notebooks.' },
    ],
    assessment: [
      { item: 'Weekly labs', weight: 35, description: 'Six notebook exercises, auto-checked and reviewed by the instructor.' },
      { item: 'Code review', weight: 10, description: 'Reviewing a peer’s notebook against a checklist.' },
      { item: 'Capstone project', weight: 45, description: 'A reproducible analysis of a public dataset with a GitHub repository and short report.' },
      { item: 'Participation', weight: 10, description: 'Attendance and forum contributions.' },
    ],
    resources: [
      { label: 'The Python Tutorial', href: 'https://docs.python.org/3/tutorial/' },
      { label: 'pandas user guide', href: 'https://pandas.pydata.org/docs/user_guide/index.html' },
      { label: 'Matplotlib tutorials', href: 'https://matplotlib.org/stable/tutorials/index.html' },
      { label: 'The Carpentries: Plotting and Programming in Python', href: 'https://swcarpentry.github.io/python-novice-gapminder/' },
      { label: 'Biopython tutorial and cookbook', href: 'https://biopython.org/DIST/docs/tutorial/Tutorial.html' },
    ],
  },
  {
    slug: 'genomic-variant-analysis',
    title: 'Genomic Variant Analysis',
    level: 'Advanced',
    weeks: 5,
    summary:
      'From sequencing reads to interpreted variants: GATK Best Practices for WGS and WES, and clinical interpretation.',
    overview: [
      'This course follows a sample from raw reads to a short list of interpreted variants. Learners align reads, call germline variants with the GATK Best Practices workflow, filter and annotate them, and apply clinical interpretation guidelines.',
      'The work runs on a Linux server, so the course also covers the command line and workflow habits needed to run genomics pipelines reliably.',
    ],
    prerequisites: 'Bioinformatics 101 and comfort with the Linux command line.',
    tools: ['Linux shell', 'FastQC', 'BWA-MEM', 'SAMtools', 'GATK', 'bcftools', 'VEP', 'IGV'],
    objectives: [
      'Assess sequencing quality and align reads to a reference genome.',
      'Run the GATK germline short-variant workflow from BAM to filtered VCF.',
      'Annotate variants and prioritise them with population and functional evidence.',
      'Apply ACMG/AMP guidelines to classify candidate variants.',
      'Handle genomic data in line with consent, privacy and data-sharing rules.',
    ],
    syllabus: [
      { title: 'Reads and quality', topics: ['FASTQ and Phred scores', 'Quality control', 'Linux for genomics'], lab: 'Run QC on a WES sample and decide whether to trim.' },
      { title: 'Alignment', topics: ['Reference genomes and builds', 'BWA-MEM', 'BAM, duplicates and BQSR'], lab: 'Align, mark duplicates and recalibrate a sample.' },
      { title: 'Variant calling', topics: ['HaplotypeCaller and GVCFs', 'Joint genotyping', 'Hard filtering and VQSR'], lab: 'Call and filter variants for a small trio.' },
      { title: 'Annotation and prioritisation', topics: ['VCF format in depth', 'VEP annotation', 'gnomAD and ClinVar'], lab: 'Annotate the trio’s VCF and find candidate de novo variants.' },
      { title: 'Clinical interpretation and capstone', topics: ['ACMG/AMP criteria', 'Reporting', 'Ethics and data protection'], lab: 'Capstone: classify and report candidate variants for a case.' },
    ],
    competencies: [
      { code: 'A3', how: 'Working at depth in human genomics and variant biology.' },
      { code: 'F3', how: 'Running GATK, VEP and related tools to community best practice.' },
      { code: 'I3', how: 'Running pipelines on a shared Linux server and managing compute.' },
      { code: 'J3', how: 'Handling patient-derived genomic data ethically and lawfully.' },
      { code: 'C3', how: 'Turning variant calls into evidence for a diagnosis.' },
    ],
    assessment: [
      { item: 'Pipeline labs', weight: 35, description: 'Four labs submitted as scripts plus a short results note.' },
      { item: 'Interpretation exercise', weight: 15, description: 'Classify five variants with ACMG/AMP criteria and justify each call.' },
      { item: 'Capstone case report', weight: 40, description: 'End-to-end analysis of a case with a clinical-style report.' },
      { item: 'Participation', weight: 10, description: 'Attendance and forum contributions.' },
    ],
    resources: [
      { label: 'GATK Best Practices workflows', href: 'https://gatk.broadinstitute.org/hc/en-us/sections/360007226651-Best-Practices-Workflows' },
      { label: 'Ensembl Variant Effect Predictor', href: 'https://www.ensembl.org/info/docs/tools/vep/index.html' },
      { label: 'gnomAD browser', href: 'https://gnomad.broadinstitute.org/' },
      { label: 'ClinVar', href: 'https://www.ncbi.nlm.nih.gov/clinvar/' },
      { label: 'IGV user guide', href: 'https://igv.org/doc/desktop/' },
    ],
  },
  {
    slug: 'structural-biology',
    title: 'Structural Biology & Drug Design',
    level: 'Intermediate',
    weeks: 4,
    summary:
      'Protein structure, structure prediction and computer-aided drug design, from PDB entries to ranked candidates.',
    overview: [
      'This course introduces the structural side of drug discovery. Learners read and visualise protein structures, predict structures they cannot download, find binding sites, and run a first virtual screen.',
      'The focus is on judgement: when a predicted structure is good enough, what a docking score does and does not mean, and how to present a candidate list honestly.',
    ],
    prerequisites: 'Bioinformatics 101 and basic biochemistry.',
    tools: ['RCSB PDB', 'PyMOL', 'AlphaFold DB', 'ColabFold', 'fpocket', 'AutoDock Vina', 'RDKit'],
    objectives: [
      'Read a PDB entry and assess structure quality from resolution and validation reports.',
      'Visualise and analyse proteins and complexes in PyMOL.',
      'Use predicted structures appropriately, interpreting pLDDT and PAE.',
      'Identify binding pockets and prepare a target for docking.',
      'Run a small virtual screen and filter hits by drug-likeness.',
    ],
    syllabus: [
      { title: 'Protein structure', topics: ['Levels of structure', 'X-ray, NMR and cryo-EM', 'The PDB and validation'], lab: 'Compare two structures of the same protein and explain the differences.' },
      { title: 'Structure prediction', topics: ['Homology modelling', 'AlphaFold and confidence metrics', 'When to trust a model'], lab: 'Predict a structure with ColabFold and assess it.' },
      { title: 'Binding sites and docking', topics: ['Pocket detection', 'Target and ligand preparation', 'Docking scores'], lab: 'Re-dock a known ligand and measure RMSD.' },
      { title: 'Virtual screening and capstone', topics: ['Compound libraries', 'Drug-likeness and ADMET filters', 'Reporting hits'], lab: 'Capstone: screen a small library against a target and justify the top five.' },
    ],
    competencies: [
      { code: 'A3', how: 'Working at depth in protein structure and molecular recognition.' },
      { code: 'F3', how: 'Choosing between experimental and predicted structures and tools.' },
      { code: 'D3', how: 'Filtering and ranking screening results with appropriate metrics.' },
      { code: 'K3', how: 'Presenting candidates with their uncertainty to a medicinal chemistry audience.' },
    ],
    assessment: [
      { item: 'Weekly labs', weight: 40, description: 'Four labs submitted with images and a short analysis.' },
      { item: 'Quizzes', weight: 15, description: 'Concept checks on structure and docking.' },
      { item: 'Capstone screen', weight: 35, description: 'A virtual screen with a ranked, justified hit list.' },
      { item: 'Participation', weight: 10, description: 'Attendance and forum contributions.' },
    ],
    resources: [
      { label: 'PDB-101 learning resources', href: 'https://pdb101.rcsb.org/' },
      { label: 'AlphaFold Protein Structure Database', href: 'https://alphafold.ebi.ac.uk/' },
      { label: 'PyMOL Wiki', href: 'https://pymolwiki.org/' },
      { label: 'AutoDock Vina documentation', href: 'https://autodock-vina.readthedocs.io/' },
      { label: 'RDKit documentation', href: 'https://www.rdkit.org/docs/' },
    ],
  },
  {
    slug: 'md-simulation',
    title: 'Molecular Dynamics (MD) Simulation',
    level: 'Advanced',
    weeks: 4,
    summary:
      'Setting up, running and analysing molecular dynamics simulations of proteins and complexes with GROMACS.',
    overview: [
      'Molecular dynamics shows how a structure moves. This course takes learners through a complete GROMACS workflow, from preparing a protein–ligand system to analysing a trajectory and judging whether it has converged.',
      'Simulations run on a shared HPC cluster, so learners also practise job submission, resource planning and keeping large trajectory files under control.',
    ],
    prerequisites: 'Structural Biology & Drug Design and the Linux command line.',
    tools: ['GROMACS', 'CHARMM-GUI', 'VMD', 'MDAnalysis', 'Slurm'],
    objectives: [
      'Explain force fields, integrators, ensembles and periodic boundaries.',
      'Prepare, solvate, minimise and equilibrate a protein or protein–ligand system.',
      'Run production simulations on an HPC cluster with a job scheduler.',
      'Analyse RMSD, RMSF, hydrogen bonds and other observables, and check convergence.',
      'Report simulation methods with enough detail for others to reproduce them.',
    ],
    syllabus: [
      { title: 'Theory and setup', topics: ['Force fields', 'Integrators and time steps', 'Ensembles and PBC'], lab: 'Build and solvate a protein system in GROMACS.' },
      { title: 'Minimisation and equilibration', topics: ['Energy minimisation', 'NVT and NPT equilibration', 'Ligand parameters'], lab: 'Equilibrate a protein–ligand complex and check stability.' },
      { title: 'Production on HPC', topics: ['Slurm and job scripts', 'Performance and checkpoints', 'Managing trajectories'], lab: 'Run a production simulation on the cluster.' },
      { title: 'Analysis and capstone', topics: ['RMSD, RMSF and clustering', 'Interactions over time', 'Convergence and replicates'], lab: 'Capstone: simulate and analyse a complex, and report the methods.' },
    ],
    competencies: [
      { code: 'A3', how: 'Working at depth in biomolecular simulation.' },
      { code: 'I3', how: 'Running and managing jobs on HPC infrastructure.' },
      { code: 'H3', how: 'Scripting system setup and trajectory analysis.' },
      { code: 'D3', how: 'Analysing large trajectories with suitable statistics.' },
    ],
    assessment: [
      { item: 'Weekly labs', weight: 40, description: 'Four labs submitted as scripts, plots and a short note.' },
      { item: 'Methods write-up', weight: 15, description: 'A reproducible methods section for the capstone simulation.' },
      { item: 'Capstone', weight: 35, description: 'Simulation and analysis of a complex, with a short report.' },
      { item: 'Participation', weight: 10, description: 'Attendance and forum contributions.' },
    ],
    resources: [
      { label: 'GROMACS documentation', href: 'https://manual.gromacs.org/' },
      { label: 'GROMACS tutorials by Justin Lemkul', href: 'http://www.mdtutorials.com/gmx/' },
      { label: 'CHARMM-GUI', href: 'https://www.charmm-gui.org/' },
      { label: 'MDAnalysis user guide', href: 'https://userguide.mdanalysis.org/' },
      { label: 'Living Journal of Computational Molecular Science best practices', href: 'https://livecomsjournal.org/' },
    ],
  },
  {
    slug: 'molecular-docking',
    title: 'Molecular Docking',
    level: 'Intermediate',
    weeks: 3,
    summary:
      'Protein–ligand docking with AutoDock Vina and PyRx: preparing inputs, predicting poses and reading the results critically.',
    overview: [
      'A short, practical course on protein–ligand docking. Learners prepare receptors and ligands, define search boxes, dock with AutoDock Vina and PyRx, and analyse the interactions behind each pose.',
      'Validation runs through every week: re-docking known complexes, comparing to experimental poses, and knowing the limits of docking scores.',
    ],
    prerequisites: 'Bioinformatics 101 and basic chemistry.',
    tools: ['AutoDock Vina', 'PyRx', 'Open Babel', 'PyMOL', 'PLIP'],
    objectives: [
      'Prepare receptor and ligand files, including protonation and charges.',
      'Define a search space and run docking with AutoDock Vina and PyRx.',
      'Validate a docking setup by re-docking a known ligand.',
      'Analyse protein–ligand interactions and compare poses.',
      'State the limitations of docking scores when reporting results.',
    ],
    syllabus: [
      { title: 'Inputs and preparation', topics: ['Receptor preparation', 'Ligand preparation and formats', 'Search box definition'], lab: 'Prepare a receptor and a ligand set.' },
      { title: 'Docking and validation', topics: ['Vina scoring and search', 'Re-docking and RMSD', 'Exhaustiveness and reproducibility'], lab: 'Validate a docking protocol on a known complex.' },
      { title: 'Interaction analysis and capstone', topics: ['Hydrogen bonds, hydrophobic contacts, π-stacking', 'Pose comparison', 'Reporting'], lab: 'Capstone: dock a ligand series and explain the ranking.' },
    ],
    competencies: [
      { code: 'F3', how: 'Using docking tools appropriately and validating them.' },
      { code: 'B3', how: 'Preparing structures and ligands for computation.' },
      { code: 'A3', how: 'Relating poses to the chemistry of binding.' },
      { code: 'K3', how: 'Reporting docking results with their limitations.' },
    ],
    assessment: [
      { item: 'Weekly labs', weight: 45, description: 'Three labs submitted with poses and a short analysis.' },
      { item: 'Capstone', weight: 45, description: 'Docking of a ligand series with a ranked, justified report.' },
      { item: 'Participation', weight: 10, description: 'Attendance and forum contributions.' },
    ],
    resources: [
      { label: 'AutoDock Vina documentation', href: 'https://autodock-vina.readthedocs.io/' },
      { label: 'PyRx', href: 'https://pyrx.sourceforge.io/' },
      { label: 'Open Babel documentation', href: 'https://openbabel.org/docs/' },
      { label: 'PLIP: protein–ligand interaction profiler', href: 'https://plip-tool.biotec.tu-dresden.de/' },
    ],
  },
  {
    slug: 'rnaseq-analysis',
    title: 'RNA-Seq Data Analysis',
    level: 'Intermediate',
    weeks: 5,
    summary:
      'End-to-end bulk RNA-seq: quality control, quantification, differential expression and pathway enrichment.',
    overview: [
      'This course covers a complete bulk RNA-seq analysis, from FASTQ files to a list of differentially expressed genes and the pathways behind them.',
      'Experimental design comes first, because no analysis can rescue a poorly designed experiment. Learners then quantify expression, fit DESeq2 and edgeR models, and interpret results with enrichment analysis.',
    ],
    prerequisites: 'Python for Data Science in Biology or basic R, and the Linux command line.',
    tools: ['FastQC', 'MultiQC', 'Salmon', 'R', 'DESeq2', 'edgeR', 'clusterProfiler'],
    objectives: [
      'Design an RNA-seq experiment with adequate replication and controlled confounders.',
      'Assess read quality and quantify transcripts with Salmon.',
      'Model counts and test for differential expression with DESeq2 and edgeR.',
      'Run and interpret Gene Ontology and pathway enrichment.',
      'Deposit data and metadata according to community standards.',
    ],
    syllabus: [
      { title: 'Design and quality', topics: ['Replicates, batches and power', 'FASTQ QC with FastQC and MultiQC'], lab: 'Critique three study designs and QC a dataset.' },
      { title: 'Quantification', topics: ['Alignment versus pseudo-alignment', 'Salmon', 'Importing counts with tximport'], lab: 'Quantify a dataset with Salmon.' },
      { title: 'Differential expression', topics: ['Normalisation', 'Negative binomial models', 'DESeq2 and edgeR'], lab: 'Run DESeq2 and compare it with edgeR.' },
      { title: 'Interpretation', topics: ['Shrinkage and effect sizes', 'GO and pathway enrichment', 'Visualising results'], lab: 'Enrichment analysis and volcano plots.' },
      { title: 'FAIR data and capstone', topics: ['GEO and ArrayExpress submission', 'Reproducible reports'], lab: 'Capstone: a full analysis of a public dataset.' },
    ],
    competencies: [
      { code: 'D3', how: 'Fitting count models suited to RNA-seq data.' },
      { code: 'F3', how: 'Using Salmon, DESeq2 and edgeR appropriately.' },
      { code: 'E3', how: 'Preparing data and metadata for FAIR deposition.' },
      { code: 'C3', how: 'Turning expression changes into biological hypotheses.' },
      { code: 'H3', how: 'Scripting the analysis in R.' },
    ],
    assessment: [
      { item: 'Weekly labs', weight: 35, description: 'Five labs submitted as R Markdown or Quarto reports.' },
      { item: 'Design critique', weight: 10, description: 'A short critique of a published RNA-seq study design.' },
      { item: 'Capstone', weight: 45, description: 'Full analysis of a public dataset with a reproducible report.' },
      { item: 'Participation', weight: 10, description: 'Attendance and forum contributions.' },
    ],
    resources: [
      { label: 'DESeq2 vignette', href: 'https://bioconductor.org/packages/release/bioc/vignettes/DESeq2/inst/doc/DESeq2.html' },
      { label: 'RNA-seq workflow (Bioconductor)', href: 'https://bioconductor.org/packages/release/workflows/html/rnaseqGene.html' },
      { label: 'Salmon documentation', href: 'https://salmon.readthedocs.io/' },
      { label: 'clusterProfiler book', href: 'https://yulab-smu.top/biomedical-knowledge-mining-book/' },
      { label: 'GEO submission guidelines', href: 'https://www.ncbi.nlm.nih.gov/geo/info/submission.html' },
    ],
  },
  {
    slug: 'single-cell-analysis',
    title: 'Single-Cell RNA-Seq Analysis',
    level: 'Advanced',
    weeks: 6,
    summary:
      'Single-cell transcriptomics with Scanpy and Seurat: QC, integration, clustering, annotation and trajectories.',
    overview: [
      'Single-cell RNA-seq resolves tissues into cell types and states. This course covers the full analysis with Scanpy, with Seurat equivalents shown alongside.',
      'Learners work on real atlas data, which brings real problems: ambient RNA, doublets, batch effects and cell types nobody has named yet.',
    ],
    prerequisites: 'RNA-Seq Data Analysis and Python for Data Science in Biology.',
    tools: ['Scanpy', 'AnnData', 'Seurat', 'scVI', 'CellTypist', 'scVelo'],
    objectives: [
      'Explain how droplet and plate-based single-cell data are generated, and their biases.',
      'Perform cell and gene QC, including doublet and ambient RNA handling.',
      'Normalise, integrate batches, reduce dimensions and cluster cells.',
      'Annotate cell types with markers and reference atlases.',
      'Infer trajectories and judge when trajectory analysis is appropriate.',
    ],
    syllabus: [
      { title: 'Technologies and data structures', topics: ['10x and plate-based protocols', 'Count matrices', 'AnnData and Seurat objects'], lab: 'Load and explore a 10x dataset.' },
      { title: 'Quality control', topics: ['Cell and gene filtering', 'Doublets', 'Ambient RNA'], lab: 'QC a dataset and justify every threshold.' },
      { title: 'Normalisation and integration', topics: ['Normalisation choices', 'Highly variable genes', 'Batch integration with scVI and Harmony'], lab: 'Integrate two batches and assess mixing.' },
      { title: 'Clustering and annotation', topics: ['Neighbour graphs and Leiden', 'Marker genes', 'Reference-based annotation'], lab: 'Cluster and annotate a tissue.' },
      { title: 'Trajectories and differential analysis', topics: ['Pseudotime', 'RNA velocity', 'Pseudobulk differential expression'], lab: 'Infer a differentiation trajectory.' },
      { title: 'Capstone', topics: ['Project work', 'Data sharing with CELLxGENE'], lab: 'Capstone: end-to-end analysis of a public dataset.' },
    ],
    competencies: [
      { code: 'A3', how: 'Working at depth in single-cell biology.' },
      { code: 'D3', how: 'Using methods suited to sparse, high-dimensional data.' },
      { code: 'H3', how: 'Writing efficient Python for large AnnData objects.' },
      { code: 'E3', how: 'Sharing annotated data in community formats.' },
      { code: 'C3', how: 'Linking cell states to biological questions.' },
    ],
    assessment: [
      { item: 'Weekly labs', weight: 35, description: 'Five notebook labs.' },
      { item: 'Annotation challenge', weight: 15, description: 'Annotate a held-out dataset, scored against expert labels.' },
      { item: 'Capstone', weight: 40, description: 'End-to-end analysis with a reproducible notebook and report.' },
      { item: 'Participation', weight: 10, description: 'Attendance and forum contributions.' },
    ],
    resources: [
      { label: 'Single-cell best practices', href: 'https://www.sc-best-practices.org/' },
      { label: 'Scanpy tutorials', href: 'https://scanpy.readthedocs.io/en/stable/tutorials/index.html' },
      { label: 'Seurat documentation', href: 'https://satijalab.org/seurat/' },
      { label: 'scvi-tools tutorials', href: 'https://docs.scvi-tools.org/en/stable/tutorials/index.html' },
      { label: 'CELLxGENE Discover', href: 'https://cellxgene.cziscience.com/' },
    ],
  },
  {
    slug: 'machine-learning-biology',
    title: 'Machine Learning for Biology',
    level: 'Advanced',
    weeks: 6,
    summary:
      'Building, validating and interpreting machine learning models on biological data, through to foundation models.',
    overview: [
      'This course teaches machine learning the way it has to be done on biological data: small samples, many features, hidden batch effects and labels that are themselves uncertain.',
      'Learners build classical models in scikit-learn, move on to neural networks in PyTorch, and finish with embeddings from biological foundation models, the area DeepBio works in.',
    ],
    prerequisites: 'Python for Data Science in Biology, and basic linear algebra and statistics.',
    tools: ['scikit-learn', 'PyTorch', 'SHAP', 'Hugging Face Transformers', 'ESM'],
    objectives: [
      'Frame a biological question as a supervised or unsupervised learning problem.',
      'Build models with feature engineering, regularisation and cross-validation.',
      'Avoid data leakage and evaluate models with metrics suited to imbalanced data.',
      'Interpret models with feature importance and SHAP.',
      'Use pretrained biological foundation models to embed sequences for downstream tasks.',
      'Recognise ethical risks such as bias and privacy in biomedical ML.',
    ],
    syllabus: [
      { title: 'Framing and baselines', topics: ['Supervised versus unsupervised', 'Train, validation and test splits', 'Baselines'], lab: 'Frame three biological problems and build baselines.' },
      { title: 'Classical models', topics: ['Linear models and regularisation', 'Trees and ensembles', 'Feature engineering'], lab: 'Predict a phenotype from expression data.' },
      { title: 'Evaluation and leakage', topics: ['Cross-validation', 'Imbalanced metrics', 'Leakage and batch effects'], lab: 'Find the leak in a deliberately broken analysis.' },
      { title: 'Interpretation', topics: ['Feature importance', 'SHAP', 'From features to biology'], lab: 'Explain a model’s predictions.' },
      { title: 'Deep learning and foundation models', topics: ['Neural networks in PyTorch', 'Protein and DNA language models', 'Embeddings and fine-tuning'], lab: 'Classify proteins using ESM embeddings.' },
      { title: 'Responsible ML and capstone', topics: ['Bias and fairness', 'Model cards', 'Deployment'], lab: 'Capstone: a validated, documented model on a biological dataset.' },
    ],
    competencies: [
      { code: 'D3', how: 'Selecting and validating models suited to the data’s size and structure.' },
      { code: 'H3', how: 'Implementing models in scikit-learn and PyTorch.' },
      { code: 'J3', how: 'Assessing bias, privacy and responsible use of biomedical models.' },
      { code: 'G3', how: 'Documenting models with model cards so others can use them.' },
      { code: 'M3', how: 'Following a fast-moving field through papers and preprints.' },
    ],
    assessment: [
      { item: 'Weekly labs', weight: 30, description: 'Six notebook labs.' },
      { item: 'Paper presentation', weight: 15, description: 'Present and critique a recent ML-in-biology paper.' },
      { item: 'Capstone', weight: 45, description: 'A validated model with code, a model card and a short report.' },
      { item: 'Participation', weight: 10, description: 'Attendance and forum contributions.' },
    ],
    resources: [
      { label: 'scikit-learn user guide', href: 'https://scikit-learn.org/stable/user_guide.html' },
      { label: 'PyTorch tutorials', href: 'https://pytorch.org/tutorials/' },
      { label: 'Hugging Face course', href: 'https://huggingface.co/learn' },
      { label: 'ESM on GitHub', href: 'https://github.com/facebookresearch/esm' },
      { label: 'DOME recommendations for ML in biology', href: 'https://dome-ml.org/' },
    ],
  },
]
