import {
  FaCalendarAlt,
  FaCheckCircle,
  FaReceipt,
} from "react-icons/fa";

import { motion } from "framer-motion";

import {
  getPaymentHistory,
} from "../../services/student/subscription.service";

function PaymentHistory() {
  const payments = getPaymentHistory();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-surface radius-3xl elevation-lg border border-border-subtle p-6"
    >
      <div className="flex items-center gap-3 mb-6">

        <FaReceipt className="text-success text-2xl" />

        <h2 className="text-2xl font-bold">
          Payment History
        </h2>

      </div>

      <div className="space-y-4">

        {payments.map((payment) => (

          <div
            key={payment.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 radius-2xl border border-border-strong p-5 hover:bg-surface-muted transition"
          >

            <div>

              <h3 className="font-semibold text-lg">
                {payment.month}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-text-muted text-sm">

                <FaCalendarAlt />

                {payment.date}

              </div>

            </div>

            <div className="text-right">

              <h3 className="text-xl font-bold text-success">
                ₹{payment.amount}
              </h3>

              <div className="flex justify-end items-center gap-2 mt-2 text-success">

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