import logo from "./logo.svg";
import "./App.scss";
import "./sass/styles.scss";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

//Components
import Donadores from "./pages/Donadores";
// import Home from "./pages/Home";
// import Registro from "./pages/formularioRegistro";
import CreateDonations from "./pages/CreateDonations";
import DonationDetail from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="donations/detail/:id" element={<DonationDetail />} />

        <Route path="/donadores" element={<Donadores />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
      </Routes> */}
      <Routes>
        <Route path="/createDonations" element={<CreateDonations />} />
      </Routes>
    </div>
  );
}

export default App;
