import Toolbar from "./components/EventPropagation";
import Signup from "./components/Form";
import ObjectInState from "./components/ObjectInState";
import ObjectInState2 from "./components/ObjectInState2";
import UseStateHook from "./components/UseStateHook";

export default function App() {
  return (
    <>
      {/* <SimpleButton /> */}
      <Toolbar />
      <Signup />
      <UseStateHook />
      <ObjectInState />
      <ObjectInState2 />
    </>
  );
}
