import { useState } from "react";
import "../CreateDonations/CreateDonations.scss";
import { createDonations } from "../../services/createPostDonations";

export default function CreateDonations() {
  const [userID, setUserID] = useState("");
  const [food, setFood] = useState("");
  const [foodPhoto, setFoodPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postedDate, setPostedDate] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodCondition, setFoodCondition] = useState("");
  // const [amount, setAmount] = useState("");
  // const [suburb, setSuburb] = useState("");
  // const [estate, setEstate] = useState("");
  // const [street, setStreet] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  // const [numberAdress, setNumberAdress] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Jalando Ando");
    const newDonation = {
      userID,
      food,
      foodPhoto,
      address,
      phoneNumber,
      postedDate,
      foodDescription,
      foodCondition,

      // suburb,
      // estate,
      // street,
      // postalCode,
      // numberAdress,
    };

    try {
      await createDonations(newDonation);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Sube tu comida</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Tipo de comida</p>
          <input value={food} onChange={(e) => setFood(e.target.vale)} />
        </div>
        <div>
          <p>Donante</p>
          <input value={userID} onChange={(e) => setUserID(e.target.value)} />
        </div>
        <div>
          <p>Dirección URL de la foto</p>
          <input
            value={foodPhoto}
            onChange={(e) => setFoodPhoto(e.target.value)}
            placeholder="url del alimento"
            type="url"
          />
        </div>
        <div>
          <p>Ciudad</p>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Direccion"
          />
        </div>

        <div>
          <p>Telefono</p>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="5555555555"
            type="tel"
          />
        </div>
        <div>
          <input
            value={postedDate}
            onChange={(e) => setPostedDate(e.target.value)}
            placeholder="Elije la fecha"
            type="Date"
          />
        </div>
        <div>
          <input
            value={foodDescription}
            onChange={(e) => setFoodDescription(e.target.value)}
            placeholder="Realiza una descripcion"
          />
        </div>
        <div>
          <input
            value={foodCondition}
            onChange={(e) => setFoodCondition(e.target.value)}
            placeholder="New or not new"
          />
        </div>
        <button type="submit">Confirmar Donacion</button>
        {/* <div>
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
        </div> */}

        {/* <div>
          <p>Cantidad</p>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="2 personas, 500g, etc"
          />
        </div> */}

        {/* <div>
          <p>Descripcion</p>
          <input
            value={foodDescription}
            onChange={(e) => setFoodDescription(e.target.value)}
            placeholder="Realiza una pequeña descripción del alimento"
          />
        </div> */}
        {/* <div>
          <p>Direccion</p>
          <div>
        */}
        {/* <div>
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
            </div> */}
        {/* </div>
        </div> */}

        {/* <div>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control type="file" size="lg" />
          </Form.Group>
        </div> */}
      </form>
    </div>
  );
}
