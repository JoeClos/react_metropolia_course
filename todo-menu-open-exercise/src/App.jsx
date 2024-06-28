import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Todolist from "./components/Todolist";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
          <Link to="/">Home</Link>
          <Link to="/todolist">Todolist</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
