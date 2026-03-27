export default function Showcase() {
  return (
    <section className="py-20 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <span className="bg-bg-surface text-text-muted text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
            All-in-One Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Every Agent, One Canvas</h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
            Manage Claude, Codex, Copilot, and shell sessions from a single visual workspace. Share
            context between sessions, track plans and tasks, and never lose sight of what your agents
            are doing.
          </p>
          <a
            href="https://github.com/AlexPeppas/agentplex/releases/download/v1.2.0/AgentPlex.exe"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover active:bg-accent-active text-bg-inset font-semibold px-7 py-3.5 rounded-lg hover:scale-[1.02] transition"
          >
            <img src={`${import.meta.env.BASE_URL}images/icon-windows.svg`} alt="" className="w-5 h-5" />
            Download for Windows
          </a>
        </div>

        {/* Right column: Screenshot */}
        <div className="rounded-xl overflow-hidden border border-white/5 shadow-lg shadow-accent/5">
          <img src={`${import.meta.env.BASE_URL}images/showcase-screenshot.png`} alt="AgentPlex multi-session view" className="w-full" />
        </div>
      </div>
    </section>
  )
}
