"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/Icons';
import { personalInfo } from '@/data/portfolioData';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const renderTimeRef = useRef<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: ''
  });

  useEffect(() => {
    renderTimeRef.current = Date.now();

    const handlePrefill = (e: Event) => {
      const customEvt = e as CustomEvent<{ subject: string }>;
      if (customEvt.detail?.subject) {
        setFormData((prev) => ({ ...prev, subject: customEvt.detail.subject }));
      }
    };

    window.addEventListener('prefill-contact-subject', handlePrefill);
    return () => {
      window.removeEventListener('prefill-contact-subject', handlePrefill);
    };
  }, []);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setLoading(true);
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, _renderTime: renderTimeRef.current }),
        });
      } catch (error) {
        console.error('Failed to send message:', error);
      } finally {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
      }
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b-2 border-[#1c1917] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#e9f02c] text-[#1c1917] font-black text-sm uppercase px-3 py-1 border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
            INQUIRIES & COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1c1917] tracking-tight">
            Let&apos;s Build <span className="underline decoration-[#e9f02c] decoration-4">Something Great</span>
          </h2>
          <p className="text-base text-stone-600 font-medium">
            Have a project in mind, engineering leadership query, or opportunity? Drop me a message below.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="paper-card p-6 sm:p-8 space-y-6 bg-[#f7f6f0]">
              <h3 className="text-2xl font-black text-[#1c1917] border-b-2 border-[#1c1917] pb-3">
                Contact Details
              </h3>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#e9f02c] border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                    <Mail className="w-5 h-5 text-[#1c1917]" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold uppercase text-stone-500">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-base font-black text-[#1c1917] hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#e9f02c] border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                    <MapPin className="w-5 h-5 text-[#1c1917]" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold uppercase text-stone-500">Location</span>
                    <span className="text-base font-black text-[#1c1917]">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#e9f02c] border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                    <GithubIcon className="w-5 h-5 text-[#1c1917]" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold uppercase text-stone-500">GitHub Profile</span>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-base font-black text-[#1c1917] hover:underline">
                      github.com/risuvoo
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#e9f02c] border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                    <LinkedinIcon className="w-5 h-5 text-[#1c1917]" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold uppercase text-stone-500">LinkedIn Profile</span>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-base font-black text-[#1c1917] hover:underline">
                      linkedin.com/in/risuvoo
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#e9f02c] border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                    <WhatsappIcon className="w-5 h-5 text-[#1c1917]" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold uppercase text-stone-500">WhatsApp Chat</span>
                    <a
                      href="https://wa.me/8801642222090"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-black text-[#1c1917] hover:underline"
                    >
                      {personalInfo.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Note Box */}
            <div className="paper-card p-6 bg-[#e9f02c] space-y-2">
              <h4 className="font-black text-lg text-[#1c1917]">Fast Response Time</h4>
              <p className="text-xs text-stone-900 font-bold leading-relaxed">
                I typically respond to inquiries within 24 hours. For urgent architecture consulting or project inquiries, feel free to reach out directly via email or LinkedIn.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="paper-card p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b-2 border-[#1c1917] pb-3">
                <h3 className="text-2xl font-black text-[#1c1917] flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6" />
                  <span>Send a Direct Message</span>
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-100 border-2 border-[#1c1917] text-center space-y-3 shadow-[4px_4px_0px_0px_#1c1917]">
                  <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                  <h4 className="text-2xl font-black text-[#1c1917]">Message Received!</h4>
                  <p className="text-sm font-bold text-stone-700">
                    Thank you for reaching out, {formData.name}. I will get back to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-black uppercase text-stone-700">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#f7f6f0] border-2 border-[#1c1917] font-bold text-sm text-[#1c1917] focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_#1c1917]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-black uppercase text-stone-700">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[#f7f6f0] border-2 border-[#1c1917] font-bold text-sm text-[#1c1917] focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_#1c1917]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-black uppercase text-stone-700">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Frontend Architecture"
                      className="w-full px-4 py-3 bg-[#f7f6f0] border-2 border-[#1c1917] font-bold text-sm text-[#1c1917] focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_#1c1917]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-black uppercase text-stone-700">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-3 bg-[#f7f6f0] border-2 border-[#1c1917] font-bold text-sm text-[#1c1917] focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_#1c1917]"
                    ></textarea>
                  </div>

                  {/* Anti-Bot Honeypot Field (Invisible to real users, traps automated bots) */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData._gotcha}
                    onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="paper-btn-primary w-full py-4 text-base uppercase font-black flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
