/**
 * Agentic AI for Drug Discovery.
 *
 * The target-and-evidence half of the pipeline, deliberately complementary to
 * Agentic Cheminformatics: that course starts from compounds, this one starts
 * from targets and ends at a go/no-go decision record. Built on the Science
 * skills for Open Targets, ChEMBL, Reactome, STRING, ClinicalTrials.gov and
 * openFDA.
 *
 * All links checked; journal references confirmed against Crossref (years as
 * Crossref reports them, which for a few titles is the online year rather than
 * the issue year).
 */

import type { Course, Reading } from './courses'

const HANDBOOK = 'https://lifesciencesaihandbook.com'

const r = (title: string, href: string): Reading => ({ title, href })

export const agenticDrugDiscovery: Course = {
  slug: 'agentic-ai-drug-discovery',
  title: 'Agentic AI for Drug Discovery',
  level: 'Advanced',
  weeks: 8,
  summary:
    'Assemble the evidence behind a drug target with agent skills — genetics, pathways, tractability, chemical matter, trials and safety — and turn it into a decision someone can defend.',
  overview: [
    'Most drug programs fail, and they usually fail for reasons that were visible in the evidence before the program started: a target whose genetic support was thin, a mechanism with no modality to act on it, a safety signal already present in the literature. Agent skills can now assemble that evidence quickly — Open Targets for target–disease associations, Reactome and STRING for mechanism, ChEMBL for chemical matter, ClinicalTrials.gov for the clinical landscape, openFDA for safety reports.',
    'Assembling it quickly is not the hard part. This course is about weighing it. Each week adds one layer of evidence to a target dossier and asks what that layer is worth: which evidence types actually predict approval, what an association score is and is not, when a trial landscape means a target is validated and when it means it is crowded, and why a disproportionality signal in a spontaneous reporting system is a hypothesis rather than a finding.',
    'It starts where Agentic Cheminformatics does not: that course works from compounds, this one from targets, and the two meet at tractability in Week 4.',
  ],
  prerequisites:
    'Graduate-level molecular biology or pharmacology, and basic statistics. Agentic AI for Computational Biology is helpful but not required. Needs an agent client that supports the open Agent Skills standard, with the Science skills installed; setup is covered in Week 1.',
  tools: ['Science skills', 'Open Targets', 'ChEMBL', 'Reactome', 'STRING', 'ClinicalTrials.gov', 'openFDA'],
  objectives: [
    'Describe where drug programs fail and which decisions the evidence has to support.',
    'Assemble target–disease evidence with agent skills, and distinguish genetic, expression, pathway and literature evidence by what each predicts.',
    'Turn a ranked target into a written target hypothesis stating disease context, direction of effect, mechanism, modality and safety rationale.',
    'Assess tractability from structure and known chemical matter, and match a modality to a mechanism.',
    'Build and critique a repurposing hypothesis against the reasons repurposing usually fails.',
    'Read a trial landscape and a spontaneous adverse-event reporting system for what each can and cannot establish.',
    'Write a go/no-go decision record with criteria fixed before the evidence was gathered.',
  ],
  syllabus: [
    {
      title: 'The Pipeline and Its Decisions',
      theme: 'Where programs fail, and which questions the evidence must answer',
      topics: ['Attrition by phase and by cause', 'The decision points: target, modality, candidate, trial', 'Setting up the Science skills', 'What an agent speeds up, and what it does not'],
      lab: 'Trace an approved drug backwards — label, trials, chemistry, target — and mark which evidence existed before the program began.',
      readings: [
        r('Estimation of clinical trial success rates and related parameters (Wong et al., Biostatistics, 2018)', 'https://doi.org/10.1093/biostatistics/kxx069'),
        r('Target Identification and Prioritization (Life Sciences AI Handbook)', `${HANDBOOK}/therapeutics/targets.html`),
        r('Science Skills (Google DeepMind)', 'https://github.com/google-deepmind/science-skills'),
      ],
      questions: [
        'Which failures in your traced drug’s history were foreseeable, and from what evidence?',
        'Where in this pipeline would a wrong answer be cheapest to discover?',
      ],
    },
    {
      title: 'Target–Disease Evidence',
      theme: 'What an association score is made of',
      topics: ['Open Targets evidence types and scoring', 'Genetic evidence and approval rates', 'Expression and literature evidence', 'Confounding by study volume'],
      lab: 'Build the first layer of a target dossier for a disease of your choice, with each evidence type recorded separately rather than as one score.',
      readings: [
        r('The next-generation Open Targets Platform (Ochoa et al., Nucleic Acids Research, 2022)', 'https://doi.org/10.1093/nar/gkac1046'),
        r('The support of human genetic evidence for approved drug indications (Nelson et al., Nature Genetics, 2015)', 'https://doi.org/10.1038/ng.3314'),
        r('Are drug targets with genetic support twice as likely to be approved? (King et al., PLOS Genetics, 2019)', 'https://doi.org/10.1371/journal.pgen.1008489'),
      ],
      questions: [
        'Genetic support raises the probability of approval. By how much, and does that hold for your disease area?',
        'A target scores highly largely on literature evidence. What might that be measuring instead of biology?',
      ],
    },
    {
      title: 'From Score to Target Hypothesis',
      theme: 'Mechanism, direction of effect and the sentence you have to be able to write',
      topics: ['Disease context and patient population', 'Direction of effect: inhibit, activate, degrade', 'Pathways and networks with Reactome and STRING', 'Safety rationale from biology'],
      lab: 'Convert your top-ranked target into a written target hypothesis, and have the agent argue the opposite case against it.',
      readings: [
        r('Reactome pathway database', 'https://reactome.org/'),
        r('STRING protein–protein interaction database', 'https://string-db.org/'),
      ],
      questions: [
        'If knocking the target down helps, what does that predict about people who carry a loss-of-function variant?',
        'Which part of your hypothesis would be hardest to abandon if the evidence turned, and why?',
      ],
    },
    {
      title: 'Tractability and Chemical Matter',
      theme: 'Can this target be drugged, and with what',
      topics: ['Structural tractability and binding sites', 'Known actives and chemical probes in ChEMBL', 'Modality choice: small molecule, biologic, degrader, oligonucleotide', 'Tool compound quality'],
      lab: 'Assess three targets for tractability and recommend a modality for each, stating what would change your mind.',
      readings: [
        r('ChEMBL database', 'https://www.ebi.ac.uk/chembl/'),
        r('Small Molecule Generation and ADMET (Life Sciences AI Handbook)', `${HANDBOOK}/therapeutics/small-molecules.html`),
      ],
      questions: [
        'A target has no known binders. Is that an opportunity or a warning, and what distinguishes the two?',
        'Which modality does your mechanism actually require, rather than the one your team knows best?',
      ],
      assignment: 'Target dossier, part one: evidence, hypothesis and tractability for one target.',
    },
    {
      title: 'Repurposing',
      theme: 'Reusing approved drugs, and why it works less often than it looks',
      topics: ['Mechanism-led versus signature-led repurposing', 'Dose and exposure at the new indication', 'Intellectual property and development incentives', 'Failure modes'],
      lab: 'Build a repurposing hypothesis with the agent, then write the strongest case against it.',
      readings: [
        r('Drug repurposing: progress, challenges and recommendations (Pushpakom et al., Nature Reviews Drug Discovery, 2018)', 'https://doi.org/10.1038/nrd.2018.168'),
        r('Drug Repurposing and Combination Therapy (Life Sciences AI Handbook)', `${HANDBOOK}/therapeutics/repurposing-combinations.html`),
      ],
      questions: [
        'In-vitro activity at 10 µM for a drug that reaches 0.1 µM in plasma: what has actually been shown?',
        'Why do so many computational repurposing hits never reach a trial?',
      ],
    },
    {
      title: 'Clinical Landscape and Safety Signals',
      theme: 'What trials and adverse-event reports can establish',
      topics: ['Reading a trial landscape: phase, sponsor, endpoints, status', 'Endpoint choice and what it commits you to', 'openFDA and FAERS', 'Reporting bias, disproportionality and why a signal is not a finding'],
      lab: 'Produce the trial landscape and safety review for your target, separating what the data shows from what it merely suggests.',
      readings: [
        r('ClinicalTrials.gov', 'https://clinicaltrials.gov/'),
        r('openFDA: FAERS data and its limitations', 'https://open.fda.gov/data/faers/'),
        r('FDA: questions and answers on FAERS', 'https://www.fda.gov/drugs/surveillance/questions-and-answers-fdas-adverse-event-reporting-system-faers'),
        r('Clinical Trial AI for Translational Research (Life Sciences AI Handbook)', `${HANDBOOK}/therapeutics/clinical-trials.html`),
      ],
      questions: [
        'Twelve trials against your target have completed and none reported. What do you conclude?',
        'FAERS shows a strong disproportionality signal. List three explanations before you reach for causation.',
      ],
    },
    {
      title: 'Translational Evidence and Failure Modes',
      theme: 'Why the step from target to patient breaks',
      topics: ['Model-to-human gaps', 'Biomarkers and context of use', 'Patient selection and subgroups', 'Reading an AI-discovered drug claim'],
      lab: 'Write the translational risk assessment for your target: what must be true in humans, and what would show it early.',
      readings: [
        r('Translational Evidence and Failure Modes (Life Sciences AI Handbook)', `${HANDBOOK}/therapeutics/translation-failures.html`),
        r('Diagnostics and Biomarker Translation (Life Sciences AI Handbook)', `${HANDBOOK}/therapeutics/diagnostics-biomarkers.html`),
        r('Case study: AI-Discovered Drug in Phase IIa', `${HANDBOOK}/appendices/case-studies.html#sec-case-rentosertib-phase-2a`),
      ],
      questions: [
        'Which single translational assumption, if wrong, kills your program latest and most expensively?',
        'What would a biomarker have to do before it could select patients for your trial?',
      ],
    },
    {
      title: 'The Decision Record and Capstone',
      theme: 'Committing to criteria before you see the answer',
      topics: ['Go, no-go, or hold, with pre-stated criteria', 'Provenance: every claim to a source', 'Declaring uncertainty to a decision-maker', 'Conflicts, incentives and disclosure'],
      lab: 'Capstone: present the full target dossier and a decision record whose criteria were fixed in Week 4.',
      readings: [
        r('Evaluation Principles for Life Sciences AI (Life Sciences AI Handbook)', `${HANDBOOK}/foundations/evaluation-principles.html`),
        r('Reproducibility and Open Science (Life Sciences AI Handbook)', `${HANDBOOK}/governance/reproducibility.html`),
      ],
      questions: [
        'Your criteria from Week 4 now rule against a target you like. What do you do, and what does that tell you about the criteria?',
        'Which parts of your dossier came from an agent without a primary source behind them?',
      ],
      assignment: 'Capstone: target dossier and go/no-go decision record, with presentation.',
    },
  ],
  competencies: [
    { code: 'C3', how: 'Turning assembled evidence into a defensible research or program decision.' },
    { code: 'F3', how: 'Driving Open Targets, ChEMBL, Reactome, STRING, ClinicalTrials.gov and openFDA through agent skills.' },
    { code: 'D3', how: 'Weighing evidence types by what each predicts, and reading signals against their biases.' },
    { code: 'A3', how: 'Working at depth in target biology, mechanism and modality.' },
    { code: 'K3', how: 'Writing a dossier and decision record for a decision-maker, with uncertainty stated.' },
    { code: 'J3', how: 'Keeping provenance, and declaring conflicts and incentives around a recommendation.' },
  ],
  assessment: [
    { item: 'Weekly labs', weight: 30, description: 'Seven labs, each submitted with the agent transcript and an independent check of its output.' },
    { item: 'Target dossier, part one', weight: 20, description: 'Evidence, target hypothesis and tractability, with decision criteria fixed in advance (Week 4).' },
    { item: 'Capstone', weight: 40, description: 'Complete dossier and go/no-go decision record, with presentation (Week 8).' },
    { item: 'Participation', weight: 10, description: 'Attendance, discussion and forum contributions.' },
  ],
  aiPolicyExtra: [
    'A dossier is only as good as its provenance, so every claim in a submission names its source and its evidence type. Where the agent summarised or inferred rather than retrieved, say so. Decision criteria are recorded in Week 4 and submitted unchanged with the capstone; revising them after seeing the evidence is the failure this course exists to prevent, and doing it silently is treated as an integrity issue.',
  ],
  resources: [
    { label: 'Open Targets Platform', href: 'https://platform.opentargets.org/' },
    { label: 'ChEMBL', href: 'https://www.ebi.ac.uk/chembl/' },
    { label: 'Reactome', href: 'https://reactome.org/' },
    { label: 'STRING', href: 'https://string-db.org/' },
    { label: 'ClinicalTrials.gov', href: 'https://clinicaltrials.gov/' },
    { label: 'openFDA', href: 'https://open.fda.gov/' },
    { label: 'Science Skills repository', href: 'https://github.com/google-deepmind/science-skills' },
    { label: 'The Life Sciences AI Handbook: therapeutic discovery', href: `${HANDBOOK}/therapeutics/targets.html` },
  ],
}
