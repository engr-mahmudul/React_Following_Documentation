/* eslint-disable react/prop-types */
export default function SingleSquare({ value, setSquaresValue }) {
  return (
    <button
      className="background-white border border-gray-300 h-12 w-12 m-1 text-lg leading-9 text-white"
      onClick={() => setSquaresValue()}
    >
      {value}
    </button>
  );
}
