import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, ArrowRight, MessageSquare, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
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

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setIsFormOpen(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#f9f9f7] border-t border-[#e8ece4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner matching the Aaron Mitchell Contact Box */}
        <div className="rounded-3xl bg-[#ebede6] border border-[#d6dbd0] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-soft">
          
          {/* Subtle Cybernetic / Tech Illustration watermark in top right corner */}
          <div className="absolute right-4 bottom-2 opacity-15 pointer-events-none select-none hidden lg:block">
            <svg width="220" height="220" viewBox="0 0 200 200" fill="none" className="text-[#384334]">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M50 120 C 70 80, 130 80, 150 120" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="70" cy="100" r="5" fill="currentColor" />
              <circle cx="130" cy="100" r="5" fill="currentColor" />
              <path d="M85 140 H 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left side: Heading & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#6b7767] uppercase block">
                Let's Create Something Great
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1a1d1a] leading-tight">
                Have an opportunity or project in mind? <span className="italic font-serif">I'd love to hear about it.</span>
              </h2>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider text-white bg-[#556453] hover:bg-[#465444] rounded-lg transition-all shadow-sm hover:shadow-sage"
                >
                  <span>LET'S TALK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider text-[#2e372c] bg-white border border-[#d8dcd3] hover:border-[#556453] rounded-lg transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#556453]" />
                  <span>DIRECT EMAIL</span>
                </a>
              </div>
            </div>

            {/* Right side: Contact Coordinate List with round outline icons */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/80 border border-[#d8dcd3]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f4f6f2] border border-[#d8dcd3] flex items-center justify-center text-[#556453]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#717e6e] uppercase tracking-wider">Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-[#1a1d1a] hover:text-[#556453]">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button onClick={handleCopyEmail} className="p-1.5 text-[#717e6e] hover:text-[#1a1d1a]" title="Copy Email">
                  {copiedEmail ? <Check className="w-4 h-4 text-[#556453]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/80 border border-[#d8dcd3]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f4f6f2] border border-[#d8dcd3] flex items-center justify-center text-[#556453]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#717e6e] uppercase tracking-wider">Phone</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs font-semibold text-[#1a1d1a] hover:text-[#556453]">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button onClick={handleCopyPhone} className="p-1.5 text-[#717e6e] hover:text-[#1a1d1a]" title="Copy Phone">
                  {copiedPhone ? <Check className="w-4 h-4 text-[#556453]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center p-3.5 rounded-xl bg-white/80 border border-[#d8dcd3]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f4f6f2] border border-[#d8dcd3] flex items-center justify-center text-[#556453]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#717e6e] uppercase tracking-wider">Location</div>
                    <div className="text-xs font-semibold text-[#1a1d1a]">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={personalInfo.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-white border border-[#d8dcd3] text-center text-xs font-mono text-[#434e3f] hover:border-[#556453] transition-colors"
                >
                  Telegram: @sameEyuW
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-white border border-[#d8dcd3] text-center text-xs font-mono text-[#434e3f] hover:border-[#556453] transition-colors"
                >
                  GitHub: @Samieyu
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Message Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-white border border-[#d8dcd3] rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#717e6e] hover:text-[#1a1d1a] rounded-lg bg-[#f4f5f1]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-2xl font-serif font-normal text-[#1a1d1a]">
                Send a Message
              </h3>
              <p className="text-xs text-[#5f6b5b] mt-1">
                Direct transmission to {personalInfo.email}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-sans">
              <div>
                <label className="text-[#3c4738] font-semibold block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Recruiter or Colleague Name"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8dcd3] text-[#1a1d1a] focus:outline-none focus:border-[#556453]"
                />
              </div>

              <div>
                <label className="text-[#3c4738] font-semibold block mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@organization.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8dcd3] text-[#1a1d1a] focus:outline-none focus:border-[#556453]"
                />
              </div>

              <div>
                <label className="text-[#3c4738] font-semibold block mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship / Project Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8dcd3] text-[#1a1d1a] focus:outline-none focus:border-[#556453]"
                />
              </div>

              <div>
                <label className="text-[#3c4738] font-semibold block mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can Samuel contribute to your team?"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8dcd3] text-[#1a1d1a] focus:outline-none focus:border-[#556453] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#556453] hover:bg-[#465444] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
