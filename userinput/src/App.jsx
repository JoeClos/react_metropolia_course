import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({firstName: '', lastName: '', email: ''});
  const inputChanged = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value});
  };

  const showAlert = () => {
    alert(`Hello ${person.firstName} ${person.lastName}`)
  }

  const formSubmitted = (event) => {
    event.preventDefault()

  }

  return (
    <>
      <p>Name: {person.firstName}  {person.lastName} Email: {person.email} </p>
      <form onSubmit={formSubmitted}>
        <input placeholder="First name" name="firstName" value={person.firstName} onChange={inputChanged} />
        <input placeholder="Last name" name="lastName"  value={person.lastName} onChange={inputChanged} />
        <input placeholder="Email" name="email" value={person.email} onChange={inputChanged} />
        <input type="submit" value='Submit' />
      </form>
      {/* <button onClick={showAlert}>Submit</button> */}
    </>
  );
}

export default App;
