import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * Publication-list row shared by the minimal index pages (Research, Services,
 * Case studies, Resources): a 4:3 thumbnail on the left, text on the right,
 * stacked on phones. No rules between rows; spacing does the separating.
 */

export const pubLink = 'text-[color:var(--home-accent)] hover:opacity-70'

const frame =
  'relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[3px] bg-white text-[#205E92] ring-1 ring-[color:var(--home-rule-soft)]'

function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.endsWith('.pdf')
}

/** Anchor that opens off-site links and PDFs in a new tab. */
export function SmartLink({
  href,
  className,
  children,
  prefetch,
  ...rest
}: {
  href: string
  className?: string
  children: ReactNode
  tabIndex?: number
  prefetch?: boolean
  'aria-hidden'?: boolean | 'true'
}) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} prefetch={prefetch} {...rest}>
      {children}
    </Link>
  )
}

/** Image thumbnail, or a line drawing (an SVG <g>) when there is no figure. */
export function Thumb({
  href,
  src,
  alt,
  fit = 'cover',
  glyph,
  label,
  unoptimized,
}: {
  href?: string
  src?: string
  alt?: string
  fit?: 'cover' | 'contain'
  glyph?: ReactNode
  /** True for sources already generated at display size (scripts/gen-thumbs.mjs). */
  unoptimized?: boolean
  label?: string
}) {
  const body = src ? (
    <Image
      src={src}
      alt={alt ?? ''}
      fill
      sizes="152px"
      unoptimized={unoptimized}
      className={fit === 'cover' ? 'object-cover' : 'object-contain p-1.5'}
    />
  ) : (
    <span className="flex flex-col items-center gap-1" aria-hidden="true">
      <svg viewBox="0 0 80 60" className="w-[74%]">
        {glyph}
      </svg>
      {label && (
        <span className="px-2 text-center text-[11px] font-semibold leading-tight">{label}</span>
      )}
    </span>
  )
  if (!href) return <div className={frame}>{body}</div>
  return (
    <SmartLink href={href} className={frame} tabIndex={-1} aria-hidden="true" prefetch={false}>
      {body}
    </SmartLink>
  )
}

export function PubEntry({ id, thumb, children }: { id?: string; thumb: ReactNode; children: ReactNode }) {
  return (
    <li id={id} className="flex scroll-mt-6 flex-col gap-3 py-5 sm:flex-row sm:gap-5">
      <div className="w-[11rem] shrink-0 sm:w-[9.5rem] sm:pt-0.5">{thumb}</div>
      <div className="min-w-0 text-[13.5px] leading-[1.45]">{children}</div>
    </li>
  )
}

/** Shared stroke style for the line-drawing glyphs. */
export const glyphStroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}
