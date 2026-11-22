/**
 * ISCB Competency Framework 3.0 (February 2021), as published on the EMBL-EBI
 * Competency Hub. Titles are verbatim. The framework is licensed CC BY 4.0.
 * https://competency.ebi.ac.uk/framework/iscb/3.0/competencies
 */

export const ISCB_FRAMEWORK_URL = 'https://competency.ebi.ac.uk/framework/iscb/3.0/competencies'

export type IscbCode =
  | 'A3' | 'B3' | 'C3' | 'D3' | 'E3' | 'F3' | 'G3'
  | 'H3' | 'I3' | 'J3' | 'K3' | 'L3' | 'M3'

const detail = (id: number) => `https://competency.ebi.ac.uk/framework/iscb/3.0/competency/details/${id}`

export const iscbCompetencies: Record<IscbCode, { title: string; href: string }> = {
  A3: { title: 'Work at depth in at least one technical area aligned with the life sciences', href: detail(7950) },
  B3: { title: 'Prepare life science data for computational analysis', href: detail(7938) },
  C3: { title: 'Have a positive impact on scientific discovery through bioinformatics', href: detail(7939) },
  D3: { title: 'Use data science methods suitable for the size and complexity of the data', href: detail(7940) },
  E3: { title: 'Manage own and others’ data according to community standards and principles', href: detail(7941) },
  F3: { title: 'Make appropriate use of bioinformatics tools and resources', href: detail(7942) },
  G3: { title: 'Contribute effectively to the design and development of user-centric bioinformatics tools and resources', href: detail(7943) },
  H3: { title: 'Make appropriate and efficient use of scripting and programming languages', href: detail(7944) },
  I3: { title: 'Construct, manage and maintain bioinformatics computing infrastructure of varying complexity', href: detail(7945) },
  J3: { title: 'Comply with professional, ethical, legal and social standards and codes of conduct relevant to computational biology', href: detail(7946) },
  K3: { title: 'Communicate meaningfully with a range of audiences - within and beyond your profession', href: detail(7947) },
  L3: { title: 'Work effectively in teams to accomplish a common goal', href: detail(7948) },
  M3: { title: 'Engage in continuing professional development in bioinformatics', href: detail(7949) },
}
