import React from 'react';
import { LegalLayout } from './LegalLayout';

export const PrivacyPage: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy" updated="6 September 2026">
      <p>
        This policy explains what DeepBio Limited (&ldquo;DeepBio&rdquo;,
        &ldquo;we&rdquo;) does with personal data, both for visitors to this
        website and for clients whose research data we process under contract.
        The two are handled very differently and are described separately below.
      </p>

      <h2>1. Who we are</h2>
      <p>
        DeepBio Limited is a computational biology research company based in
        Dhaka, Bangladesh. We do not operate a wet laboratory and do not
        generate biological data ourselves.
      </p>
      <p>
        <em>[TO CONFIRM] Registered company name, company registration number,
        and registered office address.</em>
      </p>
      <p>
        For any question about this policy or about data we hold, contact{' '}
        <a href="mailto:info@deepbioltd.com">info@deepbioltd.com</a>.
      </p>

      <h2>2. What this website collects</h2>
      <p>
        This site does not run an analytics script, does not set first-party
        cookies, and has no contact form. There is no account system and no
        newsletter sign-up. If you do nothing but read pages, we do not collect
        personal data about you.
      </p>
      <p>Two things are worth naming explicitly:</p>
      <ul>
        <li>
          <strong>Hosting logs.</strong> Our hosting provider records standard
          server request data, including IP address, user agent and requested
          URL, for security and operational purposes.{' '}
          <em>[TO CONFIRM] Name the hosting provider and its log retention period.</em>
        </li>
        <li>
          <strong>Third-party assets.</strong> Some pages load fonts from Google
          Fonts and images from external hosts. Requesting those files exposes
          your IP address to the provider serving them. We do not control their
          logging.
        </li>
      </ul>
      <p>
        Links to external services &mdash; LinkedIn, GitHub, YouTube, Facebook,
        X, and our partner and initiative sites &mdash; take you off this domain,
        where the destination&rsquo;s own privacy policy applies.
      </p>

      <h2>3. When you email us</h2>
      <p>
        If you contact us, we keep your message and contact details for as long
        as needed to answer you and to maintain a record of the enquiry. We use
        them to reply and to scope work. We do not sell them, and we do not add
        you to a marketing list without your agreement.
      </p>

      <h2>4. Research and client data</h2>
      <p>
        Data supplied to us for analysis under a project agreement is handled
        under that agreement, not under this website policy. In general terms:
      </p>
      <ul>
        <li>
          Data is transferred and stored encrypted, in transit and at rest.
        </li>
        <li>
          Access is limited to the analysts assigned to the project, and access
          is logged.
        </li>
        <li>
          We do not reuse one client&rsquo;s data for another client, and we do
          not use it to train models offered to third parties.
        </li>
        <li>
          At the end of an engagement, data is returned or deleted on the
          client&rsquo;s instruction.
        </li>
        <li>
          We sign non-disclosure agreements and data-processing agreements on
          request.
        </li>
      </ul>
      <p>
        <strong>Identifiable human data.</strong> Where a project involves
        patient-identifiable or otherwise sensitive personal data, handling
        terms are agreed in writing before any transfer, and the client remains
        responsible for having a lawful basis and any required ethical approval
        for sharing it with us.{' '}
        <em>[TO CONFIRM] Standard retention period, sub-processors and cloud
        regions used for client data, and which supervisory frameworks DeepBio
        actually operates under. Do not restate compliance claims that have not
        been independently verified.</em>
      </p>

      <h2>5. Where data is processed</h2>
      <p>
        <em>[TO CONFIRM] List the countries and cloud providers where client
        data is stored and processed. Clients in the EU, UK or US will ask, and
        cross-border transfer terms depend on the answer.</em>
      </p>

      <h2>6. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to ask what personal
        data we hold about you, to have it corrected, to have it deleted, or to
        object to how we use it. To make a request, email{' '}
        <a href="mailto:info@deepbioltd.com">info@deepbioltd.com</a>. We will
        respond within a reasonable period and may need to verify your identity
        first.
      </p>
      <p>
        <em>[TO CONFIRM] Whether DeepBio falls within the scope of the GDPR, the
        UK GDPR, or other regimes, and the statutory response window that
        follows. This determines what can be promised in this section.</em>
      </p>

      <h2>7. Children</h2>
      <p>
        This site is not directed at children, and we do not knowingly collect
        personal data from them.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        We will update this page when our practices change, and the date at the
        top will change with it.
      </p>
    </LegalLayout>
  );
};
