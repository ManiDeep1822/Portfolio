import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { personalInfo, projects } from '../data/portfolioData';
import { CheckIcon, TerminalIcon, XIcon } from '../components/Icons';

const EnterpriseContext = createContext(null);

function formatTimestamp() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const ms = String(now.getMilliseconds()).padStart(3, '0');
  return `${hh}:${mm}:${ss}.${ms}`;
}

export function EnterpriseProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const addToast = useCallback(({ title, description, category = 'SYSTEM_EXEC', shortcut = null, status = 'emerald' }) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const timestamp = formatTimestamp();
    setToasts((prev) => [...prev.slice(-3), { id, title, description, category, shortcut, status, timestamp }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const openCaseStudy = useCallback((projectId) => {
    const proj = projects.find((p) => p.id === projectId);
    if (!proj) return;
    setIsCommandOpen(false);
    setIsResumeModalOpen(false);
    setActiveProjectId(projectId);
    addToast({
      title: `Opened ${proj.adrId}: ${proj.title}`,
      description: `Loaded architecture spec, database schema & production code.`,
      category: 'ADR_SPEC',
      shortcut: proj.shortcut,
      status: 'emerald'
    });
  }, [addToast]);

  const closeCaseStudy = useCallback(() => {
    setActiveProjectId(null);
  }, []);

  const openResumeModal = useCallback(() => {
    setIsCommandOpen(false);
    setActiveProjectId(null);
    setIsResumeModalOpen(true);
    addToast({
      title: 'Executive Resume Inspector Opened',
      description: 'Interactive ATS view & embedded PDF viewer ready.',
      category: 'DOC_ENGINE',
      shortcut: 'R',
      status: 'blue'
    });
  }, [addToast]);

  const closeResumeModal = useCallback(() => {
    setIsResumeModalOpen(false);
  }, []);

  const downloadResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = personalInfo.resumeDownloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast({
      title: 'Resume PDF Dispatched',
      description: `Downloading ${personalInfo.resumeDownloadName} (128 KB)`,
      category: 'ASSET_FETCH',
      shortcut: 'D',
      status: 'emerald'
    });
  }, [addToast]);

  const copyEmail = useCallback(() => {
    navigator.clipboard?.writeText(personalInfo.email);
    addToast({
      title: 'Email Copied to Clipboard',
      description: personalInfo.email,
      category: 'CLIPBOARD_SYNC',
      shortcut: 'C',
      status: 'emerald'
    });
  }, [addToast]);

  const copyPhone = useCallback(() => {
    navigator.clipboard?.writeText(personalInfo.phone);
    addToast({
      title: 'Phone Number Copied',
      description: personalInfo.phone,
      category: 'CLIPBOARD_SYNC',
      shortcut: 'P',
      status: 'emerald'
    });
  }, [addToast]);

  const scrollToSection = useCallback((sectionId, label = null, shortcut = null) => {
    const targetId = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
    const el = document.querySelector(targetId);
    setIsCommandOpen(false);
    setActiveProjectId(null);
    setIsResumeModalOpen(false);

    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -72 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      if (label && shortcut) {
        addToast({
          title: `Navigated to ${label}`,
          description: `Section target ${targetId} aligned in viewport.`,
          category: 'NAVIGATION',
          shortcut,
          status: 'blue'
        });
      }
    }
  }, [addToast]);

  // Global keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Command Palette: Ctrl+K / Cmd+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
        return;
      }

      // Escape closes active modal/drawer
      if (e.key === 'Escape') {
        if (isCommandOpen) {
          setIsCommandOpen(false);
          return;
        }
        if (activeProjectId) {
          setActiveProjectId(null);
          return;
        }
        if (isResumeModalOpen) {
          setIsResumeModalOpen(false);
          return;
        }
      }

      // Do not intercept single-key shortcuts when user is typing in an input/textarea
      const tag = document.activeElement?.tagName;
      const isEditing =
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        document.activeElement?.isContentEditable;

      if (isEditing || isCommandOpen) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      // "/" opens Command Palette
      if (e.key === '/') {
        e.preventDefault();
        setIsCommandOpen(true);
        return;
      }

      // Shift + 1/2/3 opens Case Study Drawers
      if (e.key === '!' || (e.shiftKey && e.code === 'Digit1')) {
        e.preventDefault();
        openCaseStudy('campus-eats');
        return;
      }
      if (e.key === '@' || (e.shiftKey && e.code === 'Digit2')) {
        e.preventDefault();
        openCaseStudy('process-optima');
        return;
      }
      if (e.key === '#' || (e.shiftKey && e.code === 'Digit3')) {
        e.preventDefault();
        openCaseStudy('sri-adithya-furniture');
        return;
      }

      if (e.shiftKey) return;

      switch (e.key.toLowerCase()) {
        case '1':
          e.preventDefault();
          scrollToSection('#home', 'Overview', '1');
          break;
        case '2':
          e.preventDefault();
          scrollToSection('#projects', 'Production Case Studies', '2');
          break;
        case '3':
          e.preventDefault();
          scrollToSection('#skills', 'Technical Matrix', '3');
          break;
        case '4':
          e.preventDefault();
          scrollToSection('#about', 'Academic & Leadership', '4');
          break;
        case '5':
          e.preventDefault();
          scrollToSection('#experience', 'Experience & Credentials', '5');
          break;
        case '6':
          e.preventDefault();
          scrollToSection('#contact', 'Direct Dispatch', '6');
          break;
        case 'r':
          e.preventDefault();
          openResumeModal();
          break;
        case 'd':
          e.preventDefault();
          downloadResume();
          break;
        case 'c':
          e.preventDefault();
          copyEmail();
          break;
        case 'p':
          e.preventDefault();
          copyPhone();
          break;
        case 'g':
          e.preventDefault();
          window.open(personalInfo.github, '_blank', 'noopener,noreferrer');
          addToast({
            title: 'Opening GitHub Profile',
            description: 'github.com/ManiDeep1822',
            category: 'EXTERNAL_LINK',
            shortcut: 'G',
            status: 'blue'
          });
          break;
        case 'l':
          e.preventDefault();
          window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer');
          addToast({
            title: 'Opening LinkedIn Profile',
            description: 'linkedin.com/in/manideep-developer',
            category: 'EXTERNAL_LINK',
            shortcut: 'L',
            status: 'blue'
          });
          break;
        case 'w':
          e.preventDefault();
          window.open(
            'https://wa.me/917661822103?text=Hi%20Mani%20Deep%2C%20I%20reviewed%20your%20engineering%20portfolio%20and%20would%20like%20to%20connect.',
            '_blank',
            'noopener,noreferrer'
          );
          addToast({
            title: 'Launching WhatsApp Channel',
            description: 'Direct engineering inquiry (+91 7661822103)',
            category: 'EXTERNAL_LINK',
            shortcut: 'W',
            status: 'emerald'
          });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isCommandOpen,
    activeProjectId,
    isResumeModalOpen,
    openCaseStudy,
    openResumeModal,
    downloadResume,
    copyEmail,
    copyPhone,
    scrollToSection,
    addToast
  ]);

  const activeProject = projects.find((p) => p.id === activeProjectId) || null;

  return (
    <EnterpriseContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        activeProjectId,
        activeProject,
        openCaseStudy,
        closeCaseStudy,
        isResumeModalOpen,
        openResumeModal,
        closeResumeModal,
        downloadResume,
        isCommandOpen,
        setIsCommandOpen,
        openCommandPalette: () => setIsCommandOpen(true),
        closeCommandPalette: () => setIsCommandOpen(false),
        copyEmail,
        copyPhone,
        scrollToSection
      }}
    >
      {children}

      {/* Enterprise Linear/Vercel Telemetry Toast Stack */}
      <div
        aria-live="polite"
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[95] flex flex-col gap-2.5 sm:w-[390px] pointer-events-none"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-xl p-3.5 shadow-2xl shadow-black/80 transition-all duration-200 animate-in fade-in slide-in-from-bottom-2"
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    toast.status === 'emerald'
                      ? 'bg-emerald-400 shadow-[0_0_8px_#10b981]'
                      : 'bg-blue-400 shadow-[0_0_8px_#3b82f6]'
                  }`}
                />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                  {toast.category}
                </span>
                <span className="font-mono text-[10px] text-zinc-600">
                  {toast.timestamp}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {toast.shortcut && (
                  <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium bg-zinc-900 text-zinc-300 border border-zinc-700/80 rounded">
                    {toast.shortcut}
                  </kbd>
                )}
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-zinc-500 hover:text-zinc-300 p-0.5 rounded transition-colors"
                  aria-label="Dismiss notification"
                >
                  <XIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 p-1 rounded bg-zinc-900 border border-zinc-800 text-emerald-400 shrink-0">
                {toast.status === 'emerald' ? (
                  <CheckIcon className="w-3.5 h-3.5" />
                ) : (
                  <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-zinc-100 truncate">
                  {toast.title}
                </p>
                {toast.description && (
                  <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                    {toast.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </EnterpriseContext.Provider>
  );
}

export function useEnterprise() {
  const ctx = useContext(EnterpriseContext);
  if (!ctx) {
    throw new Error('useEnterprise must be used within an EnterpriseProvider');
  }
  return ctx;
}
