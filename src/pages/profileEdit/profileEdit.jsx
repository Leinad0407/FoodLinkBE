import Header from "../../components/header/header";
import TitAndSub from "../../components/tit&sub/tit&sub";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

//import de componentes necesarios
import Footer from "../../components/footer/footer";

//import de estilos//
import "../profile/profile.scss";

export default function ProfileEdit() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <Header className="col col-12" ph1="Edita" ph2="  tu perfil" />
        <Button
          // id="backBtn"
          className="col col-lg-2 selectButton"
          variant="success"
          onClick={() => navigate(-1)}
        >
          <BsArrowLeft size={25} />
        </Button>

        <div id="profileInfo" className="container">
          <img></img>
          <TitAndSub title="Nombre de usuario:" info="Aqui debe ir el nombre" />
          <TitAndSub
            title="Correo electrónico:"
            info="Aqui debe ir el correo"
          />
          <TitAndSub
            title="Número de contacto:"
            info="Aqui debe ir el numero"
          />
          <TitAndSub
            title="Dirección de recolección:"
            info="Aqui debe ir el address"
          />

          <Button
            className="col col-lg-2 selectButton"
            onClick={() => navigate(-1)}
            variant="success"
          >
            Guardar mis datos
          </Button>
        </div>

        <Footer />
      </div>
    </div>
  );
}
