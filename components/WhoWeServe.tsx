import React from 'react'

/**
 * A running band, not five cards.
 *
 * Icons went out with the card shells: a generic person-glyph above the word
 * "Researchers" restates the word in a worse medium.
 */
const audienceList = [
  {
    title: 'Researchers',
    description: 'Analysis pipelines and interpretation for academic projects.',
  },
  {
    title: 'Universities',
    description: 'Curriculum support, workshops and collaborative research.',
  },
  {
    title: 'Biotech',
    description: 'R&D outsourcing, consulting and computational infrastructure.',
  },
  {
    title: 'Clinicians',
    description: 'Variant interpretation and diagnostic support.',
  },
  {
    title: 'Students',
    description: 'Thesis projects, data analysis and bioinformatics training.',
  },
]

export const WhoWeServe: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <p className="data text-slate">Who the work is for</p>

      <dl className="mt-6 grid gap-x-10 border-t border-rule sm:grid-cols-2 lg:grid-cols-5">
        {audienceList.map((audience) => (
          <div
            key={audience.title}
            className="border-b border-rule py-6 lg:border-b-0"
          >
            <dt className="text-base font-semibold text-ink">{audience.title}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-slate">
              {audience.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
