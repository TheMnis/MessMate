import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaReceipt,
  FaDownload,
  FaCalendarAlt,
} from "react-icons/fa";

function PaymentHistory() {
  const payments = [
    {
      id: 1,
      month: "July 2026",
      amount: "₹2,500",
      date: "01 Jul 2026",
      status: "Paid",
    },
    {
      id: 2,
      month: "June 2026",
      amount: "₹2,500",
      date: "01 Jun 2026",
      status: "Paid",
    },
    {
      id: 3,
      month: "May 2026",
      amount: "₹2,500",
      date: "01 May 2026",
      status: "Paid",
    },
    {
      id: 4,
      month: "April 2026",
      amount: "₹2,500",
      date: "01 Apr 2026",
      status: "Paid",
    },
  ];

  return (
    <section
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="mb-8 flex items-center gap-4">

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background: "var(--color-primary-subtle)",
            color: "var(--color-primary)",
          }}
        >
          <FaReceipt size={28} />
        </div>

        <div>

          <h2
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Payment History
          </h2>

          <p
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            View all your previous subscription payments.
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {payments.map((payment) => (

          <motion.div
            key={payment.id}
            whileHover={{
              y: -3,
            }}
            className="flex flex-col gap-5 rounded-3xl p-6 lg:flex-row lg:items-center lg:justify-between"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >

            <div className="flex items-center gap-5">

              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  background: "var(--color-success-subtle)",
                  color: "var(--color-success)",
                }}
              >
                <FaCheckCircle />
              </div>

              <div>

                <h3
                  className="text-xl font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  {payment.month}
                </h3>

                <div
                  className="mt-2 flex items-center gap-2"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <FaCalendarAlt />

                  {payment.date}

                </div>

              </div>

            </div>

            <div className="flex items-center gap-6">

              <div className="text-right">

                <h3
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--color-success)",
                  }}
                >
                  {payment.amount}
                </h3>

                <div
                  className="mt-2 inline-flex rounded-full px-3 py-1 text-sm font-semibold"
                  style={{
                    background: "var(--color-success-subtle)",
                    color: "var(--color-success)",
                  }}
                >
                  {payment.status}
                </div>

              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-text-inverse)",
                }}
              >
                <FaDownload />

                Invoice

              </motion.button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default PaymentHistory;