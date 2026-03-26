import { useState } from 'react'

const faqItems = [
  {
    q: 'What is AgentPlex?',
    a: 'AgentPlex is a desktop application for orchestrating multiple coding agent sessions with real-time graph visualization and cross-session communication.',
  },
  {
    q: 'Which coding agents does AgentPlex support?',
    a: 'Claude CLI, OpenAI Codex, GitHub Copilot, plus PowerShell and Bash sessions.',
  },
  {
    q: 'How does cross-session messaging work?',
    a: 'You can send context from one session to another, with optional AI-powered summarization using Claude Haiku.',
  },
  {
    q: 'Is AgentPlex free?',
    a: 'Yes, AgentPlex is free and open-source.',
  },
  {
    q: 'What platforms are supported?',
    a: 'Windows is supported now with a pre-built installer. macOS and Linux support is coming soon (build from source available now).',
  },
  {
    q: 'Do I need API keys to use AgentPlex?',
    a: 'You need your own Claude/Codex API keys for the AI sessions. An optional AGENTPLEX_API_KEY enables cross-session summarization.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-bg-surface border border-white/[0.06] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-base pr-4">{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`flex-shrink-0 text-text-muted transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M5 7.5l5 5 5-5" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-text-muted text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
