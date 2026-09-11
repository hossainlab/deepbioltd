import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

/**
 * Shared shell for /privacy and /terms.
 *
 * Prose styling is written out manually — @tailwindcss/typography is not a
 * dependency and should not become one for two pages.
 *
 * The draft banner is deliberate and must stay until a lawyer has reviewed the
 * content. Publishing unreviewed legal text without marking it as such is worse
 * than publishing nothing.
 */
export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, updated, children }) => {
  return (
    <div className="min-h-screen bg-paper pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl tracking-[-0.03em] text-ink">
          {title}
        </h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated: {updated}</p>

        <div
          role="note"
          className="mt-8 flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-5"
        >
          <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong className="font-semibold">Draft &mdash; pending legal review.</strong>{' '}
            This document was prepared as a starting point and has not been
            reviewed by a qualified legal adviser. It is not yet a binding
            statement of DeepBio Limited&rsquo;s obligations. Sections marked
            <em> [TO CONFIRM]</em> require company-specific facts before this
            page should be treated as final.
          </p>
        </div>

        <div
          className="
            mt-12 text-ink-mid leading-relaxed
            [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:tracking-[-0.02em]
            [&_h2]:text-ink [&_h2]:mt-12 [&_h2]:mb-4
            [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2
            [&_li]:leading-relaxed
            [&_a]:text-brand-primary [&_a]:underline [&_a]:underline-offset-4
            [&_strong]:text-ink [&_strong]:font-semibold
            [&_em]:text-amber-700 [&_em]:not-italic [&_em]:font-medium
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};
