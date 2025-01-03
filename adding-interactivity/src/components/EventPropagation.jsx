export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      style={{ padding: "20px", backgroundColor: "gray" }}
      onClick={() => {
        console.log("You clicked on the toolbar!");
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("Playing!");
        }}
      >
        Play Movie
      </button>
      <button onClick={() => console.log("Uploading!")}>Upload Image</button>
    </div>
  );
}
