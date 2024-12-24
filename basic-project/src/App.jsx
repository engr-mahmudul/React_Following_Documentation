import Avatar from "./components/Avatar";
import Gallery from "./components/Gallery";
import { NamedExport } from "./components/Profile";
import TodaysDate from "./components/TodaydsDate";

const componentStyle = {
  appearance: {
    backgroundColor: "gray",
    color: "White",
  },
  spacing: {
    margin: "50px",
  },
};

const App = () => {
  const objeC = {
    a: 5,
    b: 5,
  };
  return (
    <div style={(componentStyle.appearance, componentStyle.spacing)}>
      <Gallery>
        <Avatar />
      </Gallery>
      <p className="photo">Bellow is named export component</p>
      <NamedExport />

      <TodaysDate firstProp="Testing Prop Data" secondProp={objeC} />
    </div>
  );
};

export default App;
