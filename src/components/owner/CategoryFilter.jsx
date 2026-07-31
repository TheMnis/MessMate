function CategoryFilter({
  value,
  onChange,
}) {

  const categories = [
    "All",
    "Grains",
    "Vegetables",
    "Dairy",
    "Spices",
    "Beverages",
    "Others",
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-3 rounded-xl border border-gray-300 bg-white outline-none focus:border-green-600"
    >

      {categories.map((category) => (

        <option
          key={category}
          value={category}
        >
          {category}
        </option>

      ))}

    </select>
  );
}

export default CategoryFilter;