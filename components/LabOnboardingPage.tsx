
import React from 'react';
import { BookOpen, Users, Target, GitBranch, Database, Code, MessageSquare, Bot, Shield, CheckCircle, Calendar, Award, Github, FileText } from 'lucide-react';

export const LabOnboardingPage: React.FC = () => {
  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <BookOpen className="w-4 h-4" />
            Lab Guidelines
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
            Lab Member <br />
            <span className="brand-text-gradient">Onboarding</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Welcome to DeepBio Labs. This comprehensive guide outlines our expectations, practices, and resources to help you succeed across all our research labs.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/bigbiolab/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1"
            >
              <FileText className="w-5 h-5" />
              Apply to Join Lab
            </a>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-24 flex gap-12">
        {/* Left Sidebar - Table of Contents */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Table of Contents</h2>
            <nav className="space-y-2">
              {[
                { title: 'Mission Statement', href: '#mission' },
                { title: 'Expectations', href: '#expectations' },
                { title: 'Communication', href: '#communication' },
                { title: 'Meetings', href: '#meetings' },
                { title: 'Source Code & Data', href: '#source-code' },
                { title: 'Good Practices', href: '#good-practices' },
                { title: 'Social Media Policy', href: '#social-media' },
                { title: 'AI Usage Policy', href: '#ai-usage' },
                { title: 'GitHub Guidelines', href: '#github' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block py-2 px-4 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all border-l-2 border-transparent hover:border-brand-primary"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mission Statement */}
          <section id="mission" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Mission Statement</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                DeepBio operates multiple cutting-edge research laboratories dedicated to advancing life science research through computational biology, artificial intelligence, and innovative drug discovery. Our labs work collaboratively to address critical challenges in genomics, medicine, and biotechnology.
              </p>
              <div className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-2xl my-8">
                <p className="text-slate-700 font-semibold mb-2">Our Vision</p>
                <p className="text-slate-600">
                  To become a leading research organization in computational biology and AI-driven life sciences, fostering innovation, collaboration, and excellence across all our laboratory facilities.
                </p>
              </div>
            </div>
          </section>

          {/* Expectations Section */}
          <section id="expectations" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Expectations</h2>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Your Role</h3>
                <p className="text-slate-600 leading-relaxed">
                  We expect that you will take primary responsibility for the success of your research project and career development. As a member of our labs, you are expected to participate fully in the team. In general, members are expected to follow working hours that include 4 hours/day to facilitate discussion within the group.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mentor Role</h3>
                <p className="text-slate-600 leading-relaxed">
                  Mentors role is to facilitate your success as well as that of your project. Within your project, mentors will serve as a sounding board for ideas, will help you plan your project, and will help to devise experiments to test your hypotheses. To facilitate your success, mentors will help you to plan your training, to devise a career plan that can take you to where you want to go, to advise you on your project-risk portfolio, and to provide guidance on other elements of career and project development as needed.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Deadlines</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our team is working hard to develop a reputation for high-quality science that is well presented. Abstracts for meetings must be shared with all co-authors, including mentors, at least one week prior to the deadline for submission.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Oral presentations on projects must be presented to the research team during a braintrust meeting, and lab members are expected to address feedback that is provided. Poster presentations should be shared in the Slack channel at least a week before printing.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Code of Conduct</h3>
                <p className="text-slate-600 leading-relaxed">
                  At DeepBio Labs, we are committed to maintaining a safe, respectful, and harassment-free environment for all members and visitors. Discrimination or harassment based on gender, gender identity, age, disability, appearance, body size, race, religion, or any other personal characteristic will not be tolerated.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Authorship</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our team follows the{' '}
                  <a
                    href="https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:text-brand-secondary underline font-semibold transition-colors"
                  >
                    ICMJE's Uniform Requirements for Manuscripts Submitted to Biomedical Journals
                  </a>{' '}
                  definitions of the roles of authors and contributors to our manuscripts.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ethics</h3>
                <p className="text-slate-600 leading-relaxed">
                  We expect all lab members to be honest in scientific communications both within and outside the team. We expect that members will design experiments/studies in a manner that minimizes both bias and self-deception. We expect that lab members will keep agreements, be careful, and share their code and results openly with the scientific community.
                </p>
              </div>
            </div>
          </section>

          {/* Communication Section */}
          <section id="communication" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Communication</h2>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-slate-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-brand-primary" />
                  Slack
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  DeepBio Labs operate remotely and use Slack for internal communication. Members should prioritize Slack messages over emails for faster response times.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold">#general</span>
                  <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold">#meeting</span>
                  <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold">#random</span>
                </div>
              </div>

              <div className="p-8 bg-slate-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Required Accounts</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>GitHub (organization)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Slack (workspace)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Meetings Section */}
          <section id="meetings" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Meetings</h2>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Scrum</h3>
                <p className="text-slate-600 leading-relaxed mb-4">Our team's scrum process involves three components:</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>A weekly kick-off meeting at <code className="px-2 py-1 bg-slate-100 rounded text-sm">8:30 AM Friday</code> morning where individuals will lay out their goals for the week on Zoom.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>A demo day meeting at <code className="px-2 py-1 bg-slate-100 rounded text-sm">8:30 AM Saturday</code> afternoon where team members show off an accomplishment from the week in 3 minutes or fewer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>A daily virtual scrum update on Slack.</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Research Meeting</h3>
                <p className="text-slate-600 leading-relaxed">
                  Research meetings are scheduled for one hour on the third Friday of the month. All lab members are expected to attend. Meetings are designed to provide a supportive environment for learning, constructive criticism, help, and scientific discussions.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Meeting Formats</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-primary pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">Format 1: Braintrust</h4>
                    <p className="text-slate-600">The meeting lead presents their own research/project to the group. Presenters often focus on open questions or challenges in their work.</p>
                  </div>
                  <div className="border-l-4 border-brand-secondary pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">Format 2: Tech Talk/Discussion</h4>
                    <p className="text-slate-600">Talks on commonly used technology in the team, strategies for staying on top of the literature, organization, etc.</p>
                  </div>
                  <div className="border-l-4 border-brand-primary pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">Format 3: Post-Conference Presentations</h4>
                    <p className="text-slate-600">Journal club talk on a favorite poster/talk from conferences.</p>
                  </div>
                  <div className="border-l-4 border-brand-secondary pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">Format 4: Big Ideas or Projects</h4>
                    <p className="text-slate-600">Helps senior members practice for paper discussion sections/conclusions while helping newer members see where the boundaries of fields are.</p>
                  </div>
                  <div className="border-l-4 border-brand-primary pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">Format 5: Journal Club</h4>
                    <p className="text-slate-600">Presentation to be given by the meeting leader followed by group discussion. The meeting leader should aim to send the chosen paper one week before the scheduled meeting.</p>
                  </div>
                  <div className="border-l-4 border-brand-secondary pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">Format 6: Preprint Review</h4>
                    <p className="text-slate-600">A preprint is discussed by the group. The discussion is led by the meeting leader, and all members are expected to be familiar with the content.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Source Code & Data Section */}
          <section id="source-code" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Source Code, Data, and Reproducibility</h2>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Pride</h3>
                <blockquote className="border-l-4 border-brand-primary pl-6 italic text-slate-600 mb-4">
                  "Craftsmen of an earlier age were proud to sign their work. You should be, too… People should see your name on a piece of code and expect it to be solid, well-written, tested, and documented."
                  <footer className="text-sm mt-2 not-italic">— The Pragmatic Programmer</footer>
                </blockquote>
                <p className="text-slate-600">
                  We expect lab members to sign their code, ensuring that source code contributions are attributable to an individual's account on GitHub.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Programming Languages</h3>
                <p className="text-slate-600 mb-4">
                  We write analytical code in <strong>Python</strong> or <strong>R</strong> to ensure that all lab members are proficient in both languages.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold">Python</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold">R</span>
                </div>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Licensing</h3>
                <p className="text-slate-600">
                  We release as many research outputs as possible under <strong>permissive open licenses</strong>. The <strong>BSD-2-Clause Plus Patent License</strong> is the default license for software developed in the lab, as it is OSI-approved, simple, and highly compatible.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-brand-primary" />
                  Data Management
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span><strong>Publicly available data:</strong> Scripts used to download and process these data should be preserved and version-controlled.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span><strong>Generated data:</strong> Lab-generated data should be stored in a replicated location and uploaded to relevant repositories (e.g., GEO for gene expression, SRA for sequencing) as soon as possible.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span><strong>Intermediate files:</strong> Where feasible, reasonable-sized intermediate files should be stored to facilitate re-use.</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Reproducibility</h3>
                <p className="text-slate-600 mb-4">All code should support reproducible analyses. This can be achieved through:</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Makefiles, shell scripts, or other automation approaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Including scripts for generating figures in manuscripts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Ensuring all code is reviewed before the submission of a preprint or manuscript</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Good Practices Section */}
          <section id="good-practices" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Good Practices</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Write Clean Code</h3>
                <p className="text-slate-600">Follow coding standards, use meaningful variable names, and include comments where necessary for clarity.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Document Everything</h3>
                <p className="text-slate-600">Maintain comprehensive documentation for your projects, methods, and workflows.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Use Version Control</h3>
                <p className="text-slate-600">Commit changes regularly with clear, descriptive commit messages.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Collaborate Openly</h3>
                <p className="text-slate-600">Share knowledge, help teammates, and participate in code reviews.</p>
              </div>
            </div>
          </section>

          {/* Social Media Policy Section */}
          <section id="social-media" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Social Media Policy</h2>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-600 leading-relaxed mb-6">
                Lab members are encouraged to share research and updates via public social media. If a member associates their profile with DeepBio Labs, they must adhere to our code of conduct.
              </p>
              <div className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-2xl">
                <p className="text-slate-700 font-semibold mb-2">Important Note</p>
                <p className="text-slate-600">
                  If required by an employer or collaborator, members should include a disclaimer stating that opinions are personal and do not represent DeepBio Labs.
                </p>
              </div>
            </div>
          </section>

          {/* AI Usage Policy Section */}
          <section id="ai-usage" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">AI Usage Policy</h2>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Responsible AI Use</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  This document establishes guidelines for the responsible and ethical use of AI tools in research, development, and lab activities.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>AI tools should be used to augment, not replace, critical thinking and scientific rigor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Always verify AI-generated content for accuracy and appropriateness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Disclose the use of AI tools in research publications when applicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Be mindful of data privacy and confidentiality when using AI services</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* GitHub Guidelines Section */}
          <section id="github" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">GitHub Guidelines</h2>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Version Control and GitHub Usage</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our primary version control service is <strong>GitHub</strong>, and lab members should maintain their code in repositories under the <strong>DeepBio GitHub organization</strong>.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Creating a Lab Repository</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Create a repository under the DeepBio GitHub organization' },
                    { step: '2', title: 'Immediately fork this repository into your user account' },
                    { step: '3', title: 'Make commits to your personal repository first' },
                    { step: '4', title: 'Follow the code review process before merging changes' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {item.step}
                      </div>
                      <p className="text-slate-600 leading-relaxed pt-2">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Code Review Process</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Code moves from personal repositories to lab repositories via <strong>pull requests</strong>. All changes must go through this review process:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Make changes and commit them to your personal repository</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Create a pull request (PR) into the corresponding lab repository</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Assign reviewers to the PR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>At least one lab member must approve the PR before merging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>PRs should focus on a single functional area to facilitate easier reviews</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Handling Projects That Didn't Work</h3>
                <p className="text-slate-600 leading-relaxed">
                  Repositories may contain <strong>failed projects</strong> (e.g., proof-of-concepts that didn't succeed). Keeping track of these failures helps us <strong>avoid repeating mistakes</strong> and fosters transparency in research.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions or Need Support?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Our team is here to help you succeed as a member of DeepBio Labs.
          </p>
          <a
            href="mailto:deepbiobd@gmail.com?subject=Lab Onboarding Support"
            className="inline-flex items-center gap-3 px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 text-lg"
          >
            Contact Lab Team
          </a>
        </div>
      </section>
    </div>
  );
};
