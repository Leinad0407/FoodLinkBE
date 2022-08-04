import Header from "../../components/header/header";
import TitAndSub from "../../components/tit&sub/tit&sub";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

//Import de componentes necesarios
import Footer from "../../components/footer/footer";

//import de estilos//
import "./profile.scss";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <Header
          className="col col-lg-12 col-12"
          ph1="Detalle de"
          ph2="  tu perfil"
        />
        <Button
          id="backBtn"
          className="col col-lg-2 selectButton"
          variant="success"
          onClick={() => navigate(-1)}
        >
          <BsArrowLeft size={25} />
        </Button>

        <div className="container">
          <div className="row">
            <img></img>
            <TitAndSub
              title="Nombre de usuario:"
              info="Aqui debe ir el nombre"
            />
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
            <div id="profileButtons">
              <Button
                className="col col-lg-2 selectButton"
                onClick={() => navigate("edit")}
                variant="success"
              >
                {" "}
                Editar mis datos{" "}
              </Button>
              {/* Este botón nos dirige a la pantalla donde podremos ver las donaciones
        que ha realizado este usuario */}
              <Button
                onClick={() => navigate("donations")}
                className=" col col-lg-2 selectButton"
                variant="success"
              >
                {" "}
                Mis Donaciones{" "}
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
