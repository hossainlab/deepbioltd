'use client'

import React, { useState } from 'react'
import {
  Clock,
  Sparkles,
  Mail,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

type Course = {
  id: string
  title: string
  description: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  levelColor: string
  skills: string[]
}

const courses: Course[] = [
  {
    id: 'bioinformatics-101',
    title: 'Bioinformatics 101',
    description: 'A comprehensive introduction to the field of bioinformatics. Learn about biological databases, sequence alignment, and basic molecular biology concepts.',
    duration: '4 Weeks',
    level: 'Beginner',
    levelColor: 'bg-brand-primary/10 text-brand-primary',
    skills: ['BLAST', 'NCBI', 'Sequence Alignment', 'Molecular Biology'],
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science in Biology',
    description: 'Master Python libraries like Pandas, NumPy, and Matplotlib to analyze and visualize biological datasets effectively.',
    duration: '6 Weeks',
    level: 'Intermediate',
    levelColor: 'bg-brand-primary/10 text-brand-primary',
    skills: ['Python', 'Pandas', 'Data Visualization', 'Statistics'],
  },
  {
    id: 'genomic-variant-analysis',
    title: 'Genomic Variant Analysis',
    description: 'Learn how to identify and interpret genetic variants from WGS and WES data. Covers GATK best practices and clinical interpretation.',
    duration: '5 Weeks',
    level: 'Advanced',
    levelColor: 'bg-brand-primary/10 text-brand-primary',
    skills: ['GATK', 'Variant Calling', 'VCF Tools', 'Clinical Genomics'],
  },
  {
    id: 'structural-biology',
    title: 'Structural Biology & Drug Design',
    description: 'Explore protein structures, molecular docking, and computer-aided drug design (CADD) techniques.',
    duration: '4 Weeks',
    level: 'Intermediate',
    levelColor: 'bg-brand-primary/10 text-brand-primary',
    skills: ['PyMOL', 'Docking', 'Protein Structure', 'CADD'],
  },
  {
    id: 'md-simulation',
    title: 'Molecular Dynamics (MD) Simulation',
    description: 'Hands-on training in performing and analyzing Molecular Dynamics simulations for biological systems using GROMACS.',
    duration: '4 Weeks',
    level: 'Advanced',
    levelColor: 'bg-brand-primary/10 text-brand-primary',
    skills: ['GROMACS', 'System Preparation', 'Energy Minimization', 'Trajectory Analysis'],
  },
  {
    id: 'molecular-docking',
    title: 'Molecular Docking',
    description: 'Master protein-ligand docking techniques to predict binding modes and affinities using AutoDock Vina and PyRx.',
    duration: '3 Weeks',
    level: 'Intermediate',
    levelColor: 'bg-brand-primary/10 text-brand-primary',
    skills: ['AutoDock Vina', 'PyRx', 'Ligand Preparation', 'Interaction Analysis'],
  },
  {
    id: 'rnaseq-analysis',
    title: 'RNA-Seq Data Analysis',
    description: 'End-to-end RNA-seq analysis from quality control to differential expression and pathway enrichment using R and Python.',
    duration: '5 Weeks',
    level: 'Intermediate',
    levelColor: 'bg-brand-primary/10 text-brand-primary',
    skills: ['DESeq2', 'EdgeR', 'Gene Ontology', 'Pathway Analysis'],
  },
  {
    id: 'single-cell-analysis',
    title: 'Single-Cell RNA-Seq Analysis',
    description: 'Analyze single-cell transcriptomics data using Seurat and Scanpy. Learn clustering, trajectory analysis, and cell type annotation.',
    duration: '6 Weeks',
    level: 'Advanced',
    levelColor: 'bg-brand-primary/10 text-brand-primary',
    skills: ['Seurat', 'Scanpy', 'Cell Clustering', 'Trajectory Inference'],
  },
  {
    id: 'machine-learning-biology',
    title: 'Machine Learning for Biology',
    description: 'Apply machine learning algorithms to biological data. Build classifiers, predictors, and learn feature selection techniques.',
    duration: '6 Weeks',
    level: 'Advanced',
    levelColor: 'bg-brand-primary/10 text-brand-primary',
    skills: ['Scikit-learn', 'Feature Engineering', 'Classification', 'Deep Learning'],
  },
]

interface CourseCardProps {
  course: Course
  onJoinWaitlist: () => void
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onJoinWaitlist }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 flex flex-col">
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit ${course.levelColor}`}>
        {course.level}
      </span>

      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
        {course.title}
      </h3>

      <div className="flex items-center gap-2 text-slate-500 mb-4">
        <Clock className="w-4 h-4" />
        <span className="text-sm font-medium">{course.duration}</span>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
        {course.description}
      </p>

      <div className="mb-6">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
          Skills You&apos;ll Learn:
        </h4>
        <div className="flex flex-wrap gap-2">
          {course.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg border border-slate-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onJoinWaitlist}
        className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-dark transition-all flex items-center justify-center gap-2"
      >
        Join Waitlist
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}

interface WaitlistModalProps {
  course: Course | null
  onClose: () => void
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ course, onClose }) => {
  if (!course) return null

  const mailtoLink = `mailto:deepbiobd@gmail.com?subject=Course Waitlist: ${encodeURIComponent(course.title)}&body=Hi,%0D%0A%0D%0AI would like to join the waitlist for the "${course.title}" course.%0D%0A%0D%0APlease let me know when enrollment opens.%0D%0A%0D%0AThank you!`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-[2rem] max-w-md w-full shadow-2xl p-10 text-center">
        <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <GraduationCap className="w-10 h-10 text-brand-primary" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Waitlist</h3>
        <p className="text-slate-500 mb-6">
          Be the first to know when <strong className="text-slate-700">{course.title}</strong> opens for enrollment.
        </p>

        <div className="space-y-4">
          <a
            href={mailtoLink}
            className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-dark transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email Us to Join
          </a>
          <button
            onClick={onClose}
            className="w-full py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export const TrainingPage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  return (
    <article className="pt-0 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear_gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4" />
            Learn Bioinformatics & Data Science
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Available <span className="brand-text-gradient">Courses</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive courses designed to take you from beginner to expert in bioinformatics and data science for biology.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onJoinWaitlist={() => setSelectedCourse(course)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Need Custom Training?
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            We offer personalized training programs for research groups, institutions, and companies. Contact us to discuss your specific training needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:deepbiobd@gmail.com?subject=Custom Training Inquiry"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Contact for Custom Training
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-brand-primary hover:text-brand-primary transition-all"
            >
              View Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {selectedCourse && (
        <WaitlistModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </article>
  )
}
