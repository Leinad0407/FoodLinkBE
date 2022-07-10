import "../Donadores/Donadores.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function Donaciones() {
  const donaciones = [
    {
      photo:
        "https://elpoderdelconsumidor.org/wp-content/uploads/2022/02/quesadillas-d-maiz-con-queso-y-flor-d-calabaza-b.jpg",
      descripcion:
        "Las quesadillas son uno de los platillos que no me canso de preparar. Me encanta tener tortillas disponibles en casa para prepararlas acompañadas de mis ingredientes favoritos",
    },
    {
      photo:
        "https://static-sevilla.abc.es/media/gurmesevilla/2014/06/receta-salteado-verduras-1.jpg",
      descripcion:
        "Las quesadillas son uno de los platillos que no me canso de preparar. Me encanta tener tortillas disponibles en casa para prepararlas acompañadas de mis ingredientes favoritos",
    },
    {
      photo:
        "https://elpoderdelconsumidor.org/wp-content/uploads/2022/02/quesadillas-d-maiz-con-queso-y-flor-d-calabaza-b.jpg",
      descripcion:
        "Las quesadillas son uno de los platillos que no me canso de preparar. Me encanta tener tortillas disponibles en casa para prepararlas acompañadas de mis ingredientes favoritos",
    },
    {
      photo:
        "https://static-sevilla.abc.es/media/gurmesevilla/2014/06/receta-salteado-verduras-1.jpg",
      descripcion:
        "Las quesadillas son uno de los platillos que no me canso de preparar. Me encanta tener tortillas disponibles en casa para prepararlas acompañadas de mis ingredientes favoritos",
    },
  ];

  const donacionesUI = donaciones.map(({ photo, descripcion }) => (
    // <div className="postContainer">
    //   <div>
    //     <img alt="" src={photo} />
    //   </div>
    //   <div>
    //     <p>{descripcion}</p>
    //   </div>
    // </div>

    <div className="contenedorPadre">
      <div className="contenedorFigura">
        <Figure>
          <Figure.Image width={400} height={409} alt="171x180" src={photo} />
        </Figure>
      </div>

      <div className="contenedorDescripcion">
        <Card style={{ width: "45rem" }}>
          <Card.Body>
            <Card.Title>Descripción</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Button variant="success">Seleccionar</Button>{" "}
          </Card.Body>
        </Card>
      </div>
    </div>
  ));

  return (
    <div>
      <div>
        <h1>Comida Disponible en tu area</h1>
      </div>
      <div>
        <Stack direction="horizontal" gap={1}>
          <Form.Control className="me-auto" placeholder="Buscar Platillo" />
          <Button variant="secondary">Buscar</Button>
        </Stack>
      </div>
      <div>{donacionesUI}</div>
      <div>
        <img src="../public/logoFoodLink.PNG" alt="logo" />
      </div>
      <div>
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
