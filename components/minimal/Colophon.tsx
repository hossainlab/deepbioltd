import { Mail } from 'lucide-react'

function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  )
}

/** Ruled footer shared by every minimal page. */
export function Colophon({ className = 'max-w-[36rem]' }: { className?: string }) {
  return (
    <div className={`mx-auto w-full px-4 pb-8 sm:px-0 ${className}`}>
      <hr className="mt-8 border-0 border-t border-[color:var(--home-rule)]" />
      <footer className="mt-5 flex flex-col items-center gap-4 text-sm text-[color:var(--home-accent)] sm:flex-row sm:justify-start sm:gap-8">
        <div className="flex items-center gap-5">
          <a href="https://twitter.com/deepbioltd" target="_blank" rel="noopener noreferrer" aria-label="DeepBio on X" className="hover:opacity-70">
            <XIcon className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/company/deepbioltd/" target="_blank" rel="noopener noreferrer" aria-label="DeepBio on LinkedIn" className="hover:opacity-70">
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/deepbioltd" target="_blank" rel="noopener noreferrer" aria-label="DeepBio on Facebook" className="hover:opacity-70">
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a href="mailto:info@deepbioltd.com" aria-label="Email DeepBio" className="hover:opacity-70">
            <Mail className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </a>
        </div>
        <span>Made in Dhaka, Bangladesh</span>
      </footer>
    </div>
  )
}
