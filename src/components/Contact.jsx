import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useEnterprise } from '../context/EnterpriseContext';
import {
  CopyIcon,
  ArrowUpRight,
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
  CheckIcon
} from './Icons';

function SpinnerIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

export default function Contact() {
  const { copyEmail, copyPhone, addToast } = useEnterprise();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedDetails, setSubmittedDetails] = useState({ name: '', email: '', time: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setErrorMessage('');

    const apiKey = personalInfo.web3FormsKey || '1f9e7194-2fbc-4e6f-9511-6ac07aed12af';

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', apiKey);
      formPayload.append('name', formData.name.trim());
      formPayload.append('email', formData.email.trim());
      formPayload.append(
        'subject',
        formData.subject.trim() || `Engineering Inquiry from ${formData.name.trim()} via Portfolio`
      );
      formPayload.append('message', formData.message.trim());
      formPayload.append('from_name', `${formData.name.trim()} via Portfolio`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setSubmittedDetails({
          name: formData.name.trim(),
          email: formData.email.trim(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        addToast({
          title: 'Inquiry Transmitted to Mani Deep',
          description: `Direct message delivered to ${personalInfo.email}.`,
          category: 'DIRECT_INBOX',
          status: 'emerald'
        });
      } else {
        throw new Error(result.message || 'Unable to deliver message directly.');
      }
    } catch (err) {
      console.error('Web3Forms dispatch error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Network error encountered during direct dispatch.');

      addToast({
        title: 'Transmission Notice',
        description: 'Unable to deliver directly. Fallback mail client option available.',
        category: 'TRANSMISSION_ERROR',
        status: 'rose'
      });
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  const handleOpenGmailFallback = () => {
    const recipient = personalInfo.email;
    const subject = encodeURIComponent(
      formData.subject || `Engineering Inquiry from ${formData.name} via Portfolio`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
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
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="text-lg font-bold text-white">
                  Send Direct Inquiry
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Direct Inbox Delivery
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                Transmits directly to <span className="text-zinc-200 font-medium">{personalInfo.email}</span> with zero mail client redirection. Response guaranteed within 24 hours.
              </p>

              {status === 'success' ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckIcon className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Message Delivered Directly to Inbox
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-medium">{submittedDetails.name}</span>! Your transmission was recorded at <span className="text-zinc-300 font-mono">{submittedDetails.time}</span> and sent straight to <span className="text-emerald-400 font-medium">{personalInfo.email}</span>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left">
                    <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs">
                      <span className="text-zinc-500 block text-[11px]">Delivery Route</span>
                      <span className="text-zinc-200 font-mono mt-0.5 block truncate">Direct Web3Forms Relay</span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs">
                      <span className="text-zinc-500 block text-[11px]">Expected Response</span>
                      <span className="text-emerald-400 font-mono mt-0.5 block">&lt; 24 Hours</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
                    >
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot Spam Protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span>{errorMessage || 'Direct delivery encountered an issue.'}</span>
                      <button
                        type="button"
                        onClick={handleOpenGmailFallback}
                        className="underline text-white font-semibold hover:text-rose-200 shrink-0 self-start sm:self-auto"
                      >
                        Open Gmail directly →
                      </button>
                    </div>
                  )}

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
                        disabled={status === 'submitting'}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Chen"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-60"
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
                        disabled={status === 'submitting'}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-60"
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
                      disabled={status === 'submitting'}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Software Engineer Role / Full-Stack Internship"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-60"
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
                      disabled={status === 'submitting'}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline your team, role requirements, or project scope..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none disabled:opacity-60"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Direct inbox transmission (no client redirect)
                    </span>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <SpinnerIcon className="w-4 h-4 text-zinc-950" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Dispatch Message</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
