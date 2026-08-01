import {
  FaSearch,
  FaClipboardCheck,
  FaCalendarCheck,
  FaUtensils,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch className="text-5xl [color:var(--color-success)]" />,
    title: "Search Mess",
    description:
      "Find the best nearby mess according to your budget and location.",
  },
  {
    id: 2,
    icon: <FaClipboardCheck className="text-5xl [color:var(--color-success)]" />,
    title: "Subscribe",
    description:
      "Choose your preferred subscription plan and join instantly.",
  },
  {
    id: 3,
    icon: <FaCalendarCheck className="text-5xl [color:var(--color-success)]" />,
    title: "Mark Attendance",
    description:
      "Confirm your breakfast, lunch or dinner before the deadline.",
  },
  {
    id: 4,
    icon: <FaUtensils className="text-5xl [color:var(--color-success)]" />,
    title: "Enjoy Your Meal",
    description:
      "Visit the mess or get your meal delivered on time.",
  },
];

function HowItWorks() {
  return (
    <section className="py-20 [background:var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center [color:var(--color-text-muted)] mt-4">
          Get started with MessMate in just four simple steps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {steps.map((step) => (
            <div
              key={step.id}
              className="[background:var(--color-background)] radius-2xl p-8 text-center hover:elevation-xl transition"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>

              <div className="w-10 h-10 [background:var(--color-primary)] radius-full [color:var(--color-text-inverse)] flex items-center justify-center mx-auto font-bold mb-5">
                {step.id}
              </div>

              <h3 className="text-xl font-bold">
                {step.title}
              </h3>

              <p className="[color:var(--color-text-muted)] mt-4">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;