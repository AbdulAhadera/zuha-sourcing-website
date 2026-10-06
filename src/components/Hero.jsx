import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroImages = [
  "https://images.unsplash.com/photo-1637069585336-827b298fe84a?q=80&w=1073&auto=format&fit=crop&w=2000&q=85",

  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2000&q=85",

  "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2000&q=85",

  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=2000&q=85",

  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=2000&q=85",

  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2000&q=85",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-90px)] overflow-hidden">
      {/* Background Slider */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Decorative Glow */}
      <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-[1400px] items-center px-5 py-20 sm:px-8 lg:px-12">
        <div className="max-w-[820px]">
          {/* Small Heading */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-accent" />

            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-[13px]">
              Welcome to Zuha Sourcing
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-[46px] font-semibold leading-[1] text-white sm:text-[62px] lg:text-[78px]">
            Your Trusted Partner in{" "}
            <span className="text-accent">Garment Sourcing.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[720px] text-[15px] leading-8 text-white/80 sm:text-[17px]">
            Zuha Sourcing is a professional garment sourcing agency built on
            over 22 years of industry experience. Our mission is to provide
            global buyers with reliable sourcing solutions, quality products,
            competitive pricing, and seamless supply chain management.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent px-7 py-4 text-[12px] font-bold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-accent-dark"
            >
              Get In Touch
            </Link>

            <Link
              to="/products"
              className="group inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.13em] text-white transition duration-300 hover:border-accent hover:text-accent"
            >
              Explore Our Products

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-[3px] transition-all duration-300 ${
              currentImage === index
                ? "w-10 bg-accent"
                : "w-5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 z-20 h-[4px] w-full bg-accent" />
    </section>
  );
};

export default Hero;