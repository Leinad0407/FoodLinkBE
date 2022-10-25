//importe de componentes
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

//import servicios
import { PatchPerson } from "../../services/changeDonationStatus";
import React from "react";

//import estilos
import "./confirmReactivate.css";

export default function Reactivate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleClick = () => {
    const newStatus = "active";
    PatchPerson(id, newStatus);
    navigate(-1);
  };

  return (
    <div>
      <div className="row">
        <Header ph1="Reactivar" ph2="donación" />
        <Button
          id="backBtn"
          className="col col-lg-2 selectButton"
          variant="success"
          onClick={() => navigate(-1)}
        >
          <BsArrowLeft size={25} />
        </Button>
        <div id="reactivateView" className="row">
          <div className="row container">
            <div className="row container d-flex justify-content-center">
              <div className="">
                <h6>En caso de que:</h6>
                <ul>
                  El beneficiario no pueda recolectar tu donación, reactivala
                  para que otras personas puedan aprovecharla.
                </ul>
                <ul>
                  Tu donación no haya sido recolectada en un máximo de 1 día,
                  reactivala para que otra persona pueda aprovechar tu donación.
                </ul>

                <Button
                  onClick={() => handleClick()}
                  className="col col-lg-3 col-3"
                  variant="success"
                >
                  Reactiva tu donación
                </Button>
              </div>
              <img
                id="ReactivateIllustration"
                src="https://pbs.twimg.com/media/FbljQFYWQAAlI4M?format=jpg&name=small"
              ></img>
              <a href="https://storyset.com/people">
                People illustrations by Storyset
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
