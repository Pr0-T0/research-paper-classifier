type SimilarPaper = {
  title: string;
  similarity: number;
};

type Props = {
  papers: SimilarPaper[];
};

export default function SimilarPapers({
  papers,
}: Props) {
  return (
    <div className="bg-[#061120] border-t border-cyan-500/20  p-5">
      
      <h2 className="mb-6 text-sm tracking-[0.35em] text-cyan-300 uppercase">
        Similar Papers
      </h2>

      <div className="space-y-4">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="border border-cyan-900/30 rounded-lg p-4 bg-[#0A1728]"
          >
            <div className="flex items-start justify-between gap-4">
              
              <div>
                <h3 className="text-white font-medium">
                  {paper.title}
                </h3>

              </div>

              <div className="text-sm text-cyan-400 font-semibold">
                {(paper.similarity * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}