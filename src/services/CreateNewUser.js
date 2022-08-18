const generateConfig = (body) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
