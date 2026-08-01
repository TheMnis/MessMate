import { AnimatePresence, motion } from "framer-motion";
import {
  FaTrashAlt,
  FaTimes,
} from "react-icons/fa";

function UserDeleteDialog({
  open,
  user,
  onClose,
  onConfirm,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          style={{
            background: "rgba(0,0,0,.45)",
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            className="w-full max-w-md rounded-3xl p-8"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div className="flex justify-center">

              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background:
                    "var(--color-danger-subtle)",
                  color:
                    "var(--color-danger)",
                }}
              >
                <FaTrashAlt size={32} />
              </div>

            </div>

            <h2
              className="mt-6 text-center text-3xl font-bold"
              style={{
                color:
                  "var(--color-text-primary)",
              }}
            >
              Delete User
            </h2>

            <p
              className="mt-4 text-center"
              style={{
                color:
                  "var(--color-text-secondary)",
              }}
            >
              Are you sure you want to delete{" "}
              <strong>
                {user?.name || "this user"}
              </strong>
              ?
            </p>

            <div
              className="mt-4 rounded-2xl p-4 text-center"
              style={{
                background:
                  "var(--color-warning-subtle)",
                color:
                  "var(--color-warning)",
              }}
            >
              This action cannot be undone.
            </div>

            <div className="mt-8 flex gap-4">

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={onClose}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 font-semibold"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                  color:
                    "var(--color-text-primary)",
                }}
              >
                <FaTimes />

                Cancel

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() =>
                  onConfirm(user)
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 font-semibold"
                style={{
                  background:
                    "var(--color-danger)",
                  color:
                    "var(--color-text-inverse)",
                }}
              >
                <FaTrashAlt />

                Delete

              </motion.button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default UserDeleteDialog;