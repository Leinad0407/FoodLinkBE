export const getBookedDonations = async () => {
  const response = await fetch(`http://localhost:8080/profile/bookedDonations`);
  const donations = await response.json();
  return donations;
};
