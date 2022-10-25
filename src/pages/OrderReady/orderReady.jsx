import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";

//import de estilos
import "./orderReady.css";

export default function OrderReady() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <Header ph1="¡Tu comida" ph2="está lista!" />
        <Button
          id="backBtn"
          className="col col-lg-2 selectButton"
          variant="success"
          onClick={() => navigate(-1)}
        >
          <BsArrowLeft size={25} />
        </Button>
        <div id="orderReadyView" className="row d-flex justify-content-center">
          <div className="row container ">
            <div className="container ">
              <h6>Recuerda:</h6>
              <ul>Contacta al donador lo antes posible.</ul>
              <ul>Llevar algún recipiente para alamcenar la comida.</ul>
              <ul>Respeta las medidas que el donador te mencione.</ul>
              <div className="row d-flex justify-content-center">
                <img
                  src="https://pbs.twimg.com/media/FbxtkxmXgAYq8zH?format=jpg&name=large"
                  id="animated"
                  viewBox="0 0 50 50"
                ></img>
                <a href="https://storyset.com/work">
                  Work illustrations by Storyset
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer className="col col-lg-12" />
      </div>
    </div>
  );
}
