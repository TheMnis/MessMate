import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function SearchSection() {
  return (
    <section className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          Find Your Perfect Mess
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Search nearby messes, compare prices and subscribe instantly.
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-6 mt-12 flex flex-col md:flex-row gap-4">

          <div className="flex items-center border rounded-xl px-4 py-3 flex-1">
            <FaMapMarkerAlt className="text-green-600 text-xl" />

            <input
              type="text"
              placeholder="Enter your location..."
              className="ml-3 w-full outline-none"
            />
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-xl flex items-center justify-center gap-2">

            <FaSearch />

            Search

          </button>

        </div>

      </div>

    </section>
  );
}

export default SearchSection;