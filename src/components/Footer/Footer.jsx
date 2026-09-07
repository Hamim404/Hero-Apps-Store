import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="Hero.io" className="h-7 w-7" />
          <span className="text-lg font-bold">HERO.IO</span>
        </Link>

        <div className="text-center sm:text-right">
          <p className="text-sm font-medium text-slate-300 mb-2">
            Social Links
          </p>
          <div className="flex items-center gap-3 justify-center sm:justify-end">
            {["x", "linkedin", "facebook"].map((s) => (
              <span
                key={s}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition-colors cursor-pointer"
                aria-label={s}
              >
                {s === "x" && (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                    <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.7L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6.1L18.9 2Z" />
                  </svg>
                )}
                {s === "linkedin" && (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                    <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5ZM.24 8.24h4.5V23h-4.5V8.24ZM8.5 8.24h4.3v2.02h.06c.6-1.1 2.06-2.26 4.24-2.26 4.53 0 5.37 2.98 5.37 6.85V23h-4.5v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23h-4.5V8.24Z" />
                  </svg>
                )}
                {s === "facebook" && (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                    <path d="M13.5 22v-8.5H16l.5-3.5h-3V7.8c0-1 .3-1.8 1.8-1.8H16.6V2.8C16.3 2.8 15.3 2.7 14.1 2.7c-2.5 0-4.2 1.5-4.2 4.3v2h-2.8v3.5h2.8V22h3.6Z" />
                  </svg>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        Copyright © 2026 - All right reserved
      </div>
    </footer>
  );
};

export default Footer;
