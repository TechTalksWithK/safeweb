const S = ({ color, children }) => <span style={{ color }}>{children}</span>

export default function SummarySection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[860px] mx-auto text-center">
        <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: '#39ff14' }} />
        <h2 className="text-2xl font-bold text-black mb-8">Summary &amp; Key Findings</h2>

        <p className="text-sm leading-relaxed mb-6 text-black">
          <S color="#f97316">In this application, we shared the inner workings</S> of the beta version of
          our malware scanner. We explained the{' '}
          <S color="#3b82f6">key steps taken to develop the underlying machine learning model</S>, from{' '}
          <S color="#f97316">data extraction and cleaning</S> to analysis and evaluation of results.
        </p>

        <p className="text-sm leading-relaxed text-black">
          While initial evaluation metrics indicate{' '}
          <S color="#3b82f6">high accuracy on both models</S>, the{' '}
          <S color="#f97316">low recall</S> suggests potential{' '}
          <S color="#f97316">overfitting</S>, characterized by a large amount of false negatives.
          This implies the models perform well on{' '}
          <S color="#3b82f6">training data</S> but may struggle with{' '}
          <S color="#f97316">generalizing new unseen data</S>. We recognize the need for further
          refinement to ensure the model&apos;s robustness and its ability to accurately identify
          malicious actors in various scenarios.
        </p>

        <div className="border-t border-black/10 mt-14" />
      </div>
    </section>
  )
}
