import { FaUserGraduate, FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

function ProfileHeader({ profile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-r from-primary to-success radius-3xl elevation-xl p-8 text-text-inverse"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

        <div className="flex flex-col sm:flex-row items-center gap-6">

          <img
            src={profile.image}
            alt={profile.name}
            className="w-32 h-32 radius-full border-4 border-text-inverse object-cover elevation-lg"
          />

          <div>

            <h1 className="text-4xl font-bold">
              {profile.name}
            </h1>

            <p className="text-primary-muted mt-2">
              {profile.email}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-5">

              <div className="flex items-center gap-2 bg-surface/10 px-4 py-2 radius-full">

                <FaUserGraduate />

                <span>
                  {profile.branch}
                </span>

              </div>

              <div className="flex items-center gap-2 bg-surface/10 px-4 py-2 radius-full">

                <FaCircleCheck className="text-primary-muted" />

                <span>
                  {profile.status}
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="bg-surface/10 backdrop-blur-lg radius-3xl p-6 min-w-[260px]">

          <p className="text-primary-muted">
            Member Since
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {profile.memberSince}
          </h2>

          <div className="mt-6">

            <p className="text-primary-muted text-sm">
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