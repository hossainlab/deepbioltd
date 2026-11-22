import React from 'react';
import { Team } from './Team';
import { scienceTeam, operationsTeam } from '@/lib/team/data';

export const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper">
      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <h1 className="font-serif text-[2.75rem] leading-[1.08] tracking-[-0.02em] sm:text-6xl text-ink max-w-[16ch]">
            Who does the work
          </h1>
          <p className="mt-8 max-w-measure font-serif text-xl leading-[1.6] text-ink-mid">
            A small group working from Dhaka. You deal with the people who run
            the analysis, not an account manager.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <h2 className="border-t border-rule pt-6 font-serif text-2xl text-ink">
            Science
          </h2>
        </div>
        <Team members={scienceTeam} />
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <h2 className="border-t border-rule pt-6 font-serif text-2xl text-ink">
            Operations
          </h2>
        </div>
        <Team members={operationsTeam} columns={3} />
      </section>
    </div>
  );
};
