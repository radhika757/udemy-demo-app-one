import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./Header";
import Error from "./pages/Error";

function App() { 
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route  path="/"  element={<Home/>} />
          <Route  path="/about"  element={<About/>} />
          <Route  path="/contact"  element={<Contact/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
