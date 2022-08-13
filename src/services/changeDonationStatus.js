// export const changeStatus = async (
//   id,
//   userName,
//   food,
//   foodPhoto,
//   address,
//   phoneNumber,
//   tags,
//   postedDate,
//   expDate,
//   foodDescription,
//   foodCondition,
//   status,
// ) => {
//     fetch(`http://localhost:8080/donations${id}`, {
//     method: "PATCH",
//     headers: { "Content-Type" : "Application/JSON"},
//   },
//   body: JSON.stringify({
//     id,
//     userName,
//     food,
//     foodPhoto,
//     address,
//     phoneNumber,
//     tags,
//     postedDate,
//     expDate,
//     foodDescription,
//     foodCondition,
//     status:status,
//   }),

// };

//   const data = await response.json();
//   return data;

export const PatchPerson = async (
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
  status
) => {
  fetch(`http://localhost:8080/donations${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
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
      status: status,
    }),
  });
};
