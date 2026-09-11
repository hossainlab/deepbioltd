/**
 * Canonical team record for DeepBio Limited.
 *
 * Previously inlined in components/Team.tsx. Lives here so the homepage and
 * /team read from one source and cannot drift apart.
 *
 * Cards carry name, role and LinkedIn only. External appointments (CHIRAL,
 * Insilico Medicine) were removed at the client's request — do not reintroduce
 * them without asking, and if they ever come back they belong in a separate
 * field from `role`, never merged into it: `role` is the position held AT
 * DeepBio, and presenting an outside title in that slot would misstate it.
 */

export interface TeamMember {
  name: string;
  /** Position held at DeepBio Limited. */
  role: string;
  image: string;
  group: 'science' | 'operations';
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Md. Jubayer Hossain',
    role: 'CEO & Founder',
    image: '/images/team/jubayer.png',
    group: 'science',
    linkedin: 'https://www.linkedin.com/in/mjhossain/',
  },
  {
    name: 'Muhibullah Shahjahan',
    role: 'Bioinformatics Analyst',
    image: '/images/team/muhib.png',
    group: 'science',
    linkedin: 'https://www.linkedin.com/in/muhibullah-shahjahan/',
  },
  {
    name: 'Muntasim Fuad',
    role: 'Bioinformatics Analyst',
    image: '/images/team/fuad.png',
    group: 'science',
  },
  {
    name: 'Pritom Kundu',
    role: 'CADD Scientist I',
    image: '/images/team/pritom.png',
    group: 'science',
    linkedin: 'https://www.linkedin.com/in/pritom-kundu/',
  },
  {
    name: 'Musab Shahriar',
    role: 'CADD Scientist I',
    image: '/images/team/musab.png',
    group: 'science',
    linkedin: 'https://www.linkedin.com/in/mshahariar/',
  },
  {
    name: 'Nishat Mim',
    role: 'Program Coordinator',
    image: '/images/management/nishat.png',
    group: 'operations',
  },
  {
    name: 'Tajrian Rahman',
    role: 'Finance Manager',
    image: '/images/management/tajrian.png',
    group: 'operations',
  },
  {
    name: 'Najnin Suktara',
    role: 'Academic Operations Manager',
    image: '/images/management/suktara.png',
    group: 'operations',
  },
];

export const scienceTeam = teamMembers.filter((m) => m.group === 'science');
export const operationsTeam = teamMembers.filter((m) => m.group === 'operations');

/** Three shown on the homepage; the rest live on /team. */
export const leadership: TeamMember[] = [
  teamMembers[0],
  teamMembers[1],
  teamMembers[4],
];
