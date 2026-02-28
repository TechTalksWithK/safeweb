const S = ({ color, children }) => <span style={{ color }}>{children}</span>

const featuresRows = [
  { index: 0, url: 'br-icloud.com.br', type: 'phishing', letters: 13, digits: 0, special: 3, shortened: 0, www: 0, http: 0, https: 0 },
  { index: 1, url: 'mp3raid.com/music/krizz_kaliko.html', type: 'benign', letters: 29, digits: 1, special: 5, shortened: 0, www: 0, http: 0, https: 0 },
  { index: 2, url: 'bopsecrets.org/rexroth/cr/1.html', type: 'benign', letters: 25, digits: 1, special: 5, shortened: 0, www: 0, http: 0, https: 0 },
  { index: 3, url: 'http://www.garage-pirenne.be\n/index.php?option=...', type: 'defacement', letters: 63, digits: 7, special: 18, shortened: 0, www: 1, http: 1, https: 0 },
  { index: 4, url: 'http://adventure-nicaragua.net\n/index.php?optio...', type: 'defacement', letters: 199, digits: 22, special: 14, shortened: 0, www: 0, http: 1, https: 0 },
  { index: '...', url: '...', type: '...', letters: '...', digits: '...', special: '...', shortened: '...', www: '...', http: '...', https: '...' },
  { index: 651186, url: 'xbox360.ign.com/objects/850/850402.html', type: 'phishing', letters: 21, digits: 12, special: 6, shortened: 0, www: 0, http: 0, https: 0 },
  { index: 651187, url: 'games.teamxbox.com/xbox-360/1860/Dead-Space/', type: 'phishing', letters: 29, digits: 7, special: 8, shortened: 0, www: 0, http: 0, https: 0 },
  { index: 651188, url: 'www.gamespot.com/xbox360/action\n/deadspace/', type: 'phishing', letters: 33, digits: 3, special: 6, shortened: 0, www: 1, http: 0, https: 0 },
  { index: 651189, url: 'en.wikipedia.org/wiki/Dead_Space\n_(video_game)', type: 'phishing', letters: 36, digits: 0, special: 9, shortened: 0, www: 0, http: 0, https: 0 },
  { index: 651190, url: 'www.angelfire.com/goth\n/devilmaycrytonite/', type: 'phishing', letters: 36, digits: 0, special: 5, shortened: 0, www: 1, http: 0, https: 0 },
]

const headers = ['', 'url', 'type', 'letters_count', 'digits_count', 'special_chars_count', 'shortened', 'www', 'http', 'https']

export default function FeaturesDatasetSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          This is the dataset after we added features...
        </h2>

        <p className="text-sm text-center mb-10 text-black">
          <S color="#f97316">We added distinguishing features</S> such as url length,{' '}
          <S color="#3b82f6">number of digits</S>,{' '}
          <S color="#f97316">number of special characters</S>, and if the{' '}
          <S color="#3b82f6">URL contains common prefixes</S> such as &apos;www, http, and https&apos;.
        </p>

        <div className="overflow-x-auto">
          <table
            className="w-full border-collapse text-right text-black"
            style={{ fontFamily: 'monospace', fontSize: '11px' }}
          >
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                {headers.map((h) => (
                  <th key={h} className="py-1.5 px-2 font-semibold text-black whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featuresRows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-black/5'}>
                  <td className="py-1 px-2 text-gray-500">{row.index}</td>
                  <td className="py-1 px-2 max-w-[160px]" style={{ whiteSpace: 'pre-line', wordBreak: 'break-all' }}>{row.url}</td>
                  <td className="py-1 px-2">{row.type}</td>
                  <td className="py-1 px-2">{row.letters}</td>
                  <td className="py-1 px-2">{row.digits}</td>
                  <td className="py-1 px-2">{row.special}</td>
                  <td className="py-1 px-2">{row.shortened}</td>
                  <td className="py-1 px-2">{row.www}</td>
                  <td className="py-1 px-2">{row.http}</td>
                  <td className="py-1 px-2">{row.https}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={headers.length} className="text-xs text-gray-500 pt-2 text-left px-2">
                  651191 rows × 9 columns
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="border-t border-black/10 mt-14" />
      </div>
    </section>
  )
}
