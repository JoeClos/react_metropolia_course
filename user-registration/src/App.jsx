import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    console.log(`Hi from ${event.target.value}`);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    if (
      user.firstName.length === 0 ||
      user.lastName.length === 0 ||
      user.email.length === 0 ||
      user.phone.length === 0
    ) {
      alert("All fields are required");
    } else {
      alert(`Welcome ${user.firstName} ${user.lastName}`);
    }

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <input
          type="text"
          placeholder="First name"
          value={user.firstName}
          name="firstName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Last name"
          value={user.lastName}
          name="lastName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Phone"
          value={user.phone}
          name="phone"
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>{" "}
    </>
  );
}

export default App;
