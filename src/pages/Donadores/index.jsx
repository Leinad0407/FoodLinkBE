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
  const [search, setSerarch] = useState("");

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
  // let result = [];
  // if (!search) {
  //   result = donations;
  // } else {
  //   donations.filter((dato) => {
  //     result = dato.foodDescription
  //       .toUpperCase()
  //       .includes(search.toUpperCase());
  //   });
  // }

  const donationsUI = result.map(
    ({ _id, foodDescription, foodPhoto, address, index }) => (
      <div
        key={index}
        onClick={() => navigate(`detail/${_id}`)}
        className="colpost container col-12 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-12"
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
    <div>
      <div className="row">
        <Header ph1="Comida Disponible " ph2=" en tu área" />
        <div className="row container">
          <div className="searchContainer">
            <Stack direction="horizontal" gap={1}>
              <Form.Control
                value={search}
                onChange={searcher}
                type="text"
                className="me-auto"
                placeholder="Filtrar por dirección"
              />
              <Button id="searchButton" variant="secondary">
                Buscar
              </Button>
            </Stack>
          </div>
          <div className="container " id="main">
            <div className="row colpost">{donationsUI}</div>
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
        </div>
        <Footer />
        <Outlet />
      </div>
    </div>
  );
}
