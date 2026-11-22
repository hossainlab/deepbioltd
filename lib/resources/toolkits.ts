/**
 * Agent skill libraries and research assistants: open repositories that give an
 * AI agent grounded access to scientific databases and tools.
 *
 * Separate from lib/resources/models.ts because these are software projects
 * rather than published models — some have a paper, some do not, so the paper
 * fields are optional here.
 */

export interface Toolkit {
  name: string
  developer: string
  summary: string
  /** Canonical repository. */
  codeUrl: string
  /** Documentation or product page, when the repository is not the front door. */
  docsUrl?: string
  docsLabel?: string
  license?: string
  /** Paper introducing the project, where one exists. */
  paper?: {
    title: string
    authors: string
    venue: string
    year: number
    url: string
  }
}

export const toolkits: Toolkit[] = [
  {
    name: 'Science Skills',
    developer: 'Google DeepMind',
    summary:
      'Forty agent skills covering AlphaGenome, the AlphaFold Database, UniProt, PubChem, ChEMBL, PDB, Ensembl, gnomAD, PyMOL and other public resources. Each skill is an instruction file with helper scripts, installed through the Antigravity Science plugin or with npx. Individual skills carry the terms of the data sources they call.',
    codeUrl: 'https://github.com/google-deepmind/science-skills',
    docsUrl: 'https://antigravity.google/use-cases/science',
    docsLabel: 'antigravity.google',
    license: 'Apache 2.0',
  },
  {
    name: 'Scientific Agent Skills',
    developer: 'K-Dense AI',
    summary:
      '177 skills and connectors to public scientific databases across biology, chemistry, medicine and drug discovery, written to the open Agent Skills standard so the same skill works across agent clients.',
    codeUrl: 'https://github.com/K-Dense-AI/scientific-agent-skills',
    license: 'MIT',
    paper: {
      title: 'Scientific Agent Skills: A Library of Procedural Knowledge for Research Agents',
      authors: 'Timothy Kassis et al.',
      venue: 'arXiv',
      year: 2026,
      url: 'https://arxiv.org/abs/2609.00065',
    },
  },
  {
    name: 'K-Dense BYOK',
    developer: 'K-Dense AI',
    summary:
      'A research assistant that runs on your own machine against your own model API keys, and records each step of an analysis in a hash-chained lab notebook so the trail can be audited afterwards.',
    codeUrl: 'https://github.com/K-Dense-AI/k-dense-byok',
    license: 'MIT',
    paper: {
      title:
        'K-Dense BYOK: An Open-Source AI Research Assistant That Runs Locally and Keeps a Hash-Chained Lab Notebook',
      authors: 'Aubrey M. Brueckner et al.',
      venue: 'arXiv',
      year: 2026,
      url: 'https://arxiv.org/abs/2610.00074',
    },
  },
]
