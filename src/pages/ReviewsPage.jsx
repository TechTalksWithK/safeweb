const S = ({ color, children }) => <span style={{ color }}>{children}</span>

const posts = [
  {
    tag: 'Statistics',
    tagColor: '#3b82f6',
    date: 'Feb 2026',
    title: 'Phishing Attacks Up 58% — What the Numbers Mean for Everyday Users',
    summary:
      'Global phishing attempts surged by 58% in 2025 according to the latest threat intelligence reports. We break down which industries were hit hardest, why URL obfuscation techniques are becoming more sophisticated, and what simple habits can dramatically cut your risk.',
    readTime: '5 min read',
  },
  {
    tag: 'Product Review',
    tagColor: '#39ff14',
    date: 'Feb 2026',
    title: 'Malwarebytes vs Bitdefender — Which Catches More Malicious URLs?',
    summary:
      'We ran both tools against a curated set of 500 known-malicious URLs from our research dataset. The results were surprising — real-time URL scanning accuracy varied by as much as 18% between products in the defacement category. Full breakdown inside.',
    readTime: '8 min read',
  },
  {
    tag: 'Findings',
    tagColor: '#f97316',
    date: 'Jan 2026',
    title: 'Our XGBoost Model vs. Industry Baselines — How We Stack Up',
    summary:
      'With a weighted F1-score of 0.90 and 91% overall accuracy, our XGBoost classifier performs competitively against commercially available URL scanners. This post compares our methodology, training data, and results against published benchmarks in the literature.',
    readTime: '6 min read',
  },
  {
    tag: 'Statistics',
    tagColor: '#3b82f6',
    date: 'Jan 2026',
    title: 'The Anatomy of a Malicious URL — 7 Patterns We Found in 651K URLs',
    summary:
      'After analysing over 651,000 labelled URLs, we identified consistent structural patterns that distinguish malicious links from benign ones. Unusually high special-character counts, absent HTTPS prefixes, and shortened domains were among the strongest predictors.',
    readTime: '7 min read',
  },
  {
    tag: 'Product Review',
    tagColor: '#39ff14',
    date: 'Dec 2025',
    title: 'Google Safe Browsing API — Is It Enough on Its Own?',
    summary:
      'Google Safe Browsing is widely used and free, but how does its detection rate hold up against newer, ML-powered alternatives? We review its coverage, latency, and false-positive rate — and explain where it falls short for phishing detection.',
    readTime: '4 min read',
  },
  {
    tag: 'Findings',
    tagColor: '#f97316',
    date: 'Dec 2025',
    title: 'Class Imbalance in URL Datasets — A Hidden Threat to Model Accuracy',
    summary:
      'Benign URLs account for 65% of our dataset, creating a significant class imbalance that inflates accuracy metrics while masking poor recall on minority classes like Malware. We explore SMOTE, class weighting, and threshold tuning as mitigation strategies.',
    readTime: '9 min read',
  },
]

const statCards = [
  { value: '3.4B',   label: 'Phishing emails sent daily worldwide',       color: '#f97316' },
  { value: '58%',    label: 'Increase in phishing attacks in 2025',        color: '#f97316' },
  { value: '$4.9M',  label: 'Average cost of a data breach (IBM 2024)',    color: '#3b82f6' },
  { value: '91%',    label: 'SafeWeb.ai XGBoost accuracy on test set',     color: '#39ff14' },
]

export default function ReviewsPage() {
  return (
    <main className="pt-[56px] min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 py-16">

        {/* Page header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold text-black mb-4 tracking-wide">Blog &amp; Reviews</h1>
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: '#39ff14' }} />
          <p className="text-sm text-gray-600 mt-6 max-w-lg mx-auto">
            Product reviews, cybersecurity statistics, and findings from our ongoing research.
          </p>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {statCards.map((s) => (
            <div
              key={s.label}
              className="rounded-lg px-4 py-5 text-center"
              style={{ background: 'rgba(7,24,41,0.55)', border: `1px solid ${s.color}33` }}
            >
              <p className="text-2xl font-bold mb-1" style={{ color: s.color }}>{s.value}</p>
              <p className="text-[11px] text-gray-600 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-black/10 mb-14" />

        {/* Blog post list */}
        <div className="space-y-8">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-lg px-6 py-6 cursor-pointer transition-all duration-150"
              style={{ background: 'rgba(7,24,41,0.5)', border: '1px solid rgba(0,0,0,0.07)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(57,255,20,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${p.tagColor}22`, color: p.tagColor, border: `1px solid ${p.tagColor}44` }}
                >
                  {p.tag}
                </span>
                <span className="text-xs text-gray-500">{p.date}</span>
                <span className="text-xs text-gray-500 ml-auto">{p.readTime}</span>
              </div>
              <h2 className="text-base font-semibold text-black mb-3 leading-snug">{p.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{p.summary}</p>
              <p className="text-xs mt-4" style={{ color: '#39ff14' }}>Read more →</p>
            </article>
          ))}
        </div>

        <div className="border-t border-black/10 mt-14 pt-10 text-center">
          <p className="text-xs text-gray-500">More posts coming soon. Follow our research for updates.</p>
        </div>

      </div>
    </main>
  )
}
