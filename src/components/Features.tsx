const features = [
  {
    icon: '/images/icon-graph.svg',
    title: 'Visual Graph Canvas',
    desc: 'Drag-and-drop session nodes on an interactive canvas to organize your workflow.',
  },
  {
    icon: '/images/icon-sessions.svg',
    title: 'Multi-Session Management',
    desc: 'Run Claude, Codex, and Copilot sessions simultaneously in one workspace.',
  },
  {
    icon: '/images/icon-subagent.svg',
    title: 'Sub-Agent Tracking',
    desc: 'Automatically detect and visualize spawned sub-agents in real time.',
  },
  {
    icon: '/images/icon-alert.svg',
    title: 'Human-in-the-Loop Alerts',
    desc: 'Get notified instantly when a session needs your input.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Label pill */}
        <div className="flex justify-center mb-4">
          <span className="bg-bg-surface text-text-muted text-xs font-medium px-3 py-1 rounded-full">
            Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Why Choose AgentPlex?</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-bg-surface border border-white/[0.06] rounded-xl p-6 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 transition-all"
            >
              <img src={f.icon} alt="" className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
