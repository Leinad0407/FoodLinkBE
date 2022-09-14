import { useState } from "react";
import "../CreateDonations/CreateDonations.scss";
import UploadImage from "../UploadImage/uploadImage";
import { create as createPost } from "../../services/createPostDonations";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import moment from "moment";

import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function CreateDonations() {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [food, setFood] = useState("");
  const [foodPhoto, setFoodPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tags, setTags] = useState("");
  const [postedDate, setPostedDate] = useState("");
  const [expDate, setExpDate] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodCondition, setFoodCondition] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus = "active";

    const data = {
      id,
      userName,
      food,
      foodPhoto,
      address,
      phoneNumber,
      tags,
      postedDate,
      expDate,
      foodDescription,
      foodCondition,
      status,
    };

    try {
      await createPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Recomendations
  const recomendaciones = (food) => {
    if (
      food === "Ensalada (Ensaladas de huevo, pollo, jamón, atún y macarrones)"
    ) {
      const recomendacion = "Refrigere máximo durante 3 días";
      return recomendacion;
    } else if (food === "Hot dogs (paquete abierto)") {
      const recomendacion = "Refrigerar durante 3 días";
      return recomendacion;
    } else if (food === "Hot dogs (paquete abierto)") {
      const recomendacion = "Refrigerar máximo durante 1 semana";
      return recomendacion;
    } else if (food === "Hot dogs (paquete cerrado)") {
      const recomendacion = "Refrigere máximo durante 2 semanas";
      return recomendacion;
    } else if (food === "Fiambre (Paquete abierto o en lonchas)") {
      const recomendacion = "Refrigere máximo durante 4 días";
      return recomendacion;
    } else if (food === "Fiambre (Paquete sin abrir)") {
      const recomendacion = "Refrigere máximo durante 2 semanas";
      return recomendacion;
    } else if (food === "Tocino y embutidos(Tocino)") {
      const recomendacion = "Refrigere máximo durante una semana";
      return recomendacion;
    } else if (
      food ===
      "Tocino y embutidos (Embutidos crudos, de pollo, pavo, cerdo ores )"
    ) {
      const recomendacion = "Refrigere máximo durante una semana";
      return recomendacion;
    } else if (
      food ===
      "Tocino y embutidos(Embutidos crudos, de pollo, pavo, cerdo, o res)"
    ) {
      const recomendacion = "Refrigere máximo durante 2 días";
      return recomendacion;
    } else if (
      food ===
      "Tocino y embutidos(Embutidos bien cocidos, de pollo, pavo, cerdo o res )"
    ) {
      const recomendacion = "Refrigere máximo durante 1 semana";
      return recomendacion;
    } else if (
      food ===
      "Hamburguesas, carne molida y carne aves de corral molida(Hamburguesa, carne vacuna molida, pavo, pollo y otras aves de corral, ternera, cerdo, cordero y sus combinaciones )"
    ) {
      const recomendacion = "Refrigere máximo durante 2 días";
      return recomendacion;
    } else if (
      food === "Tocino y embutidos(Salchichas que se compran congeladas )"
    ) {
      const recomendacion =
        "Después de cocinarlas el tiempo para consumirse son de máximo 4 días";
      return recomendacion;
    } else if (
      food ===
      " Carne fresca de res, ternera, cordero y cerdo(Filetes, Chuleta, Carnes asadas, Fresco, sin curar, cocido)"
    ) {
      const recomendacion = "Refrigerese máximo durante 4 días";
      return recomendacion;
    } else if (food === "Jamón (Fresco, sin curar, crudo)") {
      const recomendacion = "Refrigere máximo durante 4 días";
      return recomendacion;
    } else if (
      food === "Jamón(Curado, cocinadas antes de consumir, sin cocinar)"
    ) {
      const recomendacion = "Refrigere máximo durante 6 días";
      return recomendacion;
    } else if (
      food === "Jamón(Bien cocido, sellado al vacío en fábrica, sin abrir)"
    ) {
      const recomendacion = "Refrigere máximo durante 2 semanas";
      return recomendacion;
    } else if (food === "Jamón(Cocido, envuelto en la tienda, entero)") {
      const recomendacion = "Refrigere máximo 1 semana";
      return recomendacion;
    } else if (
      food ===
      "Jamón(Cocido, envuelto en la tienda, cortado en lonchas, a la mitad o en espiral )"
    ) {
      const recomendacion = "Refrigere máximo durante 4 días";
      return recomendacion;
    } else if (food === "Jamón(Jamón de Virginia, cocido )") {
      const recomendacion = "Refrigere máximo durante 1 semanan";
      return recomendacion;
    } else if (food === "Jamón(Enlatado, con etiqueta sin abrir)") {
      const recomendacion = "Refrigre máximo durante 9 meses";
      return recomendacion;
    } else if (food === "Jamón(Enlatado, no perecedero, abierto)") {
      const recomendacion = "Refrigere máximo durante 4 días";
      return recomendacion;
    } else if (
      food ===
      " Jamón(Jamón Prosciutto, Parma o Serrano, tipo italiano o español seco, cortado)"
    ) {
      const recomendacion = "Refrigere máximo de 2 a 3 meses";
      return recomendacion;
    } else if (food === "Aves de corral frescas(Pollo o pavo, entero)") {
      const recomendacion = "Refrigere máximo durante 2 días";
      return recomendacion;
    } else if (food === "Aves de corral frescas(Pollo o pavo, en trozos)") {
      const recomendacion = "Refrigere máximo durante 2 días";
      return recomendacion;
    } else if (
      food ===
      "Pescados de aleta(Pescado graso (pescado azul, bagre, caballa, mújol, salmón, atún, etc.))"
    ) {
      const recomendacion = "Refrigere máximo durante 3 días";
      return recomendacion;
    } else if (
      food ===
      "Pescados de aleta (Pescado blanco (bacalao, platija, abadejo, halibut, lenguado, etc.))"
    ) {
      const recomendacion = "Congele máximo durante 7 meses";
      return recomendacion;
    } else if (
      food ===
      "Pescados de aleta (Pescado blanco (carbonero, perca, pez roca, trucha marina))"
    ) {
      const recomendacion = "Refrigere máximo 5 meses";
      return recomendacion;
    } else if (food === "Mariscos(Carne de cangrejo fresco)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (
      food === "Mariscos(Almejas, mejillones, ostras y vieiras vivas)"
    ) {
      const recomendacion = "Refrigere máximo 8 días";
      return recomendacion;
    } else if (food === "Mariscos(Camarones, cangrejo de río)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (
      food === "Mariscos(Almejas, mejillones, ostras y vieiras abiertas)"
    ) {
      const recomendacion = "Refrigere máximo 8 días";
      return recomendacion;
    } else if (food === "Mariscos(Calamar)") {
      const recomendacion = "Refrigere máximo 2 días";
      return recomendacion;
    } else if (food === "Huevos(Huevos crudos con cáscara)") {
      const recomendacion = "Refrigere máximo 4 días";
      return recomendacion;
    } else if (food === "Huevos(Claras y yemas de huevo crudas)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (food === "Huevos(Huevos duros)") {
      const recomendacion = "Refrigere máximo durante 1 semana";
      return recomendacion;
    } else if (food === "Huevos(Sustitutos de huevo, líquidos, sin abrir)") {
      const recomendacion = "Refrigere máximo durante 1 semana";
      return recomendacion;
    } else if (food === "Huevos(Sustitutos de huevo, líquidos, abiertos)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (food === "Huevos(Sustitutos del huevo, congelados, sin abrir)") {
      const recomendacion = "Refrigere máximo una semana";
      return recomendacion;
    } else if (food === "Huevos(Sustitutos del huevo, congelados, abiertos)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (food === "Huevos(Guisados con huevos)") {
      const recomendacion = "Refrigere máximo 4 días";
      return recomendacion;
    } else if (food === "Huevos(Ponche de huevo, comercial)") {
      const recomendacion = "Refrigere máximo 4 días";
      return recomendacion;
    } else if (food === "Huevos(Ponche de huevo, casero)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (food === "Huevos(Tartas: calabaza o pacana)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (food === "Huevos(Tartas: natilla y chifón)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (food === "Huevos(Quiche con relleno)") {
      const recomendacion = "Refrigere máximo 4 días";
      return recomendacion;
    } else if (food === "Sopas y guisados(Con verduras o carne agregadas)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (food === "Sobras (Carnes rojas o blancas cocidas)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (food === "Sobras (Croquetas o medallones de pollo)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    } else if (food === "Sobras (Pizza)") {
      const recomendacion = "Refrigere máximo 3 días";
      return recomendacion;
    }
  };
  recomendaciones(food);
  const recomendation = recomendaciones(food);
  console.log(recomendation);

  //Expiration Dates
  const expirationDates = (food) => {
    if (
      food === "Ensalada (Ensaladas de huevo, pollo, jamón, atún y macarrones)"
    ) {
      const expirationDate = "Refrigere máximo durante 3 días";
      return expirationDate;
    } else if (food === "Hot dogs (paquete abierto)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Hot dogs (paquete abierto)") {
      const expirationDate = 7;
      return expirationDate;
    } else if (food === "Hot dogs (paquete cerrado)") {
      const expirationDate = 14;
      return expirationDate;
    } else if (food === "Fiambre (Paquete abierto o en lonchas)") {
      const expirationDate = 4;
      return expirationDate;
    } else if (food === "Fiambre (Paquete sin abrir)") {
      const expirationDate = 14;
      return expirationDate;
    } else if (food === "Tocino y embutidos(Tocino)") {
      const expirationDate = 7;
      return expirationDate;
    } else if (
      food ===
      "Tocino y embutidos (Embutidos crudos, de pollo, pavo, cerdo ores )"
    ) {
      const expirationDate = 7;
      return expirationDate;
    } else if (
      food ===
      "Tocino y embutidos(Embutidos crudos, de pollo, pavo, cerdo, o res)"
    ) {
      const expirationDate = 2;
      return expirationDate;
    } else if (
      food ===
      "Tocino y embutidos(Embutidos bien cocidos, de pollo, pavo, cerdo o res )"
    ) {
      const expirationDate = 7;
      return expirationDate;
    } else if (
      food ===
      "Hamburguesas, carne molida y carne aves de corral molida(Hamburguesa, carne vacuna molida, pavo, pollo y otras aves de corral, ternera, cerdo, cordero y sus combinaciones )"
    ) {
      const expirationDate = 2;
      return expirationDate;
    } else if (
      food === "Tocino y embutidos(Salchichas que se compran congeladas )"
    ) {
      const expirationDate =
        "Después de cocinarlas el tiempo para consumirse son de máximo 4 días";
      return expirationDate;
    } else if (
      food ===
      " Carne fresca de res, ternera, cordero y cerdo(Filetes, Chuleta, Carnes asadas, Fresco, sin curar, cocido)"
    ) {
      const expirationDate = 4;
      return expirationDate;
    } else if (food === "Jamón (Fresco, sin curar, crudo)") {
      const expirationDate = 4;
      return expirationDate;
    } else if (
      food === "Jamón(Curado, cocinadas antes de consumir, sin cocinar)"
    ) {
      const expirationDate = 6;
      return expirationDate;
    } else if (
      food === "Jamón(Bien cocido, sellado al vacío en fábrica, sin abrir)"
    ) {
      const expirationDate = 14;
      return expirationDate;
    } else if (food === "Jamón(Cocido, envuelto en la tienda, entero)") {
      const expirationDate = 7;
      return expirationDate;
    } else if (
      food ===
      "Jamón(Cocido, envuelto en la tienda, cortado en lonchas, a la mitad o en espiral )"
    ) {
      const expirationDate = 4;
      return expirationDate;
    } else if (food === "Jamón(Jamón de Virginia, cocido )") {
      const expirationDate = 14;
      return expirationDate;
    } else if (food === "Jamón(Enlatado, con etiqueta sin abrir)") {
      const expirationDate = 270;
      return expirationDate;
    } else if (food === "Jamón(Enlatado, no perecedero, abierto)") {
      const expirationDate = 4;
      return expirationDate;
    } else if (
      food ===
      " Jamón(Jamón Prosciutto, Parma o Serrano, tipo italiano o español seco, cortado)"
    ) {
      const expirationDate = 60;
      return expirationDate;
    } else if (food === "Aves de corral frescas(Pollo o pavo, entero)") {
      const expirationDate = 2;
      return expirationDate;
    } else if (food === "Aves de corral frescas(Pollo o pavo, en trozos)") {
      const expirationDate = 2;
      return expirationDate;
    } else if (
      food ===
      "Pescados de aleta(Pescado graso (pescado azul, bagre, caballa, mújol, salmón, atún, etc.))"
    ) {
      const expirationDate = 3;
      return expirationDate;
    } else if (
      food ===
      "Pescados de aleta (Pescado blanco (bacalao, platija, abadejo, halibut, lenguado, etc.))"
    ) {
      const expirationDate = 7;
      return expirationDate;
    } else if (
      food ===
      "Pescados de aleta (Pescado blanco (carbonero, perca, pez roca, trucha marina))"
    ) {
      const expirationDate = 150;
      return expirationDate;
    } else if (food === "Mariscos(Carne de cangrejo fresco)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (
      food === "Mariscos(Almejas, mejillones, ostras y vieiras vivas)"
    ) {
      const expirationDate = 8;
      return expirationDate;
    } else if (food === "Mariscos(Camarones, cangrejo de río)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (
      food === "Mariscos(Almejas, mejillones, ostras y vieiras abiertas)"
    ) {
      const expirationDate = 8;
      return expirationDate;
    } else if (food === "Mariscos(Calamar)") {
      const expirationDate = 2;
      return expirationDate;
    } else if (food === "Huevos(Huevos crudos con cáscara)") {
      const expirationDate = 4;
      return expirationDate;
    } else if (food === "Huevos(Claras y yemas de huevo crudas)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Huevos(Huevos duros)") {
      const expirationDate = 7;
      return expirationDate;
    } else if (food === "Huevos(Sustitutos de huevo, líquidos, sin abrir)") {
      const expirationDate = 7;
      return expirationDate;
    } else if (food === "Huevos(Sustitutos de huevo, líquidos, abiertos)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Huevos(Sustitutos del huevo, congelados, sin abrir)") {
      const expirationDate = 7;
      return expirationDate;
    } else if (food === "Huevos(Sustitutos del huevo, congelados, abiertos)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Huevos(Guisados con huevos)") {
      const expirationDate = 4;
      return expirationDate;
    } else if (food === "Huevos(Ponche de huevo, comercial)") {
      const expirationDate = 4;
      return expirationDate;
    } else if (food === "Huevos(Ponche de huevo, casero)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Huevos(Tartas: calabaza o pacana)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Huevos(Tartas: natilla y chifón)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Huevos(Quiche con relleno)") {
      const expirationDate = 4;
      return expirationDate;
    } else if (food === "Sopas y guisados(Con verduras o carne agregadas)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Sobras (Carnes rojas o blancas cocidas)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Sobras (Croquetas o medallones de pollo)") {
      const expirationDate = 3;
      return expirationDate;
    } else if (food === "Sobras (Pizza)") {
      const expirationDate = 3;
      return expirationDate;
    }
  };
  expirationDates(food);
  const expiration = expirationDates(food);

  console.log(expiration);

  const handleChangeDate = ({ target: { value } }, from) => {
    let newDate;
    if (from === "actualDate") {
      newDate = moment().add(expiration, "days").calendar();
      setPostedDate(value);
      setExpDate(newDate);
    } else if (from === "expireDate") {
      newDate = moment().add(expiration, "days").calendar();
      setPostedDate(value);
      setExpDate(newDate);
    }
  };
  console.log(expDate);
  //RRD
  const navigate = useNavigate();

  return (
    <div className="masterContainer container">
      <div>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/">Página principal</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/profileEditDonors">Editar Perfil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/profile/donations">Ir a tus donaciones</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <img
        className="logoInMain"
        src="https://pbs.twimg.com/media/FX_2fGBWAAAON7X?format=png&name=240x240"
        alt="logo"
      />
      <div>
        <span>
          <h1 className="boldTitle">
            Crea una donación mediante el siguiente formulario
          </h1>
        </span>
      </div>
      <div className="postedContainer">
        <div className="formContainer">
          <Form className="mb-3" onSubmit={handleSubmit}>
            <div className="infoUser">
              <InputGroup
                className="mb-3"
                id="inputGroup-sizing-default"
                value={id}
                onChange={(e) => setId(e.target.value)}
              >
                <InputGroup.Text>ID</InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Escribe un id"
                />
              </InputGroup>

              <InputGroup
                className="mb-3"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              >
                <InputGroup.Text>Nombre del donador</InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Escribe tu nombre"
                />
              </InputGroup>
              <InputGroup
                className="mb-3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                <InputGroup.Text>Dirección</InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Escribe la ubicación del alimento a donar"
                />
              </InputGroup>
              <InputGroup
                className="mb-3"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              >
                <InputGroup.Text>Teléfono</InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Escribe el número telefónico de contacto"
                />
              </InputGroup>
            </div>
            <div className="mb-3">
              <InputGroup
                className="mb-3"
                value={food}
                onChange={(e) => setFood(e.target.value)}
              >
                <InputGroup.Text>
                  Selecciona una categoría
                  <Form.Select>
                    <option>
                      Ensalada (Ensaladas de huevo, pollo, jamón, atún y
                      macarrones)
                    </option>
                    <option>Hot dogs (paquete abierto)</option>
                    <option>Hot dogs (paquete cerrado)</option>
                    <option>Fiambre (Paquete abierto o en lonchas)</option>
                    <option>Fiambre (Paquete sin abrir)</option>
                    <option>Tocino y embutidos(Tocino)</option>
                    <option>
                      Tocino y embutidos (Embutidos crudos, de pollo, pavo,
                      cerdo o res )
                    </option>
                    <option>
                      Tocino y embutidos(Embutidos bien cocidos, de pollo, pavo,
                      cerdo o res )
                    </option>
                    <option>
                      Tocino y embutidos(Salchichas que se compran congeladas )
                    </option>
                    <option>
                      Hamburguesas, carne molida y carne aves de corral
                      molida(Hamburguesa, carne vacuna molida, pavo, pollo y
                      otras aves de corral, ternera, cerdo, cordero y sus
                      combinaciones )
                    </option>
                    <option>
                      Carne fresca de res, ternera, cordero y cerdo(Filetes,
                      Chuleta, Carnes asadas, Fresco, sin curar, cocido)
                    </option>
                    <option>Jamón (Fresco, sin curar, crudo)</option>
                    <option>
                      Jamón(Curado, cocinadas antes de consumir, sin cocinar)
                    </option>
                    <option>
                      Jamón(Bien cocido, sellado al vacío en fábrica, sin abrir)
                    </option>
                    <option>
                      Jamón(Cocido, envuelto en la tienda, entero)
                    </option>
                    <option>
                      Jamón(Cocido, envuelto en la tienda, cortado en lonchas, a
                      la mitad o en espiral )
                    </option>
                    <option>Jamón(Jamón de Virginia, cocido )</option>
                    <option>Jamón(Enlatado, con etiqueta sin abrir)</option>
                    <option>Jamón(Enlatado, no perecedero, abierto)</option>
                    <option>
                      Jamón(Jamón Prosciutto, Parma o Serrano, tipo italiano o
                      español seco, cortado)
                    </option>
                    <option>
                      Aves de corral frescas(Pollo o pavo, entero)
                    </option>
                    <option>
                      Aves de corral frescas(Pollo o pavo, en trozos)
                    </option>
                    <option>
                      Pescados de aleta(Pescado graso (pescado azul, bagre,
                      caballa, mújol, salmón, atún, etc.))
                    </option>
                    <option>
                      Pescados de aleta (Pescado blanco (bacalao, platija,
                      abadejo, halibut, lenguado, etc.))
                    </option>
                    <option>
                      Pescados de aleta (Pescado blanco (carbonero, perca, pez
                      roca, trucha marina))
                    </option>
                    <option>Mariscos(Carne de cangrejo fresco)</option>
                    <option>Mariscos(Langosta fresca )</option>
                    <option>Mariscos(Cangrejo, langosta viva)</option>
                    <option>
                      Mariscos(Almejas, mejillones, ostras y vieiras vivas)
                    </option>
                    <option>Mariscos(Camarones, cangrejo de río)</option>
                    <option>
                      Mariscos(Almejas, mejillones, ostras y vieiras abiertas)
                    </option>
                    <option>Mariscos(Calamar)</option>
                    <option>Huevos(Huevos crudos con cáscara)</option>
                    <option>Huevos(Claras y yemas de huevo crudas)</option>
                    <option>
                      Huevos(Huevo crudo congelado con cáscara por accidente)
                    </option>
                    <option>Huevos(Huevos duros)</option>
                    <option>
                      Huevos(Sustitutos de huevo, líquidos, sin abrir)
                    </option>
                    <option>
                      Huevos(Sustitutos de huevo, líquidos, abiertos)
                    </option>
                    <option>
                      Huevos(Sustitutos del huevo, congelados, sin abrir)
                    </option>
                    <option>
                      Huevos(Sustitutos del huevo, congelados, abiertos)
                    </option>
                    <option>Huevos(Guisados con huevos)</option>
                    <option>Huevos(Ponche de huevo, comercial)</option>
                    <option>Huevos(Ponche de huevo, casero)</option>
                    <option>Huevos(Tartas: calabaza o pacana)</option>
                    <option>Huevos(Tartas: natilla y chifón)</option>
                    <option>Huevos(Quiche con relleno)</option>
                    <option>
                      Sopas y guisados(Con verduras o carne agregadas)
                    </option>
                    <option>Sobras (Carnes rojas o blancas cocidas)</option>
                    <option>Sobras (Croquetas o medallones de pollo)</option>
                    <option>Sobras (Pizza)</option>
                  </Form.Select>
                </InputGroup.Text>
              </InputGroup>
              {/* <InputGroup
                value={foodPhoto}
                onChange={(e) => setFoodPhoto(e.target.value)}
              >
                <UploadImage></UploadImage>
              </InputGroup> */}

              <InputGroup
                className="mb-3"
                value={postedDate}
                onChange={(e) => handleChangeDate(e, "actualDate")}
              >
                <InputGroup.Text>
                  Fecha de preparación del alimento
                </InputGroup.Text>
                <Form.Control type="date" />
              </InputGroup>

              <p
                className="mb-3"
                value={expDate}
                onChange={(e) => handleChangeDate(e, "expireDate")}
              >
                Fecha de expiración: {expDate}
              </p>
              <InputGroup
                className="mb-3"
                value={foodDescription}
                onChange={(e) => setFoodDescription(e.target.value)}
              >
                <InputGroup.Text>Descripción del alimento</InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="¿Qué alimento es?"
                />
              </InputGroup>
              <InputGroup
                className="mb-3"
                value={foodCondition}
                onChange={(e) => setFoodCondition(e.target.value)}
              >
                <InputGroup.Text>Condición del alimento</InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="La comida es nueva o no es nueva?"
                />
              </InputGroup>
            </div>
            <div className="infoUser">
              <InputGroup
                className="mb-3"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              >
                <InputGroup.Text>#HashTag</InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Ejemplo: #Deliciosa, #Casera"
                />
              </InputGroup>
            </div>
            <button
              className="col col-lg-2 selectButton"
              type="submit"
              size="lg"
              onClick={() => navigate(-1)}
              variant="success"
            >
              Sube tu comida
            </button>
          </Form>
        </div>
        <div className="descriptionContainer">
          <Card variant="top" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Tu donación</Card.Title>
              <Card.Text>
                <p>Name: {userName}</p>
                <p>Alimento: {food}</p>
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={foodPhoto}
                  />
                </Figure>
                <p>Direccion: {address}</p>
                <p>Número telefónico: {phoneNumber}</p>
                <p>Tags: {tags}</p>
                <p>Fecha de publicación: {postedDate}</p>
                <p>Fecha de caducidad: {expDate}</p>
                <p>Descripción del alimento: {foodDescription}</p>
                <p>Condición del alimento: {foodCondition}</p>
                <p>Recomendación: {recomendation}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
