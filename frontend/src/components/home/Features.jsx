import {
  FaBolt,
  FaUtensils,
  FaMapMarkedAlt,
  FaWallet,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-4xl [color:var(--color-success)]" />,
    title: "Fast & Easy Booking",
    description:
      "Find and subscribe to your favorite mess in just a few clicks.",
  },
  {
    icon: <FaUtensils className="text-4xl [color:var(--color-success)]" />,
    title: "Healthy Food",
    description:
      "Enjoy fresh, hygienic and delicious meals every day.",
  },
  {
    icon: <FaMapMarkedAlt className="text-4xl [color:var(--color-success)]" />,
    title: "Nearby Mess Search",
    description:
      "Search nearby messes based on your current location.",
  },
  {
    icon: <FaWallet className="text-4xl [color:var(--color-success)]" />,
    title: "Affordable Pricing",
    description:
      "Compare different plans and choose the one that fits your budget.",
  },
];

function Features() {
  return (
    <section className="py-20 [background:var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose MessMate?
        </h2>

        <p className="text-center [color:var(--color-text-muted)] mt-4">
          Everything you need to manage your meals in one place.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((feature, index) => (
            <div
              key={index}
              className="[background:var(--color-surface)] radius-2xl elevation-md p-8 text-center hover:elevation-xl transition"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold">
                {feature.title}
              </h3>

              <p className="[color:var(--color-text-muted)] mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;
