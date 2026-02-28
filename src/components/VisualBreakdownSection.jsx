import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts'

const barData = [
  { name: 'Benign', count: 428119, fill: '#4472C4' },
  { name: 'Defacement', count: 96457, fill: '#70AD47' },
  { name: 'Phishing', count: 94111, fill: '#00B0F0' },
  { name: 'Malware', count: 32504, fill: '#FF4444' },
]

const pieData = [
  { name: 'Benign', value: 428119, fill: '#4472C4' },
  { name: 'Defacement', value: 96457, fill: '#70AD47' },
  { name: 'Phishing', value: 94111, fill: '#00B0F0' },
  { name: 'Malware', value: 32504, fill: '#FF4444' },
]

const formatYAxis = (v) => v.toLocaleString()

const CustomBarLegend = () => (
  <div className="flex justify-center mb-2 gap-6">
    {barData.map((d) => (
      <div key={d.name} className="flex items-center gap-1.5">
        <div className="w-7 h-3 rounded-sm" style={{ background: d.fill }} />
        <span className="text-xs text-gray-600">{d.name}</span>
      </div>
    ))}
  </div>
)

export default function VisualBreakdownSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Visual breakdown of the data...
        </h2>

        <p className="text-sm text-center mb-10" style={{ color: '#f97316' }}>
          Notice there are many more data points labeled &apos;Benign&apos; than the 3 other
          classes; this imbalance is skewed to the majority class and may affect prediction accuracy.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          {/* Bar Chart */}
          <div className="md:flex-1">
            <div className="text-xs text-center mb-1 text-gray-500">
              — Counts of Different URL Types
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData} margin={{ top: 5, right: 10, left: 30, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#d1d5db' }} />
                <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 10, fill: '#d1d5db' }} />
                <Bar dataKey="count" radius={[2, 2, 0, 0]}>
                  {barData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie/Donut Chart */}
          <div className="md:flex-1 flex flex-col items-center">
            <CustomBarLegend />
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={110}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border-t border-black/10 mt-12" />
      </div>
    </section>
  )
}
