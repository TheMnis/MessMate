const profileData = {
  id: 1,
  ownerName: "Deva Yadav",
  messName: "MessMate",
  email: "deva@example.com",
  phone: "9876543210",
  address: "Durg, Chhattisgarh",
  image:
    "https://ui-avatars.com/api/?name=Deva+Yadav&background=16a34a&color=fff",
};

export const getProfile = () => {
  return profileData;
};

export const updateProfile = (updatedData) => {
  Object.assign(profileData, updatedData);
  return profileData;
};
