const profile = {
  id: 1,
  name: "Deva Yadav",
  email: "deva@example.com",
  phone: "9876543210",
  college: "BIT Durg",
  branch: "MCA",
  address: "Bhilai, Chhattisgarh",
  image: "https://i.pravatar.cc/300?img=12",

  attendance: 92,
  subscription: "Premium",
  mealsTaken: 84,
  notifications: 7,

  memberSince: "July 2026",
  status: "Active",
};

export const getProfile = () => {
  return profile;
};

export const updateProfile = (updatedProfile) => {
  Object.assign(profile, updatedProfile);

  return {
    success: true,
    message: "Profile updated successfully.",
  };
};

export const changePassword = () => {
  return {
    success: true,
    message: "Password changed successfully.",
  };
};