import "../Donadores/Donadores.scss";
import "./registro.scss";

import { createNewUser } from "../../services/PostNewUser";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Registro() {
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

  const handleSubmit = async (event) => {
    // event.preventDefault();

    const userData = {
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
    console.log(userData);
    // try {
    //   await createNewUser(userData);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      <div className="row">
        <div className="container">
          <div className="container d-flex justify-content-center align-items-center">
            <section class="col col-lg-6 d-flex justify-content-center align-items-center">
              <div class="card shadow col-xs-12 col-sm-6 col-md-6 col-lg-4  p-4 w-100 d-flex align-items-center justify-content-center">
                <div class="mb-4 d-flex justify-content-start align-items-center">
                  <h2 class="text-success text-center mt-4 ">
                    Registrate con Nosotros
                  </h2>
                </div>
                <div class="mb-1">
                  <form id="contacto">
                    <div class="mb-4 d-flex justify-content-around">
                      <div>
                        <label for="nombre">
                          {" "}
                          <i class="bi bi-person-fill"></i> Nombre
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="nombre"
                          id="nombre"
                          placeholder="ej: Aaron"
                          required={true}
                          onChange={(e) => setFirstName(e.target.value)}
                        ></input>
                        <div class="nombre text "></div>
                      </div>
                      <div>
                        <label for="apellido">
                          {" "}
                          <i class="bi bi-person-fill"></i> Apellido
                        </label>
                        <input
                          type="text"
                          class="form-control"
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
                      <label for="direccion">
                        {" "}
                        <i class="bi bi-house-door-fill"></i> Calle
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="direccion"
                        id="direccion"
                        placeholder="ej: Av.Antonio toledo coro"
                        required={true}
                        onChange={(e) => setStreet(e.target.value)}
                      ></input>
                      <div class="direccion text"></div>
                    </div>
                    <div class="mb-4 d-flex justify-content-between">
                      <div>
                        <label for="colonia">
                          {" "}
                          <i class="bi bi-house-door-fill"></i> Colonia
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="colonia"
                          id="colonia"
                          placeholder="ej: Los Sauces"
                          required={true}
                          onChange={(e) => setColonia(e.target.value)}
                        ></input>
                        <div class="colonia text "></div>
                      </div>
                      <div>
                        <label for="numero">
                          {" "}
                          <i class="bi bi-house-door-fill"></i> Número
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          name="numero"
                          id="numero"
                          placeholder="ej: 3410"
                          required={true}
                          onChange={(e) => setNumero(e.target.value)}
                        ></input>
                        <div class="numero text"></div>
                      </div>
                    </div>
                    <div class="mb-4 d-flex justify-content-between">
                      <div>
                        <label for="estado">
                          {" "}
                          <i class="bi bi-building"></i> Estado
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="estado"
                          id="estado"
                          placeholder="ej: Sinaloa"
                          required={true}
                          onChange={(e) => setEsatdo(e.target.value)}
                        ></input>
                        <div class="estado text "></div>
                      </div>
                      <div>
                        <label for="ciudad">
                          {" "}
                          <i class="bi bi-building"></i> Ciudad
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="ciudad"
                          id="ciudad"
                          placeholder="ej: Mazatlan"
                          required={true}
                          onChange={(e) => setCiudad(e.target.value)}
                        ></input>
                        <div class="ciudad text"></div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <label for="correo">
                        <i class="bi bi-envelope-fill"></i> Correo
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        name="correo"
                        id="correo"
                        placeholder="ej: aaronenciso@gmail.com"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                      <div class="correo text"></div>
                    </div>
                    <div>
                      <label for="Password">
                        {" "}
                        <i class="bi bi-person-fill"></i> Contraseña
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                      <div class="nombre text "></div>
                    </div>
                    <div class="mb-4">
                      <label for="telefono">
                        <i class="bi bi-phone-fill"></i> Teléfono
                      </label>
                      <input
                        type="cel"
                        class="form-control"
                        name="telefono"
                        id="telefono"
                        placeholder="ej: 6691008819"
                        required={true}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      ></input>
                      <div class="telefono text"></div>
                    </div>
                    <div>
                      <label for="tipo">
                        {" "}
                        <i class="bi bi-briefcase-fill"></i> Tipo de negocio
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="tipo"
                        id="tipo"
                        placeholder="ej: Tienda abarrotes"
                        required
                      ></input>
                      <div class="tipo text "></div>
                    </div>
                    <div class="mb-4  ">
                      <label for="genero">
                        <i class="bi bi-gender-ambiguous"></i> Género:
                      </label>
                      <input
                        type="radio"
                        class="form-check-input circleOption "
                        name="genero"
                        value="masculino"
                        onClick={(e) => setGender(e.target.value)}
                      ></input>{" "}
                      Masculino
                      <input
                        type="radio"
                        class="form-check-input circleOption"
                        name="genero"
                        value="femenino"
                        onClick={(e) => setGender(e.target.value)}
                      ></input>{" "}
                      Femenino
                      <div class="genero text"></div>
                    </div>
                    {/* Opción para marcar si eres persona física o persona
                    moral */}
                    <div class="mb-4  ">
                      <label for="Usuario">
                        <i class="bi bi-gender-ambiguous"></i> Usuario:
                      </label>
                      <input
                        type="radio"
                        class="form-check-input circleOption "
                        name="tipo de donor"
                        value="donador"
                        onChange={(e) => setUserType(e.target.value)}
                      ></input>{" "}
                      Donador
                      <input
                        type="radio"
                        class="form-check-input circleOption"
                        name="tipo de donor"
                        value="beneficiario"
                        onChange={(e) => setUserType(e.target.value)}
                      ></input>{" "}
                      Beneficiario
                    </div>
                    {/* <div>
                      <label for="nombre">
                        {" "}
                        <i class="bi bi-person-fill"></i> Nombre de Usuario
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="nombre"
                        id="nombre"
                        placeholder="ej: AaronKing21"
                        required
                      ></input>
                      <div class="nombre text "></div>
                    </div> */}
                    <br></br>
                    <div class="mb-2 d-flex justify-content-center align-items-center">
                      <button
                        id="botton"
                        class="col-4 btn btn-success d-flex justify-content-center align-items-center"
                        onClick={() => handleSubmit()}
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
