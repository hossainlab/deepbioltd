/**
 * Homepage FAQ — objection handling.
 *
 * Illume dedicates nine accordion items to the questions that stop someone
 * signing up. These are the equivalent for a computational research service.
 *
 * The cost answer deliberately gives a real process instead of a rate card:
 * it does the job Illume's Pricing section does (remove ambiguity) without
 * publishing numbers DeepBio has not committed to.
 *
 * TODO(deepbio): confirm the turnaround windows in "How long does a project
 * take?" against actual delivery history before this goes live.
 */

import type { AccordionItem } from '@/components/ui/Accordion';

export const homeFaqs: AccordionItem[] = [
  {
    q: 'What does DeepBio actually do?',
    a: 'We are a computational research group. You send us biological data — sequencing reads, expression matrices, structures, clinical tables — and we return an analysis: a written report, publication-ready figures, and the code that produced them. We work with academic groups, biotech companies, clinical teams and students.',
  },
  {
    q: 'Are you a wet lab?',
    a: 'No. We do not run experiments or generate data. Everything we do is computational. If your project needs bench work, you will need a lab partner alongside us — we are happy to work with one you already have.',
  },
  {
    q: 'Do I need to have data already, or can you help design the experiment?',
    a: 'Both. If you have data, send it and we will scope from there. If you are still planning, an early conversation about design, sample size and sequencing depth usually costs less than fixing an underpowered study afterwards.',
  },
  {
    q: 'What does it cost?',
    a: 'Quoted per project. Scope, sample count and turnaround drive the number. Email services@deepbioltd.com with what you have and what you need, and you will get a written scope with a fixed price before any work begins — we do not bill hourly against an open-ended brief.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A focused analysis on data you already hold is usually a matter of weeks. Larger multi-omics or modelling projects run longer. The timeline is agreed in writing at the scoping stage, and we will tell you if a deadline is not realistic rather than accepting it and missing it.',
  },
  {
    q: 'Who owns the data and the results?',
    a: 'You do. Your input data remains yours, and the deliverables — figures, report, code — are yours to publish, extend or license as you see fit. We claim no ownership over your findings and do not reuse your data for other clients.',
  },
  {
    q: 'How is my data handled?',
    a: 'Data is transferred and stored encrypted, access is limited to the analysts on your project, and it is deleted or returned at the end of the engagement on your instruction. We sign NDAs and data-processing agreements. If your data is patient-identifiable, tell us at the scoping stage so we can agree handling terms before anything is transferred.',
  },
  {
    q: 'What exactly do I receive at the end?',
    a: 'A written report covering methods, results and limitations; figures at publication resolution; the processed result files; and the analysis code with the software versions used, so a reviewer or a colleague can reproduce what we did. One round of revisions is included.',
  },
  {
    q: 'Can you support a thesis or a grant deadline?',
    a: 'Yes. Thesis support and research training are a substantial part of what we do, and we run programmes for students and early-career researchers. Come to us with the deadline up front so we can tell you honestly whether it is achievable.',
  },
];
