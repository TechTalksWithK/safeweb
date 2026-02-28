const S = ({ color, children }) => <span style={{ color }}>{children}</span>

const CybersecurityIllustration = () => (
  <svg
    viewBox="0 0 500 300"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-[440px] mx-auto"
    style={{ maxHeight: '260px' }}
  >
    {/* Background desk / scene */}
    <rect x="0" y="230" width="500" height="70" fill="#0b3f2a" rx="4" />

    {/* Monitor */}
    <rect x="160" y="60" width="200" height="140" rx="8" fill="#1a3a6b" />
    <rect x="168" y="68" width="184" height="120" rx="4" fill="#0d2040" />
    {/* Screen content - shield */}
    <polygon points="260,82 232,94 232,118 260,130 288,118 288,94" fill="none" stroke="#39ff14" strokeWidth="2" />
    <path d="M248 110 l8 8 l16-16" stroke="#39ff14" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Lock icon on screen */}
    <rect x="248" y="150" width="24" height="18" rx="3" fill="#4472C4" />
    <path d="M252 150 v-6 a8 8 0 0 1 16 0 v6" stroke="#4472C4" strokeWidth="2.5" fill="none" />

    {/* Monitor stand */}
    <rect x="248" y="200" width="24" height="15" fill="#1a3a6b" />
    <rect x="230" y="215" width="60" height="6" rx="3" fill="#1a3a6b" />

    {/* Female figure (left) */}
    <circle cx="100" cy="110" r="18" fill="#f4b8a0" />
    <rect x="85" y="128" width="30" height="45" rx="6" fill="#9b59b6" />
    <rect x="78" y="132" width="14" height="30" rx="5" fill="#9b59b6" />
    <rect x="93" y="132" width="14" height="30" rx="5" fill="#9b59b6" />
    <rect x="88" y="173" width="12" height="28" rx="4" fill="#2c3e50" />
    <rect x="100" y="173" width="12" height="28" rx="4" fill="#2c3e50" />
    {/* Laptop for female figure */}
    <rect x="118" y="162" width="55" height="38" rx="4" fill="#2c3e50" />
    <rect x="122" y="165" width="47" height="28" rx="2" fill="#4472C4" />
    <rect x="114" y="198" width="63" height="5" rx="2" fill="#1a252f" />

    {/* Male figure (right) */}
    <circle cx="390" cy="95" r="18" fill="#f4b8a0" />
    <rect x="375" y="113" width="30" height="48" rx="6" fill="#27ae60" />
    <rect x="368" y="117" width="14" height="32" rx="5" fill="#27ae60" />
    <rect x="393" y="117" width="14" height="32" rx="5" fill="#27ae60" />
    <rect x="378" y="161" width="12" height="30" rx="4" fill="#34495e" />
    <rect x="390" y="161" width="12" height="30" rx="4" fill="#34495e" />
    {/* Shield he's holding */}
    <polygon points="360,100 340,110 340,135 360,148 380,135 380,110" fill="#4472C4" stroke="#2980b9" strokeWidth="1.5" />
    <path d="M350 125 l7 7 l13-13" stroke="black" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

    {/* Network nodes around monitor */}
    <circle cx="80" cy="55" r="7" fill="#70AD47" />
    <circle cx="420" cy="50" r="7" fill="#70AD47" />
    <circle cx="60" cy="180" r="6" fill="#00B0F0" />
    <circle cx="440" cy="185" r="6" fill="#00B0F0" />
    <circle cx="180" cy="30" r="5" fill="#FF4444" />
    <circle cx="330" cy="28" r="5" fill="#FF4444" />

    {/* Connection lines */}
    <line x1="80" y1="55" x2="160" y2="90" stroke="rgba(57,255,20,0.3)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="420" y1="50" x2="360" y2="85" stroke="rgba(57,255,20,0.3)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="60" y1="180" x2="160" y2="175" stroke="rgba(57,255,20,0.3)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="440" y1="185" x2="360" y2="175" stroke="rgba(57,255,20,0.3)" strokeWidth="1" strokeDasharray="4 3" />

    {/* Document icons */}
    <rect x="200" y="20" width="22" height="28" rx="3" fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    <line x1="206" y1="29" x2="216" y2="29" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
    <line x1="206" y1="34" x2="216" y2="34" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
    <line x1="206" y1="39" x2="212" y2="39" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />

    <rect x="290" y="18" width="22" height="28" rx="3" fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    <line x1="296" y1="27" x2="306" y2="27" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
    <line x1="296" y1="32" x2="306" y2="32" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
    <line x1="296" y1="37" x2="302" y2="37" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />

    {/* Globe */}
    <circle cx="460" cy="80" r="22" fill="none" stroke="#4472C4" strokeWidth="1.5" />
    <ellipse cx="460" cy="80" rx="12" ry="22" fill="none" stroke="#4472C4" strokeWidth="1" />
    <line x1="438" y1="80" x2="482" y2="80" stroke="#4472C4" strokeWidth="1" />
    <line x1="440" y1="66" x2="480" y2="66" stroke="#4472C4" strokeWidth="0.8" />
    <line x1="440" y1="94" x2="480" y2="94" stroke="#4472C4" strokeWidth="0.8" />
  </svg>
)

