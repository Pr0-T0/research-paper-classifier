type PaperDetailsProps = {
  title?: string;
  abstract?: string;
  pages? : number;
};

export default function PaperDetails({
  title,
  abstract,
  pages
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
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-zinc-100 leading-tight max-w-4xl text-center">
              {title || "< No title available >"}
            </h2>
          </div>
          {/* DETAILS GRID */}
          <div className="space-y-6">
            <div className="grid grid-cols-[140px_1fr] gap-6">
              <h3 className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
                ABSTRACT
              </h3>
              <p className="text-zinc-300 leading-7">
                {abstract || "< No abstract available >"}
              </p>
            </div>
            {/* PAGES */}
            <div className="grid grid-cols-[140px_1fr] gap-6">

              <h3 className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
                Pages
              </h3>
              <p className="text-zinc-300">
                {pages ?? "< Not available >"}
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}