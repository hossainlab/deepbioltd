
import React from 'react';
import { Twitter, Linkedin, Github, Globe, Mail, MapPin } from 'lucide-react';

interface Ambassador {
  name: string;
  affiliation: string;
  department: string;
  location: string;
  image: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  email?: string;
}

export const OurAmbassadorsPage: React.FC = () => {
  // Sample ambassadors data - you can expand this with real data
  const ambassadors: Ambassador[] = [
    {
      name: 'Sarah Ahmed',
      affiliation: 'University of Dhaka',
      department: 'Department of Biochemistry and Molecular Biology',
      location: 'Dhaka, Bangladesh',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4',
      twitter: 'sarahbiomed',
      linkedin: 'sarah-ahmed-phd',
      github: 'sarahahmed',
    },
    {
      name: 'Md. Kamal Hossain',
      affiliation: 'University of Dhaka',
      department: 'Infectious Disease Division',
      location: 'Dhaka, Bangladesh',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kamal&backgroundColor=c0aede',
      linkedin: 'kamal-hossain',
      website: 'kamalhossain.com',
    },
    {
      name: 'Nusrat Jahan',
      affiliation: 'BRAC University',
      department: 'Department of Computer Science and Engineering',
      location: 'Dhaka, Bangladesh',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nusrat&backgroundColor=ffd5dc',
      twitter: 'nusratbioinf',
      github: 'nusratjahan',
      linkedin: 'nusrat-jahan-bio',
    }
  ];

  const activesAmbassadors = ambassadors;
  const previousAmbassadors: Ambassador[] = [];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
            Our <span className="brand-text-gradient">Ambassadors</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals driving innovation in computational biology and AI-driven life science research across Bangladesh and beyond.
          </p>
        </div>
      </section>

      {/* Active Ambassadors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Active Ambassadors</h2>
            <div className="w-20 h-1.5 brand-gradient mx-auto rounded-full"></div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {activesAmbassadors.map((ambassador, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-brand-primary/50 transition-all duration-300"
              >
                {/* Ambassador Image */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={ambassador.image}
                    alt={ambassador.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Ambassador Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">
                    {ambassador.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-1 font-semibold">{ambassador.department}</p>
                  <p className="text-sm text-slate-500 mb-1 line-clamp-2">{ambassador.affiliation}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <MapPin className="w-3 h-3" />
                    <span>{ambassador.location}</span>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    {ambassador.twitter && (
                      <a
                        href={`https://twitter.com/${ambassador.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-blue-500 hover:text-white transition-all"
                        title="Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {ambassador.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${ambassador.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-blue-700 hover:text-white transition-all"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {ambassador.github && (
                      <a
                        href={`https://github.com/${ambassador.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white transition-all"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {ambassador.website && (
                      <a
                        href={`https://${ambassador.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-brand-primary hover:text-white transition-all"
                        title="Website"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {ambassador.email && (
                      <a
                        href={`mailto:${ambassador.email}`}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-brand-secondary hover:text-white transition-all"
                        title="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Ambassadors Section (if any) */}
      {previousAmbassadors.length > 0 && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <header className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Previous Ambassadors</h2>
              <div className="w-20 h-1.5 bg-slate-400 mx-auto rounded-full"></div>
              <p className="text-slate-600 mt-6">
                Thank you to our past ambassadors for their invaluable contributions to the DeepBio community.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {previousAmbassadors.map((ambassador, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 opacity-75 hover:opacity-100"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={ambassador.image}
                      alt={ambassador.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{ambassador.name}</h3>
                    <p className="text-sm text-slate-600 mb-1 font-semibold">{ambassador.department}</p>
                    <p className="text-sm text-slate-500 mb-1 line-clamp-2">{ambassador.affiliation}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />
                      <span>{ambassador.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Ambassador Program</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Are you passionate about computational biology and AI in life sciences? Join our community of ambassadors and help shape the future of research in Bangladesh.
          </p>
          <a
            href="/ambassadors"
            className="inline-flex items-center gap-3 px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 text-lg"
          >
            Learn More About the Program
          </a>
        </div>
      </section>
    </div>
  );
};
