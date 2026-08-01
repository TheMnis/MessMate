import { motion } from "framer-motion";
import {
  FaDatabase,
  FaCloudUploadAlt,
  FaDownload,
  FaTrash,
  FaHistory,
  FaSave,
} from "react-icons/fa";

const backups = [
  {
    id: 1,
    name: "Full System Backup",
    date: "02 Aug 2026",
    size: "1.8 GB",
    type: "Automatic",
  },
  {
    id: 2,
    name: "Database Backup",
    date: "01 Aug 2026",
    size: "860 MB",
    type: "Manual",
  },
  {
    id: 3,
    name: "User Data Backup",
    date: "28 Jul 2026",
    size: "420 MB",
    type: "Automatic",
  },
];


function BackupRestore() {

  return (
    <motion.section
      whileHover={{
        y: -4,
      }}
      className="rounded-3xl p-6"
      style={{
        background:
          "var(--color-surface)",
        border:
          "1px solid var(--color-border)",
        boxShadow:
          "var(--shadow-lg)",
      }}
    >

      <div className="flex items-center gap-4">

        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
          style={{
            background:
              "var(--color-primary-subtle)",
            color:
              "var(--color-primary)",
          }}
        >
          <FaDatabase />
        </div>


        <div>

          <h2
            className="text-2xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            Backup & Restore
          </h2>


          <p
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Manage system backups and restore previous data.
          </p>

        </div>

      </div>



      <div className="mt-8 grid gap-6 lg:grid-cols-3">


        <div
          className="rounded-3xl p-6"
          style={{
            background:
              "var(--color-background)",
          }}
        >

          <FaCloudUploadAlt
            size={32}
            style={{
              color:
                "var(--color-primary)",
            }}
          />


          <h3 className="mt-5 text-xl font-bold">
            Create Backup
          </h3>


          <p
            className="mt-2 text-sm"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Generate latest database and system backup.
          </p>


          <button
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3 font-semibold"
            style={{
              background:
                "var(--gradient-primary)",
              color:
                "var(--color-text-inverse)",
            }}
          >

            <FaSave />

            Backup Now

          </button>

        </div>



        <div
          className="rounded-3xl p-6"
          style={{
            background:
              "var(--color-background)",
          }}
        >

          <FaHistory
            size={32}
            style={{
              color:
                "var(--color-warning)",
            }}
          />


          <h3 className="mt-5 text-xl font-bold">
            Auto Backup
          </h3>


          <p
            className="mt-2 text-sm"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Daily automatic backups are enabled.
          </p>


          <div
            className="mt-6 rounded-2xl p-4"
            style={{
              background:
                "var(--color-success-subtle)",
              color:
                "var(--color-success)",
            }}
          >
            Active
          </div>

        </div>



        <div
          className="rounded-3xl p-6"
          style={{
            background:
              "var(--color-background)",
          }}
        >

          <FaDownload
            size={32}
            style={{
              color:
                "var(--color-success)",
            }}
          />


          <h3 className="mt-5 text-xl font-bold">
            Restore Data
          </h3>


          <p
            className="mt-2 text-sm"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Restore your application from backup files.
          </p>


          <button
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3 font-semibold"
            style={{
              background:
                "var(--color-success)",
              color:
                "var(--color-text-inverse)",
            }}
          >

            <FaDownload />

            Restore

          </button>

        </div>


      </div>




      <div className="mt-8">


        <h3
          className="mb-5 text-xl font-bold"
          style={{
            color:
              "var(--color-text-primary)",
          }}
        >
          Backup History
        </h3>



        <div className="space-y-4">

          {backups.map((backup) => (

            <div
              key={backup.id}
              className="flex flex-col gap-4 rounded-2xl p-5 md:flex-row md:items-center md:justify-between"
              style={{
                background:
                  "var(--color-background)",
              }}
            >

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
                  <FaDatabase />
                </div>


                <div>

                  <h4 className="font-bold">
                    {backup.name}
                  </h4>


                  <p
                    className="text-sm"
                    style={{
                      color:
                        "var(--color-text-secondary)",
                    }}
                  >
                    {backup.date} • {backup.size} • {backup.type}
                  </p>

                </div>

              </div>



              <div className="flex gap-3">


                <button
                  className="rounded-xl p-3"
                  style={{
                    background:
                      "var(--color-success-subtle)",
                    color:
                      "var(--color-success)",
                  }}
                >
                  <FaDownload />
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
                  <FaTrash />
                </button>


              </div>


            </div>

          ))}

        </div>


      </div>


    </motion.section>
  );
}

export default BackupRestore;