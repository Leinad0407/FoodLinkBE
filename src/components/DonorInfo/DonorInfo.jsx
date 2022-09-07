import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

//import Servicios
import { retrieveOrderReady } from "../../services/retrieveDonation";

//import de estilos
import "../../pages/Donadores/Donadores.scss";
export default function DonorInfo() {
  const [donation, setDonation] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getDonation = async () => {
      const donation = await retrieveOrderReady(id);

      setDonation(donation);
    };

    getDonation();
  }, []);
  const handleClick = () => {};
  return (
    <div>
      <div id="donorInfo">
        <h4 className="col col-6 subtitle">INFORMACIÓN DEL DONADOR</h4>
        <p className="text-uppercase">
          <strong>Nombre:</strong>
          <br /> {donation.userName}
          {donation.userID}
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
        <a href="mailto:">
          <Button className="selectButton" variant="success">
            Manda un email
          </Button>
        </a>
        <Button
          onClick={() => navigate("/donations")}
          className="selectButton"
          variant="success"
        >
          Ver donaciones
        </Button>
      </div>
    </div>
  );
}
