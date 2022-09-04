import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieve as retrieveDonation } from "../../services/retrieveDonation";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import Button from "react-bootstrap/Button";
import "./Details.scss";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

//import de servicios
import { BookDon } from "../../services/changeDonationStatus";

export default function DonationDetail() {
  //Local State
  const [donation, setDonation] = useState("");
  const [newStatus, setNewStatus] = useState("booked");
  //RRD
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getDonation = async () => {
      const donation = await retrieveDonation(id);

      setDonation(donation);
    };

    getDonation();
  }, []);

  const handleClick = () => {
    BookDon(id, newStatus);
    navigate("orderReady");
  };

  return (
    <div>
      <div className="row">
        <Header ph1="Descripción de " ph2="la comida" />
        <Button
          id="backBtn"
          className="col col-lg-2 selectButton"
          variant="success"
          onClick={() => navigate(-1)}
        >
          <BsArrowLeft size={25} />
        </Button>
        <div className="row container d-flex justify-content-center">
          <div
            className="container d-flex justify-content-center"
            style={{ margin: "0px 160px" }}
          >
            <div className="row container d-flex justify-content-center">
              <img
                className="col col-lg-12 d-flex justify-content-center"
                alt="Donors food"
                id="img"
                src={donation.foodPhoto}
              ></img>
              <div className="col col-lg-6" id="foodInfo">
                <p className="text-uppercase ">
                  <strong>Usuario donante:</strong> <br />
                  {donation.userName}
                  {donation.userID}
                </p>
                <p className="text-uppercase">
                  <strong>Fecha de creación:</strong> <br />
                  {donation.postedDate}
                </p>
                <p className="text-uppercase">
                  <strong>Comida:</strong> <br />
                  {donation.food}
                </p>
                <p className="text-uppercase">
                  <strong>Descripción:</strong> <br />
                  {donation.foodDescription}
                </p>
                <p className="text-uppercase" id="tags">
                  {donation.tags}
                </p>
                <p className="text-uppercase ">
                  <strong>Condición de comida:</strong> <br />
                  <span>{donation.foodCondition}</span>
                </p>
                <Button
                  onClick={() => handleClick("")}
                  // id="getButton"
                  className=" col col-lg-4 selectButton d-flex justify-content-center "
                  variant="success"
                >
                  Apartar
                </Button>
              </div>

              <div className="col col-lg-6 col-12" id="donorInfo">
                <h4 className="subtitle">Recomendaciones:</h4>
                <p className="text-uppercase">
                  <strong>Puntualidad:</strong>
                  <br /> Recuerda que tienes un lapso de 24 horas para recoger
                  la donación.
                </p>
                <p className="text-uppercase">
                  <strong>Coordialidad:</strong>
                  <br /> Contacta lo antes posible al donador y confirmen el
                  horario y lugar de recolección.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
