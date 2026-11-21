/**
 * Research content for the minimal /research index and /research/[slug]
 * articles. Project copy is carried over from the former homepage section
 * (components/home/ActiveResearchSpotlight.tsx).
 */

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
      'Open release of models, weights, benchmarks and negative results, with national handover to IEDCR',
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
