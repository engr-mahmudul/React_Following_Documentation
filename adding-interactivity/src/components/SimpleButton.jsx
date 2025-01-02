export default function SimpleButton() {
  const handleClick = () => {
    console.log("Clicked this button");
  };
  return <button onClick={handleClick}>SimpleButton</button>;
}
