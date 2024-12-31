/* eslint-disable react/prop-types */
export default function HistoryBoard({ history, movesTracking }) {
  const moveList = history.map((squaresArray, index) => (
    <li
      className="text-white cursor-pointer my-2 hover:text-green-600 font-bold"
      onClick={() => {
        movesTracking([...squaresArray], index);
      }}
      key={squaresArray}
    >
      {index > 0 ? `History for turn --> ${index}` : "Start the Game"}
    </li>
  ));
  return <div>{moveList}</div>;
}
