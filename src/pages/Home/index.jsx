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
        <div>

        </div>

      

      <div class="footer">
        <p>FoodLink®, Todos los derechos Reservados, 2022</p>
      </div>
    </div>
  );
}
