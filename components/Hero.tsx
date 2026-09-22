import React from 'react'
import Link from 'next/link'
import { MoleculeVideo } from '@/components/brand/MoleculeVideo'

/**
 * Boltz-Style Hero Section (Matched to DeepBio Brand Blue)
 */
export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden min-h-[580px] md:min-h-[660px] lg:min-h-[740px] flex items-center bg-[#F0F5FA] border-b border-rule">
      {/* Subtle background monoline vector curves extending across the entire hero under the nav */}
      <svg
        viewBox="0 0 1098 1072"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="pointer-events-none absolute -top-[12%] right-0 h-auto w-[68%] translate-x-[25%] text-[#205E92] opacity-[0.08]"
      >
        <path
          d="M230.85 145.042C226.15 161.749 230.793 174.97 238.482 184.937C246.198 194.939 256.981 201.653 264.452 205.203C282.043 213.56 309.814 230.054 337.961 246.681C366.147 263.331 394.717 280.117 413.994 289.129C453.146 307.43 454.11 339.975 449.576 354.135C443.93 374.204 432.321 383.926 419.708 388.835C407.212 393.698 393.693 393.826 384.431 394.822L384.374 394.829L384.317 394.828L211.393 394.091C202.539 394.598 189.665 395.378 177.768 400.377C165.914 405.358 155.032 414.527 150.14 431.912C144.686 451.297 149.995 466.097 158.834 476.769C167.697 487.47 180.129 494.033 188.87 496.787L491.87 574.11C510.711 578.918 527.739 572.391 533.82 568.579L533.845 568.563L533.872 568.549L630.088 515.643C657.133 500.773 691.699 509.594 707.314 535.35C722.945 561.135 713.663 594.124 686.589 609.011L590.373 661.916C575.195 670.261 565.169 685.037 563.405 701.62C561.642 718.205 568.356 734.606 581.48 745.69L844.349 967.689C861.929 982.536 887.511 984.997 907.842 973.818C928.162 962.645 938.679 940.359 933.981 918.488L860.907 581.458C854.495 558.96 838.196 539.077 823.387 518.677C808.646 498.369 795.4 477.557 795.751 453.467C795.807 449.639 796.25 446.129 796.946 443.148L796.952 443.127L796.957 443.106C803.497 419.86 827.659 402.755 852.785 402.226L853.983 402.213L1042.04 402.314C1066.14 402.314 1087.35 387.265 1094.26 365.343C1097.26 355.839 1097.23 346.639 1095.66 337.978C1091.9 317.393 1074.87 302.297 1056.01 292.301L915.772 217.983L915.751 217.971L907.15 213.142C887.953 202.362 875.14 183.24 872.506 161.438C867.968 123.887 840.884 93.2277 803.915 83.7935"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 w-full max-w-container mx-auto px-6 md:px-10 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left Hero Content */}
          <div className="flex flex-col gap-6 max-w-[620px]">
            <h1 className="text-heading-xl text-ink leading-[1.05]">
              Foundational AI for Life Sciences
            </h1>

            <p className="text-lg text-ink-secondary max-w-hero font-light leading-relaxed">
              We harness frontier foundational models to solve complex biological and regional health challenges.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href="#models"
                className="h-10 px-6 rounded-full inline-flex items-center text-xs font-semibold bg-ink text-white hover:bg-brand transition-all shadow-subtle"
              >
                Explore Model Stack
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-6 rounded-full border border-rule-strong inline-flex items-center text-xs font-semibold text-ink bg-white/80 hover:bg-white hover:border-brand transition-all shadow-subtle"
              >
                Life Sciences AI Handbook
              </a>
            </div>
          </div>

          {/* Right Hero Molecule Video Render */}
          <div className="flex items-center justify-center lg:justify-end">
            <MoleculeVideo maxHeight="500px" className="w-full max-w-[520px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
