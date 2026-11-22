"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const minimalNav: { name: string; href: string; external?: boolean }[] =
  [
    { name: "Home", href: "/" },
    { name: "Research", href: "/research" },
    { name: "Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Resources", href: "/resources" },
    { name: "Join Us", href: "/join-us" },
  ];

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {[
        "M4 4C4 4 7 6 12 12S20 20 20 20",
        "M20 4C20 4 17 6 12 12S4 20 4 20",
        "M6.5 6.5H4",
        "M17.5 6.5H20",
        "M6.5 17.5H4",
        "M17.5 17.5H20",
        "M9 9H7.5",
        "M16.5 9H15",
        "M9 15H7.5",
        "M16.5 15H15",
      ].map((d) => (
        <path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/** Wordmark, nav and rule shared by every minimal page. */
export function Masthead() {
  const pathname = usePathname() || "/";
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  // Compact once the reader scrolls. Two thresholds (hysteresis) so the
  // shrinking header cannot flip the state back and forth near one line.
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCompact((c) => (c ? y > 20 : y > 80));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Wordmark and nav stay pinned together; the wordmark shrinks on scroll.
    <header className="sticky top-0 z-40 bg-[color:var(--home-bg)]">
      <div
        className={`mx-auto w-full max-w-[36rem] px-14 text-center transition-[padding] duration-300 sm:px-0 ${
          compact ? "pt-3" : "pt-12"
        }`}
      >
        <Link
          href="/"
          aria-label="DeepBio, home"
          className="inline-flex items-center gap-3 text-[color:var(--home-accent)] sm:gap-4"
        >
          <Mark
            className={`transition-all duration-300 ${compact ? "h-6 w-6 sm:h-7 sm:w-7" : "h-9 w-9 sm:h-12 sm:w-12"}`}
          />
          <span
            className={`font-bold leading-none tracking-tight transition-all duration-300 ${
              compact
                ? "text-[1.6rem] sm:text-[2rem]"
                : "text-[2.6rem] sm:text-[3.6rem]"
            }`}
          >
            DeepBio
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className={`transition-[margin] duration-300 ${compact ? "mt-1" : "mt-6"}`}
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-3 text-sm sm:gap-x-6 sm:text-base">
            {minimalNav.map((item) => {
              if (item.external) {
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[color:var(--home-accent)]"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              }
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-[color:var(--home-accent)] underline decoration-1 underline-offset-[6px]"
                        : "transition-colors hover:text-[color:var(--home-accent)]"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <hr className="border-0 border-t border-[color:var(--home-rule)]" />
      </div>
    </header>
  );
}
