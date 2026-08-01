import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaArrowUp,
} from "react-icons/fa";

const payments = [
  {
    id: 1,
    title: "Successful Payments",
    value: "4,826",
    amount: "₹12.8L",
    icon: <FaCheckCircle />,
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
    growth: "+18%",
  },
  {
    id: 2,
    title: "Pending Payments",
    value: "86",
    amount: "₹74,500",
    icon: <FaClock />,
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
    growth: "+4%",
  },
  {
    id: 3,
    title: "Failed Payments",
    value: "32",
    amount: "₹28,600",
    icon: <FaTimesCircle />,
    color: "var(--color-danger)",
    bg: "var(--color-danger-subtle)",
    growth: "-2%",
  },
];


function PaymentOverview() {

  return (
    <motion.section
      whileHover={{
        y: -4,
      }}
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

      <div className="flex items-center gap-4">


        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
          style={{
            background:
              "var(--color-primary-subtle)",
            color:
              "var(--color-primary)",
          }}
        >
          <FaCreditCard />
        </div>


        <div>

          <h2
            className="text-3xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            Payment Overview
          </h2>


          <p
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Subscription payment performance.
          </p>

        </div>


      </div>



      <div className="mt-8 space-y-5">


        {payments.map((item) => (

          <motion.div
            key={item.id}
            whileHover={{
              x: 5,
            }}
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background:
                "var(--color-background)",
            }}
          >

            <div className="flex items-center gap-4">


              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
                style={{
                  background:
                    item.bg,
                  color:
                    item.color,
                }}
              >
                {item.icon}
              </div>


              <div>

                <h3
                  className="font-bold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  {item.title}
                </h3>


                <p
                  className="mt-1 text-sm"
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  {item.value} transactions
                </p>


              </div>


            </div>



            <div className="text-right">


              <h3
                className="text-xl font-bold"
                style={{
                  color:
                    "var(--color-text-primary)",
                }}
              >
                {item.amount}
              </h3>


              <span
                className="mt-1 inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold"
                style={{
                  background:
                    item.growth.includes("-")
                      ? "var(--color-danger-subtle)"
                      : "var(--color-success-subtle)",
                  color:
                    item.growth.includes("-")
                      ? "var(--color-danger)"
                      : "var(--color-success)",
                }}
              >
                <FaArrowUp />

                {item.growth}

              </span>


            </div>


          </motion.div>

        ))}


      </div>



      <div
        className="mt-8 rounded-2xl p-5"
        style={{
          background:
            "var(--color-primary-subtle)",
        }}
      >

        <div className="flex items-center justify-between">

          <div>

            <h3
              className="text-xl font-bold"
              style={{
                color:
                  "var(--color-text-primary)",
              }}
            >
              Total Collection
            </h3>


            <p
              className="mt-1"
              style={{
                color:
                  "var(--color-text-secondary)",
              }}
            >
              All subscription payments received
              this month.
            </p>


          </div>


          <h2
            className="text-4xl font-bold"
            style={{
              color:
                "var(--color-primary)",
            }}
          >
            ₹12.8L
          </h2>


        </div>


      </div>


    </motion.section>
  );
}

export default PaymentOverview;