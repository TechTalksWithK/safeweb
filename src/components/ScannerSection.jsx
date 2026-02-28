const S = ({ color, children }) => <span style={{ color }}>{children}</span>

const ScanIcon = () => (
  <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6V2H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 6V2H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 16V20H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 16V20H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="11" cy="11" r="2" stroke="black" strokeWidth="1.5" />
  </svg>
)

// Scanner result preview card
const ScannerPreview = () => (
  <div
    className="mx-auto rounded-md text-center relative overflow-hidden"
    style={{
      backgroundImage: 'url(/bg-hero.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      maxWidth: '500px',
    }}
  >
    {/* Dark overlay so text stays readable while image shows through */}
    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(7,24,41,0.80)', borderRadius: 'inherit' }} />

    <div className="relative z-10 px-8 py-6">
      <h3 className="text-black text-base font-semibold mb-3">Scan URL for Malware</h3>
      <div className="flex gap-0 mb-2">
        <input
          readOnly
          value="http://www.maliciousurl.com/&&staysafe"
          className="flex-1 px-3 py-2 text-xs rounded-l text-gray-600 bg-white border border-gray-200 focus:outline-none"
          style={{ borderRadius: '4px 0 0 4px' }}
        />
        <button
          className="flex items-center justify-center px-3 py-2"
          style={{ backgroundColor: '#39ff14', borderRadius: '0 4px 4px 0' }}
        >
          <ScanIcon />
        </button>
      </div>
      <p className="text-[10px] text-left mb-4" style={{ color: '#39ff14' }}>
        *This scanner is intended for educational and experimental purposes. It is not designed for
        real-world use, and its results should not be relied upon for critical decisions.
      </p>
      <div className="flex gap-6 justify-center text-left">
        <div>
          <p className="text-sm font-semibold mb-1" style={{ color: '#ff4444' }}>XG - Phishing</p>
          <p className="text-xs text-black leading-5">Benign: 0.00</p>
          <p className="text-xs text-black leading-5">Defacement: 0.12</p>
          <p className="text-xs text-black leading-5">Phishing: 0.87</p>
          <p className="text-xs text-black leading-5">Malware: 0.00</p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-1" style={{ color: '#00b8d4' }}>TF - Phishing</p>
          <p className="text-xs text-black leading-5">Benign: 0.00</p>
          <p className="text-xs text-black leading-5">Defacement: 0.08</p>
          <p className="text-xs text-black leading-5">Phishing: 0.92</p>
          <p className="text-xs text-black leading-5">Malware: 0.00</p>
        </div>
      </div>
    </div>
  </div>
)

export default function ScannerSection() {
  return (
    <section id="scanner-section" className="py-16 px-6">
      <div className="max-w-[860px] mx-auto text-center">
        <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: '#39ff14' }} />
        <h2 className="text-2xl font-bold text-black mb-6">
          The resulting scanner...
        </h2>

        <p className="text-sm mb-5 leading-relaxed text-black">
          The scanner on which this project is based on was built in{' '}
          <S color="#3b82f6">Python</S>, packaged into a{' '}
          <S color="#3b82f6">Docker container</S>, and hosted on{' '}
          <S color="#3b82f6">AWS Elastic Container Service</S>.
        </p>

        <p className="text-sm mb-8 leading-relaxed" style={{ color: '#f97316' }}>
          The resulting output for the user-inputted URL is headed by the{' '}
          <S color="#f97316">prediction classification</S> (either in green for{' '}
          &apos;Benign&apos; or red for malicious), followed by a list of all the classes and the{' '}
          probability prediction for each class.
        </p>

        <ScannerPreview />

        <div className="border-t border-black/10 mt-14" />
      </div>
    </section>
  )
}
