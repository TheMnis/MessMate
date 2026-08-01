function MenuHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8 radius-3xl bg-gradient-to-r from-primary to-success p-8 text-text-inverse elevation-lg">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            🍽 Today's Menu
          </h1>

          <p className="mt-2 text-primary-muted">
            Fresh meals prepared for today's schedule.
          </p>
        </div>

        <div className="radius-2xl bg-surface/20 px-5 py-3 text-center backdrop-blur-sm">
          <p className="text-sm text-primary-muted">
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