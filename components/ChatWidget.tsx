
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Copy, Check, Info, ChevronDown } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Enhanced component to render Markdown-style formatting 
 * Supports: Headers (###), Bold (**), Lists (*, -), and Line breaks.
 */
const FormattedMessage: React.FC<{ content: string; isAssistant: boolean }> = ({ content, isAssistant }) => {
  const parseContent = (text: string) => {
    // Basic bold: **text** -> <strong>text</strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
    
    const lines = formatted.split('\n');
    
    return lines.map((line, i) => {
      const trimmedLine = line.trim();
      
      // Header Level 1 (###)
      if (trimmedLine.startsWith('### ')) {
        return (
          <h3 key={i} className="text-lg font-semibold text-slate-900 mt-6 mb-3 tracking-normal border-b border-slate-100 pb-1 antialiased">
            <span dangerouslySetInnerHTML={{ __html: trimmedLine.substring(4) }} />
          </h3>
        );
      }

      // Header Level 2 (##)
      if (trimmedLine.startsWith('## ')) {
        return (
          <h2 key={i} className="text-xl font-bold text-slate-950 mt-8 mb-4 tracking-normal antialiased">
            <span dangerouslySetInnerHTML={{ __html: trimmedLine.substring(3) }} />
          </h2>
        );
      }

      // Bullet points
      if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
        return (
          <li key={i} className="ml-5 list-disc mb-2 pl-2 text-slate-800 leading-relaxed antialiased">
            <span dangerouslySetInnerHTML={{ __html: trimmedLine.substring(2) }} />
          </li>
        );
      }

      // Numbered lists
      if (/^\d+\.\s/.test(trimmedLine)) {
        return (
          <li key={i} className="ml-5 list-decimal mb-2 pl-2 text-slate-800 leading-relaxed antialiased">
            <span dangerouslySetInnerHTML={{ __html: trimmedLine.replace(/^\d+\.\s/, '') }} />
          </li>
        );
      }

      // Standard paragraph or empty line
      return trimmedLine ? (
        <p key={i} className="mb-4 last:mb-0 leading-relaxed text-slate-800 antialiased" dangerouslySetInnerHTML={{ __html: line }} />
      ) : <div key={i} className="h-4" />;
    });
  };

  return (
    <div className={`text-base antialiased ${isAssistant ? 'font-normal' : 'text-white font-medium'}`}>
      {parseContent(content)}
    </div>
  );
};

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: '### System Initialized\n\nWelcome to the **DeepBio Research Node**. I am your primary interface for scientific inquiries and partnership data.\n\nHow can I support your research objectives today?' 
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Institutional context for DeepBio Limited:
        - DeepBio is a leader in Bioinformatics & AI in South Asia.
        - Core Services: Genomic Surveillance, Multi-omics, AI Clinical Diagnostics, Training.
        - Values: Data sovereignty, precision, healthcare equity.
        
        User Query: ${userMessage}`,
        config: {
            systemInstruction: `You are the Official Technical Assistant for DeepBio Limited.
            
            OUTPUT REQUIREMENTS:
            1. STRUCTURE: Never output large blocks of text. Always break responses into clear sections using '### Section Title' headers.
            2. FORMATTING: Use **bolding** for important technical terms, gene names, or institutions.
            3. LISTS: Use bullet points for features, steps, or benefits.
            4. TONE: Academic, professional, yet helpful.
            5. CONTACT: Always mention info@deepbioltd.com for official inquiries.
            6. SPACING: Ensure there is significant white space between paragraphs.`
        }
      });

      const aiResponse = response.text || 'Operational timeout. Please re-initiate the query.';
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: '### Communication Failure\n\nConnection to research hub lost. **Node offline**. Please check your network or try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-brand-dark hover:bg-brand-primary text-white rounded-full shadow-[0_20px_60px_rgba(10,37,64,0.3)] flex items-center justify-center transition-all hover:scale-110 group relative border-4 border-white"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-brand-primary/20 -z-10"></div>
          <MessageSquare className="w-10 h-10" />
        </button>
      )}

      {isOpen && (
        <div className="w-[520px] max-w-[95vw] h-[750px] bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(10,37,64,0.4)] flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-8 duration-500">
          {/* Header */}
          <div className="p-8 bg-brand-dark text-white flex items-center justify-between border-b border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full translate-x-12 -translate-y-12"></div>
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 bg-brand-primary rounded-[1.25rem] flex items-center justify-center shadow-2xl border border-white/10">
                <Bot className="w-8 h-8 text-brand-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-xl tracking-tight">DeepBio Assistant</h4>
                <div className="flex items-center gap-2 text-[10px] text-brand-secondary uppercase font-black tracking-widest">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                  Research Node v2.5
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2.5 rounded-xl transition-colors relative z-10">
              <ChevronDown className="w-7 h-7" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-10 space-y-10 bg-slate-50/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} group/msg`}>
                <div className={`relative max-w-[95%] p-8 rounded-[2.5rem] shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-brand-primary text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none ring-1 ring-slate-200/5'
                }`}>
                  <FormattedMessage content={m.content} isAssistant={m.role === 'assistant'} />
                  
                  {m.role === 'assistant' && (
                    <button 
                      onClick={() => handleCopy(m.content, idx)}
                      className="absolute -right-12 top-2 p-2 rounded-lg bg-white border border-slate-100 text-slate-400 opacity-0 group-hover/msg:opacity-100 transition-all hover:text-brand-primary hover:shadow-md"
                      title="Copy response"
                    >
                      {copiedIdx === idx ? <Check className="w-4 h-4 text-teal-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-8 py-6 rounded-[2.5rem] rounded-tl-none shadow-sm border border-slate-100 flex items-center gap-5">
                  <Loader2 className="w-5 h-5 animate-spin text-brand-primary" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Analyzing Scientific Repository...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-8 bg-white border-t border-slate-100">
            <div className="flex gap-4">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about research, services, or partnerships..."
                className="flex-1 px-6 py-5 bg-slate-100 border-none rounded-2xl text-sm font-semibold focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all placeholder:text-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="w-16 h-16 bg-brand-dark hover:bg-brand-primary text-white rounded-2xl flex items-center justify-center transition-all disabled:opacity-50 shadow-xl"
              >
                <Send className="w-7 h-7" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
               <Info className="w-3 h-3 text-slate-400" />
               <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">DeepBio Intelligence Engine • Structured Output Mode</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
