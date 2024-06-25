import { useState } from "react";
import "./App.css";

function App(props) {
  const [count, setCount] = useState(0);
  const [ color, setColor] = useState('')
  // const [ message, setMessage ] = useState('')
  return (
    <>
    {/* {props.message.length <= 10 ? (
          <p>{ props.message}</p>

    ) : (
      <p>Too long</p> */}
    {/* )} */}
      {/* {count <= 10 ? ( */}
        {/* <p>You have pressed the button {count} times</p> */}
      {/* ) : ( */}
        {/* <p>You have pressed the button more than 10 times</p> */}
      {/* )} */}
      {/* <button onClick={() => setCount(count + 1)}>
       +
      </button>
      <button onClick={() => setCount(count - 1)}>
       -
      </button>
      <button onClick={() => setCount(0)}>
       Reset
      </button> */}
      {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button> */}
      {
        color === '' ? (
          <p>Hello World!</p>
        ) : (
          <p style={{color: color}}>Hello World!</p>
        )
      }
      <button onClick={() => setColor('red')}>Change color</button>
    </>
  );
}

export default App;
