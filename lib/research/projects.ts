/**
 * Research content for the minimal /research index and /research/[slug]
 * articles. Project copy is carried over from the former homepage section
 * (components/home/ActiveResearchSpotlight.tsx).
 */

/** A figure placed under one of the article's sections. */
export interface ProjectFigure {
  /** Which article section it sits under. */
  section: 'problem' | 'approach' | 'focus'
  src: string
  /** Intrinsic pixel size, so the browser reserves the right space. */
  width: number
  height: number
  alt: string
  /** Bold lead-in, e.g. "Figure 1". */
  label: string
  caption: string
}

export interface ResearchProject {
  slug: string
  /** Program area, shown as the byline under the title. */
  area: string
  title: string
  /** One-sentence lede, set in italics on the article page. */
  subtitle: string
  problem: string
  approach: string
  models: string[]
  focus: string[]
  figures?: ProjectFigure[]
}

export const projects: ResearchProject[] = [
  {
    slug: 'protirodh',
    area: 'Antimicrobial Resistance',
    title: 'PROTIRODH: rescuing carbapenems against the Bangladeshi resistome',
    subtitle:
      'Designing a metallo-beta-lactamase inhibitor that restores an existing, inexpensive antibiotic, against the enzyme variants circulating in Bangladeshi hospitals rather than reference laboratory alleles.',
    problem:
      'Carbapenem resistance in Klebsiella pneumoniae, Acinetobacter baumannii and Pseudomonas aeruginosa in Bangladesh is driven predominantly by metallo-beta-lactamases, principally NDM-type enzymes, often co-carried with colistin-resistance determinants. Every one of the seven approved beta-lactamase inhibitors targets serine enzymes: across the 21 combinations of an approved inhibitor and an Ambler class B enzyme, none shows reported inhibitory activity. Colistin, the fallback when carbapenems fail, is already compromised in the same isolates.',
    approach:
      'Rather than replacing the antibiotic, PROTIRODH designs a partner molecule that blocks the enzyme destroying it. The methodological contribution is minimax pan-variant optimisation: candidates are selected on worst-case predicted affinity across a twelve-variant sentinel panel built from sequenced local isolates, not on potency against a single reference enzyme. No single model is trusted. Boltz-2 ranks within a chemical series, a three-model consensus tier governs pose geometry, physics rescoring corrects the zinc centre, and free-energy perturbation confirms finalists. Enzyme kinetics and MIC measurement on clinical isolates remain the sole arbiter.',
    models: ['Boltz-2', 'Chai-1', 'OpenFold3', 'Chemprop', 'REINVENT 4'],
    focus: [
      'Sentinel variant panel from 400 sequenced carbapenem-non-susceptible clinical isolates',
      'First benchmark of co-folding affinity prediction on serine and metallo-beta-lactamases',
      'Prospective test of minimax selection against a matched single-variant control arm',
      'Open release of models, weights, benchmarks and negative results, with handover to national surveillance partners',
    ],
    figures: [
      {
        section: 'problem',
        src: '/research/protirodh/burden_evidence.png',
        width: 2239,
        height: 2130,
        alt: 'Three panels: deaths attributable to resistance by pathogen-drug combination, national susceptibility by organism and agent, and resistance determinants in Bangladeshi Acinetobacter baumannii isolates.',
        label: 'Figure 1',
        caption:
          'The burden is beta-lactamase-mediated, susceptibility in Bangladesh is already lost, and the locally dominant mechanism is the one for which no inhibitor exists. (a) Deaths attributable to resistance in 2019 for the seven pathogen-drug combinations each exceeding 50,000 attributable deaths; the MRSA bar is truncated at the axis limit. (b) Isolate susceptibility from national sentinel surveillance, 19,263 samples from nine sentinel sites, March 2017 to March 2020. (c) Resistance determinants in carbapenem-non-susceptible A. baumannii from a tertiary-care study (n = 26), by Ambler class. Sources: Murray et al. 2022; Habib et al. 2021; Dey et al. 2026.',
      },
      {
        section: 'problem',
        src: '/research/protirodh/inhibitor_coverage.png',
        width: 2521,
        height: 1328,
        alt: 'Matrix of nine beta-lactamase inhibitors against eight representative enzymes by Ambler class, with the approved-inhibitor by class B region outlined and empty.',
        label: 'Figure 2',
        caption:
          'No approved beta-lactamase inhibitor covers Ambler class B. Rows are the seven approved inhibitors and the two boronates in clinical development; columns are Ambler classes with representative enzymes. The outlined region is the intersection of approved inhibitors with class B enzymes, which is empty, and defines the target space of this program. A qualitative synthesis of reported in-vitro inhibition, not clinical breakpoints.',
      },
      {
        section: 'approach',
        src: '/research/protirodh/minimax_concept.png',
        width: 1993,
        height: 981,
        alt: 'Two panels contrasting a potency-selected compound, which falls below the activity threshold across the variant panel, with a minimax-selected compound that stays above it.',
        label: 'Figure 3',
        caption:
          'Minimax selection trades reference-variant potency for cross-variant robustness. (a) Predicted potency across the ordered sentinel panel for a compound selected on the reference variant alone and one selected on worst-case performance across the panel. (b) The resulting trade-off in worst-case and mean predicted potency. An illustrative schematic of the selection objective; the axes carry no measured data, and milestone M4 is its prospective test.',
      },
      {
        section: 'focus',
        src: '/research/protirodh/protirodh_workflow.png',
        width: 2426,
        height: 2019,
        alt: 'Two panels: compounds surviving each screening gate on a log scale from two million to three, and a work-package schedule across 48 months with milestone markers.',
        label: 'Figure 4',
        caption:
          'Screening cascade and program timeline. (a) Compounds surviving each gate on a logarithmic scale, with the engine annotated per stage; the expensive methods run only where earlier gates have removed the bulk of the library. (b) Work-package schedule with go/no-go milestones.',
      },
    ],
  },
  {
    slug: 'raredx-modality',
    area: 'Rare Disease Target Triage',
    title: 'RareDx-Modality: druggability assessment across seven modalities',
    subtitle:
      'Ranking which therapeutic modality can reach a rare disease target, with calibrated uncertainty, before anyone commits to a program.',
    problem:
      'The most consequential early decision in rare disease drug development is modality selection. Existing tools such as Open Targets assess only three modalities with rigid rule buckets. They are blind to genetic medicines (ASO, siRNA, AAV, CRISPR), to gene-size packaging caps under 4.7 kb, and to disease mechanism.',
    approach:
      'RareDx-Modality combines multi-modal biophysical logic with LLM reasoning to rank feasibility across seven modalities with calibrated uncertainty. It encodes the N1C VARIANT guidelines to classify pathogenic variants for antisense oligonucleotide eligibility at scale.',
    models: ['Claude', 'AlphaFold-Multimer', 'N1C algorithmic framework', 'Modality feasibility engine'],
    focus: ['Seven-modality assessment pipeline', 'Retrospective benchmarks on SMA and LCA10/CEP290'],
  },
  {
    slug: 'amr-drug-repurposing',
    area: 'Infectious Disease & Resistance',
    title: 'AMR surveillance and structure-guided drug repurposing',
    subtitle:
      'Using fast co-folding and generative chemistry to find compounds that get around beta-lactamase and efflux-pump resistance.',
    problem:
      'Antimicrobial resistance is making frontline antibiotics obsolete. De novo discovery takes more than a decade, while pathogen targets accumulate beta-lactamase and efflux-pump mutations that evade standard therapy.',
    approach:
      'We use Boltz-2 for structure and binding-affinity prediction across resistant variants, roughly a thousand times faster than free-energy perturbation; Chemprop for ADMET property prediction with built-in uncertainty; and REINVENT 4 for reinforcement-learning scaffold hopping.',
    models: ['Boltz-2 (MIT)', 'Chemprop (MIT)', 'REINVENT 4 (Apache 2.0)'],
    focus: ['Co-folding resistant beta-lactamase complexes', 'Permissive licensing for pharma co-development'],
  },
  {
    slug: 'neglected-tropical-diseases',
    area: 'Neglected Pathogens',
    title: 'Drug discovery for neglected tropical diseases',
    subtitle:
      'Bringing protein language models to the parasitic targets that global AI drug discovery has so far left out.',
    problem:
      'AI drug discovery literature almost entirely neglects tropical parasitic diseases. A 2026 scoping review found most machine-learning studies in this space focus on geographic risk, with none focused on drug discovery, leaving endemic parasitic diseases under-served.',
    approach:
      'We apply ESMC to predict zero-shot functional annotations for unstudied parasitic proteins that lack experimental structures, and ESMFold2 for rapid single-GPU folding of endemic variant libraries in one to ten seconds per structure.',
    models: ['ESMC (open weights)', 'ESMFold2 (MIT)', 'Boltz-2', 'Chemprop'],
    focus: ['Zero-shot functional embeddings', 'Rapid screening for Leishmania, filariasis and TB targets'],
  },
  {
    slug: 'bangladesh-biomarkers',
    area: 'Bangladeshi Functional Genomics',
    title: 'Population-specific biomarker discovery in Bangladesh',
    subtitle:
      'Mining the homozygous knockout landscape of Bangladeshi genomes for targets that European-centric models miss.',
    problem:
      'More than 80% of genomic and single-cell models are optimized for European ancestries. Target discovery pipelines and polygenic risk predictors therefore miss disease mechanisms specific to the genetic architecture of Bangladeshi populations, especially in cardiometabolic disease.',
    approach:
      'We use single-cell foundation models (scGPT, Geneformer) and long-range genome models (Evo2) to map perturbation biology and protective homozygous loss-of-function phenotypes. Targets backed by protective human knockouts progress about 2.2 times more reliably through clinical phases.',
    models: ['scGPT', 'Geneformer', 'Nucleotide Transformer v3', 'Evo2 (1 Mb context)'],
    focus: ['In silico single-cell perturbation mapping', 'Prioritizing targets validated by protective human knockouts'],
  },
]
