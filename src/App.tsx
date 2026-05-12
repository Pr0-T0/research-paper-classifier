import { useState } from "react";
import Header from "./componants/header"
import HeroSection from "./componants/heroSection"


type paperData = {
  title?: string;
  abstract?: string;
  pages?: number;
}
function App() {
  //states
  const [paperData, setPaperData] = useState<paperData | null>(null);

  function handleUpload(file: File) {
    //receives file from uploadButton from header
    console.log(file);
    
    //constant for now
    const tempData = {
      title: "Best ever research paper about apples",
      abstract: "this is the greatest abstarct about apples of all time , i havent heard a better explanation like this in my entire career hope this is long enough",
      pages: 15
    }

    setPaperData(tempData)
  }

  return (
    <div>
      <Header onUpload={handleUpload}/>
      <HeroSection title={paperData?.title} abstract={paperData?.abstract} pages={paperData?.pages}/>
    </div>
   )    
}

export default App
