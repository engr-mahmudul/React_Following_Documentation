export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
