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
      icon: <FaUsers className="text-5xl text-green-600" />,
      number: "20,000+",
      title: "Happy Students",
      description: "Students using MessMate every month",
    },
    {
      icon: <FaStore className="text-5xl text-blue-600" />,
      number: "500+",
      title: "Registered Mess",
      description: "Verified mess owners on the platform",
    },
    {
      icon: <FaUtensils className="text-5xl text-orange-500" />,
      number: "10 Lakh+",
      title: "Meals Served",
      description: "Healthy meals delivered and served",
    },
    {
      icon: <FaLeaf className="text-5xl text-emerald-600" />,
      number: "35%",
      title: "Food Waste Reduced",
      description: "Using attendance & smart prediction",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted Across India
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Thousands of students and hundreds of mess owners
            trust MessMate for managing meals efficiently.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-white to-green-50 border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >

              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-4xl font-extrabold text-gray-900">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold mt-3 text-gray-800">
                {item.title}
              </h4>

              <p className="text-gray-500 mt-4 leading-7">
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