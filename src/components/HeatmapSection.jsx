const S = ({ color, children }) => <span style={{ color }}>{children}</span>

const features = [
  'letter_count', 'digit_count', 'special_chars', 'shortened', 'www',
  'http', 'https', 'type_benign', 'type_phishing', 'type_defacement', 'type_malware',
]

// Approximate correlation matrix (11x11)
const corrMatrix = [
  [1.00, 0.78, 0.82, 0.05, 0.08, 0.12, 0.06, -0.10,  0.08,  0.12, -0.05],
  [0.78, 1.00, 0.71, 0.04, 0.06, 0.10, 0.05, -0.08,  0.09,  0.08, -0.04],
  [0.82, 0.71, 1.00, 0.06, 0.10, 0.15, 0.08, -0.12,  0.10,  0.14, -0.06],
  [0.05, 0.04, 0.06, 1.00,-0.05,-0.08,-0.04,  0.02,  0.06, -0.04,  0.03],
  [0.08, 0.06, 0.10,-0.05, 1.00, 0.35, 0.15,  0.05, -0.08,  0.42, -0.20],
  [0.12, 0.10, 0.15,-0.08, 0.35, 1.00,-0.45, -0.12,  0.02,  0.52, -0.10],
  [0.06, 0.05, 0.08,-0.04, 0.15,-0.45, 1.00,  0.08, -0.05, -0.15,  0.05],
  [-0.10,-0.08,-0.12, 0.02, 0.05,-0.12, 0.08,  1.00, -0.55, -0.62, -0.30],
  [0.08, 0.09, 0.10, 0.06,-0.08, 0.02,-0.05, -0.55,  1.00, -0.25, -0.12],
  [0.12, 0.08, 0.14,-0.04, 0.42, 0.52,-0.15, -0.62, -0.25,  1.00, -0.18],
  [-0.05,-0.04,-0.06, 0.03,-0.20,-0.10, 0.05, -0.30, -0.12, -0.18,  1.00],
]

function getColor(val) {
  // Blue for positive, red/orange for negative, white for ~0
  if (val >= 0) {
    const t = Math.min(val, 1)
    const r = Math.round(255 - t * 210)
    const g = Math.round(255 - t * 180)
    const b = Math.round(255)
    return `rgb(${r},${g},${b})`
  } else {
    const t = Math.min(-val, 1)
    const r = Math.round(255)
    const g = Math.round(255 - t * 180)
    const b = Math.round(255 - t * 220)
    return `rgb(${r},${g},${b})`
  }
}

const ColorScale = () => {
  const steps = [1.00, 0.75, 0.50, 0.25, 0.00, -0.25, -0.50, -0.75, -1.00]
  return (
    <div className="flex flex-col items-center ml-3">
      <div
        className="w-4 rounded"
        style={{
          height: '198px',
          background: 'linear-gradient(to bottom, #1a3a8c, #6699dd, #ffffff, #ee9977, #cc2200)',
        }}
      />
      <div className="flex flex-col justify-between" style={{ height: '198px', marginTop: '-198px' }}>
        {steps.map((s) => (
          <span key={s} className="text-[8px] text-gray-600 ml-5 leading-none">{s.toFixed(2)}</span>
        ))}
      </div>
      <div className="text-[8px] text-gray-500 mt-1" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '80px', lineHeight: '1' }}>
        Correlation Coefficient
      </div>
    </div>
  )
}

export default function HeatmapSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[860px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left text */}
          <div className="md:w-[38%] flex-shrink-0">
            <h2 className="text-xl font-bold text-black leading-snug mb-5">
              This is a heatmap of the data with added features...
            </h2>
            <p className="text-sm text-black leading-relaxed mb-4">
              A heatmap helps us identify and visualize correlations between the different features.
            </p>
            <p className="text-sm leading-relaxed">
              <S color="#f97316">This heatmap suggests a potential association between the Defacement class</S>{' '}
              and the <S color="#f97316">&apos;http&apos;</S> and{' '}
              <S color="#f97316">&apos;www&apos;</S> features. Let&apos;s investigate further.
            </p>
          </div>

          {/* Heatmap */}
          <div className="md:flex-1 overflow-x-auto">
            <div className="flex items-start">
              <div>
                {/* Row labels */}
                <div className="flex">
                  <div className="flex flex-col justify-around" style={{ width: '80px', height: `${features.length * 18}px` }}>
                    {features.map((f) => (
                      <span key={f} className="text-right pr-1 text-[8px] text-gray-600 leading-none">{f}</span>
                    ))}
                  </div>

                  {/* Grid */}
                  <div>
                    {corrMatrix.map((row, ri) => (
                      <div key={ri} className="flex">
                        {row.map((val, ci) => (
                          <div
                            key={ci}
                            style={{
                              width: '18px',
                              height: '18px',
                              backgroundColor: getColor(val),
                              border: '0.5px solid rgba(0,0,0,0.4)',
                            }}
                            title={`${features[ri]} × ${features[ci]}: ${val.toFixed(2)}`}
                          />
                        ))}
                      </div>
                    ))}

                    {/* Column labels */}
                    <div className="flex mt-1">
                      {features.map((f) => (
                        <div
                          key={f}
                          style={{
                            width: '18px',
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            fontSize: '7px',
                            color: '#d1d5db',
                            lineHeight: '1',
                            height: '65px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <ColorScale />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 mt-14" />
      </div>
    </section>
  )
}
