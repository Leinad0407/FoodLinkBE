import logo from "./logo.svg";
import "./App.scss";
import "./sass/styles.scss";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

//Components
import Donadores from "./pages/Donadores";
import Home from "./pages/Home";
import Registro from "./pages/formularioRegistro";
import RegistroDonador from "./pages/formularioRegistroDonador";
import CreateDonations from "./pages/CreateDonations";
import DonationDetail from "./pages/Detail/Detail";
import Profile from "./pages/profile/profile";
import ProfileEdit from "./pages/profileEdit/profileEdit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="donations" element={<Donadores />} />
        <Route path="donations/detail/:id" element={<DonationDetail />} />

        <Route path="/" element={<Donadores />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />

        <Route path="/registro" element={<Registro />} />
        <Route path="/registroDonador" element={<RegistroDonador />} />

        <Route path="/createDonations" element={<CreateDonations />} />
      </Routes>
    </div>
  );
}

export default App;
