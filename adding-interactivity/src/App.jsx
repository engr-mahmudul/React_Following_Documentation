import Toolbar from "./components/EventPropagation";
import Signup from "./components/Form";
import ObjectInState from "./components/ObjectInState";
import UseStateHook from "./components/UseStateHook";

export default function App() {
  return (
    <>
      {/* <SimpleButton /> */}
      <Toolbar />
      <Signup />
      <UseStateHook />
      <ObjectInState />
    </>
  );
}
