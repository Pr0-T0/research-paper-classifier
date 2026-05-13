import { useState } from "react";
import Header from "./componants/header"
import HeroSection from "./componants/heroSection"
import PaperModel from "./componants/paperModel";


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

      console.log(data);

      setPaperData({
        ...tempPaperData,
        category: data.category,
        confidence: data.confidence,
        scores: data.scores,
        explanation: data.explanation,
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
