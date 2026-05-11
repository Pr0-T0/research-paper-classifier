import Header from "./componants/header"
import HeroSection from "./componants/heroSection"

function App() {

  function handleUpload(file: File) {
    //receives file from uploadButton from header
    console.log(file);
  }

  return (
    <div>
      <Header onUpload={handleUpload}/>
      <HeroSection/>
    </div>
   )    
}

export default App
