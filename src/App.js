// import logo from "./logo.svg";
import "./App.scss";
import "./sass/styles.scss";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

//Components
import Donadores from "./pages/Donadores";

import Home from "./pages/Home";

import Registro from "./pages/formularioRegistro";
import RegistroDonador from "./pages/formularioRegistroDonador";
import DonationDetail from "./pages/Detail/Detail";
import Profile from "./pages/profile/profile";
import ProfileEdit from "./pages/profileEdit/profileEdit";
import UserDonations from "./pages/UserDonations/userDonations";
import OrderReady from "./pages/OrderReady/orderReady";
import Login from "./pages/Login/login";
import CreateDonations from "./pages/CreateDonations";
import ProfileEditDonors from "./pages/ProfileEditDonors/profileEditDonors";
import BookedDonations from "./pages/bookedDonations/BookedDonations";
import UploadImage from "./components/UploadImage/uploadImage";

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
        <Route
          path="/profile/bookedDonations"
          index
          element={<BookedDonations />}
        />
        {/* <Route path="/profile/bookedDonations/:id" element={<Reactivate />} /> */}
        <Route path="/registro" element={<Registro />} />
        <Route path="/registroDonador" element={<RegistroDonador />} />
        <Route path="/createDonations" element={<CreateDonations />} />
        <Route path="/profileEditDonors" element={<ProfileEditDonors />} />
        <Route path="/foodImages" element={<UploadImage />} />
      </Routes>
    </div>
  );
}

export default App;
