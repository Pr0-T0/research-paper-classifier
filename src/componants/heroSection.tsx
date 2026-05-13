import PaperDetails from "./paperDetails";
import PredictedCategories from "./predictedCategories";

type paperData = {
  title?: string;
  abstract?: string;
  pages?: number;

  category?: string;
  confidence?: number;
  scores?: Record<string, number>;
  explanation?: {
    feature: string;
    weight: number;
  }[];
};

type HeroSectionProps = {
  data: paperData | null;
};

export default function HeroSection({ data }: HeroSectionProps) {
  const hasData = data;
  
  if (!hasData) {
    return (
      <section className="min-h-screen bg-gray-900 flex items-center justify-center">
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
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 min-h-screen bg-gray-900 p-4">
      {/* LEFT COLUMN */}
      <div className="border border-cyan-500/20 rounded overflow-auto">
        <PaperDetails title={data.title} abstract={data.abstract} pages={data.pages}/>
        <PredictedCategories predictions={
          data.scores 
            ? Object.entries(data.scores) 
                .sort((a,b) => b[1] - a[1])
                .slice(0,4)
                .map(([category, confidence]) => ({category,confidence,})) : []
          }
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="border border-cyan-500/20 rounded p-4 overflow-auto">
        Right Side
      </div>

    </section>
  );
}