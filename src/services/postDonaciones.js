export const getDonations = async () => {
  const response = await fetch("http://localhost:8080/donations");
  const donations = await response.json();
  return donations.reverse();
};
