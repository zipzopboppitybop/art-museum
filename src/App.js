import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/index.js";

function App() {
  // const galleries = harvardArt.records;
  return (
  <GalleryNavigation galleries={harvardArt.records} /> 
  ) 
}

export default App;
