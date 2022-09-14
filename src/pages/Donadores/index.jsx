import "../Donadores/Donadores.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { BiSearch } from "react-icons/bi";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { getDonations } from "../../services/postDonaciones";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Spinner } from "reactstrap";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import DonationsAv from "../../components/DonationsAv/DonationsAv";

export default function Donaciones() {
  const [donationsPage, setDonationsPage] = useState(false);

  const [donations, setDonations] = useState([]);
  const [search, setSerarch] = useState("");

  //RRD
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setDonationsPage(true);
    }, 3000);

    // return () => clearTimeout(timeoutId);
  }, []);

  // //REQUEST A Donations
  // useEffect(() => {
  //   const getDonationsQuery = async () => {
  //     const donations = await getDonations();

  //     setDonations(donations);
  //   };
  //   getDonationsQuery();
  // }, []);

  //search function
  const searcher = (e) => {
    setSerarch(e.target.value);
    console.log(e.target.value);
  };

  //filter method

  const result = !search
    ? donations
    : donations.filter((dato) =>
        dato.address.toUpperCase().includes(search.toUpperCase())
      );

  return (
    <div>
      <div className="row">
        <Header ph1="Comida Disponible " ph2=" en tu área" />

        <div className="row container">
          <div className="container " id="main">
            {!donationsPage && <Spinner className="spinner" color="success" />}
            {donationsPage && <DonationsAv />}
          </div>
        </div>
        <Footer />

        <Outlet />
      </div>
    </div>
  );
}
