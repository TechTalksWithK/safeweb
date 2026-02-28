const S = ({ color, children }) => (
  <span style={{ color }}>{children}</span>
)

export default function WhySection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[860px] mx-auto text-center">
        <h2 className="text-2xl font-bold text-black mb-8">What Can I Do Against Cyber Attack?</h2>
        <p className="text-sm leading-relaxed text-black">
          We are constantly under threat on the web but we are not aware of it because the majority of the time it feels safe. When we visit our frequently visited sites, social media platforms or search for reviews on a restaurant or verify the newest conspiracy theory from your friend. We visit the first few URL&apos;s that appear on our web search. What you don&apos;t know is, this makes you a{' '}
          <S color="#f97316">potential victim of a cyber attack</S>. How do we prevent this? Well,{' '}
          <S color="#39ff14">safeweb.ai</S>, is the place for you. We provide{' '}
          <S color="#3b82f6">knowledgeable insights</S> on how you can protect yourself, friends and family. Follow us on this safe journey so we can be better prepared for the future.
        </p>
      </div>
      <div className="max-w-[860px] mx-auto mt-12 border-t border-black/10" />
    </section>
  )
}
