import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import SearchSection from "../components/home/SearchSection";
import FeaturedMess from "../components/home/FeaturedMess";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import StudentFeatures from "../components/home/StudentFeatures";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <SearchSection />

      <FeaturedMess />

      <Features />

      <StudentFeatures />

      <HowItWorks />
    </>
  );
}

export default Home;