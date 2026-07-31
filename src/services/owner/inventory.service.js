const inventoryData = [
  {
    id: 1,
    name: "Rice",
    category: "Grains",
    quantity: 250,
    unit: "KG",
    minimumStock: 100,
  },
  {
    id: 2,
    name: "Milk",
    category: "Dairy",
    quantity: 8,
    unit: "Litre",
    minimumStock: 20,
  },
  {
    id: 3,
    name: "Potato",
    category: "Vegetables",
    quantity: 80,
    unit: "KG",
    minimumStock: 30,
  },
  {
    id: 4,
    name: "Turmeric",
    category: "Spices",
    quantity: 15,
    unit: "KG",
    minimumStock: 10,
  },
];

export const getInventory = () => inventoryData;

export const addInventoryItem = (item) => {
  inventoryData.push({
    id: Date.now(),
    ...item,
  });

  return inventoryData;
};

export const updateInventoryItem = (id, updatedItem) => {
  const index = inventoryData.findIndex(
    (item) => item.id === id
  );

  if (index !== -1) {
    inventoryData[index] = {
      ...inventoryData[index],
      ...updatedItem,
    };
  }

  return inventoryData;
};

export const deleteInventoryItem = (id) => {
  const index = inventoryData.findIndex(
    (item) => item.id === id
  );

  if (index !== -1) {
    inventoryData.splice(index, 1);
  }

  return inventoryData;
};