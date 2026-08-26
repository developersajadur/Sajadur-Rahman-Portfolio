"use client";

import { siteConfig } from "@/lib/config";

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 50 50" fill="currentColor">
      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 50 50" fill="currentColor">
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 64 64" fill="currentColor">
      <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full mt-auto select-none">
      <div className="max-w-[1240px] px-5 mx-auto min-h-[96px] md:h-16 py-5 md:py-0 border-t border-r border-l border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 bg-[#0c0c1a]/60 backdrop-blur-md">
        {/* Left / Top: Copyright */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <small className="font-michroma text-[11px] md:text-xs text-white/50 tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}
          </small>
        </div>

        {/* Vertical Center Divider on Desktop */}
        <div className="hidden md:block h-8 w-px bg-white/10" />

        {/* Right / Bottom: Social Icons */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end gap-6 text-white/60">
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
