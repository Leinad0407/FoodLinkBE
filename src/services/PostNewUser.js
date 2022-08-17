const generateConfig = (body) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  };
};

export const createNewUser = async (body) => {
  console.log(body);
  const requestConfig = generateConfig(body);
  const response = await fetch("http://localhost:8080/registro", requestConfig);
  console.log(response);
  const data = await response.json();
  return data;
};
