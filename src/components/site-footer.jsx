import { Link } from '@tanstack/react-router'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import wordmarkImage from '../assets/header-wordmark.jpg'

const socialLinks = [
  { label: 'Instagram', href: '#instagram', icon: Instagram },
  { label: 'Facebook', href: '#facebook', icon: Facebook },
  { label: 'YouTube', href: '#youtube', icon: Youtube },
  { label: 'LinkedIn', href: '#linkedin', icon: Linkedin },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-brand-crimson text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-5 py-8 sm:grid-cols-3">
        <Link to="/" className="justify-self-center sm:justify-self-start" aria-label="Swati home">
          <img
            src={wordmarkImage}
            alt="Swati Publications"
            className="h-auto max-h-12 w-40 object-contain sm:max-h-14"
          />
        </Link>

        <nav
          aria-label="Social media"
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/90 transition hover:border-white hover:bg-white hover:text-brand-crimson"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>

        <div className="text-center font-telugu text-3xl font-bold leading-tight sm:justify-self-end sm:text-right">
          స్వాతి
          <span className="mt-1 block text-xs font-medium tracking-wide text-red-100">
            సప్తాహిక పత్రిక
          </span>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-3 text-center text-xs text-red-100/80">
        © 2026 Swati Publications. All rights reserved.
      </div>
    </footer>
  )
}
