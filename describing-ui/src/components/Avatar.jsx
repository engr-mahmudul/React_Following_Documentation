export default function Avatar() {
    const url = "https://i.imgur.com/7vQD0fPs.jpg"
    const imageText = "Gregorio Y. Zara"
  return (
    <>
    <h1>Person name is {imageText}</h1>
    <img
      style={{ borderRadius: "50%", height: "100px"}}
      className="avatar"
      src={url}
      alt={imageText}
    />
    </>
  );
}
