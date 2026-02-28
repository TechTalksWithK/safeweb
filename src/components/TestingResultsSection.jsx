const S = ({ color, children }) => <span style={{ color }}>{children}</span>

const xgRows = [
  { label: '0',            precision: '0.93', recall: '0.97', f1: '0.95', support: '' },
  { label: '1',            precision: '0.85', recall: '0.61', f1: '0.71', support: '' },
  { label: '2',            precision: '0.85', recall: '0.94', f1: '0.90', support: '' },
  { label: '3',            precision: '0.93', recall: '0.80', f1: '0.86', support: '' },
  { label: '',             precision: '',     recall: '',     f1: '',     support: '' },
  { label: 'accuracy',     precision: '',     recall: '',     f1: '0.91', support: '' },
  { label: 'macro avg',    precision: '0.89', recall: '0.83', f1: '0.85', support: '' },
  { label: 'weighted avg', precision: '0.91', recall: '0.91', f1: '0.90', support: '' },
]

const nnRows = [
  { label: '0',            precision: '0.92', recall: '0.98', f1: '0.94', support: '' },
  { label: '1',            precision: '0.83', recall: '0.55', f1: '0.66', support: '' },
  { label: '2',            precision: '0.83', recall: '0.92', f1: '0.88', support: '' },
  { label: '3',            precision: '0.90', recall: '0.70', f1: '0.79', support: '' },
  { label: '',             precision: '',     recall: '',     f1: '',     support: '' },
  { label: 'accuracy',     precision: '',     recall: '',     f1: '0.89', support: '' },
  { label: 'macro avg',    precision: '0.87', recall: '0.79', f1: '0.82', support: '' },
  { label: 'weighted avg', precision: '0.89', recall: '0.89', f1: '0.89', support: '' },
]

const ResultTable = ({ title, rows }) => (
  <div className="flex-1 min-w-[240px]">
    <h3 className="text-sm font-bold text-center underline mb-3 text-black">{title}</h3>
    <table
      className="w-full text-xs border-collapse"
      style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
    >
      <thead>
        <tr>
          <td className="text-right pr-4 py-0.5"></td>
          <td className="text-right pr-4 py-0.5 font-semibold text-black">precision</td>
          <td className="text-right pr-4 py-0.5 font-semibold text-black">recall</td>
          <td className="text-right py-0.5 font-semibold text-black">f1-score</td>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td className="text-right pr-4 py-0.5 text-gray-500">{r.label}</td>
            <td className="text-right pr-4 py-0.5 text-black">{r.precision}</td>
            <td className="text-right pr-4 py-0.5 text-black">{r.recall}</td>
            <td className="text-right py-0.5 text-black">{r.f1}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default function TestingResultsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Testing results and model evaluation...
        </h2>

        <p className="text-sm text-center mb-10">
          <S color="#3b82f6">XGBoost exhibits superior performance</S> across multiple metrics.
          This could be attributed to the neural network&apos;s{' '}
          <S color="#f97316">susceptibility to overfitting</S>, where it achieves{' '}
          <S color="#3b82f6">high accuracy on training data</S> but struggles to{' '}
          <S color="#f97316">generalize on new unseen data</S>.
        </p>

        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <ResultTable title="XG-Boost Results" rows={xgRows} />
          <ResultTable title="Neural Network Results" rows={nnRows} />
        </div>

        <p className="text-center text-xs text-gray-500 mt-6" style={{ fontFamily: 'monospace' }}>
          [Legend: 0-Benign; 1-Defacement; 2-Phishing; 3-Malware]
        </p>

        <div className="border-t border-black/10 mt-14" />
      </div>
    </section>
  )
}
