
import React from 'react';
import { Mail, Globe, Video, ArrowRight, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
        <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs">
          Global Connectivity
        </h2>
        <p className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          Connect with Our <span className="brand-text-gradient">Research Hub.</span>
        </p>
        <p className="text-xl text-slate-500 font-light leading-relaxed">
          DeepBio operates through a distributed, high-performance virtual model. Our experts are accessible globally for collaborations and inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Virtual HQ Card */}
        <div className="group p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-brand-primary/10 transition-all duration-500 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="w-20 h-20 bg-brand-primary/5 text-brand-primary rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
            <Globe className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Virtual HQ</h4>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Strategically centered in <br />
            <strong className="text-slate-900">Dhaka, Bangladesh</strong> <br />
            serving global research needs.
          </p>
          <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-[10px] uppercase tracking-[0.2em] bg-brand-primary/5 px-4 py-2 rounded-full">
            <MapPin className="w-3 h-3" /> Global Operations
          </div>
        </div>

        {/* Direct Email Card */}
        <div className="group p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-brand-primary/10 transition-all duration-500 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="w-20 h-20 bg-brand-secondary/5 text-brand-secondary rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:bg-brand-secondary group-hover:text-[#0A192F] transition-all duration-500 shadow-sm">
            <Mail className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Direct Inquiry</h4>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
            For general questions, partnerships, or academic inquiries.
          </p>
          <a href="mailto:info@deepbioltd.com" className="text-xl font-bold text-brand-primary hover:text-brand-secondary transition-colors block tracking-tight">
            deepbiobd@gmail.com
          </a>
        </div>

        {/* Virtual Meeting Card */}
        <div className="group p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-brand-primary/10 transition-all duration-500 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="w-20 h-20 bg-cyan-50 text-cyan-600 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500 shadow-sm">
            <Video className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Virtual Meeting</h4>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
            Schedule a high-bandwidth sync with our scientific lead.
          </p>
          <button className="w-full py-5 bg-slate-950 text-white rounded-[1.5rem] font-bold flex items-center justify-center gap-3 hover:bg-brand-primary transition-all shadow-xl group-hover:translate-y-[-4px]">
            Book Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
