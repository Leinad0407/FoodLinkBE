import "../Home/Home.scss";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React from "react";

import { useNavigate } from "react-router-dom";

import Footer from "../../components/footer/footer";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/donacion6.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>
                Actualmente se desperdicia 30,000 toneladas de comida en México
              </h1>
              <p className="caption-car">
                Con esto se podría alimentar a más de 20 millones de mexicanos.
              </p>
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
              <p className="caption-car">
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
              <p className="caption-car">
                1/3 del alimento que se produce en México se desperdicia,
                nosotros te podemos ayudar.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className=" text-container">
          <h4>
            Comparte, evita el desperdicio y ayuda al planeta.
            <br /> La mejor app de donacion de comida
          </h4>
        </div>
      </div>

      <div className="container">
        <div className=" text-Welcome">
          <h2 id="welcome-text">Bienvenido a FoodLink®</h2>
          <p>
            FOODLINK surge de la necesidad de reducir el desperdicio de la
            comida y el máximo aprovechamiento de los recursos que nos brinda
            nuestro planeta. El objetivo principal es generar las conexiones
            entre los donadores de comida con beneficiarios y asociaciones. ¿Que
            te gustaría hacer?
          </p>
        </div>

        <div className="col col-12">
          <div className="row " xs={1} md={2}>
            <Col className="col col-12 col-lg-6 justify-content-center">
              <Card style={{ width: "2  5rem" }}>
                <Card.Img variant="top" src="/images/card1.jpg" />
                <Card.Body className="butn row">
                  <Card.Title>Donaciones</Card.Title>
                  <Card.Text>
                    Con un click, tú puedes donar el alimento que necesitan para
                    sobrevivir. Sólo toma unos segundos apoyar con tu donación.
                  </Card.Text>
                  <Button
                    onClick={() => navigate("/registro")}
                    className="btn-donador"
                    variant="success"
                  >
                    Donar Comida
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col col-12 col-lg-6">
              <Card style={{ width: "2  5rem" }}>
                <Card.Img variant="top" src="/images/card2.jpg" />
                <Card.Body className="butn row">
                  <Card.Title className="text-transform-uppercase">
                    Busqueda de comida
                  </Card.Title>
                  <Card.Text className="text-transform-lowercase">
                    Puedes buscar alimentos que necesitas, Sólo toma unos
                    segundos darte de alta y encontrar lugares con donaciones.
                  </Card.Text>
                  <Button
                    onClick={() => navigate("/registro")}
                    className="btn-buscador"
                    variant="success"
                  >
                    ¿Buscas Comida?
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
        <div id="loginButton">
          <Button
            id="loginBtn"
            onClick={() => navigate("/login")}
            className="btn-donador"
            variant="success"
          >
            Iniciar Sesión
          </Button>
          <Button
            id="loginBtn"
            onClick={() => navigate("/donations")}
            variant="success"
          >
            Ver donaciones
          </Button>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}
