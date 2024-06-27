import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [explanation, setExplanation] = useState("");
  const [url, setUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setExplanation(data.explanation);
        setUrl(data.url);
        setMediaType(data.mediaType);
        setNasaData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!url) {
    return <>Loading...</>;
  } else if (mediaType === "image") {
    return (
      <>
        <p>Explanation: {explanation}</p>
        <img alt="Nasa APOD" src={url} style={{ width: "60%" }} />
      </>
    );
  }

  return (
    <>
      <p>Explanation: {explanation}</p>
      {/* <iframe
        width="520"
        height="415"
        src={url}
        title="Nasa APOD"
      ></iframe>{" "} */}
      <img src={url} alt="nasa" />
      <p>
        <a
          href={url}
          target="Nasa APOD"
        >
          See the photo in a new tab
        </a>
      </p>
    </>
  );
}

export default App;
