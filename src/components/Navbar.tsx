import { useState } from 'react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#' },
]

function smoothScroll(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href === '#') return
    e.preventDefault()
    smoothScroll(href)
    setMobileOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-inset/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Left: Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt="AgentPlex" className="h-8" />
        </a>

        {/* Center: Desktop nav links — absolutely centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-text-muted hover:text-text-primary transition text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Desktop CTA */}
        <a
          href="#"
          className="hidden md:inline-flex flex-shrink-0 items-center gap-2 bg-accent hover:bg-accent-hover active:bg-accent-active text-bg-inset font-semibold text-sm px-5 py-2.5 rounded-lg transition"
        >
          <img src={`${import.meta.env.BASE_URL}images/icon-windows.svg`} alt="" className="w-4 h-4" />
          Download for Windows
        </a>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-text-primary" />
          <span className="block w-5 h-0.5 bg-text-primary" />
          <span className="block w-5 h-0.5 bg-text-primary" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-inset/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-text-muted hover:text-text-primary transition text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover active:bg-accent-active text-bg-inset font-semibold text-sm px-5 py-2.5 rounded-lg transition w-fit"
          >
            <img src={`${import.meta.env.BASE_URL}images/icon-windows.svg`} alt="" className="w-4 h-4" />
            Download for Windows
          </a>
        </div>
      )}
    </nav>
  )
}
