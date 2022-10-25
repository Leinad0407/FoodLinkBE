import Header from "../../components/header/header";
import TitAndSub from "../../components/tit&sub/tit&sub";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";

//Import de componentes necesarios
import Footer from "../../components/footer/footer";

// //import de estilos//
// import "./profile.scss";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <Header className="" ph1="Detalle de" ph2="  tu perfil" />

        <div id="profileInfo" className="container">
          <Button
            // id="backBtn"
            className="col col-lg-2 backButton"
            variant="success"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeft size={25} />
          </Button>
          <img alt=""></img>
          <TitAndSub
            className="col col-lg-12"
            title="Nombre de usuario:"
            info="Aqui debe ir el nombre"
          />
          <TitAndSub
            className="col col-lg-12"
            title="Correo electrónico:"
            info="Aqui debe ir el correo"
          />
          <TitAndSub
            className="col col-lg-12"
            title="Número de contacto:"
            info="Aqui debe ir el numero"
          />
          <TitAndSub
            className="col col-lg-12"
            title="Dirección de recolección:"
            info="Aqui debe ir el address"
          />

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
          <Button
            onClick={() => navigate("bookedDonations")}
            className=" col col-lg-2 selectButton"
            variant="success"
          >
            {" "}
            Donaciones Apartadas{" "}
          </Button>
        </div>

        <Footer />
      </div>
    </div>
  );
}
