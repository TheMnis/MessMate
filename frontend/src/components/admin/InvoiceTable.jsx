import {
  FaFileInvoiceDollar,
  FaDownload,
  FaEye,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

const invoices = [
  {
    id: "INV-1001",
    customer: "Sunrise Mess",
    type: "Subscription",
    amount: "₹15,999",
    date: "02 Aug 2026",
    status: "Paid",
  },
  {
    id: "INV-1002",
    customer: "Annapurna Food Corner",
    type: "Premium Plan",
    amount: "₹25,999",
    date: "01 Aug 2026",
    status: "Paid",
  },
  {
    id: "INV-1003",
    customer: "Green Leaf Mess",
    type: "Monthly Plan",
    amount: "₹8,999",
    date: "30 Jul 2026",
    status: "Pending",
  },
  {
    id: "INV-1004",
    customer: "Campus Delight",
    type: "Subscription",
    amount: "₹15,999",
    date: "28 Jul 2026",
    status: "Paid",
  },
  {
    id: "INV-1005",
    customer: "Royal Tiffin Hub",
    type: "Renewal",
    amount: "₹12,999",
    date: "25 Jul 2026",
    status: "Failed",
  },
];

function InvoiceTable() {

  const statusConfig = {
    Paid: {
      icon: <FaCheckCircle />,
      bg: "var(--color-success-subtle)",
      color: "var(--color-success)",
    },

    Pending: {
      icon: <FaClock />,
      bg: "var(--color-warning-subtle)",
      color: "var(--color-warning)",
    },

    Failed: {
      icon: <FaTimesCircle />,
      bg: "var(--color-danger-subtle)",
      color: "var(--color-danger)",
    },
  };


  return (
    <section
      className="overflow-hidden rounded-3xl"
      style={{
        background:
          "var(--color-surface)",
        border:
          "1px solid var(--color-border)",
        boxShadow:
          "var(--shadow-lg)",
      }}
    >

      <div className="flex items-center justify-between p-6">

        <div>

          <h2
            className="text-3xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            Invoice History
          </h2>

          <p
            className="mt-2"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Track all platform payments and invoices.
          </p>

        </div>


        <button
          className="rounded-2xl px-5 py-3 font-semibold"
          style={{
            background:
              "var(--gradient-primary)",
            color:
              "var(--color-text-inverse)",
          }}
        >
          Export Report
        </button>

      </div>


      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead
            style={{
              background:
                "var(--color-background)",
            }}
          >

            <tr>

              <th className="px-6 py-5 text-left">
                Invoice
              </th>

              <th className="px-6 py-5 text-left">
                Customer
              </th>

              <th className="px-6 py-5 text-left">
                Type
              </th>

              <th className="px-6 py-5 text-left">
                Amount
              </th>

              <th className="px-6 py-5 text-left">
                Date
              </th>

              <th className="px-6 py-5 text-center">
                Status
              </th>

              <th className="px-6 py-5 text-center">
                Action
              </th>

            </tr>

          </thead>


          <tbody>

            {invoices.map((invoice) => {

              const status =
                statusConfig[invoice.status];

              return (

                <tr
                  key={invoice.id}
                  style={{
                    borderTop:
                      "1px solid var(--color-border)",
                  }}
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{
                          background:
                            "var(--color-primary-subtle)",
                          color:
                            "var(--color-primary)",
                        }}
                      >
                        <FaFileInvoiceDollar />
                      </div>


                      <span
                        className="font-bold"
                        style={{
                          color:
                            "var(--color-text-primary)",
                        }}
                      >
                        {invoice.id}
                      </span>

                    </div>

                  </td>


                  <td className="px-6 py-5">

                    {invoice.customer}

                  </td>


                  <td className="px-6 py-5">

                    {invoice.type}

                  </td>


                  <td
                    className="px-6 py-5 font-bold"
                    style={{
                      color:
                        "var(--color-text-primary)",
                    }}
                  >
                    {invoice.amount}

                  </td>


                  <td className="px-6 py-5">

                    {invoice.date}

                  </td>


                  <td className="px-6 py-5 text-center">

                    <span
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold"
                      style={{
                        background:
                          status.bg,
                        color:
                          status.color,
                      }}
                    >

                      {status.icon}

                      {invoice.status}

                    </span>

                  </td>


                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <button
                        className="rounded-xl p-3"
                        style={{
                          background:
                            "var(--color-primary-subtle)",
                          color:
                            "var(--color-primary)",
                        }}
                      >
                        <FaEye />
                      </button>


                      <button
                        className="rounded-xl p-3"
                        style={{
                          background:
                            "var(--color-success-subtle)",
                          color:
                            "var(--color-success)",
                        }}
                      >
                        <FaDownload />
                      </button>

                    </div>

                  </td>


                </tr>

              );
            })}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default InvoiceTable;