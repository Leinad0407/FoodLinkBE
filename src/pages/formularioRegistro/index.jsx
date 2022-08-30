import "./registro.scss";

//importamos componentes de rendrizado condicional

import RegistroMoral from "../../components/registropmoral/registropmoral";
import RegistroFisica from "../../components/registofisica/registrofisica";
//importamos servicios de fetch
import { createNewUser, generateConfig } from "../../services/CreateNewUser";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Button from "react-bootstrap/Button";

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
    // <<<<<<< HEAD
    //             </section>
    //           </div>
    //         </div>
    //       </div>
    // =======
    //               <div class="mb-4">
    //                 <label for="correo">
    //                   <i class="bi bi-envelope-fill"></i> Correo
    //                 </label>
    //                 <input
    //                   type="email"
    //                   class="form-control"
    //                   name="correo"
    //                   id="correo"
    //                   placeholder="ej: aaronenciso@gmail.com"
    //                   required
    //                 ></input>
    //                 <div class="correo text"></div>
    //               </div>
    //               <div>
    //                 <label for="Password">
    //                   {" "}
    //                   <i class="bi bi-person-fill"></i> Contraseña
    //                 </label>
    //                 <input
    //                   type="password"
    //                   class="form-control"
    //                   required
    //                 ></input>
    //                 <div class="nombre text "></div>
    //               </div>
    //               <div class="mb-4">
    //                 <label for="telefono">
    //                   <i class="bi bi-phone-fill"></i> Teléfono
    //                 </label>
    //                 <input
    //                   type="cel"
    //                   class="form-control"
    //                   name="telefono"
    //                   id="telefono"
    //                   placeholder="ej: 6691008819"
    //                   required
    //                 ></input>
    //                 <div class="telefono text"></div>
    //               </div>
    //               <div>
    //                 <label for="tipo">
    //                   {" "}
    //                   <i class="bi bi-briefcase-fill"></i> Tipo de negocio
    //                 </label>
    //                 <input
    //                   type="text"
    //                   class="form-control"
    //                   name="tipo"
    //                   id="tipo"
    //                   placeholder="ej: Tienda abarrotes"
    //                   required
    //                 ></input>
    //                 <div class="tipo text "></div>
    //               </div>

    //               <div class="mb-4  ">
    //                 <label for="genero">
    //                   <i class="bi bi-gender-ambiguous"></i> Género:
    //                 </label>
    //                 <input
    //                   type="radio"
    //                   class="form-check-input "
    //                   name="genero"
    //                   value="masculino"
    //                 ></input>{" "}
    //                 Masculino
    //                 <input
    //                   type="radio"
    //                   class="form-check-input"
    //                   name="genero"
    //                   value="femenino"
    //                 ></input>{" "}
    //                 Femenino
    //                 <div class="genero text"></div>
    //               </div>
    //               <div>
    //                 <label for="nombre">
    //                   {" "}
    //                   <i class="bi bi-person-fill"></i> Nombre de Usuario
    //                 </label>
    //                 <input
    //                   type="text"
    //                   class="form-control"
    //                   name="nombre"
    //                   id="nombre"
    //                   placeholder="ej: AaronKing21"
    //                   required
    //                 ></input>
    //                 <div class="nombre text "></div>
    //               </div>
    //               <br></br>
    //               <div class="mb-2">
    //               <Button variant="success">Registrarte</Button>{' '}
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </section>
    //       <section>
    //         <div className="row">
    //           <Footer />
    //         </div>
    //       </section>

    // </div>
  );
}
