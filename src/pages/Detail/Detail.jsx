import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieve as retrieveDonation } from "../../services/retrieveDonation";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import Button from "react-bootstrap/Button";
import "./Details.scss";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function DonationDetail() {
  //Local State
  const [donation, setDonation] = useState("");
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

  return (
    <div className="row container">
      <Header className="col col-lg-12" ph1="Descripción de " ph2="la comida" />
      <Button
        id="backBtn"
        className="col col-lg-2 selectButton"
        variant="success"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft size={25} />
      </Button>
      <div className="row">
        <img
          className="col col-lg-12"
          alt="Donors food"
          id="img"
          src={donation.foodPhoto}
        ></img>
        <div className="col col-lg-6" id="foodInfo">
          <p className="text-uppercase ">
            <strong>Usuario donante:</strong> <br />
            {donation.userName}
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
            onClick={() => navigate("OrderReady")}
            // id="getButton"
            className=" col col-lg-4 selectButton"
            variant="success"
          >
            PEDIR
          </Button>
        </div>

        <div className="col col-lg-6 col-12" id="donorInfo">
          <h4 className="subtitle">INFORMACIÓN DEL DONADOR</h4>
          <p className="text-uppercase">
            <strong>Nombre:</strong>
            <br /> {donation.userName}
          </p>
          <p className="text-uppercase">
            <strong>Dirección:</strong>
            <br /> {donation.address}
          </p>
          <p className="text-uppercase">
            <strong>Número de contacto: </strong>
            <br />
            {donation.phoneNumber}
          </p>
          <p className="text-uppercase">
            <strong>Correo de contacto: </strong>
            <br />
            {donation.phoneNumber}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
