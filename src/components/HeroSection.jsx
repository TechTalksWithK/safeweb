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
      logo={<Logo />}
      badge="AI-Powered URL Security"
      title="Is That Link Safe?"
      subtitle="Find out in seconds."
      description="Paste any URL and our XGBoost & neural network models — trained on over 651,000 real-world URLs — will classify it as Benign, Phishing, Malware, or Defacement."
      primaryButton={{
        label: 'Scan a URL',
        onClick: () => {
          document.getElementById('scanner-section')?.scrollIntoView({ behavior: 'smooth' })
        },
      }}
      secondaryButton={{
        label: 'Learn How It Works',
        onClick: () => {
          document.getElementById('dataset-section')?.scrollIntoView({ behavior: 'smooth' })
        },
      }}
      stats={stats}
      accentColor="#39ff14"
    />
  )
}
