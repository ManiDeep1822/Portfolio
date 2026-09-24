import React from 'react';

// ==========================================
// OFFICIAL AUTHENTIC BRAND SVG ICONS
// ==========================================

export function ReactIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill={colored ? "#61DAFB" : "currentColor"} />
      <g stroke={colored ? "#61DAFB" : "currentColor"} strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NodeIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#5FA04E" : "currentColor"}>
      <path d="M12 2.5a2.5 2.5 0 0 0-1.25.34l-7.5 4.33A2.5 2.5 0 0 0 2 9.33v8.66a2.5 2.5 0 0 0 1.25 2.16l7.5 4.33a2.5 2.5 0 0 0 2.5 0l7.5-4.33A2.5 2.5 0 0 0 22 18v-8.66a2.5 2.5 0 0 0-1.25-2.16l-7.5-4.33A2.5 2.5 0 0 0 12 2.5zm0 2.31 6.5 3.75a.5.5 0 0 1 .25.43v7.5a.5.5 0 0 1-.25.43l-6.5 3.75a.5.5 0 0 1-.5 0l-6.5-3.75a.5.5 0 0 1-.25-.43v-7.5a.5.5 0 0 1 .25-.43l6.5-3.75a.5.5 0 0 1 .5 0z" />
    </svg>
  );
}

export function ExpressIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.5 6h-15C3.67 6 3 6.67 3 7.5v9c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zm-8.8 8.7h-1.4l-.8-2.6-.8 2.6H6.3l1.4-4.4H9l1.7 4.4zm3.6 0h-1.4l-1-1.7v1.7h-1.3V10.3h1.3v1.6l1-1.6h1.4l-1.3 2 1.3 2.4zm3.2 0h-1.3v-4.4h1.3v4.4z" />
    </svg>
  );
}

export function MongoIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#47A248" : "currentColor"}>
      <path d="M12 1.5c-.3 0-.6.1-.8.3C10.7 2.3 4 8.7 4 14.5c0 4.2 3.4 7.6 7.6 7.9v-7.4c-.6-.2-1-.7-1-1.4 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .7-.4 1.2-1 1.4v7.4c4.2-.3 7.6-3.7 7.6-7.9 0-5.8-6.7-12.2-7.2-12.7-.2-.2-.5-.3-.8-.3z" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#4169E1" : "currentColor"}>
      <path d="M12.012 2c-5.522 0-10 4.478-10 10 0 4.542 3.03 8.375 7.18 9.57.51.093.68-.22.68-.49v-1.72c-2.83.615-3.42-1.36-3.42-1.36-.46-1.165-1.12-1.475-1.12-1.475-.92-.63.07-.618.07-.618 1.02.07 1.56 1.048 1.56 1.048.91 1.55 2.38 1.103 2.96.844.09-.657.35-1.104.64-1.358-2.26-.257-4.63-1.13-4.63-5.023 0-1.11.39-2.015 1.04-2.727-.1-.257-.45-1.29.1-2.69 0 0 .85-.272 2.78 1.037a9.66 9.66 0 0 1 2.53-.341c.86.004 1.72.116 2.53.341 1.93-1.31 2.78-1.037 2.78-1.037.55 1.4.2 2.433.1 2.69.65.712 1.04 1.617 1.04 2.727 0 3.902-2.38 4.762-4.65 5.015.36.31.69.924.69 1.86v2.76c0 .273.18.59.69.49 4.14-1.2 7.16-5.03 7.16-9.57 0-5.522-4.48-10-10-10z" />
    </svg>
  );
}

