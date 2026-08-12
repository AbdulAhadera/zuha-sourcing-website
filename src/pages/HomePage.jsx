import Hero from "../components/Hero";
import About from "../components/About";
import ServicesPreview from "../components/ServicesPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductsPreview from "../components/ProductsPreview";
import CTA from "../components/CTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <WhyChooseUs />
      <ProductsPreview />
      <CTA />
    </>
  );
};

export default HomePage;