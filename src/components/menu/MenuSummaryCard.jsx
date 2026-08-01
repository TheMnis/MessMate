function MenuSummaryCard({ icon, title, status }) {
  const isAvailable = status === "Available";

  return (
    <div className="radius-3xl [background:var(--color-surface)] p-5 elevation-md transition-all duration-300 hover:-translate-y-1 hover:elevation-xl">
      <div className="mb-4 text-4xl">
        {icon}
      </div>

      <h3 className="text-lg font-bold [color:var(--color-text-primary)]">
        {title}
      </h3>

      <span
        className={`mt-4 inline-block radius-full px-4 py-2 text-sm font-semibold ${
          isAvailable
            ? "[background:var(--color-success-subtle)] [color:var(--color-success-hover)]"
            : "[background:var(--color-danger-subtle)] [color:var(--color-danger-hover)]"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

export default MenuSummaryCard;