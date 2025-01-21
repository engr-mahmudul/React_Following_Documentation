import { useState } from "react";
export default function Testing() {
  const [name, setName] = useState("");
  return <div>Testing{name}</div>;
}
