import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { teamMembers, type TeamMember } from '@/lib/team/data';

interface TeamProps {
  /** Defaults to the full roster. Pass a filtered list for section-scoped grids. */
  members?: TeamMember[];
  columns?: 3 | 4;
}

/**
 * Wrapper-agnostic like the rest of the section components — the parent owns
 * <section>, id, background and vertical padding. (It used to bake in py-20,
 * which double-padded it inside AboutPage's py-32 section.)
 */
export const Team: React.FC<TeamProps> = ({ members = teamMembers, columns = 4 }) => {
  const colClass = columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <div className="max-w-plate mx-auto px-6 md:px-10 mt-10">
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${colClass} gap-x-8 gap-y-12`}>
        {members.map((member) => (
          <div key={member.name} className="group">
            <div className="relative w-full aspect-[5/6] overflow-hidden bg-paper-sunk">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="pt-5">
              <h3 className="font-serif text-lg text-ink mb-1">{member.name}</h3>
              <p className="text-sm text-ink-mid">{member.role}</p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
