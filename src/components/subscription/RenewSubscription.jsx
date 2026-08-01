import { motion } from "framer-motion";
import {
  FaArrowRotateRight,
  FaBolt,
  FaCalendarDays,
} from "react-icons/fa6";

import {
  getRenewInfo,
  renewSubscription,
} from "../../services/student/subscription.service";

function RenewSubscription() {
  const renewInfo = getRenewInfo();

  const handleRenew = () => {
    const response = renewSubscription();

    console.log(response);

    // Backend aane par
    // Payment Gateway open hoga
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-r from-secondary to-secondary-hover radius-3xl elevation-xl p-8 text-text-inverse"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <FaBolt className="text-warning text-3xl" />

            <h2 className="text-3xl font-bold">
              Renew Your Subscription
            </h2>

          </div>

          <p className="text-secondary-subtle leading-7 max-w-xl">
            Renew your mess subscription before it expires to
            continue enjoying uninterrupted meals,
            attendance tracking and all premium features.
          </p>

          <div className="flex items-center gap-3 mt-6">

            <FaCalendarDays />

            <span>
              Next Renewal :
              <strong> {renewInfo.renewalDate}</strong>
            </span>

          </div>

        </div>

        <div className="bg-surface/10 backdrop-blur-lg radius-3xl p-6 min-w-[280px]">

          <div className="flex items-center justify-between mb-6">

            <span className="text-lg font-semibold">
              Renewal Offer
            </span>

            <span className="bg-warning text-black px-3 py-1 radius-full text-sm font-bold">
              {renewInfo.discount}% OFF
            </span>

          </div>

          <button
            onClick={handleRenew}
            className="
              w-full
              bg-surface
              text-secondary-hover
              font-bold
              py-4
              radius-2xl
              hover:bg-surface-hover
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

          <p className="text-center text-sm text-secondary-subtle mt-4">
            {renewInfo.offerText}
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default RenewSubscription;