import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [respositories, setRepositories] = useState([]);
  const [ keyword, setKeyword] = useState("");
  
  // fetch data using react keyword

  // useEffect(() => {
  //   fetch("https://api.github.com/search/repositories?q=react")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       setRepositories(resData.items);
  //       console.log(resData.items);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // fetc data using keyword
  const repoFetch = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
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
  }

  const inputChanged = (event) => {
    setKeyword(event.target.value);
  }

  return (
    <>
      <h1>Repositories</h1>
      <input type="text" placeholder="Keyword search" value={keyword} onChange={inputChanged}/>
      <button onClick={repoFetch}>Search</button>
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
                <a href={repo.html_url} target="_blank">
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
