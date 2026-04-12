import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

const Landing = () => {
  return (
    <div className="min-h-screen bg-brand-ink">
      <Navigation />
      <Hero />
    </div>
  );
};

export default Landing;
