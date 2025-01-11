import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function InsertingIntoArray() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const copyOfArtist = artists.map((artist) => artist);
    const updatedIndex = artists.length;
    const nextArtists = [...copyOfArtist, { id: updatedIndex, name: name }];
    setArtists(nextArtists);
    setName("");
    console.log(nextArtists);
  }

  return (
    <div style={{ borderTop: "3px solid black" }}>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}
