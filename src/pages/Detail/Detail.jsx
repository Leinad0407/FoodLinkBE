import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieve as retrieveDonation } from "../../services/retrieveDonation";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "./Details.scss";

import Header from "../../components/header/header";

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
    <div className="container">
      <Header ph1="Descripción de " ph2="la comida" />
      <Button
        id="backBtn"
        className="selectButton"
        variant="success"
        onClick={() => navigate(-1)}
      >
        Regresar
      </Button>
      <div>
        <img alt="Donors food" className="img" src={donation.foodPhoto}></img>
        <p className="text-uppercase ">
          <strong>Usuario donante:</strong> <br />
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
          onClick={() => navigate(-1)}
          // id="getButton"
          className="selectButton"
          variant="success"
        >
          PEDIR
        </Button>

        <div id="donorInfo">
          <h4 className="subtitle">INFORMACIÓN DEL DONADOR</h4>
          <p className="text-uppercase">
            <strong>Nombre:</strong>
            <br /> {donation.userID}
          </p>
          <p className="text-uppercase">
            <strong>Dirección:</strong>
            <br /> {donation.addres}
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
    </div>
  );
}
