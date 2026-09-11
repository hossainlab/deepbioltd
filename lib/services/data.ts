/**
 * Canonical service catalogue.
 *
 * Twenty distinct analyses. Six of them ship a worked example — a real
 * DeepBio output with a downloadable report — and those are the ones that do
 * the selling; the rest are listed so a prospect can find their method.
 *
 * This replaces two overlapping lists that used to contradict each other: the
 * twelve hand-written items in components/CoreExpertise.tsx and the
 * twenty-four cards in components/CaseStudiesPage.tsx, four of which were the
 * same service entered twice under different names (Survival Analysis /
 * Breast Cancer Survival Risk Stratification, Binder Design / PCSK9 Binder
 * Design, Gene Regulatory Network Analysis / GRN Inference in Glioblastoma,
 * Polygenic Risk Score Analysis / Phylogenetic Polygenic Risk Assessment).
 *
 * `example` is present only where a real report exists. Never add one that
 * points at a placeholder — eighteen dead '#' links were the reason this file
 * exists.
 */

export type ServiceCategory =
  | 'Transcriptomics'
  | 'Human genetics'
  | 'Structural & molecular design'
  | 'Clinical & translational'
  | 'Proteomics & microbiome';

export interface WorkedExample {
  /** Title of the specific study, as distinct from the generic service. */
  title: string;
  figure: string;
  figureAlt: string;
  pdf: string;
}

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  /** What the analysis does, in terms a PI or a BD lead would recognise. */
  description: string;
  /** What you send us. */
  input: string;
  /** What comes back. */
  output: string;
  example?: WorkedExample;
}

