import "../Home/Home.scss";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Header from "../../components/header/header";

export default function Home() {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/donacion6.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Actualmente se desperdicia 30,000 toneladas de comida en México</h1>
            <p class="caption-car">Con esto se podría alimentar a más de 20 millones de mexicanos.</p>
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
            src="./images/donacion4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>¿Buscas Comida?</h1>
            <p class="caption-car">1/3 del alimento que se produce en México se desperdicia, nosotros te podemos ayudar.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="text-container">
        <h4>
          Comparte, evita el desperdicio y ayuda al planeta.
          <br /> La mejor app de donacion de comida
        </h4>
      </div>
      <div className= "container">
        <div class="text-Welcome">
          <h2 id="welcome-text">Bienvenido a FoodLink®</h2>
          <p >FOODLINK surge de la necesidad de reducir el desperdicio de la comida y el máximo aprovechamiento de los recursos que nos brinda nuestro planeta. El objetivo principal es 
            generar las conexiones entre los donadores de comida con beneficiarios y asociaciones. ¿Que te gustaría hacer?</p> 
        </div>

      <div >
            <Row  className="d-flex justify-content-around" xs={1} md={2}>
            <Col className="justify-content-center">
          <Card style= {{ width: "25rem" }}>
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
            <Button className="btn-donador" variant="primary">
              Iniciar Sesión
            </Button>
          </Card.Body>
        </Card>
          
          </Col>
        
          <Col className="justify-content-center">
          <Card style={{ width: "2  5rem" }}>
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
            <Button className="btn-buscador" variant="primary">
              Iniciar Sesión
            </Button>
          </Card.Body>
        </Card>
          </Col>
            </Row>
          
        
      </div>

      <div class="logo-container">
      <a class="logo-img" href="http://localhost:3000/">
        <img src="./images/logo.png" alt="HTML tutorial" 
       width={300} height={83} />
          </a>
      </div>
      </div>


      <div class="footer">
        <p>FoodLink®, Todos los derechos Reservados, 2022</p>
      </div>
    </div>
  );
}
