import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  category: string
  readTime: string
  date: string
  image: string
  excerpt: string
  author: {
    name: string
    role: string
  }
}

export const HomeBlogSection: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 'boltz-regional-pathogens',
      title: 'Fine-Tuning Boltz-2 for Regional Pathogen Resistant Complexes',
      slug: '/case-studies',
      category: 'Structural AI',
      readTime: '6 min read',
      date: 'Oct 2026',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'Benchmarking all-atom protein-ligand predictions against empirical resistance mutations from clinical Klebsiella pneumoniae isolates in Dhaka hospitals.',
      author: {
        name: 'Computational Biology Lab',
        role: 'DeepBio Research',
      },
    },
    {
      id: 'single-cell-perturbations',
      title: 'In Silico Perturbation Maps: From scGPT to Novel Clinical Targets',
      slug: '/case-studies',
      category: 'Single-Cell Omics',
      readTime: '8 min read',
      date: 'Sep 2026',
      image: 'https://images.unsplash.com/photo-1579154235602-3c32e98749e7?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'How transformer foundation models simulate in silico gene knockdowns to uncover non-linear resistance mechanisms in pediatric acute lymphoblastic leukemia.',
      author: {
        name: 'Genomics Intelligence Team',
        role: 'Systems Biology',
      },
    },
    {
      id: 'democratizing-biohpc',
      title: 'Architecting Scalable Nextflow & GPU Workflows for Emerging Labs',
      slug: '/services',
      category: 'Infrastructure & Cloud',
      readTime: '5 min read',
      date: 'Aug 2026',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'Overcoming local compute constraints with containerized Nextflow pipelines and hybrid cloud orchestration for reproducible life science analytics.',
      author: {
        name: 'BioHPC Platform Unit',
        role: 'Cloud Engineering',
      },
    },
  ]

  return (
    <section id="blog" className="w-full py-20 md:py-28 bg-[#F8FAFC] border-b border-rule">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-rule">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1 rounded-full border border-rule-strong bg-white shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-[#205E92] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-ink uppercase tracking-wider">
                Articles &amp; Perspectives
              </span>
            </div>

            <h2 className="text-heading-lg text-ink font-bold leading-tight">
              Dispatches from the frontier of biological computing.
            </h2>

            <p className="text-base md:text-lg text-ink-secondary font-light leading-relaxed">
              Technical insights, benchmark methodologies, and field reports from our computational biology teams and academic research partners.
            </p>
          </div>

          <a
            href="https://lifesciencesaihandbook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-10 px-5 rounded-full inline-flex items-center gap-2 text-xs font-semibold whitespace-nowrap bg-ink text-white hover:bg-[#205E92] transition-all shadow-subtle self-start md:self-auto"
          >
            <span>Read AI Handbook</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Blog Post Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-rule/80 hover:border-[#205E92]/40 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_-8px_rgba(32,94,146,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-rule">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="h-6 px-3 rounded-full bg-white/90 backdrop-blur-sm border border-rule text-[#205E92] text-[11px] font-mono font-semibold flex items-center shadow-subtle">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-3 text-xs font-mono text-slate mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{post.date}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-ink group-hover:text-[#205E92] transition-colors leading-snug mb-3">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-ink-secondary font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-7 pb-7 pt-4 border-t border-rule/60 flex items-center justify-between mt-2">
                <div>
                  <span className="text-xs font-semibold text-ink block">{post.author.name}</span>
                  <span className="text-[11px] font-mono text-slate block">{post.author.role}</span>
                </div>

                <Link
                  href={post.slug}
                  className="w-9 h-9 rounded-full border border-rule-strong flex items-center justify-center text-ink group-hover:border-[#205E92] group-hover:bg-[#205E92] group-hover:text-white transition-all shadow-subtle"
                  aria-label={`Read ${post.title}`}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
