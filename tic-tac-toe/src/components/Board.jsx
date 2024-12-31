/* eslint-disable react/prop-types */
import { calculateWinner } from "../utils/additionalFunctions";
import SingleSquare from "./SingleSquare";

export default function Board({
  xIsNext,
  setXIsNext,
  currentSquares,
  boardHandler,
}) {
  const a = Array.from({ length: 9 }, (_, i) => i);

  let winner = calculateWinner(currentSquares);
  let status;

  //winner checking and Turn status updating
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = xIsNext ? "Next turn is for X" : "Next turn is for O";
  }

  // handler function
  const handleSquareClick = (index) => {
    if (currentSquares[index] || winner != null) {
      console.log("Will not change");
      return;
    }
    const newSquares = [...currentSquares];
    if (xIsNext) {
      newSquares[index] = "X";
    } else {
      newSquares[index] = "O";
    }

    setXIsNext(!xIsNext);
    boardHandler(newSquares);
  };
  return (
    <>
      <h3 className="ml-1 text-gray-400 font-bold">{status}</h3>
      <div className="grid grid-cols-3 gap-0 w-40">
        {a.map((i) => (
          <SingleSquare
            value={currentSquares[i]}
            key={i}
            setSquaresValue={() => handleSquareClick(i)}
          />
        ))}
      </div>
    </>
  );
}
