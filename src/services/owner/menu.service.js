const menuData = [
  {
    id: 1,
    day: "Monday",
    breakfast: "Poha & Tea",
    lunch: "Rice, Dal, Paneer",
    dinner: "Roti, Mix Veg",
  },
  {
    id: 2,
    day: "Tuesday",
    breakfast: "Upma & Tea",
    lunch: "Jeera Rice, Rajma",
    dinner: "Roti, Aloo Gobhi",
  },
  {
    id: 3,
    day: "Wednesday",
    breakfast: "Paratha & Curd",
    lunch: "Rice, Chole",
    dinner: "Roti, Bhindi",
  },
  {
    id: 4,
    day: "Thursday",
    breakfast: "Idli & Sambar",
    lunch: "Veg Biryani",
    dinner: "Dal Fry & Rice",
  },
  {
    id: 5,
    day: "Friday",
    breakfast: "Bread Omelette",
    lunch: "Rice, Kadhi",
    dinner: "Roti, Soyabean Curry",
  },
  {
    id: 6,
    day: "Saturday",
    breakfast: "Sandwich",
    lunch: "Pulao, Raita",
    dinner: "Paneer Butter Masala",
  },
  {
    id: 7,
    day: "Sunday",
    breakfast: "Poori Sabji",
    lunch: "Special Thali",
    dinner: "Fried Rice",
  },
];

export const getWeeklyMenu = () => {
  return menuData;
};

export const getMenuById = (id) => {
  return menuData.find((meal) => meal.id === id);
};

export const addMeal = (meal) => {
  menuData.push({
    id: Date.now(),
    ...meal,
  });

  return menuData;
};

export const updateMeal = (id, updatedMeal) => {
  const index = menuData.findIndex((meal) => meal.id === id);

  if (index !== -1) {
    menuData[index] = {
      ...menuData[index],
      ...updatedMeal,
    };
  }

  return menuData;
};

export const deleteMeal = (id) => {
  const index = menuData.findIndex((meal) => meal.id === id);

  if (index !== -1) {
    menuData.splice(index, 1);
  }

  return menuData;
};