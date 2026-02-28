const S = ({ color, children }) => <span style={{ color }}>{children}</span>

const tiers = [
  {
    name: 'Shield',
    price: '$500 / mo',
    color: '#9b59b6',
    perks: [
      'Logo on the homepage footer',
      'Mention in monthly updates',
      'Access to anonymised scan analytics',
    ],
  },
  {
    name: 'Sentinel',
    price: '$1,500 / mo',
    color: '#3b82f6',
    perks: [
      'Everything in Shield',
      'Featured sponsor banner',
      'Co-branding on documentation',
      'Quarterly research briefing',
    ],
  },
  {
    name: 'Guardian',
    price: '$5,000 / mo',
    color: '#39ff14',
    perks: [
      'Everything in Sentinel',
      'Dedicated sponsored page',
      'Joint press release',
      'Priority feature requests',
      'Direct line to development team',
    ],
  },
]

export default function SponsorshipsPage() {
  return (
    <main className="pt-[56px] min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 py-16">

        {/* Page header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold text-black mb-4 tracking-wide">Sponsorships</h1>
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: '#39ff14' }} />
          <p className="text-sm text-gray-600 mt-6 max-w-lg mx-auto">
            Help us make the web safer for everyone. Your support funds continued research,
            model improvements, and free access for all users.
          </p>
        </div>

        {/* Why sponsor */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-black mb-4">
            <S color="#39ff14">Why Sponsor SafeWeb.ai?</S>
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-black">
            <p>
              Cybersecurity threats are growing in{' '}
              <S color="#f97316">scale and sophistication</S> every year. Billions of dollars are
              lost annually to phishing attacks and malware — affecting individuals, small businesses,
              and enterprises alike.
            </p>
            <p>
              By sponsoring SafeWeb.ai, you are directly funding{' '}
              <S color="#3b82f6">open, accessible cybersecurity tooling</S> that helps everyday
              users identify threats before they cause damage. Your brand is associated with
              education, safety, and technical excellence.
            </p>
          </div>
        </section>

        <div className="border-t border-black/10 mb-14" />

        {/* Tiers */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-black mb-8">
            <S color="#39ff14">Sponsorship Tiers</S>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className="rounded-lg px-6 py-6 flex flex-col"
                style={{
                  background: 'rgba(7,24,41,0.55)',
                  border: `1px solid ${t.color}44`,
                }}
              >
                <h3 className="text-lg font-bold mb-1" style={{ color: t.color }}>{t.name}</h3>
                <p className="text-2xl font-bold text-black mb-5">{t.price}</p>
                <ul className="space-y-2 flex-1">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-gray-200">
                      <span style={{ color: t.color, flexShrink: 0, marginTop: '2px' }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 w-full py-2.5 rounded text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ backgroundColor: t.color, color: t.color === '#39ff14' ? '#000' : '#fff' }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-black/10 mb-14" />

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-6">
            <S color="#39ff14">Get in Touch</S>
          </h2>
          <p className="text-sm text-black leading-relaxed mb-8">
            Interested in a custom partnership or have questions about sponsorship?
            Fill out the form below and our team will respond within 2 business days.
          </p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 text-sm text-black placeholder-gray-500 rounded focus:outline-none w-full"
                style={{ backgroundColor: 'rgba(7,24,41,0.7)', border: '1px solid rgba(57,255,20,0.2)' }}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 text-sm text-black placeholder-gray-500 rounded focus:outline-none w-full"
                style={{ backgroundColor: 'rgba(7,24,41,0.7)', border: '1px solid rgba(57,255,20,0.2)' }}
              />
            </div>
            <input
              type="text"
              placeholder="Company / Organisation"
              className="px-4 py-3 text-sm text-black placeholder-gray-500 rounded focus:outline-none w-full"
              style={{ backgroundColor: 'rgba(7,24,41,0.7)', border: '1px solid rgba(57,255,20,0.2)' }}
            />
            <textarea
              rows={4}
              placeholder="Tell us about your interest..."
              className="px-4 py-3 text-sm text-black placeholder-gray-500 rounded focus:outline-none w-full resize-none"
              style={{ backgroundColor: 'rgba(7,24,41,0.7)', border: '1px solid rgba(57,255,20,0.2)' }}
            />
            <button
              type="submit"
              className="px-8 py-3 text-sm font-bold rounded hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#39ff14', color: '#000' }}
            >
              Send Message
            </button>
          </form>
        </section>

      </div>
    </main>
  )
}
