
import React, { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  Calendar,
  User,
  Copy,
  Check,
  ShieldCheck,
  Hash
} from 'lucide-react';

const publications = [
  {
    id: "DB-2025-001",
    title: "Global, regional, and national trends in routine childhood vaccination coverage from 1980 to 2023 with forecasts to 2030: A systematic analysis for the Global Burden of Disease Study 2023",
    journal: "The Lancet",
    status: "Published",
    date: "2025",
    authors: "GBD 2023 Vaccine Coverage Collaborators (Hossain, M. J.)",
    tags: ["GBD Study", "Vaccination", "Public Health"],
    abstract: "Comprehensive systematic analysis of global childhood vaccination trends spanning four decades with predictive forecasts through 2030.",
    doi: "PIIS0140-6736(25)01037-2",
    link: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)01037-2/"
  },
  {
    id: "DB-2025-002",
    title: "Clinical and hematological manifestation of dengue patients in 2022 outbreak: A tertiary care hospital-based cross-sectional study",
    journal: "Health Science Reports",
    status: "Published",
    date: "2025",
    authors: "Hossain, M. J.*, Das, M., Shahjahan, M., Islam, M. W., & Towhid, S. T.",
    tags: ["Dengue", "Clinical Study", "Bangladesh"],
    abstract: "Cross-sectional analysis of clinical and hematological presentations in dengue patients during the 2022 outbreak in a tertiary care setting.",
    doi: "10.1002/hsr2.70356",
    link: "https://doi.org/10.1002/hsr2.70356"
  },
  {
    id: "DB-2025-003",
    title: "Young stroke in Bangladesh: Addressing rare cases with diagnostic challenges and much-needed solutions",
    journal: "Stroke and Vascular Neurology",
    status: "Published",
    date: "2025",
    authors: "Das, M., & Hossain, M. J.*",
    tags: ["Stroke", "Neurology", "Diagnostics"],
    abstract: "Addressing diagnostic challenges and proposing solutions for rare cases of stroke in young populations in Bangladesh.",
    doi: "svn-2025-004178",
    link: "https://svn.bmj.com/content/early/2025/04/07/svn-2025-004178"
  },
  {
    id: "DB-2025-004",
    title: "Preventing the silent threat: A perspective on preparing Bangladesh for Human Metapneumovirus (HMPV)",
    journal: "Health Science Reports",
    status: "Published",
    date: "2025",
    authors: "Hossain, M. J.*, Sony, S. A., Fariha, F. T. J., & Hossen, S.",
    tags: ["HMPV", "Infectious Disease", "Prevention"],
    abstract: "Perspective on preparedness strategies for Human Metapneumovirus (HMPV) prevention in Bangladesh healthcare system.",
    doi: "10.1002/hsr2.71101",
    link: "https://doi.org/10.1002/hsr2.71101"
  },
  {
    id: "DB-2024-001",
    title: "Resistance and co-resistance of metallo-beta-lactamase genes in diarrheal and urinary-tract pathogens in Bangladesh",
    journal: "Microorganisms",
    status: "Published",
    date: "2024",
    authors: "Shanta, A. S., Islam, N., Al Asad, M., Akter, K., Habib, M. B., Hossain, M. J., et al.",
    tags: ["AMR", "Beta-lactamase", "Pathogens"],
    abstract: "Investigation of metallo-beta-lactamase gene resistance patterns in diarrheal and urinary-tract pathogens across Bangladesh.",
    doi: "10.3390/microorganisms12081589",
    link: "https://doi.org/10.3390/microorganisms12081589"
  },
  {
    id: "DB-2024-002",
    title: "Urgent call for compulsory premarital screening: A crucial step towards thalassemia prevention in Bangladesh",
    journal: "Orphanet Journal of Rare Diseases",
    status: "Published",
    date: "2024",
    authors: "Hossain, M. J.*, Das, M., & Munni, U. R.",
    tags: ["Thalassemia", "Prevention", "Policy"],
    abstract: "Advocacy for implementing compulsory premarital screening as a critical strategy for thalassemia prevention in Bangladesh.",
    doi: "10.1186/s13023-024-03344-1",
    link: "https://doi.org/10.1186/s13023-024-03344-1"
  },
  {
    id: "DB-2024-003",
    title: "Factors contributing to antibiotic misuse among parents of school-going children in Dhaka City, Bangladesh",
    journal: "Scientific Reports",
    status: "Published",
    date: "2024",
    authors: "Islam, M. W., Shahjahan, M., Azad, A. K., & Hossain, M. J.*",
    tags: ["Antibiotics", "Misuse", "Public Health"],
    abstract: "Identifying key factors driving antibiotic misuse among parents of school-aged children in urban Dhaka.",
    doi: "10.1038/s41598-024-52313-y",
    link: "https://doi.org/10.1038/s41598-024-52313-y"
  },
  {
    id: "DB-2024-004",
    title: "Community engagement and social participation in dengue prevention: A cross-sectional study in Dhaka City",
    journal: "Health Science Reports",
    status: "Published",
    date: "2024",
    authors: "Hossain, M. J.*, Das, M., Islam, M. W., Shahjahan, M., & Ferdous, J.",
    tags: ["Dengue", "Community Health", "Prevention"],
    abstract: "Cross-sectional analysis of community engagement and social participation in dengue prevention initiatives in Dhaka.",
    doi: "10.1002/hsr2.2022",
    link: "https://doi.org/10.1002/hsr2.2022"
  },
  {
    id: "DB-2024-005",
    title: "Prevalence, antibiotic resistance pattern for bacteriuria from patients with urinary tract infections",
    journal: "Health Science Reports",
    status: "Published",
    date: "2024",
    authors: "Hossain, M. J.*, Azad, A. K., Shahid, M. S. B., Shahjahan, M., & Ferdous, J.",
    tags: ["UTI", "AMR", "Bacteriuria"],
    abstract: "Analysis of bacteriuria prevalence and antibiotic resistance patterns in urinary tract infection patients.",
    doi: "10.1002/hsr2.2039",
    link: "https://doi.org/10.1002/hsr2.2039"
  },
  {
    id: "DB-2024-006",
    title: "Food consumption patterns and sedentary behaviors among the university students: A cross-sectional study",
    journal: "Health Science Reports",
    status: "Published",
    date: "2024",
    authors: "Akter, M. M., & Hossain, M. J.*",
    tags: ["Nutrition", "Lifestyle", "Students"],
    abstract: "Cross-sectional study examining dietary patterns and sedentary behaviors among university student populations.",
    doi: "10.1002/hsr2.70259",
    link: "https://doi.org/10.1002/hsr2.70259"
  },
  {
    id: "DB-2023-001",
    title: "Health-related quality of life among thalassemia patients in Bangladesh using the SF-36 questionnaire",
    journal: "Scientific Reports",
    status: "Published",
    date: "2023",
    authors: "Hossain, M. J.*, Islam, M. W., Munni, U. R., Gulshan, R., Mukta, S. A., et al.",
    tags: ["Thalassemia", "Quality of Life", "SF-36"],
    abstract: "Assessment of health-related quality of life in thalassemia patients using the validated SF-36 questionnaire.",
    doi: "10.1038/s41598-023-34205-9",
    link: "https://doi.org/10.1038/s41598-023-34205-9"
  },
  {
    id: "DB-2023-002",
    title: "Knowledge and Self-Management Practice Among Diabetic Patients from the Urban Areas in Bangladesh",
    journal: "Journal of Angiotherapy",
    status: "Published",
    date: "2023",
    authors: "Hossain, M. J.*, Towhid, S. T., Akter, S., Shahjahan, M., Roy, T., et al.",
    tags: ["Diabetes", "Self-Management", "Urban Health"],
    abstract: "Evaluation of diabetes knowledge and self-management practices among urban diabetic patient populations.",
    doi: "10.25163/angiotherapy.717340",
    link: "https://doi.org/10.25163/angiotherapy.717340"
  },
  {
    id: "DB-2022-001",
    title: "Perception of Students on Antibiotic Resistance and Prevention: An Online, Community-Based Case Study from Dhaka, Bangladesh",
    journal: "European Journal of Biology and Biotechnology",
    status: "Published",
    date: "2022",
    authors: "Towhid, S. T., Hossain, M. J., Sammo, M. A. S., & Akter, S.",
    tags: ["AMR", "Education", "Awareness"],
    abstract: "Community-based study examining student perceptions and awareness of antibiotic resistance and prevention strategies.",
    doi: "10.24018/ejbio.2022.3.3.341",
    link: "https://doi.org/10.24018/ejbio.2022.3.3.341"
  },
  {
    id: "DB-2022-002",
    title: "Knowledge and Attitudes towards Thalassemia among Public University Students in Bangladesh",
    journal: "Microbial Bioactives",
    status: "Published",
    date: "2022",
    authors: "Hossain, M. J., Towhid, S. T., Sultana, S., Mukta, S. A., Gulshan, R., et al.",
    tags: ["Thalassemia", "Awareness", "Education"],
    abstract: "Assessment of knowledge levels and attitudes toward thalassemia among public university students.",
    doi: "10.25163/microbbioacts.526325",
    link: "https://doi.org/10.25163/microbbioacts.526325"
  }
];

