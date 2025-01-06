import { useState } from "react";
export default function ObjectInState() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    age: "",
    contact: {
      email: "",
    },
  });
  const formSubmit = () => {
    console.log(person);
  };
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <input
        type="text"
        placeholder="First Name"
        value={person.firstName}
        onChange={(e) => {
          setPerson({
            ...person,
            contact: {
              ...person.contact,
            },
            firstName: e.target.value,
          });
        }}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Last Name"
        value={person.lastName}
        onChange={(e) =>
          setPerson({
            ...person,
            contact: {
              ...person.email,
            },
            lastName: e.target.value,
          })
        }
      ></input>
      <br />
      <input
        type="number"
        placeholder="Age"
        value={person.age}
        onChange={(e) =>
          setPerson({
            ...person,
            contact: { ...person.email },
            age: e.target.value,
          })
        }
      ></input>
      <br />
      <input
        type="email"
        placeholder="Email"
        value={person.email}
        onChange={(e) =>
          setPerson({
            ...person,
            contact: {
              email: e.target.value,
            },
          })
        }
      ></input>
      <input type="submit" onClick={formSubmit} />
    </div>
  );
}
