import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from 'recharts'

const S = ({ color, children }) => <span style={{ color }}>{children}</span>

// Approximate scatter data from the screenshot
const benignData = [
  {x:8,y:2},{x:10,y:2},{x:12,y:3},{x:15,y:4},{x:18,y:3},{x:20,y:5},{x:22,y:4},{x:25,y:6},
  {x:28,y:5},{x:30,y:7},{x:35,y:8},{x:38,y:9},{x:40,y:8},{x:42,y:10},{x:45,y:9},{x:48,y:11},
  {x:50,y:12},{x:55,y:13},{x:60,y:14},{x:65,y:15},{x:70,y:17},{x:75,y:16},{x:80,y:18},
  {x:85,y:19},{x:90,y:20},{x:100,y:22},{x:110,y:24},{x:120,y:26},{x:130,y:28},{x:200,y:31},
  {x:5,y:1},{x:6,y:1},{x:7,y:2},{x:9,y:2},{x:11,y:3},{x:13,y:3},{x:14,y:4},{x:16,y:4},
  {x:17,y:4},{x:19,y:5},{x:21,y:5},{x:23,y:6},{x:26,y:7},{x:27,y:7},{x:32,y:8},{x:33,y:9},
]

const defacementData = [
  {x:20,y:8},{x:25,y:10},{x:30,y:12},{x:35,y:14},{x:40,y:15},{x:45,y:13},{x:50,y:16},
  {x:55,y:18},{x:60,y:20},{x:65,y:22},{x:70,y:25},{x:75,y:20},{x:80,y:21},{x:85,y:23},
  {x:100,y:25},{x:110,y:28},{x:120,y:30},{x:140,y:34},{x:150,y:35},{x:65,y:61},
  {x:15,y:8},{x:22,y:10},{x:28,y:12},{x:42,y:16},{x:48,y:19},{x:52,y:21},
]

const phishingData = [
  {x:10,y:4},{x:15,y:5},{x:20,y:6},{x:25,y:7},{x:30,y:9},{x:35,y:10},{x:40,y:11},
  {x:45,y:12},{x:50,y:7},{x:55,y:14},{x:60,y:15},{x:65,y:16},{x:70,y:14},{x:80,y:17},
  {x:90,y:19},{x:100,y:21},{x:110,y:23},{x:120,y:25},{x:130,y:27},
  {x:12,y:4},{x:17,y:6},{x:22,y:7},{x:27,y:8},{x:32,y:9},
]

const malwareData = [
  {x:8,y:6},{x:10,y:8},{x:12,y:7},{x:15,y:9},{x:18,y:8},{x:20,y:7},{x:22,y:9},
  {x:25,y:10},{x:28,y:8},{x:30,y:7},{x:6,y:6},{x:7,y:7},{x:9,y:7},
]

export default function PatternsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Identifying patterns and abnormalities...
        </h2>

        <p className="text-sm text-center mb-10" style={{ color: '#f97316' }}>
          Notice the few sparse outliers in this sample taken from the dataset;{' '}
          <S color="#3b82f6">these outliers need to investigated further</S>{' '}
          as they may skew the normalizing and scaling of the features.
        </p>

        {/* Scatter Plot */}
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <ScatterChart margin={{ top: 10, right: 20, left: 10, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis
                type="number"
                dataKey="x"
                name="Letters Count"
                domain={[0, 250]}
                ticks={[0, 50, 100, 150, 200, 250]}
                label={{ value: 'Letters Count', position: 'insideBottom', offset: -10, style: { fontSize: 12, fill: '#d1d5db' } }}
                tick={{ fontSize: 11, fill: '#d1d5db' }}
              />
              <YAxis
                type="number"
                dataKey="y"
                name="Special Characters Count"
                domain={[0, 70]}
                ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
                label={{ value: 'Special Characters Count', angle: -90, position: 'insideLeft', offset: 10, style: { fontSize: 12, fill: '#d1d5db' } }}
                tick={{ fontSize: 11, fill: '#d1d5db' }}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend
                verticalAlign="top"
                wrapperStyle={{ fontSize: '12px', paddingBottom: '8px' }}
              />
              <Scatter name="Benign" data={benignData} fill="#4472C4" opacity={0.7} />
              <Scatter name="Defacement" data={defacementData} fill="#70AD47" opacity={0.8} />
              <Scatter name="Phishing" data={phishingData} fill="#00B0F0" opacity={0.7} />
              <Scatter name="Malware" data={malwareData} fill="#FF4444" opacity={0.9} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="border-t border-black/10 mt-12" />
      </div>
    </section>
  )
}
