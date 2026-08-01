import menuData from "../../data/menuData";

export function getAllMeals() {
  return menuData;
}

export function getMealById(id) {
  return menuData.find((meal) => meal.id === id);
}

export function getAvailableMeals() {
  return menuData.filter((meal) => meal.available);
}

export function getUnavailableMeals() {
  return menuData.filter((meal) => !meal.available);
}

export function searchMeals(searchText) {
  if (!searchText) {
    return menuData;
  }

  const query = searchText.toLowerCase();

  return menuData.filter((meal) => {
    return (
      meal.meal.toLowerCase().includes(query) ||
      meal.items.some((item) =>
        item.toLowerCase().includes(query)
      )
    );
  });
}
