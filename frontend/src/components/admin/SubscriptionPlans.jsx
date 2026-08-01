import { motion } from "framer-motion";
import {
  FaCrown,
  FaEdit,
  FaTrash,
  FaUsers,
  FaCheck,
  FaPlus,
} from "react-icons/fa";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "₹499",
    duration: "Monthly",
    subscribers: 386,
    students: "100 Students",
    features: [
      "Mess Management",
      "Attendance Tracking",
      "Basic Reports",
    ],
    status: "Active",
    popular: false,
  },
  {
    id: 2,
    name: "Premium Plan",
    price: "₹999",
    duration: "Monthly",
    subscribers: 684,
    students: "500 Students",
    features: [
      "Advanced Analytics",
      "Payment Management",
      "Inventory System",
      "Priority Support",
    ],
    status: "Active",
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise Plan",
    price: "Custom",
    duration: "Yearly",
    subscribers: 178,
    students: "Unlimited Students",
    features: [
      "Complete Platform Access",
      "Custom Reports",
      "Dedicated Support",
    ],
    status: "Active",
    popular: false,
  },
];


function SubscriptionPlans() {

  return (
    <section
      className="rounded-3xl p-6"
      style={{
        background:
          "var(--color-surface)",
        border:
          "1px solid var(--color-border)",
        boxShadow:
          "var(--shadow-lg)",
      }}
    >

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2
            className="text-3xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            Subscription Plans
          </h2>


          <p
            className="mt-2"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Create and manage plans available for mess owners.
          </p>

        </div>



        <button
          className="flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold"
          style={{
            background:
              "var(--gradient-primary)",
            color:
              "var(--color-text-inverse)",
          }}
        >

          <FaPlus />

          Add New Plan

        </button>


      </div>




      <div className="grid gap-6 xl:grid-cols-3">


        {plans.map((plan) => (

          <motion.div
            key={plan.id}
            whileHover={{
              y: -6,
            }}
            className="relative rounded-3xl p-6"
            style={{
              background:
                "var(--color-background)",
              border:
                "1px solid var(--color-border)",
            }}
          >


            {plan.popular && (

              <div
                className="absolute right-5 top-5 rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background:
                    "var(--color-warning-subtle)",
                  color:
                    "var(--color-warning)",
                }}
              >
                Most Popular
              </div>

            )}



            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
              style={{
                background:
                  "var(--color-primary-subtle)",
                color:
                  "var(--color-primary)",
              }}
            >
              <FaCrown />
            </div>



            <h3
              className="mt-6 text-2xl font-bold"
              style={{
                color:
                  "var(--color-text-primary)",
              }}
            >
              {plan.name}
            </h3>



            <div className="mt-4 flex items-end gap-2">

              <h2
                className="text-4xl font-bold"
                style={{
                  color:
                    "var(--color-primary)",
                }}
              >
                {plan.price}
              </h2>


              <span
                style={{
                  color:
                    "var(--color-text-secondary)",
                }}
              >
                /{plan.duration}
              </span>

            </div>




            <div
              className="mt-5 flex items-center gap-3 rounded-2xl p-4"
              style={{
                background:
                  "var(--color-surface)",
              }}
            >

              <FaUsers />

              <span>
                {plan.subscribers} Subscribers
              </span>

            </div>




            <div className="mt-6 space-y-3">

              {plan.features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <FaCheck
                    style={{
                      color:
                        "var(--color-success)",
                    }}
                  />

                  <span>
                    {feature}
                  </span>

                </div>

              ))}

            </div>




            <div className="mt-6 flex gap-3">


              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 font-semibold"
                style={{
                  background:
                    "var(--color-primary-subtle)",
                  color:
                    "var(--color-primary)",
                }}
              >

                <FaEdit />

                Edit

              </button>



              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 font-semibold"
                style={{
                  background:
                    "var(--color-danger-subtle)",
                  color:
                    "var(--color-danger)",
                }}
              >

                <FaTrash />

                Disable

              </button>


            </div>


          </motion.div>

        ))}


      </div>


    </section>
  );
}

export default SubscriptionPlans;