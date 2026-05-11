import PaperDetails from "./paperDetails";


export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 min-h-screen bg-gray-900 p-4">
      {/* LEFT COLUMN */}
      <div className="border border-cyan-500/20 rounded overflow-auto">
        <PaperDetails />
      </div>

      {/* RIGHT COLUMN */}
      <div className="border border-cyan-500/20 rounded p-4 overflow-auto">
        Right Side
      </div>

    </section>
  );
}