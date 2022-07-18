import { useState } from "react";
import "../CreateDonations/CreateDonations.scss";
import { postDonation } from "../../services/createPostDonations";
import Form from "react-bootstrap/Form";

export default function CreateDonations() {
  const [userID, setUserID] = useState("");
  const [food, setFood] = useState("");
  const [mesure, setMesure] = useState("");
  const [foodPhoto, setFoodPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [estate, setEstate] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [donor, setDonor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tags, setTags] = useState([]);
  const [postedDate, setPostedDate] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodCondition, setFoodCondition] = useState("");
  const [recommendations, setRecommendations] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Jalando Ando");
    const newDonation = {
      userID,
      food,
      mesure,
      foodPhoto,
      address,
      neighborhood,
      city,
      estate,
      postalCode,
      donor,
      phoneNumber,
      tags,
      postedDate,
      foodDescription,
      foodCondition,
      recommendations,
    };
    try {
      await postDonation(newDonation);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="formDonation">
      <h2>Sube tu comida</h2>
      <form onSubmit={handleSubmit}>
        <div className="foodOption">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Tipo de comida</Form.Label>
            <Form.Select id="disabledSelect">
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Ensalada(huevo, pollo, jamón, atún o macarrones)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Hot Dogs
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Fiambre
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Tocino
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Embutidos crudos (pollo, pavo, cerdo o res)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Embutidos bien cocidos (pollo, pavo, cerdo o res)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Salchcichas
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Hamburguesas
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Carne molida(pavo, pollo, tennera, cerdo o cordero)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Carne fresca de res, ternetra, cordero o cerdo (filetes,
                chuletas, carne asada)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Jamón fresco
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Jamón cocido
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Pollo fresco (entero o en trozos)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Pescado de aleta (salmón, atún, mújol, etc)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Pescado blanco(bacalao, trucha marina, lenguado, etc)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Mariscos (cangrejo, langosta)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Mariscos (almejas, mejillones, ostras)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Mariscos (calamar)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Huevos (huevos crudos con cascara)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Huevos (Claras y yemas de huvo crudas)
              </option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="foodMesureAndDescription">
          <div>
            <p>Cantidad</p>
            <input
              value={mesure}
              onChange={(e) => setMesure(e.target.vale)}
              placeholder="1, 2 personas?"
            />
          </div>
          <div>
            <p>Descripción de la comidad</p>
            <input
              value={foodDescription}
              onChange={(e) => setFoodDescription(e.target.value)}
              placeholder="Realiza una descripcion"
            />
          </div>
        </div>
        <div className="addresInfo">
          <div>
            <p>Dirección</p>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="calle, manzana y número"
            />
          </div>
          <div className="addresInfo1">
            <p>Colonia</p>
            <input
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              placeholder="Colonia"
            />
            <p>Ciudad</p>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ciudad"
            />
          </div>
          <div className="addresInfo2">
            <p>Estado</p>
            <input
              value={estate}
              onChange={(e) => setEstate(e.target.value)}
              placeholder="Estado"
            />
            <p>Codigo postal</p>
            <input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Codigo postal"
            />
          </div>
        </div>

        <div className="personalInfo">
          <div className="donor">
            <p>Donante</p>
            <input
              value={donor}
              onChange={(e) => setDonor(e.target.value)}
              placeholder="Nombre del donante"
            />
          </div>

          <div className="telPhone">
            <p>Telefono</p>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="5555555555"
              type="tel"
            />
          </div>
          <div className="tag">
            <p>Tags</p>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="tag"
            />
          </div>
          <div className="dateFood">
            <p>Fecha de preparación del alimento</p>
            <input
              value={postedDate}
              onChange={(e) => setPostedDate(e.target.value)}
              placeholder="Elije la fecha"
              type="Date"
            />
          </div>

          <div className="condition">
            <p>Condicion en la que se encuentra la comida</p>
            <input
              value={foodCondition}
              onChange={(e) => setFoodCondition(e.target.value)}
              placeholder="Nueva o no es nueva?"
            />
          </div>

          <div className="photo">
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>
                Sube la foto del alimento en donación aquí
              </Form.Label>
              <Form.Control
                value={foodPhoto}
                onChange={(e) => setFoodPhoto(e.target.value)}
                type="file"
                size="lg"
              />
            </Form.Group>
          </div>
          <div className="recomendations">
            <p>Recomendaciones</p>
            <input
              value={recommendations}
              onChange={(e) => setRecommendations(e.target.value)}
            />
          </div>
        </div>
      </form>
      <button type="submit">Confirmar Donacion</button>
    </div>
  );
}

// const [amount, setAmount] = useState("");
// const [suburb, setSuburb] = useState("");
// const [estate, setEstate] = useState("");
// const [street, setStreet] = useState("");
// const [postalCode, setPostalCode] = useState("");
// const [numberAdress, setNumberAdress] = useState("");

// suburb,
// estate,
// street,
// postalCode,
// numberAdress,

{
  /* <div>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Tipo de comida</Form.Label>
            <Form.Select id="disabledSelect">
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Ensalada(huevo, pollo, jamón, atún o macarrones)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Hot Dogs
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Fiambre
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Tocino
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Embutidos crudos (pollo, pavo, cerdo o res)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Embutidos bien cocidos (pollo, pavo, cerdo o res)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Salchcichas
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Hamburguesas
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Carne molida(pavo, pollo, tennera, cerdo o cordero)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Carne fresca de res, ternetra, cordero o cerdo (filetes,
                chuletas, carne asada)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Jamón fresco
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Jamón cocido
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Pollo fresco (entero o en trozos)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Pescado de aleta (salmón, atún, mújol, etc)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Pescado blanco(bacalao, trucha marina, lenguado, etc)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Mariscos (cangrejo, langosta)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Mariscos (almejas, mejillones, ostras)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Mariscos (calamar)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Huevos (huevos crudos con cascara)
              </option>
              <option value={food} onChange={(e) => setFood(e.target.value)}>
                Huevos (Claras y yemas de huvo crudas)
              </option>
            </Form.Select>
          </Form.Group>
        </div> */
}

{
  /* <div>
          <p>Cantidad</p>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="2 personas, 500g, etc"
          />
        </div> */
}

{
  /* <div>
          <p>Descripcion</p>
          <input
            value={foodDescription}
            onChange={(e) => setFoodDescription(e.target.value)}
            placeholder="Realiza una pequeña descripción del alimento"
          />
        </div> */
}
{
  /* <div>
          <p>Direccion</p>
          <div>
        */
}
{
  /* <div>
              <p>Estado</p>
              <input
                value={estate}
                onChange={(e) => setEstate(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Colonia</p>
              <input
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
              />
            </div>
            <div>
              <p>Calle</p>
              <input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Numero</p>
              <input
                value={numberAdress}
                onChange={(e) => setNumberAdress(e.target.value)}
              />
            </div>
            <div>
              <p>Codigo Postal</p>
              <input
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div> */
}
{
  /* </div>
        </div> */
}

{
  /* <div>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control type="file" size="lg" />
          </Form.Group>
        </div> */
}
