const S = ({ color, children }) => <span style={{ color }}>{children}</span>

const epochs = [
  { n: 1,  loss: '0.5163', acc: '0.8220', time: '5s', ms: '4' },
  { n: 2,  loss: '0.4340', acc: '0.8426', time: '3s', ms: '3' },
  { n: 3,  loss: '0.4190', acc: '0.8475', time: '3s', ms: '3' },
  { n: 4,  loss: '0.4085', acc: '0.8504', time: '4s', ms: '3' },
  { n: 5,  loss: '0.4025', acc: '0.8536', time: '3s', ms: '3' },
  { n: 6,  loss: '0.3973', acc: '0.8563', time: '3s', ms: '3' },
  { n: 7,  loss: '0.3923', acc: '0.8575', time: '3s', ms: '3' },
  { n: 8,  loss: '0.3894', acc: '0.8598', time: '4s', ms: '3' },
  { n: 9,  loss: '0.3864', acc: '0.8598', time: '3s', ms: '3' },
  { n: 10, loss: '0.3825', acc: '0.8618', time: '3s', ms: '3' },
]

export default function TrainingSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[860px] mx-auto">
        <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: '#39ff14' }} />
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Training and testing the models...
        </h2>

        <p className="text-sm text-center mb-10">
          Our model selection was guided by the{' '}
          <S color="#f97316">need for speed and performance</S>; gravitating us to{' '}
          <S color="#3b82f6">XGBoost</S> and a{' '}
          <S color="#3b82f6">multi-layer neural network</S>, both renowned for their{' '}
          <S color="#f97316">historical excellence</S> in handling complex data patterns and{' '}
          <S color="#f97316">powerful predictive accuracy</S>.
        </p>

        {/* Training Epoch Logs */}
        <div
          className="rounded p-4 text-xs leading-5 text-green-300 overflow-x-auto"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid rgba(57,255,20,0.15)', fontFamily: 'Consolas, "Courier New", monospace' }}
        >
          {epochs.map((e) => (
            <div key={e.n}>
              <span className="text-gray-500">Epoch {e.n}/10</span>
              <br />
              <span>
                1094/1094 [==============================] - {e.time} {e.ms}ms/step - loss:{' '}
                {e.loss} - accuracy: {e.acc}
              </span>
              {e.n < 10 && <br />}
            </div>
          ))}
        </div>

        <div className="border-t border-black/10 mt-14" />
      </div>
    </section>
  )
}
