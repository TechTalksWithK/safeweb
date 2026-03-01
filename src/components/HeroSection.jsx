import { Shield } from 'lucide-react'
import MinimalModernHero from './ui/minimal'

const Logo = () => (
  <div className="flex items-center gap-2">
    <Shield size={32} color="#39ff14" strokeWidth={2} />
    <span
      className="text-2xl font-black"
      style={{ color: '#000000', fontFamily: 'Inter, sans-serif' }}
    >
      SafeWeb<span style={{ color: '#39ff14' }}>.ai</span>
    </span>
  </div>
)

const stats = [
  { value: '651K+', label: 'URLs Analysed' },
  { value: '91%',   label: 'XGBoost Accuracy' },
  { value: '86%',   label: 'Neural Net Accuracy' },
  { value: '4',     label: 'Threat Classes' },
]

export default function HeroSection() {
  return (
    <MinimalModernHero
      logo={{
        url: '/',
        src: '/logo.svg',
        alt: 'SafeWeb',
        title: 'SafeWeb',
      }}
      badge="BetaTesting version of the AI models"
      title="Scan a URL"
      subtitle="Instantly detect phishing, malware, and malicious threats."
      description="Our BetaTesting version of the AI models analyze URLs in real time to help you stay protected."

      primaryButton={{
        label: 'Scan a URL',
        onClick: () => {
          document
            .getElementById('scanner-section')
            ?.scrollIntoView({ behavior: 'smooth' })
        },
      }}

      primaryButtonNote="The URL Scanner is in beta version and is not available as we refine its features and security scanning capabilities."

      secondaryButton={{
        label: 'View Blog',
        onClick: () => {
          window.location.href = '/blog/training-and-testing-the-models'
        },
      }}

      accentColor="#39ff14"
    />
  )
}
