/**
 * Single source of truth for identity, links, and navigation.
 *
 * Deliberately framework-agnostic plain data: the site's identity should
 * survive a future re-platform without being untangled from components.
 */

export const SITE = {
  /** Canonical origin. Must match `site` in astro.config.mjs. */
  url: 'https://danielvanginneken.com',
  name: 'Daniël van Ginneken',
  /** Used for OpenGraph `site_name` and the browser title suffix. */
  title: 'Daniël van Ginneken',
  description:
    'Software engineering student with infrastructure roots, building systems-aware software in .NET and TypeScript.',
  locale: 'en',
  ogLocale: 'en_US',
} as const;

/**
 * Profiles that establish identity across the web. Emitted as `sameAs` in the
 * Person JSON-LD, which is how search engines connect this site to those
 * accounts. Order is not significant.
 */
export const SOCIALS = {
  github: 'https://github.com/danielvanginneken',
  linkedin: 'https://www.linkedin.com/in/danielvanginneken',
  youtube: 'https://www.youtube.com/@danielvanginneken',
} as const;

/** Needs a matching mailbox on the Plesk origin before launch. */
export const EMAIL = 'hello@danielvanginneken.com';

/**
 * Direct download of the latest CV, per site locale. CI in the profile repo
 * gives the assets fixed names, so GitHub's `releases/latest/download/<name>`
 * always serves the newest one — no site change per CV release.
 * Deliberately not in SOCIALS: those become JSON-LD `sameAs` and get
 * `rel="me"` — identity claims a PDF shouldn't make.
 */
const CV_RELEASE =
  'https://github.com/danielvanginneken/danielvanginneken/releases/latest/download';
export const CV = {
  en: `${CV_RELEASE}/CV-DanielvanGinneken-EN.pdf`,
  nl: `${CV_RELEASE}/CV-DanielvanGinneken-NL.pdf`,
} as const;

/** CV for a page's `Astro.currentLocale`; English for anything without a CV. */
export const cvFor = (locale: string | undefined): string =>
  locale === 'nl' ? CV.nl : CV.en;

/** Everything with a non-empty value, for JSON-LD `sameAs`. */
export const SAME_AS: string[] = Object.values(SOCIALS).filter(Boolean);

/**
 * Primary navigation. Five items, deliberately capped — a nav that grows is a
 * nav that stops being read. /writing stays out until it has real posts.
 */
export const NAV = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/now', label: 'Now' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact' },
] as const;
