
import React from 'react';
import {
  GraduationCap,
  ArrowRight,
  Clock,
  Award,
  CheckCircle2,
  Zap,
  Sparkles,
  BookOpen,
  Activity,
  ChevronRight,
  Globe2,
  Cpu,
  Target,
  Play,
  PlayCircle
} from 'lucide-react';

// Featured Tutorials - Preview lessons
const featuredTutorials = [
  {
    id: "intro-rnaseq",
    title: "Introduction to RNA-Seq Analysis",
    description: "Learn the fundamentals of RNA sequencing data analysis and understand the complete workflow from raw reads to differential expression.",
    duration: "12:45",
    thumbnail: "https://img.youtube.com/vi/tlf6wYJrwKY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=tlf6wYJrwKY",
    category: "Fundamentals"
  },
  {
    id: "quality-control",
    title: "Quality Control with FastQC",
    description: "Master quality assessment of sequencing data using FastQC and learn to interpret key metrics for data quality decisions.",
    duration: "15:30",
    thumbnail: "https://img.youtube.com/vi/bz93ReOv87Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=bz93ReOv87Y",
    category: "Data Processing"
  },
  {
    id: "deseq2-analysis",
    title: "Differential Expression with DESeq2",
    description: "Perform differential gene expression analysis in R using DESeq2 and create publication-quality visualizations.",
    duration: "18:20",
    thumbnail: "https://img.youtube.com/vi/0b24mpzM_9M/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=0b24mpzM_9M",
    category: "Analysis"
  },
  {
    id: "single-cell-intro",
    title: "Getting Started with Single-Cell RNA-Seq",
    description: "Explore the basics of single-cell transcriptomics and understand how it differs from bulk RNA sequencing approaches.",
    duration: "14:15",
    thumbnail: "https://img.youtube.com/vi/k9VFNLLQP8c/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=k9VFNLLQP8c",
    category: "Single-Cell"
  },
  {
    id: "pathway-analysis",
    title: "Gene Ontology & Pathway Analysis",
    description: "Learn functional enrichment analysis to understand the biological meaning behind your gene expression results.",
    duration: "16:50",
    thumbnail: "https://img.youtube.com/vi/ZCH2-mFl7h4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ZCH2-mFl7h4",
    category: "Interpretation"
  },
  {
    id: "visualization",
    title: "Publication-Ready Visualizations",
    description: "Create stunning volcano plots, heatmaps, and PCA plots that meet journal publication standards.",
    duration: "11:35",
    thumbnail: "https://img.youtube.com/vi/nD8TDyiJHnA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=nD8TDyiJHnA",
    category: "Visualization"
  }
];

// Short Courses - Quick, focused training
const shortCourses = [
  {
    id: "cancer-bioinformatics",
    title: "Cancer Bioinformatics: Desktop to Publication",
    description: "Comprehensive cancer genomics analysis from data processing to publication.",
    duration: "4 Days",
    level: "Intermediate",
    modules: 4,
    type: "Intensive",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["Cancer Genomics", "Mutation Analysis", "TCGA", "Data Visualization"],
    price: "Contact for pricing"
  },
  {
    id: "ai-drug-discovery",
    title: "AI for Drug Discovery",
    description: "Apply machine learning to accelerate drug discovery and molecular design.",
    duration: "4 Days",
    level: "Advanced",
    modules: 4,
    type: "Intensive",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["Machine Learning", "Molecular Modeling", "Drug Design", "ChEMBL"],
    price: "Contact for pricing"
  },
  {
    id: "structural-biology-ai",
    title: "Structural Biology and AI",
    description: "Protein structure prediction and analysis using AI-powered tools.",
    duration: "4 Days",
    level: "Advanced",
    modules: 4,
    type: "Intensive",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["AlphaFold", "Protein Structure", "PyMOL", "Molecular Dynamics"],
    price: "Contact for pricing"
  },
  {
    id: "single-cell-r",
    title: "Single-Cell Analysis with R",
    description: "Analyze single-cell RNA-seq data using R and Seurat workflows.",
    duration: "4 Days",
    level: "Intermediate",
    modules: 4,
    type: "Intensive",
    image: "https://images.unsplash.com/photo-1579154235602-3c32e98749e7?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["Seurat", "R Programming", "scRNA-seq", "Cell Clustering"],
    price: "Contact for pricing"
  },
  {
    id: "rna-seq-r",
    title: "RNA-Seq Analysis with R",
    description: "End-to-end RNA-seq analysis from QC to differential expression in R.",
    duration: "4 Days",
    level: "Beginner",
    modules: 4,
    type: "Intensive",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["DESeq2", "EdgeR", "R Programming", "Gene Ontology"],
    price: "Contact for pricing"
  },
  {
    id: "single-cell-python",
    title: "Single-Cell Analysis with Python",
    description: "Analyze single-cell RNA-seq data using Python and Scanpy toolkit.",
    duration: "4 Days",
    level: "Intermediate",
    modules: 4,
    type: "Intensive",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["Scanpy", "Python", "scRNA-seq", "AnnData"],
    price: "Contact for pricing"
  }
];

