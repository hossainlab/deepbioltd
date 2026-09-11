/**
 * "How we work" — the engagement model.
 *
 * This occupies the slot Illume gives to Pricing. DeepBio publishes no rates,
 * so the ambiguity this removes is procedural rather than commercial: what
 * happens, in what order, and what lands at the end.
 *
 * Deliberately NOT adapted from components/Methodology.tsx, whose copy asserts
 * "strict adherence to HIPAA", "blockchain-validated checksums" and an
 * "FDA/CE Compliance Path" — claims that are being softened separately and
 * must not be restated on the homepage.
 */

export interface ProcessStep {
  n: string;
  title: string;
  line: string;
}

export const processSteps: ProcessStep[] = [
  {
    n: '01',
    title: 'Scoping call',
    line: 'Thirty minutes. What data you have, how much of it, and the question you need answered. If we are not the right fit, we say so on the call.',
  },
  {
    n: '02',
    title: 'Written scope',
    line: 'You get the deliverables, the timeline and the price in writing before any work starts. No hourly drift.',
  },
  {
    n: '03',
    title: 'Analysis',
    line: 'Versioned, reproducible pipelines. You see intermediate results rather than waiting for a reveal at the end.',
  },
  {
    n: '04',
    title: 'Delivery',
    line: 'A written report, publication-ready figures, and the code that produced them. One revision round is included.',
  },
];
