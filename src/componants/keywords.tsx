type Keyword = {
  word: string;
  value: number;
};

type KeywordsProps = {
  text: string;
  keywords: Keyword[];
};

export default function Keywords({
  text,
  keywords,
}: KeywordsProps) {
  // Sort longest words first
  // prevents partial matching issues
  const sortedKeywords = [...keywords].sort(
    (a, b) => b.word.length - a.word.length
  );

  function getKeywordStyle(value: number) {
    // Positive keywords
    if (value >= 0) {
      return {
        background:
          "bg-cyan-400/20 border border-cyan-400/30 text-cyan-200",
      };
    }

    // Negative keywords
    return {
      background:
        "bg-red-400/20 border border-red-400/30 text-red-200",
    };
  }

  function highlightText(text: string) {
    let parts: React.ReactNode[] = [text];

    sortedKeywords.forEach((keywordObj, keywordIndex) => {
      const keyword = keywordObj.word;

      parts = parts.flatMap((part, partIndex) => {
        if (typeof part !== "string") return [part];

        const regex = new RegExp(`(${keyword})`, "gi");

        const split = part.split(regex);

        return split.map((segment, segmentIndex) => {
          const isMatch =
            segment.toLowerCase() === keyword.toLowerCase();

          if (!isMatch) return segment;

          const styles = getKeywordStyle(keywordObj.value);

          return (
            <span
              key={`${keywordIndex}-${partIndex}-${segmentIndex}`}
              className={`
                px-1.5 py-0.5 mx-px
                rounded-md
                font-medium
                transition-all
                ${styles.background}
              `}
            >
              {segment}
            </span>
          );
        });
      });
    });

    return parts;
  }

  return (
    <div className="w-full rounded-2xl text-white overflow-hidden">
      {/* HEADER */}
      <div className="px-6 pt-5 pb-4 border-b border-cyan-900/20">
        <div className="flex items-center gap-2">
          <h2 className="text-sm tracking-[0.25em] uppercase text-white/90">
            Highlighted Keywords
          </h2>

          <div className="w-4 h-4 rounded-full border border-cyan-400/40 flex items-center justify-center text-[10px] text-cyan-300">
            i
          </div>
        </div>

        <p className="text-xs text-cyan-100/50 mt-2">
          Important words contributing to prediction
        </p>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <p className="text-sm leading-8 text-white/80">
          {highlightText(text)}
        </p>
      </div>

      {/* LEGEND */}
      <div className="px-6 pb-5 flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-cyan-400/70" />
          <span className="text-cyan-100/70">
            Positive contribution
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-red-400/70" />
          <span className="text-red-100/70">
            Negative contribution
          </span>
        </div>
      </div>
    </div>
  );
}