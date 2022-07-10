import logo from "./logo.svg";
import "./App.scss";
import "./sass/styles.scss";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

//Components
import Donadores from "./pages/Donadores";
import Home from "./pages/Home"
import Registro from "./pages/formularioRegistro";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/donadores" element={<Donadores />} />
      </Routes> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;
