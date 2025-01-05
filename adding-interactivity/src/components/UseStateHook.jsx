import { useState } from "react";
export default function UseStateHook() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Click here to increase the number
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        style={{ marginLeft: "20px" }}
      >
        Click here to decrease the number
      </button>
    </>
  );
}
