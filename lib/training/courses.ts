/**
 * Training courses for the minimal /training index and /training/[slug]
 * syllabus pages. Course list carried over from the former Training page
 * (backups/homepage-2026-11-15/training → components/TrainingPage.tsx).
 *
 * Every syllabus has the same sections, in this order: Overview, Course Team,
 * Learning Objectives, Syllabus, ISCB Competency, Assessment, Grading Rubric,
 * Learner Use of Generative AI, Evaluating the Course, Supplementary Resources.
 * Courses are mapped to the ISCB Competency Framework 3.0 (lib/training/iscb.ts).
 */

import type { IscbCode } from './iscb'
import { aiBiologicalDiscovery } from './ai-biological-discovery'
import { agenticAiCompBio } from './agentic-ai-comp-bio'
import { agenticCheminformatics } from './agentic-cheminformatics'
import { ampDiscovery } from './amp-discovery'
import { agenticDrugDiscovery } from './agentic-drug-discovery'

/** A reading, linked when it has a public URL. */
export interface Reading {
  title: string
  href?: string
}

/**
 * One week of the syllabus. Practical courses use `topics` and `lab`; seminar
 * courses use `theme`, `readings`, `objectives` and `questions`. Every field
 * after `title` is optional and renders only when set.
 */
export interface CourseWeek {
  title: string
  theme?: string
  topics?: string[]
  /** The hands-on lab or exercise for the week. */
  lab?: string
  readings?: Reading[]
  optionalReadings?: Reading[]
  /** Short note, e.g. how a choose-your-track week works. */
  note?: string
  objectives?: string[]
  questions?: string[]
  /** Assignment or exam set or due this week. */
  assignment?: string
}

export interface CourseAssessment {
  item: string
  /** Share of the final grade, in percent. Weights in a course sum to 100. */
  weight: number
  description?: string
  /** When it is due, e.g. "Week 3" or "Ongoing". */
  due?: string
}

export interface RubricRow {
  criterion: string
  /** One descriptor per rubric level, in the order of the level headings. */
  levels: string[]
}

/** A course's policy on learner use of generative AI. */
export interface AiPolicy {
  lead?: string
  groups: { heading?: string; items: string[] }[]
  closing?: string[]
}

/** How a course is evaluated; items with a label render it in bold. */
export interface CourseEvaluation {
  lead?: string
  items: { label?: string; text: string }[]
}

/**
 * One person on a course team. Give `name` exactly as in lib/team/data.ts to
 * pull that member's photo and LinkedIn; anyone else is a guest and can carry
 * their own `image` and `linkedin`. Leave `name` out for a "to be announced" slot.
 */
export interface CourseTeamMember {
  /** Role on this course, e.g. Lead instructor or Teaching assistant. */
  role: string
  name?: string
  image?: string
  linkedin?: string
}

/** Placeholder team shown until a course lists its own. */
export const placeholderTeam: CourseTeamMember[] = [
  { role: 'Lead instructor' },
  { role: 'Instructor' },
  { role: 'Teaching assistant' },
  { role: 'Teaching assistant' },
]

export interface Course {
  slug: string
  title: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  /** Who the course is for, when the level alone does not say. */
  audience?: string
  /** Teaching format, e.g. weekly seminar hours. */
  format?: string
  /** Set text the course is built on. */
  primaryText?: { citation: string; href: string; doi?: string }
  /** Length in weeks; the syllabus has one entry per week. */
  weeks: number
  /** One-sentence lede for the index card and article subtitle. */
  summary: string
  overview: string[]
  prerequisites: string
  tools?: string[]
  /** Card image; falls back to the drawn glyph in app/training/page.tsx. */
  thumb?: string
  /** 'cover' crops to the 4:3 card, 'contain' letterboxes the whole image. */
  thumbFit?: 'cover' | 'contain'
  /** Course team; falls back to placeholderTeam when not set. */
  team?: CourseTeamMember[]
  objectives: string[]
  syllabus: CourseWeek[]
  /** Which ISCB 3.0 competencies the course builds, and how. */
  competencies: { code: IscbCode; how: string }[]
  assessment: CourseAssessment[]
  assessmentNote?: string
  /** Overrides the shared rubric when a course needs its own criteria. */
  rubric?: RubricRow[]
  /** Level headings for a course rubric; defaults to RUBRIC_LEVELS. */
  rubricLevels?: string[]
  rubricIntro?: string
  rubricNotes?: string[]
  /** Set to false to hide the shared grade bands. */
  showGradeBands?: boolean
  /** Overrides the shared generative AI policy. */
  aiPolicy?: AiPolicy
  /** Course-specific paragraphs added after the (shared or own) AI policy. */
  aiPolicyExtra?: string[]
  /** Overrides the shared course evaluation. */
  evaluation?: CourseEvaluation
  resources: { label: string; href: string }[]
  /** Attribution for adapted material, shown under Supplementary Resources. */
  credit?: { text: string; source: { label: string; href: string }; license: { label: string; href: string } }
}

