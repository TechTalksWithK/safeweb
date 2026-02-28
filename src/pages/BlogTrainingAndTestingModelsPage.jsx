import React from "react";

/**
 * Drop-in blog page layout (Tailwind)
 * Images should live in:
 * /public/blog/training-and-testing-the-models/
 */

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-12 md:py-16">
    <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-black">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-sm md:text-base text-black/80 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const TwoCol = ({ left, right, reverseOnDesktop = false }) => (
  <div
    className={[
      "grid grid-cols-1 gap-10 items-center",
      "md:grid-cols-2",
      reverseOnDesktop ? "md:[&>div:first-child]:order-2" : "",
    ].join(" ")}
  >
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

const ImageCard = ({ src, alt, caption }) => (
  <figure className="w-full">
    <div className="w-full overflow-hidden rounded-xl border border-black/10 bg-white">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block object-contain"
        loading="lazy"
      />
    </div>
    {caption ? (
      <figcaption className="mt-3 text-xs md:text-sm text-black/70 text-center">
        {caption}
      </figcaption>
    ) : null}
  </figure>
);

const Divider = () => (
  <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
    <div className="h-px w-full bg-black/10" />
  </div>
);

export default function BlogTrainingAndTestingModelsPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <header className="pt-12 md:pt-16 pb-8">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Training and Testing The Models
          </h1>
          <p className="mt-5 text-sm md:text-base leading-relaxed text-black/80 max-w-3xl mx-auto">
            We trained and evaluated multiple models to classify URLs into four
            categories: <span className="font-medium">Benign</span>,{" "}
            <span className="font-medium">Defacement</span>,{" "}
            <span className="font-medium">Phishing</span>, and{" "}
            <span className="font-medium">Malware</span>. Before modeling, we
            explored the dataset, engineered features, and analyzed patterns
            that could impact performance.
          </p>

          {/* Optional: quick jump links */}
          <nav className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              ["original", "Original dataset"],
              ["features", "Engineered features"],
              ["breakdown", "Visual breakdown"],
              ["heatmap", "Heatmap"],
              ["training", "Training"],
              ["evaluation", "Evaluation"],
              ["scanner", "Scanner"],
              ["summary", "Summary"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-black/15 px-4 py-2 text-xs md:text-sm hover:border-black/30 hover:bg-black/5 transition"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <Divider />

      {/* Section 1: Original dataset */}
      <Section
        id="original"
        title="Let’s start with the original dataset…"
        subtitle="We begin by inspecting raw URLs before feature engineering."
      >
        <TwoCol
          left={
            <div>
              <p className="text-sm md:text-base leading-relaxed text-black/80">
                This dataset contains <span className="font-semibold">651,191</span>{" "}
                rows of collected URLs. Each URL is labeled as one of four
                classes: <span className="font-medium">Benign</span>,{" "}
                <span className="font-medium">Defacement</span>,{" "}
                <span className="font-medium">Phishing</span>, or{" "}
                <span className="font-medium">Malware</span>.
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-black/80">
                We’ll start with a quick sample of the raw data, then create
                engineered signals that make the URLs easier for models to learn
                from.
              </p>
              <p className="mt-6 text-xs md:text-sm text-black/60">
                *Dataset was obtained from a public Kaggle repository.
              </p>
            </div>
          }
          right={
            <ImageCard
              src="/blog/training-and-testing-the-models/original-dataset.png"
              alt="Sample of the original dataset showing URL and type columns"
              caption="Sample rows from the original dataset."
            />
          }
        />
      </Section>

      <Divider />

      {/* Section 2: Dataset after adding features */}
      <Section
        id="features"
        title="This is the dataset after we added features…"
        subtitle="Feature engineering turns raw URLs into model-friendly signals."
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm md:text-base leading-relaxed text-black/80 text-center">
            We added distinguishing features such as URL length, number of digits,
            number of special characters, and whether the URL contains common
            prefixes like <span className="font-medium">www</span>,{" "}
            <span className="font-medium">http</span>, and{" "}
            <span className="font-medium">https</span>.
          </p>
        </div>

        <div className="mt-10">
          <ImageCard
            src="/blog/training-and-testing-the-models/dataset-after-features.png"
            alt="Dataset table showing engineered features such as letters_count, digits_count, special_chars_count, shortened, www, http, https"
            caption="The dataset after adding engineered features."
          />
        </div>
      </Section>

      <Divider />

      {/* Section 3: Visual breakdown */}
      <Section
        id="breakdown"
        title="Visual breakdown of the data…"
        subtitle="Class distribution is imbalanced, which can affect model behavior."
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm md:text-base leading-relaxed text-black/80 text-center">
            Notice there are many more data points labeled{" "}
            <span className="font-medium">Benign</span> than the other three
            classes. This imbalance can skew performance and lead models to
            over-predict the majority class.
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-black/80 text-center">
            To account for this, we will track metrics beyond accuracy (like{" "}
            <span className="font-medium">precision</span>,{" "}
            <span className="font-medium">recall</span>, and{" "}
            <span className="font-medium">F1-score</span>) and consider methods
            like class weighting or balanced sampling.
          </p>
        </div>

        <div className="mt-10">
          <ImageCard
            src="/blog/training-and-testing-the-models/visual-breakdown.png"
            alt="Bar chart and donut chart showing class counts for Benign, Defacement, Phishing, and Malware"
            caption="Class distribution across URL types."
          />
        </div>
      </Section>

      <Divider />

      {/* Section 4: Heatmap */}
      <Section
        id="heatmap"
        title="This is a heatmap of the data with added features…"
        subtitle="A heatmap highlights correlations between engineered features."
      >
        <TwoCol
          left={
            <div>
              <p className="text-sm md:text-base leading-relaxed text-black/80">
                A heatmap helps identify and visualize correlations between
                features. It can quickly surface patterns worth investigating
                during modeling.
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-black/80">
                In this heatmap, we see signals that may relate to specific
                classes. For example, there appears to be a potential association
                between the <span className="font-medium">Defacement</span>{" "}
                class and the <span className="font-medium">http</span> and{" "}
                <span className="font-medium">www</span> features.
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-black/80">
                This doesn’t prove causation, but it provides a strong direction
                for what to validate during training and evaluation.
              </p>
            </div>
          }
          right={
            <ImageCard
              src="/blog/training-and-testing-the-models/heatmap.png"
              alt="Correlation heatmap of engineered features"
              caption="Correlation heatmap of engineered features."
            />
          }
        />
      </Section>

      <Divider />

      {/* Section 5: Training */}
      <Section
        id="training"
        title="Training and testing the models…"
        subtitle="We trained XGBoost and a multi-layer neural network for URL classification."
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm md:text-base leading-relaxed text-black/80">
            Our model selection was guided by the need for speed and performance.
            We focused on{" "}
            <span className="font-medium">XGBoost</span> and a{" "}
            <span className="font-medium">multi-layer neural network</span>, both
            known for handling complex patterns and achieving strong predictive
            accuracy.
          </p>
        </div>

        <div className="mt-10">
          <ImageCard
            src="/blog/training-and-testing-the-models/model-training.png"
            alt="Neural network training epochs showing loss and accuracy progression"
            caption="Training progress across epochs (loss and accuracy)."
          />
        </div>
      </Section>

      <Divider />

      {/* Section 6: Testing / evaluation */}
      <Section
        id="evaluation"
        title="Testing results and model evaluation…"
        subtitle="We reviewed performance across multiple metrics and compared model behavior."
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm md:text-base leading-relaxed text-black/80">
            After training, we evaluated both models using{" "}
            <span className="font-medium">precision</span>,{" "}
            <span className="font-medium">recall</span>,{" "}
            <span className="font-medium">F1-score</span>, and overall accuracy.
            While accuracy is helpful, it can be misleading in imbalanced
            datasets—so we emphasized class-aware metrics.
          </p>
        </div>

        <div className="mt-10">
          <ImageCard
            src="/blog/training-and-testing-the-models/feature-scatter.png"
            alt="Scatter plot showing letters count vs special characters count by class"
            caption="Scatter plot: Letters Count vs Special Characters Count."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-black text-center">
              XGBoost Results
            </h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-black/80 text-center">
              XGBoost demonstrated strong performance across most classes and
              achieved an overall accuracy of{" "}
              <span className="font-semibold">91%</span>.
            </p>
            <div className="mt-6">
              <ImageCard
                src="/blog/training-and-testing-the-models/xgboost-results.png"
                alt="XGBoost classification report with precision recall and f1-score"
                caption="XGBoost classification report."
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-black text-center">
              Neural Network Results
            </h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-black/80 text-center">
              The neural network achieved high training performance, but showed
              slightly lower recall on certain classes during evaluation—an
              indicator of potential overfitting.
            </p>
            <div className="mt-6">
              <ImageCard
                src="/blog/training-and-testing-the-models/neural-network-results.png"
                alt="Neural network classification report with precision recall and f1-score"
                caption="Neural network classification report."
              />
            </div>
          </div>
        </div>

        <div className="mt-10 mx-auto max-w-4xl text-center">
          <p className="text-sm md:text-base leading-relaxed text-black/80">
            XGBoost exhibited superior performance across multiple metrics. This
            could be attributed to the neural network’s susceptibility to
            overfitting—achieving high accuracy on training data while struggling
            to generalize to new unseen data.
          </p>
          <p className="mt-6 text-xs md:text-sm text-black/60">
            Legend: 0–Benign, 1–Defacement, 2–Phishing, 3–Malware
          </p>
        </div>
      </Section>

      <Divider />

      {/* Section 7: Scanner */}
      <Section
        id="scanner"
        title="The resulting scanner…"
        subtitle="We packaged the system and deployed a working URL scanning interface."
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm md:text-base leading-relaxed text-black/80">
            The scanner on which this project is based was built in{" "}
            <span className="font-medium">Python</span>, packaged into a{" "}
            <span className="font-medium">Docker</span> container, and hosted on{" "}
            <span className="font-medium">AWS Elastic Container Service</span>.
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-black/80">
            The output for a user-input URL includes a predicted classification
            and probability scores for each class.
          </p>
        </div>

        <div className="mt-10">
          <ImageCard
            src="/blog/training-and-testing-the-models/scanner-interface.png"
            alt="Web interface showing URL scanner and prediction probabilities"
            caption="Deployed scanner interface and sample predictions."
          />
        </div>
      </Section>

      <Divider />

      {/* Section 8: Summary & Key Findings */}
      <Section
        id="summary"
        title="Summary & Key Findings"
        subtitle="Key takeaways from data exploration, training, evaluation, and deployment."
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm md:text-base leading-relaxed text-black/80 text-center">
            In this application, we shared the inner workings of the beta
            version of our malware scanner. We explained the key steps taken to
            develop the underlying machine learning model, from data extraction
            and cleaning to analysis and evaluation of results.
          </p>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-black/80 text-center">
            While initial evaluation metrics indicate high accuracy on both
            models, lower recall suggests potential overfitting and an increased
            risk of false negatives. We recognize the need for further refinement
            to ensure robustness and more reliable identification of malicious
            URLs in real-world scenarios.
          </p>
        </div>
      </Section>

      <Divider />

      {/* Section 9: Limitations & Future Directions */}
      <Section
        id="limitations"
        title="Limitations & Future Directions"
        subtitle="Where the system can improve and what we’ll explore next."
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm md:text-base leading-relaxed text-black/80 text-center">
            There were several limitations when assembling this project. One
            notable limitation is the quality of the data. Our model utilized a
            dataset sourced from a public Kaggle repository; however, the origin
            of the URLs and the accuracy of the associated labels are unverified.
            Because of this, predictions may be confined to the dataset’s scope,
            and real-world performance may vary.
          </p>

          <p className="mt-8 text-sm md:text-base leading-relaxed text-black/80 text-center">
            Looking ahead, there are several approaches we can implement for a
            more robust model:
          </p>

          <ol className="mt-8 space-y-5 text-sm md:text-base leading-relaxed text-black/80">
            <li>
              <span className="font-semibold text-black">
                1) Enhance data collection and verification.
              </span>{" "}
              Source higher quality data from reputable sources and validate label
              accuracy using ensemble verification or human review.
            </li>
            <li>
              <span className="font-semibold text-black">
                2) Improve outlier detection and anomaly handling.
              </span>{" "}
              Review sparse outliers and anomalies to reduce skew in scaling and
              normalization.
            </li>
            <li>
              <span className="font-semibold text-black">
                3) Expand feature space and optimize hyperparameters.
              </span>{" "}
              Add richer contextual signals and apply regularization techniques
              (L1/L2, dropout) to mitigate overfitting and improve generalization.
            </li>
          </ol>

          <p className="mt-12 text-center font-semibold text-black">
            Thank you for taking the time to explore our study. Together, we can
            create a more safe web.
          </p>

          {/* Optional closing illustration if you have it */}
          <div className="mt-10">
            <ImageCard
              src="/blog/training-and-testing-the-models/closing-illustration.png"
              alt="Illustration representing web security and protection"
              caption=""
            />
          </div>
        </div>
      </Section>

      {/* Footer spacing */}
      <div className="pb-12" />
    </main>
  );
}

