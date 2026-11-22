/**
 * Agentic AI for Antimicrobial Peptide Discovery.
 *
 * Built around the published DeepMind walkthrough, which mines natural
 * bacteriocins out of sequence databases and corroborates one candidate with
 * structural, genomic and literature evidence. The course follows that shape:
 * search, novelty, structure, genomic context, then the wet-lab validation
 * that decides. Learners work on natural sequences and the evidence for them;
 * the course does not generate new peptides.
 *
 * Week 6 adds the responsible-disclosure and dual-use review that the source
 * walkthrough does not cover.
 *
 * All links checked; journal references confirmed against Crossref.
 */

import type { Course, Reading } from './courses'

const HANDBOOK = 'https://lifesciencesaihandbook.com'
const BLOG = 'https://deepmind.google/blog/accelerating-antimicrobial-discovery/'

const r = (title: string, href: string): Reading => ({ title, href })

export const ampDiscovery: Course = {
  slug: 'agentic-ai-antimicrobial-peptide-discovery',
  title: 'Agentic AI for Antimicrobial Peptide Discovery',
  level: 'Advanced',
  weeks: 6,
  summary:
    'Mine natural antimicrobial peptides out of sequence databases with agent skills, and build the evidence case that decides whether a candidate reaches the bench.',
  overview: [
    'Antimicrobial resistance is one of the clearest places where a faster search would matter, and the sequence databases already hold millions of proteins nobody has characterised. Agent skills can now work that space: query UniProt, check novelty against curated entries, pull an AlphaFold model, search for remote structural homologs with Foldseek, and read the genomic neighbourhood around a candidate gene.',
    'This course follows the published DeepMind walkthrough that found a bacteriocin candidate in Streptococcus pseudopneumoniae, and treats it as a method to be reproduced and questioned rather than a result to admire. Learners run the same search on their own target, assemble an evidence table for each candidate, and write the wet-lab plan that would confirm or kill it. The work stays on natural sequences and the evidence for them: the walkthrough itself ends with "it still requires wet lab validation", and this course is about building the case that makes such a test worth running.',
    'It connects directly to DeepBio’s own AMR research programs, which is where a credible candidate from this course would go next.',
  ],
  prerequisites:
    'Comfort with sequence databases and the command line, and basic microbiology. Agentic AI for Computational Biology is helpful but not required. Needs an agent client that supports the open Agent Skills standard, with the Science skills installed; setup is covered in Week 1.',
  tools: ['Science skills', 'UniProt', 'EMBL-EBI BLAST', 'AlphaFold DB', 'Foldseek', 'InterPro', 'DBAASP'],
  objectives: [
    'Explain where natural antimicrobial peptides come from, how bacteriocins are organised in the genome, and the main mechanisms by which they act.',
    'Drive agent skills to search UniProt and narrow millions of entries to a defensible candidate list, recording every filter.',
    'Separate manually reviewed annotation from automatic and model-predicted annotation, and weight each accordingly.',
    'Assess novelty with sequence homology, and state what a lack of hits does and does not establish.',
    'Corroborate a functional hypothesis with predicted structure, remote structural homology and genomic context, reading confidence metrics correctly.',
    'Write a wet-lab validation plan with susceptibility testing, target engagement and selectivity, and decision rules fixed in advance.',
    'Appraise a published agentic discovery claim, and apply responsible-disclosure and dual-use review before sharing results.',
  ],
  syllabus: [
    {
      title: 'Peptide Antibiotics and the Search Problem',
      theme: 'Why mine sequence space, and what a credible candidate looks like',
      topics: ['The AMR burden', 'Bacteriocins and host-defence peptides', 'Mechanisms: membranes, Lipid II, cell division', 'Why most computational hits fail'],
      lab: 'Install the Science skills and annotate a characterised bacteriocin end to end, so you know what good evidence looks like before searching for new candidates.',
      readings: [
        r('Accelerating the search for antimicrobial peptides with Google Antigravity (Google DeepMind, 2026)', BLOG),
        r('Mining human microbiomes reveals an untapped source of peptide antibiotics (Torres et al., Cell, 2024)', 'https://doi.org/10.1016/j.cell.2024.07.027'),
        r('DBAASP: database of antimicrobial activity and structure of peptides', 'https://dbaasp.org/'),
        r('APD3: the Antimicrobial Peptide Database', 'https://aps.unmc.edu/'),
      ],
      questions: [
        'What evidence would you need before calling a sequence an antimicrobial peptide rather than a protein of unknown function?',
        'Which steps in this workflow are genuinely faster with an agent, and which only look faster?',
      ],
    },
    {
      title: 'Mining Sequence Space',
      theme: 'From millions of unannotated entries to a handful of candidates',
      topics: ['UniProtKB/TrEMBL versus Swiss-Prot', 'Automatic annotation and ProtNLM predictions', 'InterPro family signatures', 'Designing and recording a filter cascade'],
      lab: 'Run the walkthrough’s narrowing on a target genus of your own, logging the count after every filter and the reason for it.',
      readings: [
        r('UniProt: ProtNLM automatic annotation', 'https://www.uniprot.org/help/ProtNLM'),
        r('UniProt entry A0A0U0D591 (the walkthrough’s candidate)', 'https://www.uniprot.org/uniprotkb/A0A0U0D591/entry'),
        r('InterPro', 'https://www.ebi.ac.uk/interpro/'),
        r('Identification of antimicrobial peptides from the human gut microbiome using deep learning (Ma et al., Nature Biotechnology, 2022)', 'https://doi.org/10.1038/s41587-022-01226-0'),
      ],
      questions: [
        'ProtNLM names a protein you have never seen characterised. What is that name evidence of?',
        'Your filters cut a million entries to twelve. Which of those filters would a reviewer challenge first?',
      ],
    },
    {
      title: 'Novelty and Homology',
      theme: 'Is this candidate actually new, and new compared with what?',
      topics: ['BLAST against Swiss-Prot', 'E-values and alignment coverage', 'Remote homology and the twilight zone', 'Multiple sequence alignment of a peptide family'],
      lab: 'Assess your candidates for novelty, then align one family and mark the residues conserved across it.',
      readings: [
        r('EMBL-EBI Job Dispatcher: programmatic access', 'https://www.ebi.ac.uk/Tools/common/tools/help/'),
      ],
      questions: [
        '"No meaningful homolog among reviewed proteins" — what does that sentence actually rule out?',
        'When is a close homolog good news for a candidate rather than bad?',
      ],
    },
    {
      title: 'Structure and Genomic Context as Evidence',
      theme: 'Corroborating a functional hypothesis from two independent directions',
      topics: ['AlphaFold models, pLDDT and PAE', 'Foldseek remote structural homology', 'Superposition and fold comparison', 'Operon context: transporters, immunity and regulators'],
      lab: 'Build the evidence table for your lead: predicted structure with its confidence, structural homologs, and the genes flanking it, with each line marked as support, neutral or against.',
      readings: [
        r('AlphaFold Protein Structure Database', 'https://alphafold.ebi.ac.uk/'),
        r('Foldseek structure search', 'https://search.foldseek.com/search'),
        r('Protein Structure Prediction (Life Sciences AI Handbook)', `${HANDBOOK}/molecular/protein-structure.html`),
      ],
      questions: [
        'A candidate sits beside a transporter and a regulator. How much does that arrangement add to the functional case, and what else could explain it?',
        'The model is confident in one region and not another. Which parts of your argument survive that?',
      ],
    },
    {
      title: 'From Computational Lead to Testable Hypothesis',
      theme: 'Designing the experiments that would settle it',
      topics: ['Expression and peptide synthesis routes', 'Susceptibility testing: MIC, broth microdilution, EUCAST and CLSI methods', 'Target engagement', 'Selectivity: haemolysis and mammalian cytotoxicity', 'Stability in salt and serum'],
      lab: 'Write the validation plan for your lead: assays, controls, reference strains, the selectivity window you require, and the result that would end the project.',
      readings: [
        r('EUCAST susceptibility testing guidance', 'https://www.eucast.org/'),
        r('DBAASP v3: database of antimicrobial/cytotoxic activity and structure of peptides (Pirtskhalava et al., Nucleic Acids Research)', 'https://doi.org/10.1093/nar/gkaa991'),
      ],
      optionalReadings: [
        r('Accelerated antimicrobial discovery via deep generative models and molecular dynamics (Das et al., Nature Biomedical Engineering, 2021)', 'https://doi.org/10.1038/s41551-021-00689-x'),
        r('Discovery of a structural class of antibiotics with explainable deep learning (Wong et al., Nature, 2023)', 'https://doi.org/10.1038/s41586-023-06887-8'),
      ],
      questions: [
        'Activity against a pathogen means little without selectivity. What ratio would you require before taking a peptide further, and why that number?',
        'Which single experiment would most cheaply kill your candidate, and should it therefore be first?',
      ],
      assignment: 'Validation plan: assays, controls, selectivity criteria and stopping rules for one candidate.',
    },
    {
      title: 'Appraisal, Responsible Disclosure and Capstone',
      theme: 'What the computational case supports, and what to publish',
      topics: ['Appraising the published walkthrough on its own evidence', 'Failure modes: annotation transfer, homology overreach, misread confidence', 'Provenance and reproducible agent runs', 'Dual-use review and responsible disclosure'],
      lab: 'Capstone: present a candidate dossier — search record, evidence table, validation plan and a written appraisal of both your case and the published one.',
      readings: [
        r('Accelerating the search for antimicrobial peptides with Google Antigravity (Google DeepMind, 2026)', BLOG),
        r('Information Hazards in Capability Research (Life Sciences AI Handbook)', `${HANDBOOK}/governance/information-hazards.html`),
        r('Reproducibility and Open Science (Life Sciences AI Handbook)', `${HANDBOOK}/governance/reproducibility.html`),
      ],
      questions: [
        'The walkthrough reports no wet-lab results. Which of its claims are therefore still open, and which would you already act on?',
        'Antibiotic discovery is published openly, and openness is part of why it works. Where, if anywhere, does that change for this work, and who should decide?',
        'What would a microbiologist need from your dossier to start at the bench tomorrow?',
      ],
      assignment: 'Capstone dossier and presentation.',
    },
  ],
  competencies: [
    { code: 'A3', how: 'Working at depth in peptide antibiotics, bacteriocin biology and resistance.' },
    { code: 'F3', how: 'Driving UniProt, BLAST, InterPro, AlphaFold DB and Foldseek through agent skills.' },
    { code: 'B3', how: 'Recording a search and filter cascade so another group can repeat it.' },
    { code: 'C3', how: 'Turning a sequence hit into a testable hypothesis aimed at an unmet clinical need.' },
    { code: 'K3', how: 'Writing a candidate dossier that a bench microbiologist can act on.' },
    { code: 'J3', how: 'Applying provenance, responsible-disclosure and dual-use review before sharing results.' },
  ],
  assessment: [
    { item: 'Weekly labs', weight: 30, description: 'Five labs, each submitted with the agent transcript and an independent check of its output.' },
    { item: 'Validation plan', weight: 25, description: 'Assays, controls, selectivity criteria and stopping rules for one candidate (Week 5).' },
    { item: 'Capstone dossier', weight: 35, description: 'Search record, evidence table, validation plan and written appraisal (Week 6).' },
    { item: 'Participation', weight: 10, description: 'Attendance, discussion and forum contributions.' },
  ],
  aiPolicyExtra: [
    'Agent output in this course is annotation, and annotation carries an evidence level. Every claim in a submission states its source and whether it came from a manually reviewed record, an automatic annotation, a model prediction or the agent itself. A predicted protein name presented as a characterised function is marked wrong, however the agent phrased it.',
  ],
  resources: [
    { label: 'Accelerating the search for antimicrobial peptides with Google Antigravity (Google DeepMind)', href: BLOG },
    { label: 'Science Skills repository', href: 'https://github.com/google-deepmind/science-skills' },
    { label: 'UniProt', href: 'https://www.uniprot.org/' },
    { label: 'DBAASP: antimicrobial peptide database', href: 'https://dbaasp.org/' },
    { label: 'APD3: Antimicrobial Peptide Database', href: 'https://aps.unmc.edu/' },
    { label: 'DRAMP: data repository of antimicrobial peptides', href: 'http://dramp.cpu-bioinfor.org/' },
    { label: 'AlphaFold Protein Structure Database', href: 'https://alphafold.ebi.ac.uk/' },
    { label: 'Foldseek structure search', href: 'https://search.foldseek.com/search' },
    { label: 'EUCAST', href: 'https://www.eucast.org/' },
  ],
}
