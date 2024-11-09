import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="main-section">
      <Header />
      <HeroSection />
      
      <Footer />
    </div>
  );
};

export default Home;
