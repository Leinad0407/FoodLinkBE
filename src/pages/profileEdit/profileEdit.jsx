import Header from "../../components/header/header";
import TitAndSub from "../../components/tit&sub/tit&sub";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

//import de estilos//
import "../profile/profile.scss";

export default function ProfileEdit() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Header className="col-12" ph1="Edita" ph2="  tu perfil" />

      <Button
        id="backBtn"
        className="selectButton"
        variant="success"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft />
      </Button>
      <img></img>
      <TitAndSub title="Nombre de usuario:" info="Aqui debe ir el nombre" />
      <TitAndSub title="Correo electrónico:" info="Aqui debe ir el correo" />
      <TitAndSub title="Número de contacto:" info="Aqui debe ir el numero" />
      <TitAndSub
        title="Dirección de recolección:"
        info="Aqui debe ir el address"
      />
      <div id="profileButtons">
        <Button onClick={() => navigate("edit")} variant="success">
          Guardar mis datos
        </Button>
      </div>
    </div>
  );
}
