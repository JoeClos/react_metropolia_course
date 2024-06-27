import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [respositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=react")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((resData) => {
        setRepositories(resData.items);
        console.log(resData.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Repositories</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
          {respositories.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.full_name}</td>
              <td>
                <a href={repo.url} target="_blank">
                  {repo.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
