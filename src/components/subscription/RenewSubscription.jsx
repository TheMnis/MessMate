import { motion } from "framer-motion";
import {
  FaArrowRotateRight,
  FaBolt,
  FaCalendarDays,
} from "react-icons/fa6";

function RenewSubscription() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl p-8 text-white"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <FaBolt className="text-yellow-300 text-3xl" />

            <h2 className="text-3xl font-bold">
              Renew Your Subscription
            </h2>

          </div>

          <p className="text-blue-100 leading-7 max-w-xl">
            Renew your mess subscription before it expires to
            continue enjoying uninterrupted meals, attendance
            tracking and all premium features.
          </p>

          <div className="flex items-center gap-3 mt-6">

            <FaCalendarDays />

            <span>
              Next Renewal : <strong>30 August 2026</strong>
            </span>

          </div>

        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 min-w-[280px]">

          <div className="flex items-center justify-between mb-6">

            <span className="text-lg font-semibold">
              Renewal Offer
            </span>

            <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-bold">
              10% OFF
            </span>

          </div>

          <button
            className="
              w-full
              bg-white
              text-blue-700
              font-bold
              py-4
              rounded-2xl
              hover:bg-gray-100
              transition
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <FaArrowRotateRight />

            Renew Subscription

          </button>

          <p className="text-center text-sm text-blue-100 mt-4">
            Offer valid till 30 August
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default RenewSubscription;