export const Publications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
              Scientific Output
            </h2>
          </div>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Scholarly <span className="brand-text-gradient">Contributions</span>
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="group bg-white rounded-[2.5rem] border border-slate-100 hover:border-brand-primary/20 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,82,204,0.15)] transition-all duration-500 flex flex-col relative overflow-hidden"
          >
            {/* Top Indicator */}
            <div className="absolute top-0 left-0 right-0 h-1.5 brand-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="p-8 pb-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-2 py-1 bg-slate-50 border border-slate-100 rounded-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Peer Reviewed</span>
                </div>
                <div className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                  pub.status === 'Published' ? 'bg-brand-primary/5 text-brand-primary' : 'bg-amber-50 text-amber-600'
                }`}>
                  {pub.status}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors leading-snug min-h-[3.5rem] line-clamp-3">
                {pub.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {pub.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-400 text-[8px] font-bold uppercase tracking-widest rounded-md group-hover:bg-brand-secondary/5 group-hover:text-brand-secondary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                {pub.abstract}
              </p>
            </div>

            <div className="px-8 py-6 bg-slate-50/50 mt-auto border-t border-slate-50 space-y-4">
              {/* Journal Name */}
              <div className="flex items-center justify-center">
                <div className="text-sm font-bold text-brand-primary italic">
                  {pub.journal}
                </div>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 text-xs">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex-1 truncate">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Primary Authors</div>
                  <div className="text-slate-700 font-bold truncate">{pub.authors}</div>
                </div>
              </div>

              {/* DOI Row */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-200/50">
                <div className="flex items-center gap-2 font-mono text-[9px] text-slate-400 bg-white px-3 py-1.5 rounded-lg border border-slate-100 w-full justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <Hash className="w-3 h-3 shrink-0" />
                    <span className="truncate">{pub.doi}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(pub.id, pub.doi)}
                    className="hover:text-brand-primary transition-colors"
                    title="Copy DOI"
                  >
                    {copiedId === pub.id ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <Calendar className="w-3 h-3" /> {pub.date}
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-primary font-bold text-xs hover:gap-3 transition-all"
                >
                  View Paper <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
