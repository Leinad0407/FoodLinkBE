export const postDonation = async (
  userID,
  food,
  foodPhoto,
  address,
  phoneNumber,
  tags,
  postedDate,
  foodDescription,
  foodCondition
) => {
  fetch("http://localhost:8080/donations", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
      userID,
      food,
      foodPhoto,
      address,
      phoneNumber,
      tags,
      postedDate,
      foodDescription,
      foodCondition,
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
