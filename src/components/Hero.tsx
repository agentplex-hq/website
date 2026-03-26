function smoothScroll(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6">
          Orchestrate Your Coding Agents, <span className="text-accent">Visually</span>
        </h1>

        {/* Subtitle */}
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Run multiple Claude, Codex, and Copilot sessions side-by-side with real-time graph
          visualization and cross-session coordination.
        </p>

        {/* CTAs */}
        <div className="flex flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover active:bg-accent-active text-bg-inset font-semibold px-7 py-3.5 rounded-lg hover:scale-[1.02] transition"
          >
            <img src="/images/icon-windows.svg" alt="" className="w-5 h-5" />
            Download for Windows
          </a>
          <button
            onClick={() => smoothScroll('#features')}
            className="border border-text-muted/30 text-text-primary hover:border-accent hover:text-accent font-semibold px-7 py-3.5 rounded-lg transition"
          >
            Learn More
          </button>
        </div>

        {/* Social proof pill */}
        <div className="flex justify-center mb-16">
          <div className="bg-bg-surface px-4 py-2 rounded-full text-sm text-text-muted inline-flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#e8c070">
              <path d="M8 0l2.47 4.94L16 5.76l-4 3.88.94 5.48L8 12.68l-4.94 2.44.94-5.48-4-3.88 5.53-.82z" />
            </svg>
            Built for developers who orchestrate AI workflows
          </div>
        </div>

        {/* Hero screenshot */}
        <div className="max-w-[1000px] mx-auto rounded-xl overflow-hidden shadow-2xl shadow-accent/10 border border-white/5">
          <img src="/images/hero-screenshot.png" alt="AgentPlex graph canvas" className="w-full" />
        </div>
      </div>
    </section>
  )
}
