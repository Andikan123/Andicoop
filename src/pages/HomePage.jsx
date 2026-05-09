import HeroCarousel from "../components/Hero";
import Service from "../components/Service"
import BusinessSection from "../components/BusinessSection";
import Report from "../components/Report";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
        {/* Floating Stats Card */}
  <div className="absolute right-6 bottom-0 transform translate-y-1/2 z-20 
  w-[90%] max-w-md md:max-w-lg
  bg-linear-to-b from-red-500/70 via-red-600/60 to-red-800/70
  backdrop-blur-md text-white p-6 shadow-2xl">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

      <div>
        <h2 className="text-3xl font-bold">12+</h2>
        <p className="text-xs uppercase tracking-widest text-white/80">
          Countries of Operation
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold">30,000+</h2>
        <p className="text-xs uppercase tracking-widest text-white/80">
          Employees Across Africa
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">
          650,000 bpd
        </h2>
        <p className="text-xs uppercase tracking-widest text-white/80">
          Refinery Capacity
        </p>
      </div>

    </div>
  </div>
      <Service/>
      {/* other sections below */}
      <BusinessSection />
      <Report />
      <Footer />
    </>
  );
}