function MenuHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8 radius-3xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-success)] p-8 [color:var(--color-text-inverse)] elevation-lg">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            🍽 Today's Menu
          </h1>

          <p className="mt-2 [color:var(--color-primary-muted)]">
            Fresh meals prepared for today's schedule.
          </p>
        </div>

        <div className="radius-2xl [background:color-mix(in_srgb,var(--color-surface) 20%,transparent)] px-5 py-3 text-center backdrop-blur-sm">
          <p className="text-sm [color:var(--color-primary-muted)]">
            Today
          </p>

          <p className="text-lg font-semibold">
            {today}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;