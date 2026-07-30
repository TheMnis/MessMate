function MenuSummaryCard({ icon, title, status }) {
  const isAvailable = status === "Available";

  return (
    <div className="rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 text-4xl">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-gray-800">
        {title}
      </h3>

      <span
        className={`mt-4 inline-block rounded-full px-4 py-2 text-sm font-semibold ${
          isAvailable
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

export default MenuSummaryCard;