// Specialized Training - Comprehensive, research-intensive programs
const specializedTraining = [
  {
    id: "sbtp",
    title: "Specialized Bioinformatics Training Program (SBTP)",
    subtitle: "Elite Multi-Omics Research Track",
    description: "Master multi-omics workflows from sequencing to publication-ready insights.",
    duration: "16 Weeks",
    level: "Advanced",
    modules: 24,
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["Genomics", "Proteomics", "Metabolomics", "Cloud Computing", "AI Modeling"],
    highlights: [
      "Hands-on multi-omics projects",
      "Cloud infrastructure training",
      "Publication support & mentorship"
    ],
    price: "Contact for pricing"
  },
  {
    id: "professional-track",
    title: "Professional Bioinformatics Mastery",
    subtitle: "Genomic Analysis & Pipeline Development",
    description: "Build production-ready NGS pipelines and conduct advanced variant analysis.",
    duration: "12 Weeks",
    level: "Intermediate",
    modules: 18,
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["NGS Pipelines", "Linux/HPC", "Variant Calling", "Phylogenetics", "Automation"],
    highlights: [
      "Real-world project portfolio",
      "Linux & HPC cluster training",
      "Job placement assistance"
    ],
    price: "Contact for pricing"
  },
  {
    id: "brain",
    title: "Bioinformatics Research with AI in Neurosciences (BRAIN)",
    subtitle: "Computational Neuroscience & AI",
    description: "Apply AI and bioinformatics to brain research and neurological data analysis.",
    duration: "14 Weeks",
    level: "Advanced",
    modules: 20,
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["Neural Networks", "Brain Imaging", "Genomics", "Deep Learning", "Data Science"],
    highlights: [
      "Brain imaging analysis",
      "Neurogenomics integration",
      "AI model development"
    ],
    price: "Contact for pricing"
  }
];

