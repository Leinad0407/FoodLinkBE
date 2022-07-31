import { useState } from "react";
import "../CreateDonations/CreateDonations.scss";
import { postDonation } from "../../services/createPostDonations";
import Form from "react-bootstrap/Form";


export default function CreateDonations() {
  const [userID, setUserID] = useState("");
  const [food, setFood] = useState("");
  const [foodPhoto, setFoodPhoto] = useState("");
  const [address, setAddress] = useState("");
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
      foodPhoto,
      address,
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
          <p>Tags</p>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="tag"
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
        <button onClick={handleSubmit} type="submit">
          Confirmar Donacion
        </button>
        <div>
      </form>;
    </div>
  );
}
