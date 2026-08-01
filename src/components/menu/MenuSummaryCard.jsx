function MenuSummaryCard({ icon, title, status }) {
  const isAvailable = status === "Available";

  return (
    <div className="radius-3xl bg-surface p-5 elevation-md transition-all duration-300 hover:-translate-y-1 hover:elevation-xl">
      <div className="mb-4 text-4xl">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-text-primary">
        {title}
      </h3>

      <span
        className={`mt-4 inline-block radius-full px-4 py-2 text-sm font-semibold ${
          isAvailable
            ? "bg-success-subtle text-success-hover"
            : "bg-danger-subtle text-danger-hover"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

export default MenuSummaryCard;