// ==========================================
// Stats Component
// MessMate Landing Page
// ==========================================

import {
  FaUsers,
  FaStore,
  FaUtensils,
  FaLeaf,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers className="text-5xl [color:var(--color-success)]" />,
      number: "20,000+",
      title: "Happy Students",
      description: "Students using MessMate every month",
    },
    {
      icon: <FaStore className="text-5xl [color:var(--color-secondary)]" />,
      number: "500+",
      title: "Registered Mess",
      description: "Verified mess owners on the platform",
    },
    {
      icon: <FaUtensils className="text-5xl [color:var(--color-highlight)]" />,
      number: "10 Lakh+",
      title: "Meals Served",
      description: "Healthy meals delivered and served",
    },
    {
      icon: <FaLeaf className="text-5xl [color:var(--color-success)]" />,
      number: "35%",
      title: "Food Waste Reduced",
      description: "Using attendance & smart prediction",
    },
  ];

  return (
    <section className="[background:var(--color-surface)] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold [color:var(--color-text-primary)]">
            Trusted Across India
          </h2>

          <p className="[color:var(--color-text-secondary)] mt-5 text-lg max-w-2xl mx-auto">
            Thousands of students and hundreds of mess owners
            trust MessMate for managing meals efficiently.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-primary-subtle)] border [border-color:var(--color-border-subtle)] radius-3xl elevation-lg hover:elevation-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >

              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-4xl font-extrabold [color:var(--color-text-primary)]">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold mt-3 [color:var(--color-text-primary)]">
                {item.title}
              </h4>

              <p className="[color:var(--color-text-muted)] mt-4 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;
