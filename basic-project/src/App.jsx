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
  return (
    <div style={componentStyle.appearance,componentStyle.spacing}>
      <Gallery />
      <p className="photo">Bellow is named export component</p>
      <NamedExport />
      <Avatar />
      <TodaysDate />
    </div>
  );
};

export default App;
