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

export default function Footer() {
  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href === '#') return
    e.preventDefault()
    smoothScroll(href)
  }

  return (
    <footer className="bg-bg-inset border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Logo + tagline */}
          <div>
            <img src="/images/logo.svg" alt="AgentPlex" className="h-8 mb-3" />
            <p className="text-text-muted text-sm">Orchestrate coding agents visually.</p>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
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

          {/* Right: GitHub */}
          <div className="md:text-right">
            <a
              href="https://github.com/agentplex-hq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/images/icon-github.svg"
                alt="GitHub"
                className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 mt-8 pt-6 text-center">
          <p className="text-text-muted text-xs">&copy; 2026 AgentPlex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
