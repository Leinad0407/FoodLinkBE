export const retrieve = async (id) => {
  const response = await fetch(`http://localhost:8080/donations/${id}`);
  const donations = await response.json();
  return donations;
};
