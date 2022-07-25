import { useState } from "react";
import "../CreateDonations/CreateDonations.scss";
import "../.././services/createPostDonations";
import { create as createPost } from "../../services/createPostDonations";

export default function CreateDonations() {
  const [userID, setUserID] = useState("");
  const [food, setFood] = useState("");
  const [foodPhoto, setFoodPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tags, setTags] = useState("");
  const [postedDate, setPostedDate] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodCondition, setFoodCondition] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Jalando Ando");
    const data = {
      userID,
      food,
      foodPhoto,
      address,
      phoneNumber,
      tags,
      postedDate,
      foodDescription,
      foodCondition,
    };
    try {
      await createPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Sube tu comida</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            placeholder="Escribe tu nombre"
          />
        </div>
        <div>
          <input
            value={food}
            onChange={(e) => setFood(e.target.value)}
            placeholder="Escribe el nombre del alimento"
          />
          <input
            value={foodPhoto}
            onChange={(e) => setFoodPhoto(e.target.value)}
            placeholder="pega la url del alimento"
            type="url"
          />
        </div>
        <div>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Escribe la ubicación del alimento a donar"
          />
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Escribe el número telefónico de contacto"
          />
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Escribe un hash tag"
          />
        </div>
        <div>
          <input
            value={postedDate}
            onChange={(e) => setPostedDate(e.target.value)}
            type="date"
          />
          <input
            value={foodDescription}
            onChange={(e) => setFoodDescription(e.target.value)}
            placeholder="Realiza una descripción del alimento"
          />
          <input
            value={foodCondition}
            onChange={(e) => setFoodCondition(e.target.value)}
            placeholder="La comida es nueva o no es nueva?"
          />
        </div>
        <button type="submit">Sube tu comida</button>
      </form>
    </div>
  );
}
