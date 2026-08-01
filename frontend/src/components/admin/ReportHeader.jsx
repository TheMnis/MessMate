import { motion } from "framer-motion";
import {
  FaChartLine,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
} from "react-icons/fa";

function ReportHeader() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="relative overflow-hidden rounded-3xl p-8"
      style={{
        background: "var(--gradient-primary)",
        color: "var(--color-text-inverse)",
        boxShadow: "var(--shadow-xl)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 280,
          height: 280,
          borderRadius: "999px",
          background:
            "rgba(255,255,255,.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: -120,
          width: 260,
          height: 260,
          borderRadius: "999px",
          background:
            "rgba(255,255,255,.05)",
        }}
      />

      <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background:
                "rgba(255,255,255,.15)",
            }}
          >
            <FaChartLine />

            Analytics & Reports

          </div>

          <h1 className="mt-6 text-5xl font-bold">
            Platform Reports
          </h1>

          <p
            className="mt-4 max-w-3xl text-lg leading-8"
            style={{
              color:
                "rgba(255,255,255,.92)",
            }}
          >
            Analyze revenue growth, subscription
            performance, user activity and overall
            MessMate platform statistics from a
            centralized reporting dashboard.
          </p>

        </div>


        <div className="grid gap-5 sm:grid-cols-3">

          <div
            className="rounded-3xl p-6"
            style={{
              background:
                "rgba(255,255,255,.12)",
            }}
          >
            <FaMoneyBillWave size={30} />

            <div className="mt-5 text-4xl font-bold">
              ₹28.4L
            </div>

            <div
              className="mt-2"
              style={{
                color:
                  "rgba(255,255,255,.9)",
              }}
            >
              Monthly Revenue
            </div>

          </div>


          <div
            className="rounded-3xl p-6"
            style={{
              background:
                "rgba(255,255,255,.12)",
            }}
          >
            <FaFileInvoiceDollar size={30} />

            <div className="mt-5 text-4xl font-bold">
              4,826
            </div>

            <div
              className="mt-2"
              style={{
                color:
                  "rgba(255,255,255,.9)",
              }}
            >
              Total Invoices
            </div>

          </div>


          <div
            className="rounded-3xl p-6"
            style={{
              background:
                "rgba(255,255,255,.12)",
            }}
          >
            <FaChartLine size={30} />

            <div className="mt-5 text-4xl font-bold">
              +22%
            </div>

            <div
              className="mt-2"
              style={{
                color:
                  "rgba(255,255,255,.9)",
              }}
            >
              Growth Rate
            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default ReportHeader;