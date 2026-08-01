import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const messes = [
  {
    id: 1,
    name: "Maa Vaishno Mess",
    price: "₹2500 / Month",
    rating: "4.8",
    type: "Veg",
    location: "Bhilai",
  },
  {
    id: 2,
    name: "Shree Krishna Mess",
    price: "₹2200 / Month",
    rating: "4.6",
    type: "Veg + Non Veg",
    location: "Durg",
  },
  {
    id: 3,
    name: "Student Point Mess",
    price: "₹2000 / Month",
    rating: "4.7",
    type: "Veg",
    location: "Raipur",
  },
];

function FeaturedMess() {
  return (
    <section className="py-20 [background:var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Featured Messes
        </h2>

        <p className="text-center [color:var(--color-text-muted)] mt-3">
          Choose from top rated messes near you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {messes.map((mess) => (

            <div
              key={mess.id}
              className="border radius-2xl p-6 elevation-base hover:elevation-xl transition"
            >

              <h3 className="text-2xl font-bold">
                {mess.name}
              </h3>

              <div className="flex items-center gap-2 mt-3 [color:var(--color-warning)]">
                <FaStar />
                {mess.rating}
              </div>

              <div className="flex items-center gap-2 mt-2 [color:var(--color-text-muted)]">
                <FaMapMarkerAlt />
                {mess.location}
              </div>

              <p className="mt-3 font-semibold">
                {mess.type}
              </p>

              <p className="[color:var(--color-success)] font-bold mt-2">
                {mess.price}
              </p>

              <button className="w-full [background:var(--color-primary)] [color:var(--color-text-inverse)] py-3 radius-xl mt-6 hover:[background:var(--color-primary-hover)]">
                View Details
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedMess;