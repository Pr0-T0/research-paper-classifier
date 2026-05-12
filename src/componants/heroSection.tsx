import PaperDetails from "./paperDetails";

type HeroSectionProps = {
  title?: string;
  abstract?: string;
  pages? : number;
};

export default function HeroSection({ title, abstract, pages }: HeroSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 min-h-screen bg-gray-900 p-4">
      {/* LEFT COLUMN */}
      <div className="border border-cyan-500/20 rounded overflow-auto">
        <PaperDetails title={title} abstract={abstract} pages={pages}/>
        <div>Categories</div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="border border-cyan-500/20 rounded p-4 overflow-auto">
        Right Side
      </div>

    </section>
  );
}