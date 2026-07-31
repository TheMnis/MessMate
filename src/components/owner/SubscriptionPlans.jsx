function SubscriptionPlans() {

  const plans = [
    {
      name: "Basic",
      price: "₹99",
    },
    {
      name: "Professional",
      price: "₹299",
      active: true,
    },
    {
      name: "Enterprise",
      price: "₹999",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">

      {plans.map((plan) => (

        <div
          key={plan.name}
          className={`rounded-2xl border-2 p-6 ${
            plan.active
              ? "border-green-600 shadow-xl"
              : "border-gray-200"
          }`}
        >

          <h2 className="text-2xl font-bold">
            {plan.name}
          </h2>

          <h1 className="text-4xl font-bold my-5">
            {plan.price}
          </h1>

          <button
            className={`w-full py-3 rounded-xl ${
              plan.active
                ? "bg-green-600 text-white"
                : "bg-gray-100"
            }`}
          >
            {plan.active
              ? "Current Plan"
              : "Upgrade"}
          </button>

        </div>

      ))}

    </div>
  );
}

export default SubscriptionPlans;