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
    "http://localhost:8080/donations",
    requestConfig
  );
  const newDonation = response.json();
  return newDonation;
};
