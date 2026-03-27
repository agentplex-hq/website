const steps = [
  {
    number: 1,
    title: 'Launch AgentPlex',
    desc: 'Download and open the app on Windows.',
  },
  {
    number: 2,
    title: 'Start Your Sessions',
    desc: 'Spin up Claude, Codex, or Copilot sessions in any working directory.',
  },
  {
    number: 3,
    title: 'Orchestrate Visually',
    desc: 'Arrange, monitor, and coordinate agents on the graph canvas.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24 px-6 bg-bg-surface">
      <div className="max-w-[1200px] mx-auto">
        {/* Label pill */}
        <div className="flex justify-center mb-4">
          <span className="bg-bg-primary text-text-muted text-xs font-medium px-3 py-1 rounded-full">
            Getting Started
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">How It Works</h2>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((s) => (
            <div key={s.number} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-bg-inset font-bold text-lg flex items-center justify-center mx-auto mb-5">
                {s.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="https://github.com/AlexPeppas/agentplex/releases/download/v1.2.0/AgentPlex.exe"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover active:bg-accent-active text-bg-inset font-semibold px-7 py-3.5 rounded-lg hover:scale-[1.02] transition"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}
