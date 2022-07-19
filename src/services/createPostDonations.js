export const postDonation = async (
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
  recommendations
) => {
  fetch("http://localhost:8080/donations", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
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
    }),
  });
};

// const postDonationSchema = new mongoose.Schema({
//   userID: String,
//   food: {
//     type: String,
//     required: true,
//     // default: "pasta",
//   },
//   foodPhoto: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   phoneNumber: String,
//   tags: Array,
//   postedDate: {
//     type: String,
//     required: true,
//   },
//   foodDescription: String,
//   foodCondition: String,
// });
