// import logo from "./logo.svg";
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
<<<<<<< HEAD
import DonationDetail from "./pages/Detail/Detail";
import Profile from "./pages/profile/profile";
import ProfileEdit from "./pages/profileEdit/profileEdit";
import UserDonations from "./pages/UserDonations/userDonations";
import OrderReady from "./pages/OrderReady/orderReady";
<<<<<<< HEAD
=======
// import DonationDetail from "./pages/Detail/Detail";
import Donors from "./pages/Donors";
>>>>>>> daniel

=======
import Login from "./pages/Login/login";
>>>>>>> db34404e3e9cc2a4027977763730cc1b525830e7

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />

        <Route path="donations/detail/:id" element={<DonationDetail />} />

        <Route path="/" element={<Home />} />
        <Route path="donations" element={<Donadores />} />
        <Route path="donations/detail/:id" element={<DonationDetail />} />
        <Route
          path="donations/detail/:id/OrderReady"
          element={<OrderReady />}
        />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/profile/donations" element={<UserDonations />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registroDonador" element={<RegistroDonador />} />

        <Route path="/createDonations" element={<CreateDonations />} />
      </Routes>
      <Routes>
        <Route path="/donors" element={<Donors />} />
      </Routes>
    </div>
  );
}

export default App;
