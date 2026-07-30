function MenuHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-white shadow-lg">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            🍽 Today's Menu
          </h1>

          <p className="mt-2 text-green-100">
            Fresh meals prepared for today's schedule.
          </p>
        </div>

        <div className="rounded-2xl bg-white/20 px-5 py-3 text-center backdrop-blur-sm">
          <p className="text-sm text-green-100">
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