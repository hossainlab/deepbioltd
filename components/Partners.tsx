import React from 'react'
import Image from 'next/image'

/**
 * Partner colophon.
 *
 * The source logos were all opaque — every one shipped with a baked-in
 * background, ranging from pure white to rgb(229,234,236) — so on a paper
 * ground they read as six mismatched boxes. Greyscaling and fading them only
 * made the pale ones vanish. The fix is upstream: /partner_logos/clean/*
 * are border-flood-keyed to transparency and trimmed to their bounding box
 * (see the generation note in this file's history), so what is left is the
 * mark itself.
 *
 * Sizing equalises optical mass rather than height. A wordmark 2.7x wider than
 * it is tall would dominate a row if every logo shared one height, so caps are
 * assigned by shape: wide marks get less height, tall marks get more.
 */
// Heights are inline, not Tailwind classes: a class name assembled from a
// data field is not statically visible to the JIT scanner, so `max-h-12` here
// generated no CSS and every logo fell back to its natural size.
//
// Values balance optical mass against legibility. Pure area-matching would set
// the two-line wordmarks around 29px, too small to read, so text-bearing marks
// hold more height than their area share.
const partners = [
  { name: 'GNOBB', logo: '/partner_logos/clean/GNOBB.png', h: 68 },
  { name: 'ASI School of Life', logo: '/partner_logos/clean/ASISchoolofLife.png', h: 54 },
  { name: 'SPSB', logo: '/partner_logos/clean/SPSB.png', h: 64 },
  { name: 'GSA Bioinformatics Internship', logo: '/partner_logos/clean/GSABioinformaticsInternship.png', h: 56 },
  { name: 'cBLAST', logo: '/partner_logos/clean/cBLAST.png', h: 38 },
  { name: 'One Health Lab', logo: '/partner_logos/clean/onehealthlab.png', h: 64 },
]

export const Partners: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <div className="flex flex-col gap-8 border-t border-rule pt-6 lg:flex-row lg:items-center lg:gap-16">
        <p className="data shrink-0 text-slate">Collaborating with</p>

        <ul className="grid flex-1 grid-cols-3 items-center gap-x-10 gap-y-8 md:grid-cols-6">
          {partners.map((partner) => (
            <li key={partner.name} className="flex h-20 items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={280}
                height={140}
                sizes="(max-width: 768px) 33vw, 16vw"
                style={{ maxHeight: partner.h }}
                className="h-auto w-auto max-w-full object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
