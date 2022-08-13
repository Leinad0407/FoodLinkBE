import "../UserDonations/UserDonations.scss";
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
import Nav from "react-bootstrap/Nav";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export default function UserDonations() {
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
    ({ _id, food, postedDate, expDate, foodDescription, foodPhoto, index }) => (
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
            <strong className="text-uppercase">{foodDescription}</strong>

            <Card.Text>Fecha de publicación: {postedDate}</Card.Text>
            <Card.Text>Clasificación: {food}</Card.Text>
            <Card.Text>Fecha de expiración: {expDate}</Card.Text>
            <Button className="selectButton" variant="success">
              Ver detalle
              <BiRestaurant className="forkLogo" size={20}></BiRestaurant>
            </Button>
          </Card.Body>
        </div>
      </div>
    )
  );

  return (
    <div>
      <div className="fatherContainer container">
        <Header ph1="tus donaciones" ph2="activas" />
      </div>
      <div>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/">Página principal</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/profileEditDonors">Editar Perfil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/createDonations">Crear una Donación</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="row container">
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

        <Outlet />
      </div>
    </div>
  );
}
