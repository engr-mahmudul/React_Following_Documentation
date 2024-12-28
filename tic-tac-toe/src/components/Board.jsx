/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, setSquaresValue }) {
  return (
    <button
      className="background-white border border-gray-300 h-12 w-12 m-1 text-lg leading-9"
      onClick={() => setSquaresValue()}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const a = Array.from({ length: 9 }, (_, i) => i);

  const handleSquareClick = (index) => {
    if (squares[index]) {
      return;
    }
    const newSquares = [...squares];
    if (xIsNext) {
      newSquares[index] = "X";
    } else {
      newSquares[index] = "O";
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="grid grid-cols-3 gap-0 w-40">
      {a.map((i) => (
        <Square
          value={squares[i]}
          key={i}
          setSquaresValue={() => handleSquareClick(i)}
        />
      ))}
    </div>
  );
}
