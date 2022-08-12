const generateConfigImg = (body) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  };
};

export const createImg = async (body) => {
  const requestConfigImg = generateConfigImg(body);
  const responseImg = await fetch(
    "http://localhost:8080/donations",
    requestConfigImg
  );
  const formdata = await responseImg.json();
  return formdata;
};
