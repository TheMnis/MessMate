import {
  FaCalendarAlt,
  FaCheckCircle,
  FaReceipt,
} from "react-icons/fa";

import { motion } from "framer-motion";

function PaymentHistory() {
  const payments = [
    {
      id: 1,
      month: "August 2026",
      amount: "₹3,000",
      status: "Paid",
      date: "01 Aug 2026",
    },
    {
      id: 2,
      month: "July 2026",
      amount: "₹3,000",
      status: "Paid",
      date: "01 Jul 2026",
    },
    {
      id: 3,
      month: "June 2026",
      amount: "₹3,000",
      status: "Paid",
      date: "01 Jun 2026",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6"
    >
      <div className="flex items-center gap-3 mb-6">

        <FaReceipt className="text-green-600 text-2xl" />

        <h2 className="text-2xl font-bold">
          Payment History
        </h2>

      </div>

      <div className="space-y-4">

        {payments.map((payment) => (

          <div
            key={payment.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-gray-200 p-5 hover:bg-gray-50 transition"
          >

            <div>

              <h3 className="font-semibold text-lg">
                {payment.month}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">

                <FaCalendarAlt />

                {payment.date}

              </div>

            </div>

            <div className="text-right">

              <h3 className="text-xl font-bold text-green-600">
                {payment.amount}
              </h3>

              <div className="flex justify-end items-center gap-2 mt-2 text-green-600">

                <FaCheckCircle />

                <span className="font-medium">
                  {payment.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </motion.div>
  );
}

export default PaymentHistory;