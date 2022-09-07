export const retrieve = async (id) => {
  const response = await fetch(`http://localhost:8080/donations/${id}`);
  const donations = await response.json();
  return donations;
};
export const retrieveOrderReady = async (id) => {
  const response = await fetch(
    `http://localhost:8080/donations/detail/:id/orderReady/${id}`
  );
  const donations = await response.json();
  return donations;
};
