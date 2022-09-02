//importe de componentes
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

//import servicios
import { PatchPerson } from "../../services/changeDonationStatus";

//import estilos
import "./confirmReactivate.css";

export default function Reactivate() {
  const { id } = useParams();
  const handleClick = () => {
    console.log(`jala ${id}`);
    const newStatus = "active";
    PatchPerson(id, newStatus);
  };

  return (
    <div className="row">
      <Header ph1="Reactivar" ph2="donación" />
      <div id="reactivateView" className="row">
        <div className="col col-lg-6 row">
          <img src="https://pbs.twimg.com/media/FbljQFYWQAAlI4M?format=jpg&name=small"></img>
          <a href="https://storyset.com/people">
            People illustrations by Storyset
          </a>
        </div>

        <div className="col col-lg-6 row d-flex justify-content-center align-items-center">
          <h6>En caso de que:</h6>
          <ul>
            El beneficiario no pueda recolectar tu donación, reactivala para que
            otras personas puedan aprovecharla.
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
      </div>

      <Footer />
    </div>
  );
}
