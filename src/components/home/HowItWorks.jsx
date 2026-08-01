import {
  FaSearch,
  FaClipboardCheck,
  FaCalendarCheck,
  FaUtensils,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch className="text-5xl text-success" />,
    title: "Search Mess",
    description:
      "Find the best nearby mess according to your budget and location.",
  },
  {
    id: 2,
    icon: <FaClipboardCheck className="text-5xl text-success" />,
    title: "Subscribe",
    description:
      "Choose your preferred subscription plan and join instantly.",
  },
  {
    id: 3,
    icon: <FaCalendarCheck className="text-5xl text-success" />,
    title: "Mark Attendance",
    description:
      "Confirm your breakfast, lunch or dinner before the deadline.",
  },
  {
    id: 4,
    icon: <FaUtensils className="text-5xl text-success" />,
    title: "Enjoy Your Meal",
    description:
      "Visit the mess or get your meal delivered on time.",
  },
];

function HowItWorks() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center text-text-muted mt-4">
          Get started with MessMate in just four simple steps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-background radius-2xl p-8 text-center hover:elevation-xl transition"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>

              <div className="w-10 h-10 bg-primary radius-full text-text-inverse flex items-center justify-center mx-auto font-bold mb-5">
                {step.id}
              </div>

              <h3 className="text-xl font-bold">
                {step.title}
              </h3>

              <p className="text-text-muted mt-4">
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