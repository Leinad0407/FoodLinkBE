import "../Donadores/Donadores.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { getDonations } from "../../services/postDonaciones";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "../../components/header/header";

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
        className="postContainer"
      >
        <div className="figurePostContainer">
          <Figure>
            <Figure.Image className="photoPostContainer" src={foodPhoto} />
          </Figure>
        </div>

        <div className="descriptionContainer">
          <Card>
            <Card.Body>
              <Card.Title>
                <strong className="text-uppercase">Descripción:</strong>
              </Card.Title>
              <Card.Text>{foodDescription}</Card.Text>
              <Button className="selectButton" variant="success">
                Seleccionar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  );

  return (
    <div className="fatherContainer">
      <Header ph1="Comida Disponible" ph2="en tu área" />

      <div className="searchContainer">
        <Stack direction="horizontal" gap={1}>
          <Form.Control className="me-auto" placeholder="Buscar platillo..." />
          <Button id="searchButton" variant="secondary">
            Buscar
          </Button>
        </Stack>
      </div>
      <div id="main">{donationsUI}</div>
      <div>
        <img src="../../../public/logoFoodLink.PNG" alt="logo" />
      </div>
      <div className="utilitiesContainer">
        <form>
          <li>
            <AiOutlineHome />
          </li>
          <li>
            <BiSearch />
          </li>
          <li>
            <AiOutlineUser />
          </li>
        </form>
      </div>
      <Outlet />
    </div>
  );
}
