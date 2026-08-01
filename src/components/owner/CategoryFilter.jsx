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
      className="px-4 py-3 radius-xl border [border-color:var(--color-border)] [background:var(--color-surface)] outline-none focus:[border-color:var(--color-primary)]"
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