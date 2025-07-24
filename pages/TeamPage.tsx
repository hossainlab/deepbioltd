import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import PageHero from '../components/common/PageHero.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faOrcid, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';

// Reusable social icons component
type SocialLinks = {
  linkedin?: string;
  github?: string;
  orcid?: string;
  scholar?: string;
};

const SocialIcons: React.FC<{ socials?: SocialLinks }> = ({ socials }) => (
  <div className="flex justify-center space-x-4 mt-4">
    {socials?.linkedin && (
      <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
    )}
    {socials?.github && (
      <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    )}
    {socials?.orcid && (
      <a href={socials.orcid} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
        <FontAwesomeIcon icon={faOrcid} size="lg" />
      </a>
    )}
    {socials?.scholar && (
      <a href={socials.scholar} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
        <FontAwesomeIcon icon={faGoogleScholar} size="lg" />
      </a>
    )}
  </div>
);

const leadership = [
  {
    name: 'Md. Jubayer Hossain',
    role: 'Founder & Chief Executive Officer',
    desc: 'Mr. Jubayer is a visionary leader with extensive experience in bioinformatics and AI strategy.',
    img: 'https://github.com/hossainlab/deepbioltd/blob/main/img/team/jubayer-ceo.jpg?raw=true',
    color: 'border-primary',
    socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  },
  {
    name: 'Soniya Akter Sony',
    role: 'Chairman',
    desc: 'Sony leads our administration and management body.',
    img: 'https://placehold.co/150x150/4DB8FF/FFFFFF?text=Chairman',
    color: 'border-secondary',
    socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  },
  {
    name: 'Dr. Syeda Tasneem Towhid',
    role: 'Chief Scientific Adviser',
    desc: 'Dr. Towhid oversees all research initiatives and scientific evaluations.',
    img: 'https://placehold.co/150x150/205E92/FFFFFF?text=CSO',
    color: 'border-primary',
    socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  }
];

const teamMembers = [
  {
    name: 'Incoming...',
    role: 'Bioinformatics Scientist',
    img: 'https://placehold.co/120x120/EEEEEE/333333?text=BS',
    socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  },
  {
    name: 'Incoming...',
    role: 'AI/ML Engineer',
    img: 'https://placehold.co/120x120/EEEEEE/333333?text=BW',
    socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  },
  {
    name: 'Incoming...',
    role: 'Public Health Analyst',
    img: 'https://placehold.co/120x120/EEEEEE/333333?text=CD',
    socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  },
  {
    name: 'Incoming...',
    role: 'Software Developer',
    img: 'https://placehold.co/120x120/EEEEEE/333333?text=DB',
    socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  },
  {
    name: 'Incoming...',
    role: 'Data Scientist',
    img: 'https://placehold.co/120x120/EEEEEE/333333?text=EM',
    socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  },
  {
    name: 'Incoming...',
    role: 'Genomics Specialist',
    img: 'https://placehold.co/120x120/EEEEEE/333333?text=FW', 
     socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  },
  {
    name: 'Incoming...',
    role: 'Research Associate',
    img: 'https://placehold.co/120x120/EEEEEE/333333?text=GM', 
     socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  },
  {
    name: 'Incoming...',
    role: 'Project Manager',
    img: 'https://placehold.co/120x120/EEEEEE/333333?text=HT',
    socials: {
      linkedin: 'https://linkedin.com/in/jubayer',
      github: 'https://github.com/jubayer',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      scholar: 'https://scholar.google.com/citations?user=XXXX'
    }
  }
];

const TeamPage: React.FC = () => (
  <div className="font-sans bg-white">
    <PageHero
      title="Meet Our Team"
      subtitle="The brilliant minds driving innovation at DeepBio Limited."
    />
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Expert Team"
          subtitle="Our diverse team of scientists, engineers, and public health specialists drives our success."
        />

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center font-heading mb-10 text-primary">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="bg-light-gray rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  className={`w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 ${leader.color}`}
                  loading="lazy"
                />
                <h4 className="text-xl font-semibold font-heading text-primary">{leader.name}</h4>
                <p className="text-md text-light-text">{leader.role}</p>
                <p className="text-sm text-gray-600 mt-2">{leader.desc}</p>
                <SocialIcons socials={leader.socials} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center font-heading mb-10 text-primary">Our Team Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-light-gray rounded-lg shadow-md p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  loading="lazy"
                />
                <h5 className="font-semibold text-lg font-heading text-primary">{member.name}</h5>
                <p className="text-sm text-light-text">{member.role}</p>
                <SocialIcons socials={member.socials} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default TeamPage;
