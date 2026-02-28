const S = ({ color, children }) => <span style={{ color }}>{children}</span>

export default function AboutPage() {
  return (
    <main className="pt-[56px] min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 py-16">

        {/* Page header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold text-black mb-4 tracking-wide">About Us</h1>
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: '#39ff14' }} />
        </div>

        {/* What Can I Do Against Cyber Attack? — moved from homepage */}
        <section className="mb-14 text-center">
          <h2 className="text-2xl font-bold text-black mb-6">What Can I Do Against Cyber Attack?</h2>
          <p className="text-sm leading-relaxed text-black max-w-[680px] mx-auto">
            We are constantly under threat on the web but we are not aware of it because the majority
            of the time it feels safe. When we visit our frequently visited sites, social media
            platforms or search for reviews on a restaurant or verify the newest conspiracy theory
            from your friend. We visit the first few URL&apos;s that appear on our web search. What
            you don&apos;t know is, this makes you a{' '}
            <S color="#f97316">potential victim of a cyber attack</S>. How do we prevent this? Well,{' '}
            <S color="#39ff14">safeweb.ai</S>, is the place for you. We provide{' '}
            <S color="#3b82f6">knowledgeable insights</S> on how you can protect yourself, friends
            and family. Follow us on this safe journey so we can be better prepared for the future.
          </p>
        </section>

        <div className="border-t border-black/10 mb-14" />

        {/* Mission */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-black mb-4">
            <S color="#39ff14">Our Mission</S>
          </h2>
          <p className="text-sm text-black leading-relaxed mb-4">
            SafeWeb.ai was built with a single purpose — to make the web a safer place for everyone.
            Every day, millions of people unknowingly click on{' '}
            <S color="#f97316">malicious URLs</S> embedded in emails, social media posts, and search
            results. We believe that <S color="#3b82f6">accessible, intelligent tooling</S> can
            change that.
          </p>
          <p className="text-sm text-black leading-relaxed">
            By combining <S color="#3b82f6">machine learning</S> with a deep understanding of URL
            patterns, we&apos;ve built a scanner that helps identify phishing links, malware
            distributors, and defacement attacks before they cause harm.
          </p>
        </section>

        <div className="border-t border-black/10 mb-14" />

        {/* The Project */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-black mb-4">
            <S color="#39ff14">The Project</S>
          </h2>
          <p className="text-sm text-black leading-relaxed mb-4">
            SafeWeb.ai began as a research project exploring the application of{' '}
            <S color="#3b82f6">gradient boosting</S> and{' '}
            <S color="#3b82f6">deep neural networks</S> to URL classification. Our dataset comprised
            over <S color="#f97316">651,191 labeled URLs</S> spanning four categories: Benign,
            Defacement, Phishing, and Malware.
          </p>
          <p className="text-sm text-black leading-relaxed">
            The result is a scanner trained on real-world data, packaged into a{' '}
            <S color="#3b82f6">Docker container</S> and served via{' '}
            <S color="#3b82f6">AWS Elastic Container Service</S> — built to scale.
          </p>
        </section>

        <div className="border-t border-black/10 mb-14" />

        {/* Technology */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-black mb-6">
            <S color="#39ff14">Technology Stack</S>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'XGBoost',    desc: 'Primary classifier' },
              { label: 'TensorFlow', desc: 'Neural network model' },
              { label: 'Python',     desc: 'Core language' },
              { label: 'Docker',     desc: 'Containerization' },
              { label: 'AWS ECS',    desc: 'Cloud hosting' },
              { label: 'React',      desc: 'Frontend UI' },
            ].map((t) => (
              <div
                key={t.label}
                className="rounded-lg px-4 py-4"
                style={{ background: 'rgba(11,63,42,0.55)', border: '1px solid rgba(57,255,20,0.18)' }}
              >
                <p className="text-sm font-bold mb-1" style={{ color: '#39ff14' }}>{t.label}</p>
                <p className="text-xs text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-black/10 mb-14" />

        {/* Values */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-6">
            <S color="#39ff14">Our Values</S>
          </h2>
          <div className="space-y-6 text-sm leading-relaxed text-black">
            <p>
              <strong className="text-black">Transparency.</strong>{' '}
              We openly share our methodology, training data sources, and model limitations. We never
              overstate accuracy or hide weaknesses.
            </p>
            <p>
              <strong className="text-black">Education.</strong>{' '}
              <S color="#3b82f6">Knowledge is the best defense</S>. This site walks you through every
              step of our ML pipeline — from raw data to deployed model — so you understand exactly
              how your URL is being assessed.
            </p>
            <p>
              <strong className="text-black">Community.</strong>{' '}
              Cybersecurity is a shared responsibility.{' '}
              <S color="#f97316">Together, we build a safer web</S> for our families, friends, and
              future generations.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
