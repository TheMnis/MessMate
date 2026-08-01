import {
  FaCheckCircle,
  FaDownload,
  FaFileInvoice,
} from "react-icons/fa";

const payments = [
  {
    id: 1,
    invoice: "INV-2026-001",
    date: "01 Aug 2026",
    amount: "₹999",
    plan: "Premium",
    status: "Paid",
  },
  {
    id: 2,
    invoice: "INV-2026-002",
    date: "01 Jul 2026",
    amount: "₹999",
    plan: "Premium",
    status: "Paid",
  },
  {
    id: 3,
    invoice: "INV-2026-003",
    date: "01 Jun 2026",
    amount: "₹999",
    plan: "Premium",
    status: "Paid",
  },
  {
    id: 4,
    invoice: "INV-2026-004",
    date: "01 May 2026",
    amount: "₹999",
    plan: "Premium",
    status: "Paid",
  },
];

function PaymentHistory() {
  return (
    <section
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="mb-8 flex items-center justify-between">

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
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            View all your subscription payments.
          </p>

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead
            style={{
              background: "var(--color-background)",
            }}
          >
            <tr>

              <th className="px-6 py-4 text-left">
                Invoice
              </th>

              <th className="px-6 py-4 text-left">
                Date
              </th>

              <th className="px-6 py-4 text-left">
                Plan
              </th>

              <th className="px-6 py-4 text-left">
                Amount
              </th>

              <th className="px-6 py-4 text-center">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>
          </thead>

          <tbody>

            {payments.map((payment) => (
              <tr
                key={payment.id}
                style={{
                  borderTop:
                    "1px solid var(--color-border)",
                }}
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <FaFileInvoice
                      style={{
                        color:
                          "var(--color-primary)",
                      }}
                    />

                    {payment.invoice}

                  </div>

                </td>

                <td className="px-6 py-5">
                  {payment.date}
                </td>

                <td className="px-6 py-5">
                  {payment.plan}
                </td>

                <td className="px-6 py-5 font-bold">
                  {payment.amount}
                </td>

                <td className="px-6 py-5 text-center">

                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                    style={{
                      background:
                        "var(--color-success-subtle)",
                      color:
                        "var(--color-success)",
                    }}
                  >
                    <FaCheckCircle />

                    {payment.status}

                  </span>

                </td>

                <td className="px-6 py-5 text-center">

                  <button
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold"
                    style={{
                      background:
                        "var(--color-primary-subtle)",
                      color:
                        "var(--color-primary)",
                    }}
                  >
                    <FaDownload />

                    Invoice

                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default PaymentHistory;