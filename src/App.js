import logo from "./logo.svg";
import "./App.scss";
import "./sass/styles.scss";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Estoy en el dashboard</p>} />
        <Route path="about" element={<p>Estoy en about</p>} />
      </Routes>
    </div>
  );
}

export default App;