export const services: Service[] = [
  // ─── Transcriptomics ──────────────────────────────────────────────────────
  {
    id: 'deseq2-rna-seq',
    title: 'DESeq2 RNA-seq analysis',
    category: 'Transcriptomics',
    description:
      'Differential expression across conditions with negative-binomial modelling, shrunken fold-change estimates and multiple-testing correction.',
    input: 'Count matrix or raw FASTQ, plus a sample sheet',
    output: 'Ranked result tables, volcano and MA plots, enrichment summary',
    example: {
      title: 'Differential expression in MASH versus control liver',
      figure: '/case_studies/img/deseq2_qc_volcano_plot.png',
      figureAlt:
        'Volcano plot of differentially expressed genes, log2 fold change against adjusted p-value, with up- and down-regulated genes highlighted.',
      pdf: '/case_studies/pdf/DESeq2 MASH RNA-seq Analysis.pdf',
    },
  },
  {
    id: 'scrna-cell-annotation',
    title: 'Single-cell RNA-seq cell annotation',
    category: 'Transcriptomics',
    description:
      'Quality control, integration, clustering and cell-type assignment against reference atlases and marker panels.',
    input: 'Cell Ranger output, or an AnnData/Seurat object',
    output: 'Annotated object, UMAP embeddings, per-cluster marker tables',
  },
  {
    id: 'pseudotime-trajectory',
    title: 'Pseudotime trajectory analysis',
    category: 'Transcriptomics',
    description:
      'Ordering cells along differentiation or response trajectories to recover the genes that change with progression.',
    input: 'Annotated single-cell object',
    output: 'Trajectory graph, pseudotime ordering, branch-dependent gene sets',
  },
  {
    id: 'spatial-transcriptomics',
    title: 'Spatial transcriptomics analysis',
    category: 'Transcriptomics',
    description:
      'Mapping expression back onto tissue architecture — spatial domains, niche composition and neighbourhood enrichment.',
    input: 'Visium, Xenium or comparable spatial output',
    output: 'Domain segmentation, deconvolved cell proportions, spatial plots',
  },
  {
    id: 'gene-regulatory-network',
    title: 'Gene regulatory network analysis',
    category: 'Transcriptomics',
    description:
      'Reconstructing transcription-factor to target relationships to surface the regulators driving a phenotype.',
    input: 'Bulk or single-cell expression matrix',
    output: 'Inferred network, regulon activity scores, ranked candidate drivers',
    example: {
      title: 'Regulatory network inference across glioblastoma subtypes',
      figure: '/case_studies/img/figures_umap_gbm_subtypes.png',
      figureAlt: 'UMAP projection separating glioblastoma molecular subtypes.',
      pdf: '/case_studies/pdf/Gene Regulatory Network Inference.pdf',
    },
  },
  {
    id: 'gene-coexpression-network',
    title: 'Gene co-expression network analysis',
    category: 'Transcriptomics',
    description:
      'Module detection across samples, with modules related back to traits or clinical variables.',
    input: 'Expression matrix and sample metadata',
    output: 'Module assignments, eigengene–trait correlations, hub gene lists',
  },
  {
    id: 'cell-cell-communication',
    title: 'Cell–cell communication analysis',
    category: 'Transcriptomics',
    description:
      'Inferring ligand–receptor signalling between annotated populations and how it shifts between conditions.',
    input: 'Annotated single-cell object with condition labels',
    output: 'Ranked interactions, signalling network plots, differential comparison',
  },

  // ─── Human genetics ───────────────────────────────────────────────────────
  {
    id: 'polygenic-risk-score',
    title: 'Polygenic risk score analysis',
    category: 'Human genetics',
    description:
      'Scoring cohorts against published GWAS weights, with ancestry-aware evaluation of how well the score transfers.',
    input: 'Genotype data (PLINK/VCF) and phenotype table',
    output: 'Per-sample scores, calibration and discrimination metrics, per-trait figures',
    example: {
      title: 'Cardiometabolic polygenic risk across ancestry groups',
      figure: '/case_studies/img/figures_workflow_abstract.png',
      figureAlt:
        'Workflow schematic running from a reference cohort through catalogue weights, variant matching and scoring to per-trait outputs.',
      pdf: '/case_studies/pdf/Cardiometabolic Polygenic Risk Assessment.pdf',
    },
  },
  {
    id: 'fine-mapping',
    title: 'Fine-mapping analysis',
    category: 'Human genetics',
    description:
      'Narrowing association signals to credible sets of likely causal variants, accounting for linkage disequilibrium.',
    input: 'GWAS summary statistics and an LD reference',
    output: 'Credible sets, posterior inclusion probabilities, locus plots',
  },
  {
    id: 'mendelian-randomization',
    title: 'Mendelian randomisation',
    category: 'Human genetics',
    description:
      'Using genetic instruments to test whether an exposure plausibly causes an outcome, with sensitivity analyses for pleiotropy.',
    input: 'Exposure and outcome summary statistics',
    output: 'Causal estimates across methods, pleiotropy diagnostics, forest plots',
  },
  {
    id: 'variant-annotation',
    title: 'Variant annotation',
    category: 'Human genetics',
    description:
      'Annotating called variants with consequence, population frequency, clinical significance and predicted impact.',
    input: 'VCF from your calling pipeline',
    output: 'Annotated VCF and a filtered, prioritised candidate table',
  },

  // ─── Structural & molecular design ────────────────────────────────────────
  {
    id: 'binder-design',
    title: 'Binder design',
    category: 'Structural & molecular design',
    description:
      'Computational design of protein binders against a chosen target, with iterative optimisation of the candidate set.',
    input: 'Target structure or sequence, and the epitope you care about',
    output: 'Ranked designed sequences, predicted complexes, selection rationale',
    example: {
      title: 'High-affinity binder design against PCSK9',
      figure: '/case_studies/img/PCSK9 Binder Design & Optimization.png',
      figureAlt:
        'Structural model of a designed protein binder in complex with the PCSK9 target.',
      pdf: '/case_studies/pdf/PCSK9 Binder Design & Optimization.pdf',
    },
  },
  {
    id: 'protein-structure-prediction',
    title: 'Protein structure prediction',
    category: 'Structural & molecular design',
    description:
      'Structure and complex prediction with per-residue confidence, for targets without an experimental model.',
    input: 'Sequence, or sequences for a complex',
    output: 'Predicted structures, confidence and interface scores, coordinate files',
  },
  {
    id: 'binding-affinity-ml',
    title: 'Binding affinity model building',
    category: 'Structural & molecular design',
    description:
      'Training a predictive model on measured affinity data, evaluated on held-out compounds rather than in-sample fit.',
    input: 'Assay data with structures or sequences',
    output: 'Trained model, held-out performance metrics, prediction scripts',
  },
  {
    id: 'primer-design',
    title: 'Primer design',
    category: 'Structural & molecular design',
    description:
      'Primer sets optimised for specificity and efficiency, with in-silico checks against off-target amplification.',
    input: 'Target region or sequence set',
    output: 'Ranked primer pairs with thermodynamics and specificity report',
    example: {
      title: 'Optimised PCR primer design for a genomic assay',
      figure: '/case_studies/img/primer_design.png',
      figureAlt: 'Primer design schematic showing target region and candidate primer placement.',
      pdf: '/case_studies/pdf/Primer Design.pdf',
    },
  },

  // ─── Clinical & translational ─────────────────────────────────────────────
  {
    id: 'survival-analysis',
    title: 'Survival analysis',
    category: 'Clinical & translational',
    description:
      'Time-to-event modelling with Kaplan–Meier estimation, log-rank testing and Cox regression against covariates.',
    input: 'Clinical table with follow-up time, event status and covariates',
    output: 'Stratified survival curves, hazard ratios, risk-group assignment',
    example: {
      title: 'Breast cancer survival risk stratification',
      figure: '/case_studies/img/figures_km_stratified.png',
      figureAlt:
        'Stratified Kaplan-Meier survival curves separating patient risk groups over time.',
      pdf: '/case_studies/pdf/Breast Cancer Survival Risk Stratification.pdf',
    },
  },
  {
    id: 'biomarker-panel-design',
    title: 'Biomarker panel design',
    category: 'Clinical & translational',
    description:
      'Selecting a compact, defensible marker panel from high-dimensional data, with cross-validated performance.',
    input: 'Expression or proteomic matrix with outcome labels',
    output: 'Selected panel, cross-validated performance, selection stability report',
  },
  {
    id: 'clinical-trial-landscaping',
    title: 'Clinical trial landscaping',
    category: 'Clinical & translational',
    description:
      'Systematic review of the registered trial landscape for an indication or target, with the competitive picture summarised.',
    input: 'Indication, target or mechanism of interest',
    output: 'Structured trial table, phase and sponsor breakdown, written summary',
  },

  // ─── Proteomics & microbiome ──────────────────────────────────────────────
  {
    id: 'proteomics-differential-expression',
    title: 'Proteomics differential expression',
    category: 'Proteomics & microbiome',
    description:
      'Differential abundance across conditions with normalisation, principled missing-value handling and enrichment.',
    input: 'Protein or peptide intensity matrix with a sample sheet',
    output: 'Ranked protein tables, QC and abundance plots, pathway enrichment',
  },
  {
    id: 'microbiome-analysis',
    title: 'Microbiome analysis',
    category: 'Proteomics & microbiome',
    description:
      'Taxonomic and functional profiling of communities, with diversity analysis and differential abundance testing.',
    input: '16S or shotgun metagenomic reads',
    output: 'Taxonomic and functional profiles, diversity metrics, differential taxa',
  },
];

export const serviceCategories: ServiceCategory[] = [
  'Transcriptomics',
  'Human genetics',
  'Structural & molecular design',
  'Clinical & translational',
  'Proteomics & microbiome',
];

/** The six that ship a downloadable report. These carry /case-studies. */
export const servicesWithExamples = services.filter((s) => s.example);
