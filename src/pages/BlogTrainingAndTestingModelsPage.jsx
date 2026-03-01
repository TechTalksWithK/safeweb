export default function BlogTrainingAndTestingModelsPage() {
  return (
    <main className="pt-[56px] min-h-screen">
      <div className="max-w-[860px] mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black mb-4 tracking-wide">
            Training and Testing The Models
          </h1>
          <div className="w-16 h-[2px] mx-auto bg-black" />
          <p className="text-sm text-gray-700 mt-6 max-w-xl mx-auto">
            A deeper look at how SafeWeb.ai trains, evaluates, and iterates on its URL
            classification models. You can freely replace this copy with your final article text.
          </p>
        </div>

        <article className="space-y-4 text-sm leading-relaxed text-black">
          <p>
            In this post, we walk through the full lifecycle of our models: from collecting and
            cleaning URL datasets, to designing features that capture behavioural and structural
            patterns, to selecting model architectures that balance performance with reliability in
            production. The goal is to give a transparent overview of how our systems think about
            &quot;safe&quot; versus &quot;unsafe&quot; web content.
          </p>

          <p>
            We also describe our training and evaluation setup, including how we split data into
            training, validation, and test sets, which metrics we prioritise, and how we monitor
            for issues like class imbalance and concept drift. These details are intentionally
            high level so that you can revise and expand them later with more concrete numbers,
            charts, or links to supporting studies.
          </p>

          <p>
            Finally, we outline how findings from these experiments feed back into SafeWeb.ai&apos;s
            product decisions: tightening thresholds, surfacing explanations to users, and guiding
            future research directions. As you iterate on this article, you can replace these
            paragraphs with more precise descriptions of your pipeline, experiment logs, and key
            takeaways.
          </p>
        </article>
      </div>
    </main>
  )
}

