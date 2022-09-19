export const foodImage = async () => {
  const response = await fetch("http://localhost:8080/imagesFood");
  const dataImage = response.json();
  return dataImage;
};
