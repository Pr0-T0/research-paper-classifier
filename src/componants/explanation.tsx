type ExplanationProps = {
  features: {
    name: string;
    value: number;
  }[];
};

export default function Explanation({ features }: ExplanationProps) {
  // Find absolute maximum value for scaling
  const absMax = Math.max(
    ...features.map((f) => Math.abs(f.value)),
    1
  );

  return (
    <div className="w-full  text-white border-b  border-cyan-900/20 overflow-hidden">
      {/* HEADER */}
      <div className="px-6 pt-5 pb-4 border-b border-cyan-900/20">
        <div className="flex items-center gap-2">
          <h2 className="text-sm tracking-[0.25em] uppercase text-white/90">
            Why This Prediction?
          </h2>

          <div className="w-4 h-4 rounded-full border border-cyan-400/40 flex items-center justify-center text-[10px] text-cyan-300">
            i
          </div>
        </div>

        <p className="text-xs text-cyan-100/50 mt-2">
          Model Explanation (Global + Local)
        </p>
      </div>
      
      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-sm text-white/90">
            Top contributing features
          </h3>

          <div className="w-4 h-4 rounded-full border border-cyan-400/40 flex items-center justify-center text-[10px] text-cyan-300">
            i
          </div>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => {
            const normalized = Math.abs(feature.value) / absMax;

            // const width =
            //   (Math.abs(feature.value) / absMax) * 100;

            const width = 50 + normalized * 80;

            const isNegative = feature.value < 0;

            return (
              <div
                key={index}
                className="grid grid-cols-[140px_1fr_50px] items-center gap-3"
              >
                {/* LABEL */}
                <span className="text-sm text-white/80 capitalize truncate">
                  {feature.name}
                </span>

                {/* BAR */}
                <div className="w-full h-3 bg-cyan-950/40 rounded-full overflow-hidden">
                  <div
                    className={`
                      h-full rounded-full transition-all duration-500
                      ${
                        isNegative
                          ? "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.7)]"
                          : "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      }
                    `}
                    style={{
                      width: `${width}%`,
                    }}
                  />
                </div>

                {/* VALUE */}
                <span
                  className={`text-sm text-right ${
                    isNegative
                      ? "text-red-300"
                      : "text-cyan-100/80"
                  }`}
                >
                  {feature.value.toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <p className="mt-8 text-xs text-white/40 leading-relaxed">
          Scores indicate contribution to the top predicted category.
        </p>
      </div>
    </div>
  );
}