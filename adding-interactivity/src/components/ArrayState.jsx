import { useState } from "react";

let nextId = 0;

export default function ArrayState() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  //   console.log(name);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          const copyArtists = artists.map((artist) => artist);
          setArtists([...copyArtists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