/** Who DeepBio courses are for, unless a course overrides it with `audience`. */
export const defaultAudience =
  'Undergraduates, graduates and working professionals in the life sciences.'

export const RUBRIC_LEVELS = ['Excellent', 'Proficient', 'Developing', 'Beginning']

/** Shared rubric for labs and the capstone project, used unless a course sets its own. */
export const defaultRubric: RubricRow[] = [
  {
    criterion: 'Scientific question',
    levels: [
      'Question is specific, biologically motivated and answerable with the data.',
      'Question is clear and answerable; motivation is brief.',
      'Question is broad or only partly answerable with the data.',
      'No clear question, or one the data cannot address.',
    ],
  },
  {
    criterion: 'Methods and correctness',
    levels: [
      'Methods suit the data, parameters are justified, and checks catch errors.',
      'Methods suit the data with minor unjustified choices.',
      'Methods run but some choices are wrong for the data.',
      'Methods are missing, wrong, or do not run.',
    ],
  },
  {
    criterion: 'Reproducibility',
    levels: [
      'Code, versions and data sources are recorded; another learner can rerun it end to end.',
      'Code and data are shared; small gaps in versions or steps.',
      'Code is shared but cannot be rerun without help.',
      'Results cannot be traced back to code or data.',
    ],
  },
  {
    criterion: 'Interpretation',
    levels: [
      'Results are read in biological context with limitations and alternative explanations.',
      'Results are read correctly in context; limitations are brief.',
      'Interpretation overreaches or misses key context.',
      'Results are restated without interpretation, or misread.',
    ],
  },
  {
    criterion: 'Communication',
    levels: [
      'Figures and text are clear, labelled and fit the audience.',
      'Figures and text are clear with minor labelling gaps.',
      'Hard to follow; figures lack labels or units.',
      'Disorganised; key results are hard to find.',
    ],
  },
]

/** Score bands applied to the weighted total. */
export const gradeBands = [
  { band: '90–100', grade: 'Distinction' },
  { band: '75–89', grade: 'Merit' },
  { band: '60–74', grade: 'Pass' },
  { band: 'Below 60', grade: 'Not yet passed. One resubmission of the capstone is allowed.' },
]

/** Generative AI policy, shared by every course. */
export const aiPolicy: AiPolicy = {
  lead:
    'Generative AI tools such as ChatGPT, Claude, Gemini and GitHub Copilot are part of how bioinformatics is done now, so learners may use them. The goal of the course is still your own understanding, and you are responsible for everything you submit.',
  groups: [
    {
      heading: 'Encouraged',
      items: [
        'Explaining an error message, a function, or a concept you then check against documentation.',
        'Drafting or refactoring code that you run, test and can explain line by line.',
        'Improving the language of text you wrote yourself.',
      ],
    },
    {
      heading: 'Not allowed',
      items: [
        'Submitting generated analysis, figures or interpretation you have not run or checked.',
        'Using AI during the end-of-course quiz or oral check, unless the instructor says otherwise.',
        'Pasting unpublished, confidential or patient-level data into a public AI service.',
      ],
    },
  ],
  closing: [
    'Add a short AI-use note to every submission: which tool, what for, and what you changed. Use that is disclosed is never penalised. Undisclosed use that leads to work you cannot explain is treated as an academic integrity issue.',
  ],
}

/** How DeepBio evaluates and improves each course, shared by every course. */
export const courseEvaluation: CourseEvaluation = {
  items: [
    { text: 'A short anonymous check-in at the midpoint asks what is working and what is not, and the instructor reports back on changes in the following session.' },
    { text: 'An end-of-course survey covers content, pacing, instruction and support, and asks learners to rate their confidence in each learning objective before and after the course.' },
    { text: 'Learner outcomes are compared against the mapped ISCB competencies to see which ones the course actually builds.' },
    { text: 'Instructors review the survey, grades and lab completion rates together, and record changes in the syllabus for the next cohort.' },
  ],
}

export const courses: Course[] = [
  // Flagship seminar, listed first.
  aiBiologicalDiscovery,
  agenticAiCompBio,
  agenticCheminformatics,
  agenticDrugDiscovery,
  ampDiscovery,
]
