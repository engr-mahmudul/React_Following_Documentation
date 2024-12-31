import { useState } from "react";
import Board from "./components/Board";
import HistoryBoard from "./components/HistoryBoard";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  // let currentSquares = history[history.length - 1];
  // const [currentSquares, setCurrentSquare] = useState(
  //   history[history.length - 1]
  // );

  let currentSquares = history[history.length - 1];
  console.log("history:", history);
  console.log("Current Square", currentSquares);
  const boardHandler = (newSquares) => {
    setHistory([...history, newSquares]);
  };
  const movesTracking = (squaresArray, index) => {
    // const index = history.indexOf(squares);
    // const newCurrentSquare = [...history.slice(0, index), squares];
    // console.log("This is:", currentSquares);
    // setCurrentSquare(squaresArray);
    console.log(squaresArray);
  };
  return (
    <div className="bg-gray-900 h-screen">
      <Board
        xIsNext={xIsNext}
        setXIsNext={setXIsNext}
        currentSquares={currentSquares}
        boardHandler={boardHandler}
      />
      <HistoryBoard history={history} movesTracking={movesTracking} />
    </div>
  );
}
