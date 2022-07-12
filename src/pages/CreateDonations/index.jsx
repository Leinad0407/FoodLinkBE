import { useState } from "react";
import "../CreateDonations/CreateDonations.scss";
import Form from "react-bootstrap/Form";

export default function CreateDonations() {
  const [foodType, setFoodType] = useState("");
  const [amount, setAmount] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [city, setCity] = useState("");
  const [suburb, setSuburb] = useState("");
  const [estate, setEstate] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [numberAdress, setNumberAdress] = useState("");
  const [donor, setDonor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <h2>Sube tu comida</h2>
      <form>
        <h3>Tipo de comida</h3>
        <div>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Food Type</Form.Label>
            <Form.Select id="disabledSelect">
              <option>Pollo</option>
              <option>Pescado</option>
              <option>Fruta</option>
              <option>Verdura</option>
            </Form.Select>
          </Form.Group>
        </div>

        <div>
          <p>Cantidad</p>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <p>Descripcion</p>
          <input
            value={foodDescription}
            onChange={(e) => setFoodDescription(e.target.value)}
          />
        </div>
        <div>
          <p>Direccion</p>
          <div>
            <div>
              <p>Ciudad</p>
              <input value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
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
            </div>
          </div>
        </div>
        <div>
          <p>Donante</p>
          <input value={donor} onChange={(e) => setDonor(e.target.value)} />
        </div>
        <div>
          <p>Telefono</p>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control type="file" size="lg" />
          </Form.Group>
        </div>
        <button type="submit">Confirmar Donacion</button>
      </form>
    </div>
  );
}
