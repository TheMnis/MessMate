import ownerMenuData from "../../data/ownerMenuData";

// Get complete weekly menu
export const getWeeklyMenu = () => {
  return ownerMenuData;
};

// Get menu by id
export const getMenuById = (id) => {
  return ownerMenuData.find((meal) => meal.id === id);
};

// Get menu by day
export const getMenuByDay = (day) => {
  return ownerMenuData.find((meal) => meal.day === day);
};

// Add meal
export const addMeal = (meal) => {
  ownerMenuData.push({
    id: Date.now(),
    ...meal,
  });

  return ownerMenuData;
};

// Update meal by id
export const updateMeal = (id, updatedMeal) => {
  const index = ownerMenuData.findIndex(
    (meal) => meal.id === id
  );

  if (index === -1) {
    return null;
  }

  ownerMenuData[index] = {
    ...ownerMenuData[index],
    ...updatedMeal,
  };

  return ownerMenuData[index];
};

// Update menu by day
export const updateMenuByDay = (day, updatedMenu) => {
  const index = ownerMenuData.findIndex(
    (meal) => meal.day === day
  );

  if (index === -1) {
    return null;
  }

  ownerMenuData[index] = {
    ...ownerMenuData[index],
    ...updatedMenu,
  };

  return ownerMenuData[index];
};

// Delete meal
export const deleteMeal = (id) => {
  const index = ownerMenuData.findIndex(
    (meal) => meal.id === id
  );

  if (index === -1) {
    return null;
  }

  ownerMenuData.splice(index, 1);

  return ownerMenuData;
};
