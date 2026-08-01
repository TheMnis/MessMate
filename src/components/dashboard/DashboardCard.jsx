import { FaArrowUp } from "react-icons/fa";

function DashboardCard({
  title,
  value,
  icon,
  color = "from-[var(--color-success)] to-[var(--color-primary)]",
  change = "+12%",
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        radius-3xl
        [background:var(--color-surface)]
        elevation-md
        hover:elevation-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        p-6
      "
    >
      {/* Background Circle */}

      <div
        className="
          absolute
          -top-10
          -right-10
          w-32
          h-32
          radius-full
          [background:var(--color-success-subtle)]
          opacity-40
        "
      />

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <p className="[color:var(--color-text-muted)] text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3 [color:var(--color-text-primary)]">
            {value}
          </h2>

        </div>

        <div
          className={`
            w-16
            h-16
            radius-2xl
            bg-gradient-to-br
            ${color}
            flex
            items-center
            justify-center
            [color:var(--color-text-inverse)]
            text-2xl
            elevation-lg
          `}
        >
          {icon}
        </div>

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between mt-8">

        <div className="flex items-center gap-2 [color:var(--color-success)] font-semibold">

          <FaArrowUp />

          {change}

        </div>

        <span className="text-sm [color:var(--color-text-disabled)]">
          This Month
        </span>

      </div>

      {/* Progress */}

      <div className="mt-4">

        <div className="w-full h-2 radius-full [background:var(--color-border-strong)]">

          <div className="w-3/4 h-2 radius-full [background:var(--color-primary)]" />

        </div>

      </div>

    </div>
  );
}

export default DashboardCard;