import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, ExternalLink, MessageSquare, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Generate mailto link
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>09 // CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Open to cybersecurity internships, software engineering roles, academic collaboration, and professional networking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/30 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-300 font-mono transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#0d1424] border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/30 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Phone & WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-white hover:text-emerald-300 font-mono transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-[#0d1424] border border-slate-800 text-slate-400 hover:text-emerald-300 transition-colors"
                title="Copy Phone Number"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Telegram Card */}
            <div className="p-5 rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/30 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Telegram Direct Chat</span>
                  <a
                    href={personalInfo.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-sky-300 font-mono transition-colors"
                  >
                    {personalInfo.telegramHandle}
                  </a>
                </div>
              </div>

              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0d1424] border border-slate-800 text-slate-400 hover:text-sky-300 transition-colors"
                title="Open Telegram Chat"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Social Hub */}
            <div className="p-5 rounded-2xl bg-[#0a101d] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#0d1424] border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#0d1424] border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a101d] border border-cyan-500/20 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below to initiate direct email correspondence.
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-cyan-400" />
              </div>

              {formSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Your email client has been prepared! Thank you for reaching out, Samuel will reply promptly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Abebe / Recruiter Name"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0d1424] border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 block">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@organization.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0d1424] border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 block">Subject / Topic</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. INSA Cybersecurity Internship Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0d1424] border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 block">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, internship opportunity, or question..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0d1424] border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#070b14] font-bold text-xs tracking-wider uppercase hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
