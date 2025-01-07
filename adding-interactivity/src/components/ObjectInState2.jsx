import { useState } from "react";
export default function ObjectInState2() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const handleInputChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
    console.log(person);
  };
  const formSubmit = () => {
    console.log(person);
  };
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={person.firstName}
        onChange={handleInputChange}
      ></input>
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={person.lastName}
        onChange={handleInputChange}
      ></input>
      <br />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={person.age}
        onChange={handleInputChange}
      ></input>
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={person.email}
        onChange={handleInputChange}
      ></input>
      <input type="submit" onClick={formSubmit} />
    </div>
  );
}
