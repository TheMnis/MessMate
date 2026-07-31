import {
  FaCheckCircle,
  FaUtensils,
  FaClipboardCheck,
  FaBell,
  FaHeadset,
  FaUserShield,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { getPlanFeatures } from "../../services/student/subscription.service";

function getIcon(icon) {
  switch (icon) {
    case "meal":
      return <FaUtensils />;

    case "attendance":
      return <FaClipboardCheck />;

    case "notification":
      return <FaBell />;

    case "support":
      return <FaHeadset />;

    case "security":
      return <FaUserShield />;

    default:
      return <FaCheckCircle />;
  }
}

function PlanDetails() {
  const features = getPlanFeatures();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6"
    >
      <h2 className="text-2xl font-bold mb-6">
        Plan Features
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {features.map((feature) => (

          <div
            key={feature.id}
            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition-all"
          >

            <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl">

              {getIcon(feature.icon)}

            </div>

            <div className="flex-1">

              <h3 className="font-semibold">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500">
                {feature.description}
              </p>

            </div>

            {feature.available && (
              <FaCheckCircle className="text-green-600 text-xl" />
            )}

          </div>

        ))}

      </div>

    </motion.div>
  );
}

export default PlanDetails;