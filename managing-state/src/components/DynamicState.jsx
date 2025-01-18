import { useState } from "react";
export default function DynamicState() {
  const [boxes, setBoxes] = useState([
    { id: 1, placeholder: "Give an Input 1" },
  ]);
  const handleNewBox = () => {
    const maxValue = boxes.reduce((max, obj) => {
      return obj.id > max ? obj.id : max;
    }, -Infinity);
    // const newArray = boxes.map((box) => ({ ...box }));
    setBoxes([
      ...boxes.map((box) => ({ ...box })),
      {
        id: maxValue + 1,
        placeholder: `Give Another Input${maxValue + 1}`,
      },
    ]);
    console.log(maxValue);
  };
  return (
    <div>
      {boxes.map((box) => (
        <div key={box.id} style={{ marginBottom: "5px" }}>
          <input type="text" placeholder={box.placeholder} />
        </div>
      ))}
      <button onClick={handleNewBox}>Add New Text Box</button>
    </div>
  );
}
