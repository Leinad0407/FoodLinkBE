import logo from "./logo.svg";
import "./App.scss";
import "./sass/styles.scss";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

//Components

import Registro from "./pages/Registro";
import Tuperfil from "./pages/Tuperfil"

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Tuperfil" element={<Tuperfil />} />
      </Routes>
    </div>
  );
}

export default App;
