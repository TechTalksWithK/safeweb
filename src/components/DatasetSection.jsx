const originalDataRows = [
  { index: 0, url: 'br-icloud.com.br', type: 'phishing' },
  { index: 1, url: 'mp3raid.com/music/krizz_kaliko.html', type: 'benign' },
  { index: 2, url: 'bopsecrets.org/rexroth/cr/1.html', type: 'benign' },
  { index: 3, url: 'http://www.garage-pirenne.be/index.php?optio...', type: 'defacement' },
  { index: 4, url: 'http://adventure-nicaragua.net/index.php?optio...', type: 'defacement' },
  { index: '...', url: '...', type: '...' },
  { index: 651186, url: 'xbox360.ign.com/objects/850/850402.html', type: 'phishing' },
  { index: 651187, url: 'games.teamxbox.com/xbox-360/1860/Dead-lSpace/', type: 'phishing' },
  { index: 651188, url: 'www.gamespot.com/xbox360/action/deadspace/', type: 'phishing' },
  { index: 651189, url: 'en.wikipedia.org/wiki/Dead_Space_(video_game)', type: 'phishing' },
  { index: 651190, url: 'www.angelfire.com/goth/devilmaycrytonite/', type: 'phishing' },
]

const IllustrationCard = ({ label }) => (
  <div
    className="rounded-lg flex items-center justify-center"
    style={{
      height: '120px',
      background: 'linear-gradient(135deg, #0b3f2a 0%, #0a3324 100%)',
      border: '1px solid rgba(57,255,20,0.2)',
    }}
  >
    <span className="text-xs font-medium text-center px-2" style={{ color: '#39ff14' }}>{label}</span>
  </div>
)

const illustrations = [
  'Data Theft',
  'Phishing Attack',
  'Malware Distribution',
  'URL Scanning',
  'Network Security',
  'Cybersecurity Shield',
]

export default function DatasetSection() {
  return (
    <section id="dataset-section" className="py-16 px-6">
      <div className="max-w-[860px] mx-auto">
        {/* Illustration grid */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {illustrations.map((label) => (
            <IllustrationCard key={label} label={label} />
          ))}
        </div>

        {/* Content: text left + table right */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-[38%] flex-shrink-0">
            <div className="w-10 h-[2px] mb-3" style={{ backgroundColor: '#39ff14' }} />
            <h2 className="text-xl font-bold text-black leading-tight mb-4">
              Let&apos;s start with the original dataset...
            </h2>
            <p className="text-sm text-black leading-relaxed mb-3">
              It consists of 651,191 rows of collected URLs that are classified as either 1 of 4
              classes: Benign, Defacement, Phishing, or Malware.
            </p>
            <p className="text-xs" style={{ color: '#3b82f6' }}>
              *Dataset was obtained from a public{' '}
              <a
                href="https://www.kaggle.com"
                target="_blank"
                rel="noreferrer"
                className="underline"
                style={{ color: '#3b82f6' }}
              >
                Kaggle repository
              </a>
              .
            </p>
          </div>

          <div className="md:flex-1 overflow-x-auto">
            <table className="text-xs w-full border-collapse" style={{ fontFamily: 'monospace' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <th className="text-right pr-4 py-1 font-normal text-gray-500 text-xs"></th>
                  <th className="text-right pr-4 py-1 font-semibold text-xs text-black">url</th>
                  <th className="text-right py-1 font-semibold text-xs text-black">type</th>
                </tr>
              </thead>
              <tbody>
                {originalDataRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}
                    className={i % 2 === 0 ? '' : 'bg-black/5'}
                  >
                    <td className="text-right pr-4 py-0.5 text-gray-500">{row.index}</td>
                    <td className="text-right pr-4 py-0.5 max-w-[200px] truncate text-black">{row.url}</td>
                    <td className="text-right py-0.5 text-black">{row.type}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="text-xs text-gray-500 pt-1.5">
                    651191 rows × 2 columns
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="border-t border-black/10 mt-14" />
      </div>
    </section>
  )
}
