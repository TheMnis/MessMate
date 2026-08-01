import {
  FaCrown,
  FaEye,
  FaEdit,
  FaBan,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";


const subscriptions = [
  {
    id: 1,
    owner: "Rahul Sharma",
    mess: "Sunrise Mess",
    plan: "Premium Plan",
    amount: "₹999",
    startDate: "01 Aug 2026",
    expiryDate: "01 Sep 2026",
    status: "Active",
  },
  {
    id: 2,
    owner: "Priya Verma",
    mess: "Annapurna Food Corner",
    plan: "Basic Plan",
    amount: "₹499",
    startDate: "15 Jul 2026",
    expiryDate: "15 Aug 2026",
    status: "Expiring",
  },
  {
    id: 3,
    owner: "Amit Kumar",
    mess: "Green Leaf Mess",
    plan: "Premium Plan",
    amount: "₹999",
    startDate: "01 Jun 2026",
    expiryDate: "01 Jul 2026",
    status: "Expired",
  },
  {
    id: 4,
    owner: "Neha Singh",
    mess: "Campus Delight",
    plan: "Enterprise Plan",
    amount: "₹2499",
    startDate: "05 Aug 2026",
    expiryDate: "05 Sep 2026",
    status: "Active",
  },
];


function SubscriptionTable() {


  const statusConfig = {

    Active: {
      icon: <FaCheckCircle />,
      bg: "var(--color-success-subtle)",
      color: "var(--color-success)",
    },

    Expiring: {
      icon: <FaClock />,
      bg: "var(--color-warning-subtle)",
      color: "var(--color-warning)",
    },

    Expired: {
      icon: <FaBan />,
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


      <div className="p-6">

        <h2
          className="text-3xl font-bold"
          style={{
            color:
              "var(--color-text-primary)",
          }}
        >
          Owner Subscriptions
        </h2>


        <p
          className="mt-2"
          style={{
            color:
              "var(--color-text-secondary)",
          }}
        >
          Monitor all active and expired owner plans.
        </p>

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
                Owner / Mess
              </th>


              <th className="px-6 py-5 text-left">
                Plan
              </th>


              <th className="px-6 py-5 text-left">
                Amount
              </th>


              <th className="px-6 py-5 text-left">
                Validity
              </th>


              <th className="px-6 py-5 text-center">
                Status
              </th>


              <th className="px-6 py-5 text-center">
                Actions
              </th>


            </tr>


          </thead>



          <tbody>


            {subscriptions.map((item) => {


              const status =
                statusConfig[item.status];


              return (

                <tr
                  key={item.id}
                  style={{
                    borderTop:
                      "1px solid var(--color-border)",
                  }}
                >


                  <td className="px-6 py-5">


                    <div className="flex items-center gap-4">


                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{
                          background:
                            "var(--color-primary-subtle)",
                          color:
                            "var(--color-primary)",
                        }}
                      >
                        <FaCrown />
                      </div>



                      <div>


                        <h3
                          className="font-bold"
                          style={{
                            color:
                              "var(--color-text-primary)",
                          }}
                        >
                          {item.owner}
                        </h3>


                        <p
                          className="text-sm"
                          style={{
                            color:
                              "var(--color-text-secondary)",
                          }}
                        >
                          {item.mess}
                        </p>


                      </div>


                    </div>


                  </td>




                  <td className="px-6 py-5">


                    <span
                      className="rounded-xl px-4 py-2 font-semibold"
                      style={{
                        background:
                          "var(--color-primary-subtle)",
                        color:
                          "var(--color-primary)",
                      }}
                    >
                      {item.plan}
                    </span>


                  </td>




                  <td
                    className="px-6 py-5 font-bold"
                    style={{
                      color:
                        "var(--color-text-primary)",
                    }}
                  >

                    {item.amount}

                  </td>




                  <td className="px-6 py-5">


                    <div>

                      <p>
                        {item.startDate}
                      </p>


                      <p
                        className="text-sm"
                        style={{
                          color:
                            "var(--color-text-secondary)",
                        }}
                      >
                        to {item.expiryDate}
                      </p>

                    </div>


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

                      {item.status}

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
                            "var(--color-warning-subtle)",
                          color:
                            "var(--color-warning)",
                        }}
                      >
                        <FaEdit />
                      </button>



                      <button
                        className="rounded-xl p-3"
                        style={{
                          background:
                            "var(--color-danger-subtle)",
                          color:
                            "var(--color-danger)",
                        }}
                      >
                        <FaBan />
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


export default SubscriptionTable;