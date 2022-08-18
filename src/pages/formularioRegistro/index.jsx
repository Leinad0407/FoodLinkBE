import "../Donadores/Donadores.scss";
import "./registro.scss";

import { createNewUser } from "../../services/CreateNewUser";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Registro() {
  const navigate = useNavigate();

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
                <div className="mb-1">
                  <form id="contacto">
                    <div className="mb-4 d-flex justify-content-around">
                      <div>
                        <label id="nombre">
                          {" "}
                          <i className="bi bi-person-fill"></i> Nombre
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="nombre"
                          id="nombre"
                          placeholder="ej: Aaron"
                          required={true}
                          onChange={(e) => setFirstName(e.target.value)}
                        ></input>
                        <div className="nombre text "></div>
                      </div>
                      <div>
                        <label id="apellido">
                          {" "}
                          <i className="bi bi-person-fill"></i> Apellido
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="apellido"
                          id="apellido"
                          placeholder="ej: Enciso"
                          required={true}
                          onChange={(e) => setlastName(e.target.value)}
                        ></input>
                        <div className="apellido text"></div>
                      </div>
                    </div>
                    <div>
                      <label id="direccion">
                        {" "}
                        <i className="bi bi-house-door-fill"></i> Calle
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="direccion"
                        id="direccion"
                        placeholder="ej: Av.Antonio toledo coro"
                        required={true}
                        onChange={(e) => setStreet(e.target.value)}
                      ></input>
                      <div className="direccion text"></div>
                    </div>
                    <div className="mb-4 d-flex justify-content-between">
                      <div>
                        <label id="colonia">
                          {" "}
                          <i className="bi bi-house-door-fill"></i> Colonia
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="colonia"
                          id="colonia"
                          placeholder="ej: Los Sauces"
                          required={true}
                          onChange={(e) => setColonia(e.target.value)}
                        ></input>
                        <div className="colonia text "></div>
                      </div>
                      <div>
                        <label id="numero">
                          {" "}
                          <i className="bi bi-house-door-fill"></i> Número
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="numero"
                          id="numero"
                          placeholder="ej: 3410"
                          required={true}
                          onChange={(e) => setNumero(e.target.value)}
                        ></input>
                        <div className="numero text"></div>
                      </div>
                    </div>
                    <div className="mb-4 d-flex justify-content-between">
                      <div>
                        <label id="estado">
                          {" "}
                          <i className="bi bi-building"></i> Estado
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="estado"
                          id="estado"
                          placeholder="ej: Sinaloa"
                          required={true}
                          onChange={(e) => setEsatdo(e.target.value)}
                        ></input>
                        <div className="estado text "></div>
                      </div>
                      <div>
                        <label id="ciudad">
                          {" "}
                          <i className="bi bi-building"></i> Ciudad
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="ciudad"
                          id="ciudad"
                          placeholder="ej: Mazatlan"
                          required={true}
                          onChange={(e) => setCiudad(e.target.value)}
                        ></input>
                        <div className="ciudad text"></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label id="correo">
                        <i className="bi bi-envelope-fill"></i> Correo
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="correo"
                        id="correo"
                        placeholder="ej: aaronenciso@gmail.com"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                      <div className="correo text"></div>
                    </div>
                    <div>
                      <label id="Password">
                        {" "}
                        <i className="bi bi-person-fill"></i> Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                      <div className="nombre text "></div>
                    </div>
                    <div className="mb-4">
                      <label id="telefono">
                        <i className="bi bi-phone-fill"></i> Teléfono
                      </label>
                      <input
                        type="cel"
                        className="form-control"
                        name="telefono"
                        id="telefono"
                        placeholder="ej: 6691008819"
                        required={true}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      ></input>
                      <div className="telefono text"></div>
                    </div>
                    <div>
                      <label id="tipo">
                        {" "}
                        <i className="bi bi-briefcase-fill"></i> Tipo de negocio
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="tipo"
                        id="tipo"
                        placeholder="ej: Tienda abarrotes"
                        required
                      ></input>
                      <div className="tipo text "></div>
                    </div>
                    <div className="mb-4  ">
                      <label id="genero">
                        <i className="bi bi-gender-ambiguous"></i> Género:
                      </label>
                      <input
                        type="radio"
                        className="form-check-input circleOption "
                        name="genero"
                        value="masculino"
                        onClick={(e) => setGender(e.target.value)}
                      ></input>{" "}
                      Masculino
                      <input
                        type="radio"
                        className="form-check-input circleOption"
                        name="genero"
                        value="femenino"
                        onClick={(e) => setGender(e.target.value)}
                      ></input>{" "}
                      Femenino
                      <div className="genero text"></div>
                    </div>
                    {/* Opción para marcar si eres persona física o persona
                    moral */}
                    <div className="mb-4  ">
                      <label id="Usuario">
                        <i className="bi bi-gender-ambiguous"></i> Usuario:
                      </label>
                      <input
                        type="radio"
                        className="form-check-input circleOption "
                        name="tipo de donor"
                        value="donador"
                        onChange={(e) => setUserType(e.target.value)}
                      ></input>{" "}
                      Donador
                      <input
                        type="radio"
                        className="form-check-input circleOption"
                        name="tipo de donor"
                        value="beneficiario"
                        onChange={(e) => setUserType(e.target.value)}
                      ></input>{" "}
                      Beneficiario
                    </div>
                    {/* <div>
                      <label id="nombre">
                        {" "}
                        <i className="bi bi-person-fill"></i> Nombre de Usuario
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        id="nombre"
                        placeholder="ej: AaronKing21"
                        required
                      ></input>
                      <div className="nombre text "></div>
                    </div> */}
                    <br></br>
                    <div className="mb-2 d-flex justify-content-center align-items-center">
                      <button
                        id="botton"
                        className="col-4 btn btn-success d-flex justify-content-center align-items-center"
                        onClick={handleClick}
                      >
                        Registrarse
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
