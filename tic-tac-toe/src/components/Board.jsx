function Square({ value }) {
  return (
    <button className="background-white border border-gray-300 h-12 w-12 m-1 text-lg leading-9">
      {value}
    </button>
  );
}

export default function Board() {
  const a = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <div className="grid grid-cols-3 gap-0 w-40">
      {a.map((i) => (
        <Square value={i} key={i} />
      ))}
    </div>
  );
}
