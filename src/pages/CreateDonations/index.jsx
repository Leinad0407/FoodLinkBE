import { useState } from "react";
import "../CreateDonations/CreateDonations.scss";
import { postDonation } from "../../services/createPostDonations";
import Form from "react-bootstrap/Form";
import { create as createPost } from "../../services/createPostDonations";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import moment from "moment";

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
  const [recommendations, setRecommendations] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Jalando Ando");
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
      recommendations,
    };
    console.log(data);

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

  return;
}