export const TrainingPage: React.FC = () => {
  return (
    <article className="pt-0 min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154235602-3c32e98749e7?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-20 items-center py-24">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Academic Excellence Initiative
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Master the <br />
              <span className="brand-text-gradient">Future of Biology.</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-xl leading-relaxed font-light">
              DeepBio bridges the technical gap in life sciences across South Asia with world-class training in bioinformatics and clinical AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a href="#short-courses" className="px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group text-lg">
                Explore Programs
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-[4rem] overflow-hidden group shadow-2xl border border-white/5 animate-float flex items-center justify-center bg-slate-900/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/20 to-transparent"></div>

              <div className="relative z-10 w-full px-16 space-y-10">
                {/* Floating Card: Alumni */}
                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform -translate-x-12 translate-y-8 hover:-translate-y-2 transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-2xl">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Alumni Network</div>
                      <div className="text-brand-primary text-[11px] font-bold uppercase tracking-[0.2em]">Global Placements Active</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[11px] font-black text-slate-800">
                      <span>PLACEMENT RATE</span>
                      <span>94.8%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-primary w-[94.8%]"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Card: Certifications */}
                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform translate-x-12 -translate-y-8 hover:translate-y-[-12px] transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center shadow-2xl">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Verified Skills</div>
                      <div className="text-brand-primary text-[11px] font-bold uppercase tracking-[0.2em]">ISCB Standards Aligned</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center text-slate-600">
                    <Activity className="w-5 h-5 text-brand-secondary animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">Enrollment Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials Section */}
      <section id="featured-tutorials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-widest">
              <PlayCircle className="w-4 h-4" />
              Preview Lessons
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Featured Tutorials</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Get a taste of the hands-on lessons included in the course. Watch these key tutorials to jumpstart your learning.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial) => (
              <a
                key={tutorial.id}
                href={tutorial.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand-primary/30 hover:shadow-[0_30px_60px_-15px_rgba(32,94,146,0.2)] transition-all duration-500"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-brand-primary transition-all duration-300">
                      <Play className="w-6 h-6 text-brand-primary group-hover:text-white ml-1 transition-colors" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-white text-xs font-semibold">
                    {tutorial.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-brand-primary/90 backdrop-blur-sm rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                    {tutorial.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors leading-snug">
                    {tutorial.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {tutorial.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-brand-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>Watch Tutorial</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <a
              href="#short-courses"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-brand-primary text-white rounded-2xl font-bold transition-all hover:-translate-y-1 hover:shadow-xl group"
            >
              Explore Full Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Short Courses Section */}
      <section id="short-courses" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <header className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                Quick & Focused
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">Short Courses</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Targeted training programs designed to build specific skills quickly. Perfect for professionals looking to add computational biology expertise to their toolkit.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shortCourses.map((course) => (
                <article key={course.id} className="group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:border-brand-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(32,94,146,0.15)] transition-all duration-700">
                  <header className="relative aspect-[16/9] overflow-hidden">
                    <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={course.title} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent"></div>
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                      {course.type}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-white">
                        <Clock className="w-4 h-4 text-brand-secondary" />
                        <span className="text-[11px] font-bold tracking-widest uppercase">{course.duration}</span>
                      </div>
                      <div className="px-3 py-1.5 bg-white rounded-xl text-[10px] font-black text-brand-primary uppercase tracking-widest">
                        {course.level}
                      </div>
                    </div>
                  </header>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase tracking-widest rounded-lg border border-slate-100 group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{course.modules} Modules</span>
                      </div>
                      <a
                        href={course.enrollmentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brand-primary font-bold text-xs group/link hover:gap-3 transition-all"
                      >
                        Enroll Now <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
      </section>

      {/* Specialized Training Section */}
      <section id="specialized-training" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <header className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
                <Target className="w-4 h-4" />
                Elite Programs
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">Specialized Training</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Comprehensive, research-intensive programs for those serious about building a career in computational biology. Includes mentorship, project work, and publication support.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedTraining.map((program) => (
                <article key={program.id} className="group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:border-brand-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(32,94,146,0.15)] transition-all duration-700">
                  <header className="relative aspect-[16/9] overflow-hidden">
                    <img src={program.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={program.title} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent"></div>
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                      {program.type}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-white">
                        <Clock className="w-4 h-4 text-brand-secondary" />
                        <span className="text-[11px] font-bold tracking-widest uppercase">{program.duration}</span>
                      </div>
                      <div className="px-3 py-1.5 bg-white rounded-xl text-[10px] font-black text-brand-primary uppercase tracking-widest">
                        {program.level}
                      </div>
                    </div>
                  </header>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                      {program.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4 space-y-1.5">
                      {program.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase tracking-widest rounded-lg border border-slate-100 group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{program.modules} Modules</span>
                      </div>
                      <a
                        href={program.enrollmentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brand-primary font-bold text-xs group/link hover:gap-3 transition-all"
                      >
                        Apply Now <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
      </section>

      {/* Learning Journey */}
      <section className="py-40 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <header className="text-center mb-32 space-y-6">
            <div className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-xs">The DeepBio Path</div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Your Learning Journey</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              From fundamentals to research leadership, we guide you every step of the way
            </p>
          </header>

          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-brand-primary/50 via-brand-secondary/50 to-brand-primary/50 -z-0"></div>

            {[
              { step: "01", icon: BookOpen, title: "Foundation", desc: "Master Linux, Python, and biological data fundamentals" },
              { step: "02", icon: Cpu, title: "Implementation", desc: "Process real NGS datasets and build analysis pipelines" },
              { step: "03", icon: Activity, title: "Analysis", desc: "Apply ML models and advanced statistical methods" },
              { step: "04", icon: Globe2, title: "Research", desc: "Lead independent projects and publish findings" }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center space-y-8 p-8 group">
                <div className="w-24 h-24 bg-brand-dark border-4 border-brand-primary/30 rounded-[2rem] flex items-center justify-center mx-auto transition-all group-hover:border-brand-secondary group-hover:scale-110 group-hover:bg-brand-primary/20 shadow-2xl">
                  <item.icon className="w-10 h-10 text-white" aria-hidden="true" />
                  <span className="absolute -top-4 -right-4 w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-xs font-black text-white shadow-xl">
                    {item.step}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
};
