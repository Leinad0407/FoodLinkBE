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

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Donaciones() {
  const [donations, setDonations] = useState([]);

  //RRD
  const navigate = useNavigate();

  //REQUEST A Donations
  useEffect(() => {
    const getDonationsQuery = async () => {
      const donations = await getDonations();

      setDonations(donations);
    };
    getDonationsQuery();
  }, []);
  console.log(donations);

  const donationsUI = donations.map(
    ({ _id, foodDescription, foodPhoto, index }) => (
      <div
        key={index}
        onClick={() => navigate(`detail/${_id}`)}
        className="colpost  col-12 col-xl-3 col-lg-4 col-sm-12 col-xs-12"
        id="postContainer"
      >
        <div className="figurePostContainer">
          <Figure.Image className="foodPhoto" src={foodPhoto} />
        </div>

        <div className="descriptionContainer">
          <Card.Body>
            <strong className="text-uppercase">Descripción:</strong>

            <Card.Text>{foodDescription}</Card.Text>
            <Button className="selectButton" variant="success">
              Seleccionar
              <BiRestaurant className="forkLogo" size={20}></BiRestaurant>
            </Button>
          </Card.Body>
        </div>
      </div>
    )
  );

  return (
    <div className=" container">
      <div className="titleContainer">
        <span>
          <h1 className="boldTitle">Comida Disponible </h1>
        </span>
        <span>
          <h2 className="normalTitle">en tu area</h2>
        </span>
      </div>

      <div className="row container">
        <Header ph1="Comida Disponible " ph2=" en tu área" />

        <div className="searchContainer">
          <Stack direction="horizontal" gap={1}>
            <Form.Control
              className="me-auto"
              placeholder="Buscar platillo..."
            />
            <Button id="searchButton" variant="secondary">
              Buscar
            </Button>
          </Stack>
        </div>
        <div className="container " id="main">
          <div className="row colpost">{donationsUI}</div>
        </div>
        <div>
          <img
            className="logoInMain"
            src="https://pbs.twimg.com/media/FX_2fGBWAAAON7X?format=png&name=240x240"
            alt="logo"
          />
        </div>
        <div className="utilitiesContainer"></div>
        <navbar className="navBar">
          <AiOutlineHome
            onClick={() => navigate("/donations")}
            size={100}
            className="navIcon"
          />

          <BiSearch size={90} className="navIcon" />

          <AiOutlineUser
            size={100}
            className="navIcon"
            onClick={() => navigate("/profile")}
          />
        </navbar>
        <Footer />
      </div>
    </div>
  );
}
