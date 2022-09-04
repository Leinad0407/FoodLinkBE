export const PatchPerson = async (id, newStatus) => {
  await fetch(`http://localhost:8080/profile/bookedDonations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: `${newStatus}`,
    }),
  });
};

export const BookDon = async (id, newStatus) => {
  await fetch(`http://localhost:8080/donations/detail/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: `${newStatus}`,
    }),
  });
};
