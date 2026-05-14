type PaperDetailsProps = {
  title?: string;
  abstract?: string;
  pages? : number;
  category?: string;
  confidence?: number;
};

export default function PaperDetails({
  title,
  category,
  confidence
}: PaperDetailsProps) {

  return (
    <section className="p-6 lg:p-8 border-b border-cyan-500/20">

      {/* HEADER */}
      <div className="border-bpb-5">
        <h1 className="text-xs tracking-[0.25em] text-zinc-400 font-semibold">
          PAPER DETAILS
        </h1>
      </div>
      {/* CONTENT */}
      <div className="pt-8">
        <div className="space-y-8">
          {/* TITLE */}
          <div className="space-y-5">
            <h2 className="text-2xl lg:text-2xl font-bold text-zinc-100 leading-tight max-w-4xl text-center">
              {title || "< No title available >"}
            </h2>
            {(category || confidence !== undefined) && (
    <div className="flex flex-wrap items-center gap-3">
      
      {/* CATEGORY */}
      {category && (
        <div className="px-6 pt-5">
          <p className="text-3xl font-mono text-cyan-300">
            {category}
          </p>
        </div>
      )}

      {/* CONFIDENCE */}
      {confidence !== undefined && (
        <div className="px-4 pt-4">
          <p className={`text-5xl font-medium ${confidence * 100 < 60 ? "text-red-400" : "text-emerald-300"}`}>
            {(confidence * 100).toFixed(1)}%
          </p>
        </div>
      )}
    </div>
  )}
          </div>
          {/* DETAILS GRID */}
          <div className="space-y-6">
            {/* <div className="grid grid-cols-[140px_1fr] gap-6">
              <h3 className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
                ABSTRACT
              </h3>
              <p className="text-zinc-300 leading-7">
                {abstract || "< No abstract available >"}
              </p>
            </div> */}
            {/* PAGES */}
            
          </div>
        </div>
      </div>

    </section>
  );
}