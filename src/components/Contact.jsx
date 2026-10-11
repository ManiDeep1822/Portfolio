import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useEnterprise } from '../context/EnterpriseContext';
import {
  CopyIcon,
  ArrowUpRight,
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon
} from './Icons';

export default function Contact() {
  const { copyEmail, copyPhone, addToast } = useEnterprise();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    addToast({
      title: 'Direct Inquiry Dispatched',
      description: `Opening Gmail composer addressed to ${personalInfo.email}`,
      category: 'SMTP_DISPATCH',
      status: 'emerald'
    });

    const recipient = personalInfo.email;
    const subject = encodeURIComponent(
      formData.subject || `Engineering Inquiry from ${formData.name} via Portfolio`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    setTimeout(() => {
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    }, 350);
  };

  return (
    <section id="contact" className="py-28 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="badge-subtle mb-4 py-1.5 px-3.5">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Available for software engineering roles, full-stack internships, and architectural discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="bento-card p-6 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="text-xs font-medium text-zinc-500 block">
                  Primary Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors truncate block mt-1"
                >
                  {personalInfo.email}
                </a>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors"
                title="Copy Email"
              >
                <CopyIcon className="w-3.5 h-3.5" />
                <span>Copy</span>
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bento-card p-6 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="text-xs font-medium text-zinc-500 block">
                  Direct Phone & WhatsApp
                </span>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors block mt-1"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={copyPhone}
                  className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                  title="Copy Phone Number"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </button>

                <a
                  href={`https://wa.me/917661822103?text=${encodeURIComponent(
                    'Hello Mani Deep! I reviewed your engineering portfolio and would like to connect.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" colored />
                </a>
              </div>
            </div>

            {/* Location & Response Expectation */}
            <div className="bento-card p-6 space-y-3 text-xs">
              <div className="flex justify-between items-center text-zinc-400">
                <span className="text-zinc-500">University:</span>
                <span className="text-zinc-200 font-medium">
                  Lovely Professional University
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span className="text-zinc-500">Campus Location:</span>
                <span className="text-zinc-200 font-medium">
                  Jalandhar, Punjab, India
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span className="text-zinc-500">Hometown:</span>
                <span className="text-zinc-200 font-medium">
                  Vijayawada, Andhra Pradesh
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span className="text-zinc-500">Response Window:</span>
                <span className="text-emerald-400 font-semibold">
                  Under 24 Hours
                </span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4" colored />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="bento-card p-7 sm:p-9">
              <h3 className="text-lg font-bold text-white mb-2">
                Send Direct Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                Formats a structured technical inquiry and opens your mail client addressed directly to{' '}
                <span className="text-zinc-200 font-medium">{personalInfo.email}</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-zinc-400 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Chen"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-zinc-400 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-zinc-400 mb-2"
                  >
                    Subject / Role
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    autoComplete="off"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Software Engineer Role / Full-Stack Internship"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-zinc-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Outline your team, role requirements, or project scope..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-zinc-500">
                    Direct dispatch via Gmail / Mail client
                  </span>

                  <button type="submit" className="btn-primary px-6 py-3">
                    <span>{submitted ? 'Inquiry Dispatched' : 'Dispatch Message'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
