export const uploadImage = async () => {
  const response = await fetch("http://localhost:8080/api/uploadImage/s3");
  const upload = await response.json();
  return upload;
};
