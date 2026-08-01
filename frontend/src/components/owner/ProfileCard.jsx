import { FaCamera, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ProfileCard() {
  return (
    <section
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">

        <div className="relative">

          <img
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Owner"
            alt="Owner"
            className="h-40 w-40 rounded-full object-cover"
          />

          <button
            className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <FaCamera />
          </button>

        </div>

        <div className="flex-1">

          <h2
            className="text-4xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Mess Owner
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Premium Member
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div>

              <label
                className="mb-2 block font-semibold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Mess Owner"
                className="w-full rounded-2xl px-4 py-3 outline-none"
                style={{
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                }}
              />

            </div>

            <div>

              <label
                className="mb-2 block font-semibold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Email
              </label>

              <div
                className="flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <FaEnvelope />

                <input
                  type="email"
                  defaultValue="owner@messmate.com"
                  className="w-full bg-transparent outline-none"
                />

              </div>

            </div>

            <div>

              <label
                className="mb-2 block font-semibold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Phone
              </label>

              <div
                className="flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <FaPhone />

                <input
                  type="text"
                  defaultValue="+91 9876543210"
                  className="w-full bg-transparent outline-none"
                />

              </div>

            </div>

            <div>

              <label
                className="mb-2 block font-semibold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Address
              </label>

              <div
                className="flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <FaMapMarkerAlt />

                <input
                  type="text"
                  defaultValue="Bhilai, Chhattisgarh"
                  className="w-full bg-transparent outline-none"
                />

              </div>

            </div>

          </div>

          <button
            className="mt-8 rounded-2xl px-8 py-4 font-semibold"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            Save Changes
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProfileCard;