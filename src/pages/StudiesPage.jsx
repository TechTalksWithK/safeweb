import { useNavigate } from 'react-router-dom'

export default function StudiesPage() {
  const navigate = useNavigate()
  return (
    <main className="pt-[56px] min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 py-16">

        {/* Page header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold text-black mb-4 tracking-wide">Studies</h1>
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: '#ffffff' }} />
          <p className="text-sm text-gray-600 mt-6 max-w-lg mx-auto">
            Research findings and model study documentation.
          </p>
        </div>

        <div className="border-t border-black/10 mb-10" />

        {/* Anchor link that scrolls to subsection */}
        <div className="mb-10">
          <a
            href="#preliminary-study"
            className="text-sm font-medium transition-opacity duration-150 hover:opacity-70"
            style={{ color: '#000000' }}
          >
            Jump to preliminary study ↓
          </a>
        </div>

        {/* Study subsection */}
        <section id="preliminary-study">
          <article
            className="rounded-lg px-6 py-6 cursor-pointer transition-all duration-150"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.07)' }}
            onClick={() => navigate('/blog/training-and-testing-the-models')}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  color: '#000000',
                  border: '1px solid rgba(0,0,0,0.18)',
                }}
              >
                Findings
              </span>
              <span className="text-xs" style={{ color: 'rgba(0,0,0,0.55)' }}>Feb 2026</span>
              <span className="text-xs ml-auto" style={{ color: 'rgba(0,0,0,0.55)' }}>6 min read</span>
            </div>

            <h2
              className="text-base font-semibold leading-snug mb-3"
              style={{ color: '#000000' }}
            >
              Training and Testing The Models: A preliminary study of the recent findings on URL's.
              Defining what is considered benign, true positive, false positive, or Undefined
            </h2>

            <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              A comprehensive overview of our machine learning pipeline for URL classification,
              covering model training, evaluation metrics, and the definitions used to categorise
              URL behaviour across four threat classes: Benign, Defacement, Phishing, and Malware.
            </p>

            <p className="text-xs mt-4 font-medium" style={{ color: '#000000' }}>Read more →</p>
          </article>
        </section>

      </div>
    </main>
  )
}
