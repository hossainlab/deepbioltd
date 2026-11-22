/**
 * Agentic Cheminformatics with Google Antigravity.
 *
 * A verification-first course: learners drive agent skills through a standard
 * cheminformatics workflow (retrieve, curate, analyse, model) and check every
 * step against the primary source. The design week reads the published
 * DeepMind case study critically rather than generating new compounds.
 *
 * Every reading link was checked; the four journal references were confirmed
 * against Crossref metadata.
 */

import type { Course, Reading } from './courses'

const HANDBOOK = 'https://lifesciencesaihandbook.com'

const r = (title: string, href: string): Reading => ({ title, href })

export const agenticCheminformatics: Course = {
  slug: 'agentic-cheminformatics-antigravity',
  title: 'Agentic Cheminformatics with Google Antigravity',
  level: 'Advanced',
  weeks: 6,
  summary:
    'Run cheminformatics workflows through AI agent skills, and verify every structure, activity value and model result against its source.',
  overview: [
    'Agent skills now connect a language model to RDKit, ChEMBL and PubChem, so an agent can retrieve a compound series, curate it, compute descriptors and fit a potency model in an afternoon. The speed is real, and so is the risk: a plausible-looking table with the wrong units, a duplicated structure, or a model validated on a split that leaks is worse than no analysis at all.',
    'This course teaches both halves. Learners drive Google Antigravity with the open Science skills through a standard cheminformatics workflow, and at each step they check the agent against the primary source: the assay record behind an activity value, the standardisation rule behind a structure, the split behind a performance number. The final week appraises the published agentic cheminformatics case study on its own evidence.',
  ],
  prerequisites:
    'Python for Data Science in Biology or equivalent Python experience, and undergraduate organic chemistry. Agentic AI for Computational Biology is helpful but not required. Needs Google Antigravity with the Science plugin; the same skills also install with npx into other agent clients, which is covered in Week 1.',
  tools: ['Google Antigravity', 'Science skills', 'RDKit', 'ChEMBL', 'PubChem', 'Python', 'pandas', 'scikit-learn'],
  objectives: [
    'Install and drive agent skills for cheminformatics, and state what each skill does and does not do.',
    'Explain how molecules are represented as SMILES, InChI, SDF and IUPAC names, and why a representation choice changes a result.',
    'Retrieve compound and bioactivity data from ChEMBL and PubChem, and trace every record back to its assay.',
    'Curate a dataset to a documented standard: standardisation, salt and duplicate handling, unit harmonisation and activity aggregation.',
    'Carry out and interpret matched molecular pair and scaffold analyses of structure–activity data.',
    'Build potency models and validate them honestly with scaffold and chronological splits, baselines and an applicability domain.',
    'Appraise a published agentic chemistry claim against the evidence it reports.',
  ],
  syllabus: [
    {
      title: 'Agent Skills and Molecular Representation',
      theme: 'Setting up the workbench, and what a molecule is to a computer',
      topics: ['Antigravity and the Science plugin', 'Skill anatomy: instructions, scripts, references', 'SMILES, InChI, SDF, IUPAC names', 'RDKit basics'],
      lab: 'Install the Science skills, run a first skill, and compare how the same compound is represented across four formats.',
      readings: [
        r('Science Skills (Google DeepMind)', 'https://github.com/google-deepmind/science-skills'),
        r('Antigravity for science', 'https://antigravity.google/use-cases/science'),
        r('RDKit documentation', 'https://www.rdkit.org/docs/'),
      ],
      questions: [
        'Which parts of a skill are instructions to the model, and which are deterministic code? Why does that split matter for trust?',
        'Where can a structure change meaning when it passes between two file formats?',
      ],
    },
    {
      title: 'Compound and Bioactivity Data',
      theme: 'Public databases, assay context and provenance',
      topics: ['ChEMBL data model', 'PubChem', 'Assay types, units and confidence scores', 'Why an activity value is meaningless without its assay'],
      lab: 'Have an agent retrieve a compound series with measured activities, then audit every record by hand against its ChEMBL assay entry.',
      readings: [
        r('ChEMBL database', 'https://www.ebi.ac.uk/chembl/'),
        r('PubChem', 'https://pubchem.ncbi.nlm.nih.gov/'),
        r('Small Molecule Generation and ADMET (Life Sciences AI Handbook)', `${HANDBOOK}/therapeutics/small-molecules.html`),
      ],
      questions: [
        'Your agent returns 400 compounds with IC50 values. What has to be true before those numbers belong in one table?',
        'Which records did the agent silently drop, and how would you know?',
      ],
    },
    {
      title: 'Curation and Descriptors',
      theme: 'The step that decides whether anything downstream is real',
      topics: ['Structure standardisation and salt stripping', 'Duplicates and stereochemistry', 'Unit harmonisation and activity aggregation', 'Descriptors and fingerprints'],
      lab: 'Curate the Week 2 dataset with an agent, documenting every filter and its effect on the row count, then reproduce the curation independently in RDKit.',
      readings: [
        r('An open source chemical structure curation pipeline using RDKit (Bento et al., J Cheminform, 2020)', 'https://doi.org/10.1186/s13321-020-00456-1'),
      ],
      questions: [
        'Which curation decisions are conventions, and which are judgement calls that should be reported?',
        'Your curated set and the agent’s differ by 30 compounds. How do you find out who is right?',
      ],
    },
    {
      title: 'Structure–Activity Analysis',
      theme: 'Matched molecular pairs and scaffolds',
      topics: ['Matched molecular pair analysis', 'Scaffold and R-group analysis', 'Property–activity relationships', 'Activity cliffs'],
      lab: 'Reproduce a published matched molecular pair finding on your curated set, and plot the property–activity relationship it rests on.',
      readings: [
        r('Computationally Efficient Algorithm to Identify Matched Molecular Pairs (MMPs) in Large Data Sets (Hussain & Rea, J Chem Inf Model, 2010)', 'https://doi.org/10.1021/ci900450m'),
        r('Agentic cheminformatics with Google Antigravity (Google DeepMind, 2026)', 'https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/'),
      ],
      questions: [
        'A matched pair analysis says a substitution raises potency. How many pairs, and how large an effect, would you need before acting on it?',
        'When does an apparent trend come from the chemistry, and when from how the set was assembled?',
      ],
    },
    {
      title: 'Predictive Models and Honest Validation',
      theme: 'Splits, baselines and the applicability domain',
      topics: ['Random, scaffold and chronological splits', 'Baselines and null models', 'Metrics for narrow dynamic ranges', 'Applicability domain and uncertainty'],
      lab: 'Build potency models with an agent under scaffold and chronological splits, compare them with a simple baseline, and report where each model should not be used.',
      readings: [
        r('Best Practices for QSAR Model Development, Validation, and Exploitation (Tropsha, Mol Inf, 2010)', 'https://doi.org/10.1002/minf.201000061'),
        r('MoleculeNet: a benchmark for molecular machine learning (Wu et al., Chem Sci, 2018)', 'https://doi.org/10.1039/C7SC02664A'),
      ],
      questions: [
        'Your scaffold-split model scores far below the random-split version. Which number do you report, and why?',
        'Inter-lab assay noise sets a ceiling on any model trained on pooled data. How would you estimate that ceiling?',
      ],
      assignment: 'Curation and modelling report: the dataset, every curation decision, model results under each split, and the applicability domain.',
    },
    {
      title: 'Appraising Agentic Chemistry and Capstone',
      theme: 'What an agent’s chemistry output is evidence of',
      topics: ['Reading an agentic chemistry case study', 'Computational designs as testable hypotheses', 'Provenance, logs and reproducibility', 'Human review and sign-off'],
      lab: 'Capstone: present your curated dataset, validated model and a written appraisal of the published case study against its own evidence.',
      readings: [
        r('Agentic cheminformatics with Google Antigravity (Google DeepMind, 2026)', 'https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/'),
        r('Case study: Docking Benchmark Failure (Life Sciences AI Handbook)', `${HANDBOOK}/appendices/case-studies.html#sec-case-docking-benchmark`),
        r('Reproducibility and Open Science (Life Sciences AI Handbook)', `${HANDBOOK}/governance/reproducibility.html`),
      ],
      questions: [
        'The case study reports an hour-long workflow. Which of its steps carry experimental evidence, and which are predictions awaiting it?',
        'Sparse data, inter-lab noise and narrow dynamic ranges are stated limits. Which of your own results do they bound?',
        'What would a chemist need from your capstone to act on it, and what would you tell them not to rely on?',
      ],
      assignment: 'Capstone project and presentation.',
    },
  ],
  competencies: [
    { code: 'F3', how: 'Driving agent skills, RDKit, ChEMBL and PubChem correctly for a defined question.' },
    { code: 'B3', how: 'Curating structures and bioactivity data to a documented, reproducible standard.' },
    { code: 'D3', how: 'Validating models with scaffold and chronological splits, baselines and an applicability domain.' },
    { code: 'H3', how: 'Reproducing agent output independently in Python and RDKit.' },
    { code: 'K3', how: 'Reporting chemistry results with their uncertainty and their limits.' },
    { code: 'J3', how: 'Keeping provenance and logs so an analysis can be audited.' },
  ],
  assessment: [
    { item: 'Weekly labs', weight: 30, description: 'Five labs, each submitted with the agent transcript and an independent check of its output.' },
    { item: 'Curation and modelling report', weight: 25, description: 'Dataset, curation decisions, model validation and applicability domain (Week 5).' },
    { item: 'Capstone', weight: 35, description: 'Curated dataset, validated model and a written appraisal of the published case study (Week 6).' },
    { item: 'Participation', weight: 10, description: 'Attendance, discussion and forum contributions.' },
  ],
  aiPolicyExtra: [
    'This course is built on agent use, so the usual disclosure is not enough: every submission includes the agent transcript and the code the agent ran. Each structure, activity value and model number must be traceable to a primary record, and anything you cannot trace is reported as unverified rather than quietly dropped.',
  ],
  resources: [
    { label: 'Agentic cheminformatics with Google Antigravity (Google DeepMind)', href: 'https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/' },
    { label: 'Science Skills repository', href: 'https://github.com/google-deepmind/science-skills' },
    { label: 'Antigravity for science', href: 'https://antigravity.google/use-cases/science' },
    { label: 'RDKit documentation', href: 'https://www.rdkit.org/docs/' },
    { label: 'ChEMBL', href: 'https://www.ebi.ac.uk/chembl/' },
    { label: 'PubChem', href: 'https://pubchem.ncbi.nlm.nih.gov/' },
    { label: 'The Life Sciences AI Handbook: small molecules and ADMET', href: `${HANDBOOK}/therapeutics/small-molecules.html` },
  ],
}
