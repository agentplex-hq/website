export default function FinalCTA() {
  return (
    <section className="py-20 md:py-24 px-6 bg-bg-surface relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(209,138,122,0.08)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Orchestrate Your Coding Agents?
        </h2>
        <p className="text-text-muted text-lg mb-10">
          Join developers who are managing complex AI workflows with a visual-first approach.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover active:bg-accent-active text-bg-inset font-semibold px-8 py-4 text-lg rounded-lg hover:scale-[1.02] transition"
        >
          <img src={`${import.meta.env.BASE_URL}images/icon-windows.svg`} alt="" className="w-5 h-5" />
          Download for Windows
        </a>
      </div>
    </section>
  )
}
