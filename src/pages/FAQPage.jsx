import { useState } from 'react'

const faqs = [
  {
    q: 'What types of threats can SafeWeb.ai detect?',
    a: 'Our scanner classifies URLs into four categories: Benign (safe), Defacement (website vandalism), Phishing (credential theft), and Malware (malicious software distribution). Each scan returns a probability score for all four classes.',
  },
  {
    q: 'How accurate is the scanner?',
    a: 'Our XGBoost model achieves ~91% overall accuracy on the test set, with weighted F1-score of 0.90. However, the model was trained on a specific dataset and may not generalise perfectly to all real-world URLs. Always use the results as one signal among many.',
  },
  {
    q: 'Is this scanner safe to use on real URLs?',
    a: 'Yes — the scanner analyses URL string features only. It does not visit, load, or execute any URL you submit. No network request is made to the target URL.',
  },
  {
    q: 'What features does the model use to classify URLs?',
    a: 'The model uses structural features extracted from the URL string: total character length, letter count, digit count, special character count, presence of "www", "http", and "https" prefixes, and whether the URL uses a known URL shortener.',
  },
  {
    q: 'Why does the scanner sometimes say a URL is phishing when it looks safe?',
    a: 'False positives can occur. Certain URL patterns (very long paths, many special characters, unusual subdomains) statistically correlate with malicious behaviour, even in some legitimate URLs. Low recall on the Defacement class (0.61) is a known limitation we are working to improve.',
  },
  {
    q: 'Is the scanner free to use?',
    a: 'Yes, SafeWeb.ai is completely free. We believe cybersecurity awareness should be accessible to everyone, not gated behind a paywall.',
  },
  {
    q: 'Where does the training data come from?',
    a: 'Our model was trained on a public dataset sourced from Kaggle containing 651,191 labelled URLs. The origin and labelling accuracy of individual URLs are unverified — a known limitation we discuss in detail on the homepage.',
  },
  {
    q: 'Can I use SafeWeb.ai for commercial or enterprise purposes?',
    a: 'The current version is intended for educational and experimental purposes only and is not designed for production security workflows. Please visit our Sponsorships page if you are interested in supporting further development.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: '1px solid rgba(57,255,20,0.15)' }}
    >
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 transition-colors duration-150"
        style={{ backgroundColor: open ? 'rgba(11,63,42,0.6)' : 'rgba(7,24,41,0.5)' }}
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-black">{q}</span>
        <span
          className="text-xl leading-none flex-shrink-0 transition-transform duration-200"
          style={{ color: '#39ff14', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          className="px-6 py-4"
          style={{ backgroundColor: 'rgba(11,63,42,0.3)' }}
        >
          <p className="text-sm text-gray-200 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="pt-[56px] min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 py-16">

        {/* Page header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold text-black mb-4 tracking-wide">FAQ</h1>
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: '#39ff14' }} />
          <p className="text-sm text-gray-600 mt-6 max-w-lg mx-auto">
            Frequently asked questions about SafeWeb.ai, our scanner, and the technology behind it.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="border-t border-black/10 mt-16 pt-10 text-center">
          <p className="text-sm text-gray-600">
            Still have questions?{' '}
            <span style={{ color: '#39ff14' }}>Check our About page</span>{' '}
            or reach out through our Sponsorships contact form.
          </p>
        </div>

      </div>
    </main>
  )
}
