type PredictionItem = {
  category: string;
  confidence: number;
};

type PredictedCategoriesProps = {
  predictions: PredictionItem[];
};

export default function PredictedCategories({
  predictions,
}: PredictedCategoriesProps) {
  const topPrediction = predictions[0];

  return (
    <section className="w-full max-w-4xl rounded-2xl p-6 text-white shadow-2xl">
      <h2 className="mb-6 text-sm tracking-[0.35em] text-cyan-300 uppercase">
        Predicted Categories
      </h2>

      <div className="space-y-4">
        {predictions.map((item, index) => {
          const isTop = index === 0;
          const percentage = Math.min(item.confidence * 100, 100);

          return (
            <div
              key={item.category}
              className="rounded-xl border border-cyan-500/10 bg-[#0a1622] px-5 py-4 transition-all duration-300 hover:border-cyan-400/30"
            >
              <div className="flex items-start gap-4">
                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cyan-500/10 text-sm font-semibold text-cyan-300">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {item.category}
                    </h3>

                    {isTop && (
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] tracking-widest text-cyan-300 uppercase">
                        Top Prediction
                      </span>
                    )}
                  </div>

                  {/* Confidence */}
                  <div className="mb-2 flex items-center gap-4">
                    <span className="min-w-20 text-sm text-gray-300">
                      Confidence
                    </span>

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>

                    <span className="w-12 text-right text-sm text-cyan-200">
                      {item.confidence.toFixed(2)}
                    </span>
                  </div>

                  {/* Description only for top prediction */}
                  {isTop && (
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
                      This paper is most related to research in{" "}
                      {topPrediction.category.toLowerCase()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}