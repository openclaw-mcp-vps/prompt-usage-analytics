export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          AI Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Which AI Prompts<br />
          <span className="text-[#58a6ff]">Drive Conversions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect prompt variations to real business outcomes. A/B test your AI prompts and see exactly which ones lead to signups, purchases, and feature adoption — with full revenue attribution.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Tracking — $29/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { stat: '3.2x', label: 'avg. conversion lift' },
            { stat: '<5min', label: 'integration time' },
            { stat: '100%', label: 'revenue attributed' },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to optimize AI prompt performance.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited prompt variations tracked',
              'Conversion event correlation',
              'A/B test with statistical significance',
              'Revenue attribution per prompt',
              'REST API + JS SDK',
              'Slack & email alerts',
              'Priority support',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does prompt-to-conversion tracking work?',
              a: 'You tag each prompt variation with an ID via our API or JS SDK. When a user converts, you fire a conversion event with the same session context. We automatically correlate the two and surface which prompts drove the outcome.',
            },
            {
              q: 'Do I need to change my existing AI setup?',
              a: 'No major changes needed. Add a single line to log the prompt ID before calling your LLM, and one line to log the conversion event. Works with OpenAI, Anthropic, Gemini, or any model.',
            },
            {
              q: 'What counts as a conversion event?',
              a: 'Anything you define — signups, purchases, feature clicks, session length, or custom goals. You send the event; we handle the attribution math.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
