import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function SearchSection() {
  return (
    <section className="py-20 bg-background">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-text-primary">
          Find Your Perfect Mess
        </h2>

        <p className="text-center text-text-muted mt-4">
          Search nearby messes, compare prices and subscribe instantly.
        </p>

        <div className="bg-surface elevation-lg radius-2xl p-6 mt-12 flex flex-col md:flex-row gap-4">

          <div className="flex items-center border radius-xl px-4 py-3 flex-1">
            <FaMapMarkerAlt className="text-success text-xl" />

            <input
              type="text"
              placeholder="Enter your location..."
              className="ml-3 w-full outline-none"
            />
          </div>

          <button className="bg-primary hover:bg-primary-hover text-text-inverse px-8 radius-xl flex items-center justify-center gap-2">

            <FaSearch />

            Search

          </button>

        </div>

      </div>

    </section>
  );
}

export default SearchSection;