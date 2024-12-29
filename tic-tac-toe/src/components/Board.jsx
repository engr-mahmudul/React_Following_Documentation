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

  let winner = calculateWinner(squares);
  let status;
  //winner checking and Turn status updating
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = xIsNext ? "Next turn is for X" : "Next turn is for O";
  }
  // handler function
  const handleSquareClick = (index) => {
    if (squares[index] || winner != null) {
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
    <>
      <h3>{status}</h3>
      <div className="grid grid-cols-3 gap-0 w-40">
        {a.map((i) => (
          <Square
            value={squares[i]}
            key={i}
            setSquaresValue={() => handleSquareClick(i)}
          />
        ))}
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
