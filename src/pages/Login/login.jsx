import Header from "../../components/header/header";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.scss";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPW, setUserPW] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <div className=" row">
        <Header className="justify-content-center" ph1="Inicia" ph2="sesión" />

        <div
          id="loginContainer"
          className="container d-flex justify-content-center align-items-center"
        >
          <div className="column">
            <img
              id="loginLogo"
              className="col col-lg-7 col-7"
              src="https://pbs.twimg.com/media/FX_2fGBWAAAON7X?format=png&name=240x240"
            ></img>
            <label className="col col-lg-12 col-8">
              <p>Email</p>
              <input
                type="text"
                required={true}
                id="emailInput"
                className="form-control col col-lg-12 col-8 input"
                onChange={setUserEmail}
              ></input>
              <p>Contraseña</p>
              <input
                type="text"
                required={true}
                id="passwordInput"
                className="form-control col col-lg-12 col-2 input"
                onChange={setUserPW}
              ></input>
            </label>
            <Button
              variant="success"
              id="accessBtn"
              className="col col-lg-6 col-6"
            >
              Entrar
            </Button>
            <p>¿Olvidaste la contraseña?</p>
            <p>
              ¿No tienes cuenta?{" "}
              <strong id="registerBtn" onClick={() => navigate("/registro")}>
                Registrate!
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
