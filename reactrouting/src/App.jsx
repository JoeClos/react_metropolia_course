import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Link to="/about">About</Link>{' '}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={ <NotFound /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
