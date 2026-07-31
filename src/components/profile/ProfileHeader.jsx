import { FaUserGraduate, FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

function ProfileHeader({ profile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl shadow-xl p-8 text-white"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

        <div className="flex flex-col sm:flex-row items-center gap-6">

          <img
            src={profile.image}
            alt={profile.name}
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
          />

          <div>

            <h1 className="text-4xl font-bold">
              {profile.name}
            </h1>

            <p className="text-green-100 mt-2">
              {profile.email}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-5">

              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">

                <FaUserGraduate />

                <span>
                  {profile.branch}
                </span>

              </div>

              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">

                <FaCircleCheck className="text-green-200" />

                <span>
                  {profile.status}
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 min-w-[260px]">

          <p className="text-green-100">
            Member Since
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {profile.memberSince}
          </h2>

          <div className="mt-6">

            <p className="text-green-100 text-sm">
              Subscription
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {profile.subscription}
            </h3>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default ProfileHeader;