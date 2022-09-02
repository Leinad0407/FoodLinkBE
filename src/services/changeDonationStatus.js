export const PatchPerson = async (id, newStatus) => {
  await fetch(`http://localhost:8080/profile/bookedDonations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // id,
      // userName,
      // food,
      // foodPhoto,
      // address,
      // phoneNumber,
      // tags,
      // postedDate,
      // expDate,
      // foodDescription,
      // foodCondition,
      status: `${newStatus}`,
    }),
  });
};
