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

export default function Donaciones() {
  const [donations, setDonations] = useState([]);

  //REQUEST A Donations
  useEffect(() => {
    const getDonationsQuery = async () => {
      const donations = await getDonations();
      console.log(donations, "Respuesta del servidor");
      setDonations(donations);
    };
    getDonationsQuery();
  }, []);
  console.log(donations, "STATE donations");

  const donationsUI = donations.map(({ foodDescription, foodPhoto }) => (
    <div className="postContainer">
      <div className="figurePostContainer">
        <Figure>
          <Figure.Image className="photoPostContainer" src={foodPhoto} />
        </Figure>
      </div>

      <div className="descriptionContainer">
        <Card>
          <Card.Body>
            <Card.Title>Descripción:</Card.Title>
            <Card.Text>{foodDescription}</Card.Text>
            <Button className="selectButton" variant="success">
              Seleccionar
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  ));

  return (
    <div className="fatherContainer">
      <div className="titleContainer">
        <span>
          <h1 className="boldTitle">Comida Disponible </h1>
        </span>
        <span>
          <h2 className="normalTitle">en tu área</h2>
        </span>
      </div>
      <div className="searchContainer">
        <Stack direction="horizontal" gap={1}>
          <Form.Control className="me-auto" placeholder="Buscar Platillo..." />
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
    </div>
  );
}
