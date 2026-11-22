/**
 * Foundation Models for Biological Discovery: Evidence, Evaluation, and Translation.
 *
 * Adapted from the Course Syllabus appendix of The Life Sciences AI Handbook
 * (Tegomoh, 2026), licensed CC BY 4.0:
 * https://lifesciencesaihandbook.com/appendices/course-syllabus.html
 * Readings link to the handbook chapter or case study they name.
 */

import type { Course, Reading } from './courses'

const HANDBOOK = 'https://lifesciencesaihandbook.com'

const ch = (title: string, path: string): Reading => ({ title, href: `${HANDBOOK}/${path}` })
const caseStudy = (title: string, anchor: string): Reading => ({
  title: `Case study: ${title}`,
  href: `${HANDBOOK}/appendices/case-studies.html#${anchor}`,
})

export const aiBiologicalDiscovery: Course = {
  slug: 'foundation-models-for-biological-discovery',
  title: 'Foundation Models for Biological Discovery: Evidence, Evaluation, and Translation',
  level: 'Advanced',
  weeks: 12,
  summary:
    'A seminar course on reading, testing and acting on AI claims in biology, from protein structure and variant effects to clinical translation and self-driving laboratories.',
  format:
    'One 2-hour seminar per week (24 contact hours over 12 weeks), with about 4 hours of reading and assignment work outside class.',
  primaryText: {
    citation:
      'Tegomoh, B. (2026). The Life Sciences AI Handbook: Evidence for AI in Biology and Drug Discovery.',
    href: HANDBOOK,
    doi: '10.5281/zenodo.22073135',
  },
  overview: [
    'AI models now predict protein structures, score variants, embed cells and propose molecules. This seminar teaches researchers to judge those outputs: what evidence a model claim needs, how to read its confidence, and which experiments turn a prediction into a research or program decision.',
    'Each week pairs chapters of The Life Sciences AI Handbook with case studies and discussion, moving from data and evaluation through molecules, genomes, cells, tissues and therapeutics to self-driving laboratories, reproducibility and information hazards.',
  ],
  prerequisites:
    'Undergraduate coursework in biology, biochemistry or chemistry, and introductory statistics. No prior AI knowledge required.',
  objectives: [
    'Explain how data infrastructure, pretraining, and task definition limit what a biological AI model can learn.',
    'Match a model claim to the split, baseline, metric, and experimental evidence that could support it.',
    'Read confidence outputs for structure, sequence, variant, and cell models without treating predictions as measurements.',
    'Distinguish demonstrated, theoretical, and beyond-current capabilities across molecular, cellular, organismal, and therapeutic applications.',
    'Design the experiments that would move a model prediction to a research or program decision.',
    'Evaluate claims about self-driving laboratories and agentic research systems for loop completeness, provenance, and human control.',
    'Apply reproducibility and information-hazard standards to AI-biology work before it is shared or published.',
  ],
  syllabus: [
    {
      title: 'What AI Has Changed in Biology',
      theme: 'Current models in the longer history of computational biology',
      readings: [
        ch('AI for the Life Sciences', 'foundations/ai-for-life-sciences.html'),
        ch('History of AI in the Life Sciences', 'foundations/history.html'),
        ch('Executive Summary', 'executive-summary.html'),
      ],
      objectives: [
        'Define life sciences AI as a discovery layer whose outputs remain hypotheses until evidence supports them.',
        'Explain why shared data, benchmarks, and well-posed biological tasks changed which methods mattered.',
        'Use history to calibrate new model claims without treating novelty as proof.',
      ],
      questions: [
        'What made protein structure prediction tractable for machine learning, and which other biological problems share those conditions?',
        'What would have to be true for a model output to change a decision in your own research program?',
        'Which AI-biology claims from the past five years would you now treat as demonstrated, and which remain projections?',
      ],
    },
    {
      title: 'Data, Foundation Models, and Literature AI',
      theme: 'Why data infrastructure sets the ceiling on model quality',
      readings: [
        ch('Biological Data Infrastructure', 'foundations/data-infrastructure.html'),
        ch('Foundation Models for Biology', 'foundations/foundation-models.html'),
        ch('Biomedical Knowledge Graphs and Literature AI', 'foundations/knowledge-and-literature.html'),
      ],
      objectives: [
        'Explain how provenance, metadata, negative data, assay context, and versioning determine what a model can learn.',
        'Describe how pretraining on sequences, structures, cells, and genomes changes representation learning, and why pretraining alone does not make a model a reasoning system.',
        'Assess literature and knowledge-graph tools by provenance, entity resolution, and citation boundaries.',
      ],
      questions: [
        'Your laboratory’s assay data will train a model. Which metadata would another group need to reuse it?',
        'When should a foundation model’s representation outperform a task-specific model, and how would you test it?',
        'A literature tool returns a confident answer with citations. What do you check before relying on it?',
      ],
    },
    {
      title: 'Evaluating Biological AI',
      theme: 'Matching the evidence to the claim',
      readings: [
        ch('Evaluation Principles for Life Sciences AI', 'foundations/evaluation-principles.html'),
        ch('Benchmarks for Bio AI', 'governance/benchmarks.html'),
        ch('Practical Evaluation Workflows and Worksheets', 'practical/evaluation-workflows.html'),
        caseStudy('Docking Benchmark Failure', 'sec-case-docking-benchmark'),
      ],
      objectives: [
        'Match a biological or translational claim to the split, comparator, validity checks, and uncertainty analysis that can support it.',
        'Identify leakage, weak baselines, and metric choices that inflate reported performance.',
        'Convert an evaluation result into a bounded adopt, revise, reject, or monitor decision.',
      ],
      questions: [
        'A paper reports the best score yet on a standard benchmark. What would you check before concluding that the model generalizes to your system?',
        'When should a simple baseline be required, and what should count as beating it?',
        'Which evaluation results justify an experiment, and which justify a program decision?',
      ],
      assignment:
        'Evaluation critique (1,500 words): critically evaluate a published biological AI model paper, using the universal decision record to structure the critique.',
    },
    {
      title: 'Protein Structure and Design',
      theme: 'The best-established capability, and what it does and does not solve',
      readings: [
        ch('Protein Structure Prediction', 'molecular/protein-structure.html'),
        ch('Protein Design and Engineering', 'molecular/protein-design.html'),
        caseStudy('Structure Prediction as a Research Input', 'sec-case-structure-prediction'),
        caseStudy('Protein Binder Design', 'sec-case-protein-binder-design'),
      ],
      optionalReadings: [ch('Antibody and Biologic Design', 'molecular/antibodies.html')],
      objectives: [
        'Judge whether a predicted structure is usable from its confidence scores, conformational state, disorder, and assay context.',
        'Explain when a protein design counts as a result: expression, folding, binding, activity, stability, and specificity measured in the intended context.',
        'Distinguish in-silico confidence filters from experimental measurements.',
      ],
      questions: [
        'A predicted structure shows high confidence across one domain and low confidence elsewhere. How should that change the experiments you plan?',
        'What does a confident structure prediction not tell you about function, dynamics, or ligand binding?',
        'Which experimental results should a design paper report before its designs count as working proteins?',
      ],
    },
    {
      title: 'Genomes and Variant Effects',
      theme: 'Sequence-to-function models and the line between prediction and interpretation',
      readings: [
        ch('Nucleic Acid and Genome Models', 'molecular/genome-models.html'),
        ch('Variant Effect Prediction', 'molecular/variant-effects.html'),
        caseStudy('Variant Interpretation Inside the ACMG Framework', 'sec-case-acmg-variant-interpretation'),
      ],
      objectives: [
        'Judge whether a sequence-based functional claim is supported by tissue, cell type, chromatin, perturbation, and measurement evidence.',
        'Separate pathogenicity, splicing, regulatory effect, protein function, ancestry, and penetrance as distinct evidence layers.',
        'Explain why a variant effect score enters clinical variant interpretation as one line of evidence and does not replace it.',
      ],
      questions: [
        'How should a variant effect score be weighed against functional assay data for the same variant?',
        'Which populations are underrepresented in the data behind the variant predictors you use, and how could that affect your results?',
        'What evidence would show that a regulatory sequence model generalizes to a cell type it was not trained on?',
      ],
    },
    {
      title: 'Cells and Perturbations',
      theme: 'Single-cell foundation models and the counterfactual problem',
      readings: [
        ch('Single-Cell Foundation Models', 'cells/single-cell-models.html'),
        ch('Perturbation Prediction and Virtual Cells', 'cells/virtual-cells.html'),
        caseStudy('Single-Cell Perturbation Forecasting', 'sec-case-single-cell-perturbation'),
        caseStudy('Single-Cell Foundation Model in Practice', 'sec-case-single-cell-foundation-model'),
      ],
      objectives: [
        'Distinguish demonstrated representation, integration, and annotation uses from less established perturbation and mechanistic claims.',
        'Design a task-specific evaluation with biological hold-outs, strong classical baselines, and uncertainty.',
        'Explain why held-out genes, combinations, cell types, donors, and laboratories test different claims.',
      ],
      questions: [
        'A perturbation model matches a linear baseline on held-out genes. What, if anything, has it shown?',
        'Which hold-out design would convince you that a model predicts responses in a cell type it has not seen?',
        'What would a virtual cell model need to demonstrate before its prediction could stand in for an experiment?',
      ],
      assignment: 'Midterm: take-home exam covering Weeks 1–6.',
    },
    {
      title: 'Tissues, Organisms, and Environments (Choose Your Track)',
      theme: 'Applying the same evaluation discipline beyond molecules and cells',
      note: 'Learners choose one or two of these chapters to fit their research.',
      readings: [
        ch('Spatial Omics and Tissue Models', 'cells/spatial-omics.html'),
        ch('Cell Painting and Image-Based Phenotyping', 'cells/cell-painting.html'),
        ch('Histopathology AI', 'cells/histopathology.html'),
        ch('Neuroscience AI and Brain Foundation Models', 'organisms/neuroscience-ai.html'),
        ch('Aging and Longevity Biology AI', 'organisms/aging-longevity.html'),
        ch('Plant, Crop, and Agricultural AI', 'organisms/agriculture-ai.html'),
        ch('Environmental and Ecological AI', 'organisms/environmental-ecology-ai.html'),
        ch('Virtual Organisms and Digital Biology', 'organisms/virtual-organisms.html'),
      ],
      objectives: [
        'Identify how platform, assay, species, and environmental context shape every downstream claim in the chosen domain.',
        'Apply the handbook’s demonstrated, theoretical, and beyond-current tiers to a domain outside molecular biology.',
        'Compare the validation burden across measurement systems.',
      ],
      questions: [
        'Which measurement artifacts in your chosen domain (batch, scanner, staining, recording modality, field conditions) could a model learn in place of biology?',
        'What does a strong result in one species, tissue, or field site establish about another?',
        'Which claim in your chosen chapter is closest to changing practice, and what evidence is still missing?',
      ],
    },
    {
      title: 'Targets and Molecules',
      theme: 'From target scores to compound series',
      readings: [
        ch('Target Identification and Prioritization', 'therapeutics/targets.html'),
        ch('Small Molecule Generation and ADMET', 'therapeutics/small-molecules.html'),
      ],
      optionalReadings: [
        ch('Chemical Biology and Target Engagement', 'therapeutics/chemical-biology.html'),
        ch('Drug Repurposing and Combination Therapy', 'therapeutics/repurposing-combinations.html'),
        ch('mRNA, RNA, and Vaccine Design', 'therapeutics/vaccines.html'),
        ch('Cell and Gene Therapy AI', 'therapeutics/cell-gene-therapy.html'),
      ],
      objectives: [
        'Distinguish a target score from a target hypothesis that states disease context, direction of effect, mechanism, safety rationale, and modality.',
        'Evaluate generated molecules against route feasibility, binding, selectivity, developability, and biological evidence.',
        'Explain how an aggregate metric can hide chemically invalid outputs.',
      ],
      questions: [
        'A model ranks a target highly. What genetic, biological, and safety evidence would you need before committing a program to it?',
        'Why is a compound series, rather than a single generated structure, the unit that matters?',
        'Which ADMET predictions, if any, would you trust enough to skip an assay?',
      ],
    },
    {
      title: 'Translation and Clinical Evidence',
      theme: 'Why AI-supported discovery still fails downstream',
      readings: [
        ch('Translational Evidence and Failure Modes', 'therapeutics/translation-failures.html'),
        ch('Diagnostics and Biomarker Translation', 'therapeutics/diagnostics-biomarkers.html'),
        ch('Clinical Trial AI for Translational Research', 'therapeutics/clinical-trials.html'),
        caseStudy('AI-Discovered Drug in Phase IIa', 'sec-case-rentosertib-phase-2a'),
      ],
      optionalReadings: [ch('Real-World Evidence and Biomarker AI', 'therapeutics/real-world-evidence.html')],
      objectives: [
        'Explain why benchmark success can fail to translate at the target, assay, molecule, toxicology, trial, or patient-subgroup decision.',
        'Weigh context of use, analytical validity, clinical validity, and clinical utility for a candidate biomarker.',
        'Define a context of use and validation record for a clinical-trial AI tool.',
      ],
      questions: [
        'What does a Phase IIa result for an AI-discovered drug show about the contribution of AI, and what does it leave unanswered?',
        'Which translational failure in the readings could better evaluation have caught earlier, and at what step?',
        'At what point does a trial-support model acquire regulatory consequence?',
      ],
      assignment:
        'Validation plan (2,000 words): design the experiments that would move one published model prediction to a research or program decision, with the decision rule stated in advance.',
    },
    {
      title: 'Self-Driving Laboratories and Agentic Science',
      theme: 'Automation, autonomy, and human control',
      readings: [
        ch('Self-Driving Laboratories', 'automation/self-driving-labs.html'),
        ch('Agentic Science Workflows', 'automation/agentic-workflows.html'),
        caseStudy('Closed-Loop Experimentation in Chemistry', 'sec-case-closed-loop-chemistry'),
        caseStudy('Multi-Agent Biology Research', 'sec-case-multi-agent-biology'),
        caseStudy('A-Lab and the Novelty-Claim Discipline', 'sec-case-a-lab-novelty'),
      ],
      optionalReadings: [
        ch('Robotic Lab Automation and Cloud Labs', 'automation/cloud-labs.html'),
        ch('Synthetic Biology Design Tools', 'automation/synbio-tools.html'),
        ch('AI for Biomanufacturing', 'automation/biomanufacturing.html'),
      ],
      objectives: [
        'Distinguish laboratory automation, lab-in-the-loop research, and a closed autonomous experimental loop.',
        'Evaluate a self-driving-laboratory claim for loop completeness, endpoint validity, exception handling, provenance, and independent validation.',
        'Specify the gates that literature retrieval, code execution, laboratory actions, and biological design each require in an agentic workflow.',
      ],
      questions: [
        'How many completed loop iterations should a paper report before it describes a system as autonomous?',
        'Which decisions in an agentic research workflow should always require a person’s sign-off?',
        'How would you verify a claim that an automated platform discovered something new?',
      ],
    },
    {
      title: 'Reproducibility, Information Hazards, and Institutional Readiness',
      theme: 'What a credible AI-biology program has to get right before it publishes',
      readings: [
        ch('Reproducibility and Open Science', 'governance/reproducibility.html'),
        ch('Information Hazards in Capability Research', 'governance/information-hazards.html'),
        ch('Workforce, Compute, and Institutional Readiness', 'governance/workforce-compute.html'),
        caseStudy('AlphaFold 3 Restricted Release and Open-Source Response', 'sec-case-alphafold3-access'),
      ],
      objectives: [
        'Separate computational reproducibility from experimental reproducibility, and specify what each requires.',
        'Apply the disclosure test: whether methods, details, or artifacts meaningfully change access to harmful capability.',
        'Identify the people, compute, data engineering, laboratory access, and governance a credible AI-biology program needs.',
      ],
      questions: [
        'What would another laboratory need to reproduce a result in your field: code, weights, data, protocols, or all of them?',
        'When should a capability result be published in full, in part, or not at all, and who should decide?',
        'What is the smallest team that could carry out the validation plan you wrote in Week 9?',
      ],
    },
    {
      title: 'Practice and Emerging Frontiers',
      theme: 'Choosing tools and reading frontier claims',
      readings: [
        ch('Toolkit for AI-Augmented Bio Research', 'practical/toolkit.html'),
        ch('Emerging Frontiers in AI for the Life Sciences', 'future/emerging.html'),
      ],
      objectives: [
        'Choose tools by modality fit, evidence, license, cost, reproducibility, and data privacy.',
        'Separate near-term frontiers from forecast-driven claims.',
        'Name the evidence that would move a frontier capability from theoretical to demonstrated.',
      ],
      questions: [
        'Which frontier claim in the readings has the strongest evidence today, and which has the weakest?',
        'What result would change your view of virtual cells or autonomous laboratories?',
        'Which tool would you adopt in your own work this year, and what would you require before relying on it?',
      ],
      assignment: 'Final assignment: research program proposal or evaluation report (3,000 words).',
    },
  ],
  competencies: [
    { code: 'C3', how: 'Deciding when a model prediction is strong enough to change a research or program decision.' },
    { code: 'D3', how: 'Matching splits, baselines, metrics and uncertainty to the claim a model makes.' },
    { code: 'A3', how: 'Reading AI evidence at depth across structure, genomes, cells and therapeutics.' },
    { code: 'J3', how: 'Applying reproducibility, information-hazard and data-governance standards before sharing work.' },
    { code: 'K3', how: 'Writing critiques, validation plans and proposals that state uncertainty plainly.' },
    { code: 'M3', how: 'Keeping current with a field whose models, benchmarks and evidence change within a year.' },
  ],
  assessment: [
    { item: 'Class participation', weight: 15, due: 'Ongoing' },
    { item: 'Evaluation critique', weight: 15, due: 'Week 3' },
    { item: 'Midterm exam', weight: 20, due: 'Week 6' },
    { item: 'Validation plan', weight: 20, due: 'Week 9' },
    { item: 'Final proposal or report', weight: 30, due: 'Week 12' },
  ],
  rubricIntro:
    'One rubric covers the three written assignments. Its rows are weighted to the assignment: the evaluation critique rests on evidence appraisal, the validation plan on experimental design, and the final proposal on all five.',
  rubricLevels: ['Exceeds expectations', 'Meets expectations', 'Below expectations'],
  rubric: [
    {
      criterion: 'Evidence appraisal',
      levels: [
        'Names the data, split, baseline, metric, and endpoint; identifies leakage or confounding; states what the evidence cannot show.',
        'Names the evaluation design and its main limitations.',
        'Treats a benchmark score or model confidence as proof of a biological effect.',
      ],
    },
    {
      criterion: 'Source verification',
      levels: [
        'Traces every claim to the primary paper, dataset documentation, or model card; labels developer-reported performance as reported and preprints as preprints.',
        'Cites primary sources for most claims.',
        'Relies on press releases, social posts, or AI-generated summaries without verification.',
      ],
    },
    {
      criterion: 'Experimental design',
      levels: [
        'Specifies experiments, controls, replication, and a decision rule set before the results are known.',
        'Proposes relevant experiments and controls.',
        'Proposes no experiment, or experiments that cannot test the claim.',
      ],
    },
    {
      criterion: 'Reproducibility and disclosure',
      levels: [
        'Specifies the code, data, weights, and protocols to share, and applies the information-hazard test to anything withheld.',
        'Addresses reproducibility and disclosure.',
        'Omits reproducibility or disclosure.',
      ],
    },
    {
      criterion: 'Communication',
      levels: [
        'Clear to the stated audience; states uncertainty plainly; the recommendation follows from the evidence.',
        'Clear, with minor gaps in stating limits.',
        'Unclear or overstated, or the recommendation does not follow from the evidence.',
      ],
    },
  ],
  rubricNotes: ['Participation is assessed on preparation and on contributions that use evidence, not on volume.'],
  showGradeBands: false,
  aiPolicy: {
    groups: [
      {
        items: [
          'Learners may use generative AI tools to search, brainstorm, write code, and edit. They disclose each use at the end of the assignment: the tool, the task, and how the output was checked.',
          'Learners verify every citation, statistic, and model claim against the primary paper, dataset documentation, or model card. An unverified or fabricated citation is graded under source verification, whatever produced it.',
          'Unpublished data, proprietary sequences or compound structures, and data from human participants stay out of any tool that the institution or the data owner has not approved for that use.',
          'No assignment asks for, and no submission should contain, methods for designing, enhancing, or synthesizing hazardous biological agents.',
          'The instructor states which assessments exclude AI assistance and how that is checked. A take-home exam cannot rely on a prohibition alone.',
          'Course requirements use only tools provided to every learner.',
          'Learners remain responsible for everything they submit.',
        ],
      },
    ],
    closing: [
      'The course itself teaches the skill this policy depends on. Week 2 covers literature tools that return confident answers with weak provenance, so one exercise asks learners to verify and correct an AI-generated summary of a published model paper.',
    ],
  },
  evaluation: {
    lead: 'The evaluation is planned before the course starts:',
    items: [
      {
        label: 'Learner feedback',
        text: 'A short mid-course check at Week 6 and an end-of-course survey on relevance, workload, and readings.',
      },
      {
        label: 'Learning',
        text: 'Two comparable published model papers, one appraised in Week 1 and one in Week 12, scored with the evidence-appraisal and source-verification rows of the rubric. The change between them measures what the course taught better than a final exam score alone.',
      },
      {
        label: 'Application',
        text: 'A follow-up three to six months later asking whether learners have changed how they evaluate, adopt, or report AI tools in their own research.',
      },
      {
        label: 'Currency',
        text: 'An annual review of the readings against the handbook’s Changelog, because models, benchmarks, and evidence change within an academic year.',
      },
    ],
  },
  resources: [
    { label: 'The Life Sciences AI Handbook (online)', href: HANDBOOK },
    { label: 'The Life Sciences AI Handbook (PDF)', href: `${HANDBOOK}/life-sciences-ai-handbook.pdf` },
    { label: 'Zenodo record: doi:10.5281/zenodo.22073135', href: 'https://doi.org/10.5281/zenodo.22073135' },
    { label: 'Case studies appendix', href: `${HANDBOOK}/appendices/case-studies.html` },
    { label: 'Model and dataset index', href: `${HANDBOOK}/appendices/model-dataset-index.html` },
    { label: 'Glossary', href: `${HANDBOOK}/appendices/glossary.html` },
    { label: 'Handbook changelog', href: `${HANDBOOK}/changelog.html` },
  ],
}
