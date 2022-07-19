import logo from "./logo.svg";
import "./App.scss";
import "./sass/styles.scss";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

//Components

import Registro from "./pages/Registro";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;
