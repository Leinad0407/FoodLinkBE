import { useNavigate, useParams } from "react-router-dom";
import React from "react";
export default function DonorInfo() {
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
    <div>
      <div className="col col-lg-6 col-12" id="donorInfo">
        <h4 className="subtitle">INFORMACIÓN DEL DONADOR</h4>
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
      </div>
    </div>
  );
}
