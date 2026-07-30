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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Featured Messes
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Choose from top rated messes near you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {messes.map((mess) => (

            <div
              key={mess.id}
              className="border rounded-2xl p-6 shadow hover:shadow-xl transition"
            >

              <h3 className="text-2xl font-bold">
                {mess.name}
              </h3>

              <div className="flex items-center gap-2 mt-3 text-yellow-500">
                <FaStar />
                {mess.rating}
              </div>

              <div className="flex items-center gap-2 mt-2 text-gray-500">
                <FaMapMarkerAlt />
                {mess.location}
              </div>

              <p className="mt-3 font-semibold">
                {mess.type}
              </p>

              <p className="text-green-600 font-bold mt-2">
                {mess.price}
              </p>

              <button className="w-full bg-green-600 text-white py-3 rounded-xl mt-6 hover:bg-green-700">
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