export default function LimitationsSection() {
  return (
    <section className="py-16 px-6 pb-24">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-2xl font-bold text-black text-center mb-8">
          Limitations &amp; Future Directions
        </h2>

        <p className="text-sm text-center leading-relaxed mb-8 text-black">
          There were several limitations when assembling this project. One notable limitation, as with
          many other machine learning models, is the quality of the data.{' '}
          <S color="#f97316">Our model utilized a dataset sourced from a public{' '}
            <a href="https://www.kaggle.com" target="_blank" rel="noreferrer" style={{ color: '#f97316', textDecoration: 'underline' }}>
              Kaggle repository
            </a>
          </S>; however, the{' '}
          <S color="#3b82f6">origin</S> of the URLs and the{' '}
          <S color="#3b82f6">accuracy of the associated labels</S> are unverified. Because of this,
          the model&apos;s predictions may be confined only to the dataset&apos;s scope, and the true
          accuracy may vary vastly from real-world scenarios.
        </p>

        <p className="text-sm text-center mb-8" style={{ color: '#f97316' }}>
          Looking ahead, there are several approaches we can implement for a more robust model:
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-black">
          <p>
            <strong className="text-black">1) Enhance data collection and verification.</strong>{' '}
            <S color="#f97316">Strategies for obtaining higher quality data include sourcing from
            reputable sources</S>, implementing an ensemble of machine learning methods to verify
            label accuracy in isolated testing environments, and/or with human intervention.
          </p>

          <p>
            <strong className="text-black">2) Enhance data quality through comprehensive outlier detection and anomaly treatment.</strong>{' '}
            As mentioned{' '}
            <S color="#f97316">early in the study</S>, multiple outliers and anomalies were detected,
            and this warrants a granular ex<S color="#3b82f6">m</S>ination of each data point, as they
            can heavily impact feature scaling and normalization.
          </p>

          <p>
            <strong className="text-black">3) Expansion of feature space and hyperparameter optimization.</strong>{' '}
            <S color="#3b82f6">Incorporating additional features</S>, such as originating country
            detection and common character patterns,{' '}
            <S color="#f97316">could better capture</S> complex and deeply embedded malicious URLs. In
            addition, implementing regularization techniques such as{' '}
            <S color="#3b82f6">L1, L2, and dropout</S> can mitigate overfitting and potentially
            improve model performance.
          </p>
        </div>

        <p className="text-sm font-bold text-center mt-12 mb-12 text-black">
          Thank you for taking the time to explore our study. Together we can create a more safe web.
        </p>

        <CybersecurityIllustration />

        <div className="border-t border-black/10 mt-14" />
      </div>
    </section>
  )
}
