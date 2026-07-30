import ownerMenuData from "../../data/ownerMenuData";

// Get complete weekly menu
export const getWeeklyMenu = () => {
  return ownerMenuData;
};

// Get menu by day
export const getMenuByDay = (day) => {
  return ownerMenuData.find((menu) => menu.day === day);
};

// Update menu
export const updateMenuByDay = (day, updatedMenu) => {
  const index = ownerMenuData.findIndex((menu) => menu.day === day);

  if (index === -1) {
    return null;
  }

  ownerMenuData[index] = {
    ...ownerMenuData[index],
    ...updatedMenu,
  };

  return ownerMenuData[index];
};