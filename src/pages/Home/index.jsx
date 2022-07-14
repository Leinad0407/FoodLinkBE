import "../Home/Home.scss";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    
    <div className="container">
    
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/donacion4.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>¿Buscas comida?</h1>
            <p>Estas en el lugar indicado.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/donacion5.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>¿Quieres donar comida?</h1>
            <p class="caption-car">
              Rescatamos alimento en tu ciudad, mientras evitamos el
              desperdicio.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/donacion2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Frutas, Verduras y Comida en general</h1>
            <p>1/3 del alimento que se produce en México se desperdicia.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
 <div className="text-container">
        <h4>
          Comparte, evita el desperdicio y ayuda al planeta.
          <br /> La mejor app de donacion de comida
        </h4>
      </div>

      <div class="text-Welcome">
        <h2 id="welcome-text">Bienvenido a FoodLink®</h2>
        <p>que te gustaría hacer:</p>
      </div>

      <div className="card-container d-flex justify-content-around align-items-center h-100">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src="/images/card1.jpg" />
          <Card.Body>
            <Card.Title>Donaciones</Card.Title>
            <Card.Text>
              Con un click, tú puedes donar el alimento que necesitan para
              sobrevivir. Sólo toma unos segundos apoyar con tu donación.
            </Card.Text>
            <Button className="btn-donador" variant="primary">
              Donar Comida
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src="/images/card2.jpg" />
          <Card.Body>
            <Card.Title>Busqueda de comida</Card.Title>
            <Card.Text>
              Puedes buscar alimentos que necesitas, Sólo toma unos segundos
              darte de alta y encontrar lugares con donaciones.
            </Card.Text>
            <Button className="btn-buscador" variant="primary">
              ¿Buscas Comida?
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div class="logo-container">
        <img id="logo" src="./images/logo.png" width={300} height={83} />
      </div>

      <div class="footer">
        <p>FoodLink®, Todos los derechos Reservados, 2022</p>
      </div>
    </div>
  );
}
