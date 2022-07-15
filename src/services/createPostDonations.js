const generateconfig = (body) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "Applications/JSON",
    },
    body: JSON.stringify(body),
  };
};

export const createDonations = async (body) => {
  const requestConfig = generateconfig(body);
  const response = await fetch(
    "mongodb+srv://foodlink:qu4m0AzeUd5NhzKZ@cluster0.pymtweu.mongodb.net/test/.json",
    requestConfig
  );
  const newDonation = response.json();
  return newDonation;
};
