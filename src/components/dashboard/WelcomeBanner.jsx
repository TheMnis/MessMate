function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-8 shadow-lg mb-8">
      <h1 className="text-4xl font-bold">
        👋 Welcome Back, DEWA
      </h1>

      <p className="mt-3 text-lg text-green-100">
        Manage your meals, attendance and subscription from one place.
      </p>
    </div>
  );
}

export default WelcomeBanner;