//Importamos componentes//
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

//Importamos demás servicios
import { getBookedDonations } from "../../services/getBookedDonations";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//importamos cosas de bootstrap//
import { Figure, Card, Button } from "react-bootstrap";
import { BiRestaurant } from "react-icons/bi";

//importamos servicios a utilizar

export default function BookedDonations() {
  const [bookedDonations, setBookedDonations] = useState([]);

  //RRD
  const navigate = useNavigate();

  //REQUEST A Donations
  useEffect(() => {
    const getDonationsQuery = async () => {
      const donations = await getBookedDonations();

      setBookedDonations(donations);
    };
    getDonationsQuery();
  }, []);
  console.log(bookedDonations);
  const donationsUI = bookedDonations.map(
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
    <div className="row">
      <Header ph1="Donaciones" ph2="apartadas" />
      <div className="container " id="main">
        <div className="row colpost">{donationsUI}</div>
      </div>

      <Footer />
    </div>
  );
}
