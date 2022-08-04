export const getDonations = async () => {
  const response = await fetch("http://localhost:8080/donations");
  const donations = await response.reverse().json();
  return donations;
};
