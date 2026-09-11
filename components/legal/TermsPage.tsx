import React from 'react';
import { LegalLayout } from './LegalLayout';

export const TermsPage: React.FC = () => {
  return (
    <LegalLayout title="Terms of Use" updated="6 September 2026">
      <p>
        These terms govern your use of the DeepBio Limited website. Analysis
        work is governed separately by the written scope and agreement signed
        for each project; where the two differ, the project agreement wins.
      </p>

      <h2>1. Using this site</h2>
      <p>
        You may read, link to and quote from this site with attribution. You may
        not copy it wholesale, scrape it at a rate that degrades service for
        others, or present its content as your own.
      </p>

      <h2>2. Figures and reports</h2>
      <p>
        Case-study figures and reports available here are illustrative of our
        methods. They are published to show what an analysis and its
        deliverables look like. They are not offered as clinical evidence and
        must not be used to support a diagnostic or treatment decision.
      </p>

      <h2>3. Deliverables and ownership</h2>
      <p>
        For contracted work: input data supplied by a client remains that
        client&rsquo;s property, and the deliverables produced for them &mdash;
        reports, figures and analysis code &mdash; belong to them on completion
        of payment, unless the project agreement says otherwise. DeepBio retains
        ownership of its general-purpose tooling, internal libraries and
        know-how, and of anything developed independently of the engagement.
      </p>
      <p>
        <em>[TO CONFIRM] Whether DeepBio requires a licence to reference
        completed work in its portfolio, and on what terms.</em>
      </p>

      <h2>4. No medical or professional advice</h2>
      <p>
        Nothing on this site is medical advice, a diagnosis, or a
        recommendation about the care of any individual. Our work is
        computational research. It does not replace clinical judgement,
        regulatory approval, or laboratory validation. Do not rely on anything
        published here to make a decision about a patient.
      </p>

      <h2>5. Accuracy</h2>
      <p>
        We aim to keep this site accurate, but research moves and pages go
        stale. Content is provided as-is, without warranty that it is complete
        or current. Metrics shown, such as citation counts, are point-in-time
        figures and are dated where possible.
      </p>

      <h2>6. External links</h2>
      <p>
        This site links to partner organisations, initiative sites and
        third-party services we do not control. We are not responsible for
        their content, availability or practices.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, DeepBio Limited is not liable
        for indirect or consequential loss arising from use of this website.
        Nothing in these terms excludes liability that cannot lawfully be
        excluded.
      </p>
      <p>
        <em>[TO CONFIRM] Liability caps for contracted work belong in the
        project agreement, not here. Confirm the wording with counsel.</em>
      </p>

      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the laws of Bangladesh, and the courts of
        Bangladesh have jurisdiction over any dispute arising from them.
      </p>
      <p>
        <em>[TO CONFIRM] Whether this is the correct forum given international
        clients, and whether contracted work should specify a different one.</em>
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about these terms:{' '}
        <a href="mailto:info@deepbioltd.com">info@deepbioltd.com</a>.
      </p>
    </LegalLayout>
  );
};