export function MySQLIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#4479A1" : "currentColor"}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V13h-2v3.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V8.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5V11h2V8.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v8z" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill={colored ? "#F7DF1E" : "currentColor"} />
      <path d="M6.5 17.5c.5.8 1.4 1.3 2.5 1.3 1.5 0 2.5-.8 2.5-2.6v-6.7h-2v6.6c0 .7-.3 1.1-.9 1.1-.4 0-.8-.2-1.1-.5l-1 1.3zm7.8 0c.7.8 1.8 1.3 3.1 1.3 2.2 0 3.6-1.2 3.6-3 0-1.8-1.2-2.5-2.7-3.1l-.6-.3c-.9-.4-1.4-.7-1.4-1.3 0-.6.5-1.1 1.4-1.1.9 0 1.5.4 1.9 1.1l1.6-1.1c-.8-1.2-2-1.7-3.4-1.7-2.1 0-3.5 1.3-3.5 2.9 0 1.7 1.1 2.5 2.5 3.1l.6.3c1 .4 1.6.8 1.6 1.4 0 .7-.6 1.2-1.6 1.2-1.2 0-2-.6-2.5-1.5l-1.6 1.2z" fill={colored ? "#000000" : "#09090b"} />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill={colored ? "#3178C6" : "currentColor"} />
      <path d="M5.5 10.5h6v1.8h-2v6.2h-2v-6.2h-2v-1.8zm8.8 7c.7.8 1.8 1.3 3.1 1.3 2.2 0 3.6-1.2 3.6-3 0-1.8-1.2-2.5-2.7-3.1l-.6-.3c-.9-.4-1.4-.7-1.4-1.3 0-.6.5-1.1 1.4-1.1.9 0 1.5.4 1.9 1.1l1.6-1.1c-.8-1.2-2-1.7-3.4-1.7-2.1 0-3.5 1.3-3.5 2.9 0 1.7 1.1 2.5 2.5 3.1l.6.3c1 .4 1.6.8 1.6 1.4 0 .7-.6 1.2-1.6 1.2-1.2 0-2-.6-2.5-1.5l-1.6 1.2z" fill={colored ? "#ffffff" : "#09090b"} />
    </svg>
  );
}

export function PythonIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H4.8S2 6.2 2 10.6c0 4.4 2.4 4.2 2.4 4.2h1.4v-2s-.1-2.4 2.4-2.4h4.1s2.3.1 2.3-2.3V4.2S15.2 2 11.9 2zM9.5 4.3a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776AB" />
      <path d="M12.1 22c4.4 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h7.2s2.8.3 2.8-4.1c0-4.4-2.4-4.2-2.4-4.2h-1.4v2s.1 2.4-2.4 2.4h-4.1s-2.3-.1-2.3 2.3v3.9s-.6 2.2 2.7 2.2zm2.4-2.3a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FFD438" />
    </svg>
  );
}

export function CppIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#00599C" : "currentColor"}>
      <path d="M11.5 3.5 3.7 8v8l7.8 4.5 7.8-4.5V8L11.5 3.5zm-1.8 11.8c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3c1.1 0 2 .5 2.6 1.4l-1.3.8c-.3-.5-.8-.8-1.3-.8-1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9c.6 0 1.1-.3 1.4-.8l1.3.8c-.6.9-1.6 1.4-2.7 1.4zm6.8-2.6h-1v1h-.8v-1h-1v-.8h1v-1h.8v1h1v.8zm3 0h-1v1h-.8v-1h-1v-.8h1v-1h.8v1h1v.8z" />
    </svg>
  );
}

export function JavaIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#ED8B00" : "currentColor"}>
      <path d="M8.5 17.5s-1.5.5 0 1c2 .7 5.5.7 7.5 0 1.5-.5 0-1 0-1-2.5.5-5 .5-7.5 0zm-.5 2s-1.5.5 0 .8c2.5.5 6.5.5 9 0 1.5-.3 0-.8 0-.8-3 .4-6 .4-9 0zm8-11.5c.5 1-1 2.5-1 2.5s2-1 1-2.5zm-3-4s2 1.5.5 3.5c-1 1.5 0 2.5 0 2.5s-2-1.5-.5-3.5c1-1.5 0-2.5 0-2.5zm5.5 10c1 0 1.5-.5 1.5-1.5s-.5-1.5-1.5-1.5v3z" />
    </svg>
  );
}

export function SocketIOIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5-5-5.5h4v-5l5 5.5h-4v5z" />
    </svg>
  );
}

export function RazorpayIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#3395FF" : "currentColor"}>
      <path d="M22.4 2 11.2 13.2h4.5l-3.3 8.8L22.4 2zM1.6 13.2l5.7-11.2H1.6v11.2z" />
    </svg>
  );
}

export function GoogleIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

