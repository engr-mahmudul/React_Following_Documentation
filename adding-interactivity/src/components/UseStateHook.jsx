import { useState } from "react";
export default function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);
  const [batchUpdater, setBatchUpdater] = useState(0);
  const [updater, setUpdater] = useState(0);

  // console.log(counter);
  // console.log(open);
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
      <p style={{ color: open ? "green" : "red" }}>
        {open ? "Second State is Open" : "Second State is Closed"}
      </p>
      <button onClick={() => setOpen(!open)}>Handle Second Sate</button>
      <div style={{ display: "flex" }}>
        <div
          style={{ margin: "20px", border: "3px solid black", padding: "10px" }}
        >
          <p>{batchUpdater}</p>
          <button
            onClick={() => {
              setBatchUpdater(batchUpdater + 1);
              setBatchUpdater(batchUpdater + 1);
              setBatchUpdater(batchUpdater + 1);
            }}
          >
            Increase with Batch Updater
          </button>
        </div>
        <div
          style={{
            margin: "20px",
            border: "3px solid black",
            padding: "10px",
          }}
        >
          <p>{updater}</p>
          <button
            onClick={() => {
              setUpdater((x) => x + 1);
              setUpdater((x) => x + 1);
              setUpdater((x) => x + 1);
            }}
          >
            Increase with Updater Function
          </button>
        </div>
      </div>
    </>
  );
}
