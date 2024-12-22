import Gallery from "./components/Gallery";
import { NamedExport } from "./components/Profile";

const App = () => {
  return (
    <>
      <Gallery />
      <p>Bellow is named export component</p>
      <NamedExport />
    </>
  );
};

export default App;
