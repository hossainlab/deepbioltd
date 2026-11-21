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

function GitHubIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z" />
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
          <a href="https://github.com/deepbio-lab" target="_blank" rel="noopener noreferrer" aria-label="DeepBio on GitHub" className="hover:opacity-70">
            <GitHubIcon className="h-4 w-4" />
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
