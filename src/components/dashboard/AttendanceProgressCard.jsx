import { motion } from "framer-motion";
import {
  FaCircleCheck,
  FaArrowTrendUp,
} from "react-icons/fa6";

function AttendanceProgressCard() {
  const attendance = 92;

  const circumference = 327;
  const offset =
    circumference -
    (circumference * attendance) / 100;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="bg-surface radius-3xl elevation-lg border border-border-subtle p-6"
    >
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-2xl font-bold">
          📈 Attendance Progress
        </h2>

        <div className="flex items-center gap-2 text-success font-semibold">

          <FaArrowTrendUp />

          +2%

        </div>

      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="relative w-44 h-44">

          <svg
            className="w-44 h-44 -rotate-90"
            viewBox="0 0 120 120"
          >

            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="var(--color-border-strong)"
              strokeWidth="10"
              fill="none"
            />

            <motion.circle
              cx="60"
              cy="60"
              r="52"
              stroke="var(--color-success)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{
                strokeDashoffset: circumference,
              }}
              animate={{
                strokeDashoffset: offset,
              }}
              transition={{
                duration: 1.5,
              }}
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h2 className="text-4xl font-bold text-success">
              {attendance}%
            </h2>

            <p className="text-sm text-text-muted">
              Present
            </p>

          </div>

        </div>

        <div className="flex-1 space-y-5">

          <div className="flex items-center gap-3">

            <FaCircleCheck className="text-success text-xl" />

            <span>
              Excellent attendance this month.
            </span>

          </div>

          <div className="flex items-center gap-3">

            <FaCircleCheck className="text-success text-xl" />

            <span>
              Eligible for attendance rewards.
            </span>

          </div>

          <div className="flex items-center gap-3">

            <FaCircleCheck className="text-success text-xl" />

            <span>
              Keep attendance above 90%.
            </span>

          </div>

          <div className="pt-3">

            <div className="w-full bg-border-strong radius-full h-3">

              <div
                className="bg-primary h-3 radius-full"
                style={{
                  width: `${attendance}%`,
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default AttendanceProgressCard;
