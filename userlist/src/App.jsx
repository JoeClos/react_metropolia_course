import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((resData) => {
        setUsers(resData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Fetch a single user by ID
  const fetchData = () => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((resDataUserId) => {
        setUser(resDataUserId.data);
        console.log(resDataUserId);
      })
      .catch((err) => console.log(err));
    setUserId("");
  };

  const inputChanged = (event) => {
    setUserId(event.target.value);
  };

  return (
    <>
      <table>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} alt='user avatar'/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <input
        type="text"
        name="user"
        id=""
        placeholder="User ID"
        value={userId}
        onChange={inputChanged}
      />
      <button onClick={fetchData}>Fetch</button>
      <p>
        {user.first_name} {user.last_name} {user.email}
      </p>
      <img src={user.avatar} alt="Avatar" />
    </>
  );
}

export default App;
