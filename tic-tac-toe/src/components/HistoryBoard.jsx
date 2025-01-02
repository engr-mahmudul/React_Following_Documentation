/* eslint-disable react/prop-types */
export default function HistoryBoard({ history, movesTracking }) {
  const copyOfManinHistory = history.map((item) => {
    return [...item];
  });
  // console.log("Copy of History: ", copyOfManinHistory);
  const moveList = history.map((squaresArray, index) => (
    <li
      className="text-white cursor-pointer my-2 hover:text-green-600 font-bold"
      onClick={() => {
        movesTracking(index, copyOfManinHistory);
      }}
      key={squaresArray}
    >
      {index > 0 ? `History for turn --> ${index}` : "Start the Game"}
    </li>
  ));
  return <div>{moveList}</div>;
}
