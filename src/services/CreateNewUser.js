const generateConfig = (body) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  };
};

export const createNewUser = async (body) => {
  const requestConfig = generateConfig(body);
  const response = await fetch("http://localhost:8080/registro", requestConfig);

  const data = await response.json();
  return data;
};

export const postPerson = async (
  firstName,
  lastName,
  address,
  street,
  colonia,
  numero,
  estado,
  ciudad,
  email,
  password,
  phoneNumber,
  gender,
  userType
) => {
  fetch("http://localhost:8080/registro", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      address: {
        street,
        colonia,
        numero,
        estado,
        ciudad,
      },
      email,
      password,
      phoneNumber,
      gender,
      userType,
    }),
  });
};
