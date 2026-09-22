import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { leadership } from '@/lib/team/data';
import { SectionHeading } from './SectionHeading';

/**
 * Names and faces. For a group selling analysis from Dhaka to reviewers abroad,
 * this is the section that does the most work per pixel, so it gets real
 * portraits at size rather than avatars in a row.
 */
export const Leadership: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <SectionHeading
        title="A small group, named and reachable."
        deck="Research led from Dhaka. You deal with the people who run the analysis, not an account manager."
      />

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {leadership.map((member) => (
          <div key={member.name}>
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-rule bg-chalk">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-ink">{member.name}</h3>
            <p className="data mt-1.5 text-slate">{member.role}</p>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule mt-4 inline-block text-[0.9375rem]"
              >
                LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-[0.9375rem]">
        <Link href="/team" className="link-rule">
          The full team
        </Link>
      </p>
    </div>
  );
};
