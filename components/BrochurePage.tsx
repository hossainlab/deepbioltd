'use client'

import React, { useRef } from 'react'
import { Download, Mail, MapPin, Globe, Microscope, Database, Cpu, FlaskConical, GraduationCap, Target, Eye, Sparkles, CheckCircle2, Dna, Brain, Activity, LineChart, Users2, Workflow } from 'lucide-react';
import { Logo } from './Logo';

export const BrochurePage: React.FC = () => {
  const brochureRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = () => {
    window.print();
  };

  const coreServices = [
    {
      icon: Microscope,
      title: 'Genomic Surveillance',
      description: 'Advanced pathogen genomics and outbreak investigation using cutting-edge NGS technologies.',
      details: [
        'Whole Genome Sequencing',
        'Variant Detection & Analysis',
        'Phylogenetic Analysis',
        'Outbreak Investigation'
      ]
    },
    {
      icon: Database,
      title: 'Bioinformatics Pipeline Development',
      description: 'Custom computational workflows for genomic data analysis and interpretation.',
      details: [
        'RNA-Seq Analysis',
        'Variant Calling Pipelines',
        'Metagenomics Analysis',
        'Functional Annotation'
      ]
    },
    {
      icon: Cpu,
      title: 'AI-Powered Diagnostics',
      description: 'Machine learning and deep learning models for clinical decision support.',
      details: [
        'Disease Prediction Models',
        'Biomarker Discovery',
        'Clinical AI Solutions',
        'Diagnostic Algorithm Development'
      ]
    },
    {
      icon: Dna,
      title: 'Molecular Dynamics Simulation',
      description: 'Computational modeling of biomolecular systems and protein-ligand interactions.',
      details: [
        'Protein Structure Prediction',
        'Molecular Docking Studies',
        'Drug-Target Interaction Analysis',
        'ADME/Tox Prediction'
      ]
    },
    {
      icon: Brain,
      title: 'Clinical Informatics',
      description: 'Data-driven solutions for healthcare and precision medicine applications.',
      details: [
        'Electronic Health Record Analysis',
        'Clinical Data Integration',
        'Precision Medicine Workflows',
        'Healthcare Analytics'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Training & Capacity Building',
      description: 'Comprehensive training programs in bioinformatics, genomics, and data science.',
      details: [
        'Bioinformatics Workshops',
        'NGS Data Analysis Training',
        'Python/R Programming',
        'Research Methodology'
      ]
    }
  ];

  const researchAreas = [
    {
      icon: Activity,
      title: 'Infectious Disease Genomics',
      items: ['Pathogen sequencing', 'Antimicrobial resistance', 'Epidemiological modeling']
    },
    {
      icon: LineChart,
      title: 'Cancer Genomics',
      items: ['Tumor profiling', 'Somatic mutation analysis', 'Cancer biomarker discovery']
    },
    {
      icon: Workflow,
      title: 'Systems Biology',
      items: ['Network analysis', 'Pathway enrichment', 'Multi-omics integration']
    }
  ];

  const highlights = [
    '250+ Genomes Sequenced and Analyzed',
    '99% Diagnostic Precision Rate',
    'South Asia\'s Leading Research Hub',
    'Multi-Disciplinary Expert Team',
    'State-of-the-Art Computational Infrastructure',
    'International Research Collaborations'
  ];

  const technologies = [
    'Python, R, Perl',
    'GROMACS, AMBER, NAMD',
    'TensorFlow, PyTorch',
    'Galaxy, Nextflow, Snakemake',
    'GATK, SAMtools, BCFtools',
    'Docker, Singularity'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Print/Export Button - Hidden in print */}
      <div className="print:hidden fixed top-24 right-6 z-40">
        <button
          onClick={handleExportPDF}
          className="px-6 py-3 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-full font-bold flex items-center gap-3 transition-all shadow-lg hover:shadow-brand-primary/25 hover:-translate-y-1"
        >
          <Download className="w-5 h-5" />
          Export as PDF
        </button>
      </div>

      {/* Brochure Content */}
      <div ref={brochureRef} className="brochure-content">
        {/* Cover Page */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary pt-20 print:pt-0 print:page-break-after-always">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154235602-3c32e98749e7?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-24">
            <div className="text-center space-y-12">
              <div className="flex justify-center mb-8">
                <Logo isLight={true} className="scale-150" />
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-md">
                <Sparkles className="w-5 h-5 animate-pulse" />
                B R O C H U R E
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight max-w-5xl mx-auto">
                Professional Computational Biology Services
              </h1>

              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
                Transforming life science data into impactful solutions through bioinformatics, artificial intelligence, and digital health
              </p>

              <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
                <div className="text-center">
                  <div className="text-5xl font-black text-white mb-2">250+</div>
                  <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">Genomes Analyzed</div>
                </div>
                <div className="text-center border-x border-white/20">
                  <div className="text-5xl font-black text-white mb-2">99%</div>
                  <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">Precision Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-white mb-2">#1</div>
                  <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">In South Asia</div>
                </div>
              </div>

              <div className="pt-8 text-sm text-white/60">
                <p>Dhaka, Bangladesh</p>
                <p className="mt-1">deepbiobd@gmail.com | deepbioltd.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 bg-white print:page-break-after-always">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className="text-sm text-brand-primary font-bold uppercase tracking-wider mb-2">Page 01</div>
              <h2 className="text-4xl font-bold text-slate-900">About Us</h2>
              <div className="w-16 h-1 bg-brand-primary mt-4"></div>
            </div>

            <div className="mb-16">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                DeepBio Limited specializes in offering computational biology services, with a particular emphasis
                on bioinformatics, genomics, and artificial intelligence. Our services enable clients to investigate
                complex biological systems by leveraging cutting-edge computational methods and data analytics.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With a wealth of experience and expertise, our team is committed to providing high-quality,
                customized computational biology solutions to researchers, clinicians, and institutions across South Asia and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="p-10 bg-slate-50 rounded-3xl border border-slate-200">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/20">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  To revolutionize healthcare and life science research in resource-limited settings
                  through data-driven innovation in bioinformatics, artificial intelligence, and digital health.
                </p>
              </div>

              <div className="p-10 bg-slate-50 rounded-3xl border border-slate-200">
                <div className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-secondary/20">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  To drive innovation in health and life sciences through data, AI, and bioinformatics
                  in resource-limited settings. We empower researchers and clinicians with tools that save lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-slate-50 print:page-break-after-always">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className="text-sm text-brand-primary font-bold uppercase tracking-wider mb-2">Page 02</div>
              <h2 className="text-4xl font-bold text-slate-900">Features of Our Services</h2>
              <div className="w-16 h-1 bg-brand-primary mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Users2 className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Expert Team</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our multidisciplinary team brings together expertise in bioinformatics, computational biology,
                  AI/ML, and life sciences to deliver comprehensive solutions.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Advanced Infrastructure</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  State-of-the-art computational resources and bioinformatics pipelines enable us to handle
                  large-scale genomic and clinical datasets efficiently.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Workflow className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Customized Solutions</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We design and implement tailored computational workflows specific to your research questions
                  and data types for optimal results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-32 bg-slate-50 print:page-break-after-always">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className="text-sm text-brand-primary font-bold uppercase tracking-wider mb-2">Page 03</div>
              <h2 className="text-4xl font-bold text-slate-900">Our Core Services</h2>
              <div className="w-16 h-1 bg-brand-primary mt-4"></div>
            </div>

            <p className="text-lg text-slate-600 mb-16 max-w-4xl">
              DeepBio Limited offers comprehensive bioinformatics and computational biology services,
              encompassing genomics, AI-driven analytics, molecular simulations, and clinical informatics.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-brand-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="py-32 bg-white print:page-break-after-always">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className="text-sm text-brand-primary font-bold uppercase tracking-wider mb-2">Page 04</div>
              <h2 className="text-4xl font-bold text-slate-900">Research Focus Areas</h2>
              <div className="w-16 h-1 bg-brand-primary mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200"
                >
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technologies & Tools */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Technologies & Software We Use</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features & Capabilities */}
        <section className="py-32 bg-slate-50 print:page-break-after-always">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className="text-sm text-brand-primary font-bold uppercase tracking-wider mb-2">Page 05</div>
              <h2 className="text-4xl font-bold text-slate-900">Why Choose DeepBio Limited</h2>
              <div className="w-16 h-1 bg-brand-primary mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Highlights</h3>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                      <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                      <span className="text-slate-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Approach</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-xl border-l-4 border-brand-primary">
                    <div className="font-bold text-brand-primary mb-2">01. Consultation</div>
                    <p className="text-slate-600 text-sm">Understanding your research needs and project requirements</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border-l-4 border-brand-primary">
                    <div className="font-bold text-brand-primary mb-2">02. Design & Planning</div>
                    <p className="text-slate-600 text-sm">Developing customized analysis workflows and methodologies</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border-l-4 border-brand-primary">
                    <div className="font-bold text-brand-primary mb-2">03. Execution</div>
                    <p className="text-slate-600 text-sm">Implementing advanced computational analyses with precision</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border-l-4 border-brand-primary">
                    <div className="font-bold text-brand-primary mb-2">04. Delivery & Support</div>
                    <p className="text-slate-600 text-sm">Providing comprehensive reports and ongoing consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className="text-sm text-brand-primary font-bold uppercase tracking-wider mb-2">Page 06</div>
              <h2 className="text-4xl font-bold text-slate-900">Contact Us</h2>
              <div className="w-16 h-1 bg-brand-primary mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h3>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">Email</h4>
                    <a href="mailto:deepbiobd@gmail.com" className="text-brand-primary hover:underline text-base">
                      deepbiobd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">Location</h4>
                    <p className="text-slate-600 text-base">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">Website</h4>
                    <a href="https://deepbioltd.com" className="text-brand-primary hover:underline text-base">
                      www.deepbioltd.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Partner With Us</h3>
                <p className="text-base mb-8 text-white/90 leading-relaxed">
                  Ready to transform your research with cutting-edge bioinformatics and AI?
                  Let's collaborate to drive innovation in life sciences and advance your research goals.
                </p>
                <a
                  href="mailto:deepbiobd@gmail.com?subject=Partnership Inquiry"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl text-sm"
                >
                  <Mail className="w-5 h-5" />
                  Send Inquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Print-specific Styles */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 1.5cm 1.5cm 1.5cm 1.5cm;
          }

          * {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            box-sizing: border-box;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            margin: 0;
            padding: 0;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:page-break-after-always {
            page-break-after: always;
            break-after: page;
          }

          .print\\:pt-0 {
            padding-top: 0 !important;
          }

          /* Hide navigation and UI elements */
          nav,
          header,
          footer:not(section footer),
          .fixed,
          button:not(.brochure-content button),
          [role="navigation"] {
            display: none !important;
          }

          /* Ensure sections fit properly with better spacing */
          section {
            page-break-inside: avoid;
            break-inside: avoid;
            position: relative;
            width: 100%;
            padding-top: 2cm !important;
            padding-bottom: 2cm !important;
          }

          /* First section (cover) needs special treatment */
          section:first-of-type {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 0 !important;
            margin-top: -1.5cm !important;
            margin-left: -1.5cm !important;
            margin-right: -1.5cm !important;
            width: calc(100% + 3cm) !important;
          }

          /* Optimize images for print */
          img {
            max-width: 100%;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          /* Ensure backgrounds print */
          .bg-gradient-to-br,
          .bg-gradient-to-r,
          .bg-brand-primary,
          .bg-brand-secondary,
          .bg-slate-50,
          .bg-slate-900,
          .bg-white {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }

          /* Optimize text for print */
          h1, h2, h3, h4, h5, h6 {
            page-break-after: avoid;
            break-after: avoid;
            orphans: 3;
            widows: 3;
          }

          p {
            orphans: 3;
            widows: 3;
          }

          /* Ensure proper spacing */
          .max-w-7xl {
            max-width: 100%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          /* Fix grid layouts for print - reduce columns to prevent cramping */
          .grid.md\\:grid-cols-2 {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .grid.md\\:grid-cols-3 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }

          /* Optimize shadows and effects */
          .shadow-lg,
          .shadow-xl,
          .shadow-2xl {
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
          }

          /* Remove animations and transitions for print */
          *,
          *::before,
          *::after {
            animation-duration: 0s !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0s !important;
          }

          /* Ensure SVG elements print properly */
          svg {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }

          /* Fix absolute positioning for print */
          .absolute {
            position: relative !important;
          }

          /* Ensure proper text rendering */
          body,
          html {
            font-size: 11pt;
            line-height: 1.6;
          }

          /* Scale headings appropriately */
          h1 {
            font-size: 32pt;
            line-height: 1.2;
            margin-bottom: 1rem;
          }

          h2 {
            font-size: 24pt;
            line-height: 1.3;
            margin-bottom: 0.8rem;
          }

          h3 {
            font-size: 16pt;
            line-height: 1.4;
            margin-bottom: 0.6rem;
          }

          h4 {
            font-size: 13pt;
            line-height: 1.4;
            margin-bottom: 0.5rem;
          }

          /* Optimize paragraph spacing */
          p {
            margin-bottom: 0.8rem;
            line-height: 1.6;
          }

          /* Optimize button styles for print */
          a[href^="mailto"] {
            text-decoration: underline;
            color: #205E92 !important;
          }

          /* Ensure proper spacing between sections */
          section + section {
            margin-top: 0;
          }

          /* Fix padding for print - more generous spacing */
          .py-32 {
            padding-top: 2.5cm !important;
            padding-bottom: 2.5cm !important;
          }

          .py-24 {
            padding-top: 2cm !important;
            padding-bottom: 2cm !important;
          }

          .px-6 {
            padding-left: 1.5cm !important;
            padding-right: 1.5cm !important;
          }

          /* Optimize gaps for print */
          .gap-8 {
            gap: 1.2cm !important;
          }

          .gap-12 {
            gap: 1.5cm !important;
          }

          .gap-16 {
            gap: 2cm !important;
          }

          /* Better spacing for cards and boxes */
          .p-8 {
            padding: 1.2cm !important;
          }

          .p-10 {
            padding: 1.5cm !important;
          }

          .p-12 {
            padding: 1.8cm !important;
          }

          .mb-12 {
            margin-bottom: 1.5cm !important;
          }

          .mb-16 {
            margin-bottom: 2cm !important;
          }

          .mb-8 {
            margin-bottom: 1cm !important;
          }

          .mb-6 {
            margin-bottom: 0.8cm !important;
          }

          /* Ensure rounded corners print well */
          .rounded-xl,
          .rounded-2xl,
          .rounded-3xl,
          .rounded-full {
            border-radius: 0.5rem !important;
          }

          /* Fix overlapping content */
          .z-0,
          .z-10,
          .z-40,
          .z-50 {
            z-index: auto !important;
          }

          /* Optimize background opacity */
          .opacity-10 {
            opacity: 0.05 !important;
          }

          .opacity-20 {
            opacity: 0.1 !important;
          }

          /* Ensure borders print */
          .border,
          .border-2,
          .border-4 {
            border-width: 1px !important;
          }

          /* Scale large text appropriately */
          .text-5xl {
            font-size: 28pt !important;
          }

          .text-6xl {
            font-size: 32pt !important;
          }

          .text-7xl {
            font-size: 36pt !important;
          }

          .text-xl {
            font-size: 14pt !important;
          }

          .text-lg {
            font-size: 12pt !important;
          }

          .text-base {
            font-size: 11pt !important;
          }

          .text-sm {
            font-size: 10pt !important;
          }

          /* Fix specific content sections */
          .space-y-8 > * + * {
            margin-top: 1cm !important;
          }

          .space-y-6 > * + * {
            margin-top: 0.8cm !important;
          }

          .space-y-4 > * + * {
            margin-top: 0.6cm !important;
          }

          .space-y-2 > * + * {
            margin-top: 0.3cm !important;
          }

          /* Optimize list spacing */
          ul, ol {
            margin-bottom: 0.8cm;
          }

          li {
            margin-bottom: 0.3cm;
          }

          /* Make icon containers appropriately sized */
          .w-12.h-12 {
            width: 1cm !important;
            height: 1cm !important;
          }

          .w-14.h-14 {
            width: 1.2cm !important;
            height: 1.2cm !important;
          }

          .w-16.h-16 {
            width: 1.4cm !important;
            height: 1.4cm !important;
          }
        }
      `}</style>
    </div>
  );
};
