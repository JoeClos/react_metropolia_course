import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "", age: "" });

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    if (Number(user.age) >= 18) {
      alert(` Hello ${user.name}`);
    } else {
      alert("You are too young");
    }
    setUser({ name: "", age: "" });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Age"
        name="age"
        value={user.age}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Check age</button>
    </>
  );
}

export default App;
