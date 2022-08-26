import "./registro.scss";

//importamos componentes de rendrizado condicional

import RegistroMoral from "../../components/registropmoral/registropmoral";
import RegistroFisica from "../../components/registofisica/registrofisica";
//importamos servicios de fetch
import { createNewUser, generateConfig } from "../../services/CreateNewUser";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Registro() {
  const navigate = useNavigate();

  const [personType, setPersonType] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");

  const [colonia, setColonia] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEsatdo] = useState("");
  const [ciudad, setCiudad] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const dataToSend = {
      firstName,
      lastName,
      address: {
        street,
        colonia,
        numero,
        estado,
        ciudad,
      },
      email,
      password,
      phoneNumber,
      gender,
      userType,
    };

    await createNewUser(dataToSend);
    navigate("/login");
  };
  return (
    <div>
      <div className="row">
        <div className="container">
          <div className="container d-flex justify-content-center align-items-center">
            <section className="col col-lg-6 col-8 d-flex justify-content-center align-items-center">
              <div className="card shadow  col-xs-12 col-sm-4 col-md-6 col-lg-4  p-4 w-100 d-flex align-items-center justify-content-center">
                <div className="mb-4 d-flex justify-content-start align-items-center">
                  <h2 className="text-success text-center mt-4 ">
                    Registrate con Nosotros
                  </h2>
                </div>
                <div>
                  <div className="mb-4  ">
                    <label id="Persona">
                      <i className="bi bi-gender-ambiguous"></i> Persona:
                    </label>
                    <input
                      type="radio"
                      className="form-check-input circleOption "
                      name="tipo de persona"
                      value="true"
                      onClick={() => setPersonType(true)}
                    ></input>{" "}
                    Moral
                    <input
                      type="radio"
                      className="form-check-input circleOption"
                      name="tipo de persona"
                      value="moral"
                      onClick={() => setPersonType(false)}
                    ></input>{" "}
                    Física
                  </div>
                </div>
                <div className="divider mb-4 col col-lg-12"></div>
                {personType && <RegistroMoral />}
                {!personType && <RegistroFisica />}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
