import { useState } from "react";
import Header from "./componants/header"
import HeroSection from "./componants/heroSection"
import PaperModel from "./componants/paperModel";

type SimilarPaper = {
  title: string;
  category: string;
  similarity: number;
  summary: string;
};


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

   similar_papers?: SimilarPaper[];
}
function App() {
  //states
  const [paperData, setPaperData] = useState<paperData | null>(null);
  const [tempPaperData, setTempPaperData] = useState<paperData | null>(null);
  //pop up model state
  const [showModel, setShowModel] = useState(false);

  async function handleUpload(file: File) {
    //receives file from uploadButton from header
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/extract", {method: "POST", body: formData});
      const data = await response.json();

      setTempPaperData(data);
      setShowModel(true);
    } catch (error) {console.error(error)}
  }
   async function handleConfirm() {

    if (tempPaperData) {


      const payload = `${tempPaperData.title || ""}${tempPaperData.abstract || ""}`.trim();
      const response = await fetch(
        "http://127.0.0.1:8000/predict", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({text: payload})
        }
      );
      const data = await response.json();

      //similar papers request
      const similarResponse = await fetch(
        "http://127.0.0.1:8000/similar-papers",
        {
          method: "POST",
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify({
            query: payload
          })
        }
      );
      const similarData = await similarResponse.json();

      setPaperData({
        ...tempPaperData,
        category: data.category,
        confidence: data.confidence,
        scores: data.scores,
        explanation: data.explanation,
        similar_papers: similarData.similar_papers
      });
    }

    setShowModel(false);

  }

  function handleCancel() {
    setShowModel(false);
  }


  return (
    <div>
      <Header onUpload={handleUpload}/>
      <HeroSection data={paperData}/>
      {showModel && tempPaperData && (
        <PaperModel 
          data={tempPaperData}
          onChange={setTempPaperData}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
   )    
}

export default App
