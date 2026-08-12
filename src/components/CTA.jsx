import { Link } from "react-router-dom";
import logo from "../assets/zuha-sourcing-logo.png";

const CTA = () => {
  return (
    <section className="bg-bg-soft py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden bg-accent px-7 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14">
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-28 h-[280px] w-[280px] rounded-full border-[50px] border-white/10" />

          {/* Left Content */}
          <div className="relative max-w-[820px]">
            {/* Logo + Brand */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-white p-2 shadow-md">
                <img
                  src={logo}
                  alt="Zuha Sourcing"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="font-heading text-[28px] font-semibold uppercase leading-none tracking-[0.05em]">
                  <span className="text-primary">Zuha </span>
                  <span className="text-white">Sourcing</span>
                </h3>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Sourcing Excellence. Delivering Value.
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[38px] font-semibold leading-tight text-white sm:text-[47px]">
              Your Trusted Partner in Garment Sourcing.
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[720px] text-[17px] leading-8 text-white/85">
              Experience, Reliability, and Quality — The Foundation of Zuha
              Sourcing.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="relative mt-8 inline-flex shrink-0 items-center gap-3 bg-primary px-8 py-4 text-[13px] font-bold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-white hover:text-primary lg:mt-0"
          >
            Contact Us
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;