export function GitIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#F05032" : "currentColor"}>
      <path d="m21.6 10.7-8.3-8.3c-.8-.8-2-.8-2.8 0L8.8 4.1l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.5-2.5l-3.2-3.2v5.2c.4.3.7.8.7 1.4 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-.6.3-1.1.7-1.4V8.7c-.4-.3-.7-.8-.7-1.4 0-.8.4-1.5 1-1.9L7.4 2.8c-.8-.8-2-.8-2.8 0L2.4 5.1c-.8.8-.8 2 0 2.8l8.3 8.3c.8.8 2 .8 2.8 0l8.1-8.1c.8-.7.8-1.9 0-2.6z" />
    </svg>
  );
}

export function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#FF6C37" : "currentColor"}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.8 6.5a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zm-5 9.7a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm6.2-3.8-3.4-1.2a.5.5 0 0 0-.5.1l-1.3 1.3a7.4 7.4 0 0 1-2.9-2.9l1.3-1.3a.5.5 0 0 0 .1-.5L9 6.6a.5.5 0 0 0-.6-.3l-3 1a.5.5 0 0 0-.3.5 10.9 10.9 0 0 0 9.7 9.7.5.5 0 0 0 .5-.3l1-3a.5.5 0 0 0-.3-.6z" />
    </svg>
  );
}

export function ViteIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M21.5 3.5 12.7 20a.8.8 0 0 1-1.4 0L2.5 3.5a.8.8 0 0 1 1-1.1l8.5 3.7 8-3.7a.8.8 0 0 1 1.5 1.1z" fill="#BD34FE"/>
      <path d="M14.5 2.5 12 8l-3-1 2.5 7.5 4.5-9-1.5-3z" fill="#FFD438"/>
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#06B6D4" : "currentColor"}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function ChartJSIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#FF6384" : "currentColor"}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-4h2zm0-6h-2V7h2z" />
    </svg>
  );
}

export function HTML5Icon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#E34F26" : "currentColor"}>
      <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm14.3 5.4H8.4l.2 2.6h8.3l-.7 7.3-4.2 1.2-4.2-1.2-.3-3.2h2.5l.1 1.6 1.9.5 1.9-.5.2-2.3H6.7L6 5h11.5l-.2 2.4z" />
    </svg>
  );
}

export function CSS3Icon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#1572B6" : "currentColor"}>
      <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm14.3 5.4H8.4l.2 2.6h8.3l-.7 7.3-4.2 1.2-4.2-1.2-.3-3.2h2.5l.1 1.6 1.9.5 1.9-.5.2-2.3H6.7L6 5h11.5l-.2 2.4z" />
    </svg>
  );
}

export function VercelIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 2 10 18H2L12 2z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#0A66C2" : "currentColor"}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5", colored = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={colored ? "#25D366" : "currentColor"}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.53 1.37 5.07L2 22l5.17-1.36c1.5 1.05 3.27 1.61 5.09 1.61 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.15c-.24.68-1.4 1.25-1.92 1.3-.5.06-1.14.08-3.66-.96-3.22-1.33-5.29-4.63-5.45-4.85-.16-.22-1.3-1.74-1.3-3.32 0-1.58.82-2.36 1.12-2.68.29-.32.64-.4.85-.4.22 0 .44 0 .63.01.2.01.48-.08.75.58.28.69.95 2.33 1.03 2.5.08.17.14.37.03.59-.11.23-.17.37-.34.57-.17.2-.36.45-.51.6-.17.17-.35.35-.15.7.2.34.88 1.45 1.89 2.35 1.3 1.16 2.4 1.52 2.74 1.69.34.17.54.14.74-.09.2-.23.86-1 1.09-1.35.23-.34.46-.29.77-.17.31.11 1.99.94 2.33 1.11.34.17.57.26.66.4.08.15.08.85-.16 1.53z" />
    </svg>
  );
}

// ==========================================
// UTILITY & INTERACTION ICONS
// ==========================================

export function TerminalIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

export function ArrowUpRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function FileDown({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <polyline points="9 15 12 18 15 15" />
    </svg>
  );
}

export function ExternalLink({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CopyIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function SparklesIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    </svg>
  );
}

export function LayersIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

export function CpuIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

export function ActivityIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

export function ShieldIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function DatabaseIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function ServerIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export function AwardIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

export function BookOpenIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

export function MenuIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function XIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
