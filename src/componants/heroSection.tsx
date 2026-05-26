import Explanation from "./explanation";
import Keywords from "./keywords";
import PaperDetails from "./paperDetails";
import PredictedCategories from "./predictedCategories";
import SimilarPapers from "./similarPapers";

type SimilarPaper = {
  title: string;
  similarity: number;
};

type paperData = {
  title?: string;
  abstract?: string;
  pages?: number;

  category?: string;
  confidence?: number;
  scores?: Record<string, number>;
  explanation?: {
    word: string;
    weight: number;
  }[];

  similar_papers? : SimilarPaper[];
};

type HeroSectionProps = {
  data: paperData | null;
};

export default function HeroSection({
  data,
}: HeroSectionProps) {
  const hasData = data;

  if (!hasData) {
    return (
      <section className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cyan-400 mb-4">
            Upload a document to continue
          </h1>

          <p className="text-gray-400">
            Start by uploading a research paper or PDF
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-900 p-4">
      <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-4 items-start">
        
        {/* ================= LEFT PANEL ================= */}
        <div className="border border-cyan-500/20 rounded-xl overflow-hidden bg-[#061120] flex flex-col">
          
          {/* TOP SECTION */}
          <div className="border-b border-cyan-900/20">
            <PaperDetails
              title={data.title}
              pages={data.pages}
              category={data.category}
              confidence={data.confidence}
            />
          </div>

          {/* BOTTOM SECTION */}
          <div>
            <PredictedCategories
              predictions={
                data.scores
                  ? Object.entries(data.scores)
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 4)
                      .map(([category, confidence]) => ({
                        category,
                        confidence,
                      }))
                  : []
              }
            />
          </div>
          <div>
            <SimilarPapers papers={data.similar_papers || []}/>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="border border-cyan-500/20 rounded-xl overflow-hidden bg-[#061120] flex flex-col">
          
          {/* TOP SECTION */}
          <div className="border-b border-cyan-900/20">
            <Explanation
              features={
                data.explanation
                  ? data.explanation.map((item) => ({
                      name: item.word,
                      value: item.weight,
                    }))
                  : []
              }
            />
          </div>

          {/* BOTTOM SECTION */}
          <div>
            <Keywords
              text={data.abstract || ""}
              keywords={
                data.explanation
                  ? data.explanation.map((item) => ({
                      word: item.word,
                      value: item.weight,
                    }))
                  : []
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}