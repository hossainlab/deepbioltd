import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { leadership } from '@/lib/team/data';
import { SectionHeading } from './SectionHeading';

/**
 * Portraits set as plates. Name, role at DeepBio, and a way to reach them.
 */
export const Leadership: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <SectionHeading
        title="A small group, named and reachable."
        deck="Research led from Dhaka. You deal with the people who run the analysis, not an account manager."
      />

      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
        {leadership.map((member) => (
          <div key={member.name} className="border-t border-rule pt-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-sunk">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <h3 className="mt-6 font-serif text-xl text-ink">{member.name}</h3>
            <p className="mt-1 text-sm text-ink-mid">{member.role}</p>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border-b border-rule-strong text-sm text-ink-mid transition-colors hover:border-ink hover:text-ink"
              >
                LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>

      <p className="mt-12 text-[0.9375rem]">
        <Link
          href="/team"
          className="border-b border-rule-strong text-ink transition-colors hover:border-ink"
        >
          The full team
        </Link>
      </p>
    </div>
  );
};
