import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Product Development",
    description:
      "We support our customers in transforming ideas into market-ready products.",
  },
  {
    number: "02",
    title: "Production Management",
    description:
      "Our team coordinates the entire production process, from order placement to shipment.",
  },
  {
    number: "03",
    title: "Production Control",
    description:
      "Effective production control is essential for on-time delivery.",
  },
  {
    number: "04",
    title: "Quality Assurance",
    description:
      "Quality is at the core of our services. We implement strict quality control procedures throughout the production cycle.",
  },
  {
    number: "05",
    title: "Communication & Customer Support",
    description:
      "Clear and timely communication is key to successful sourcing.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-bg-soft py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[760px]">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />

              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-accent">
                Our Services
              </p>
            </div>

            <h2 className="font-heading text-[42px] font-semibold leading-[1.05] text-primary sm:text-[52px] lg:text-[58px]">
              Complete Sourcing &{" "}
              <span className="text-accent">
                Production Solutions.
              </span>
            </h2>

            <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-text-secondary sm:text-[18px]">
              At Zuha Sourcing, we provide comprehensive sourcing and production
              management services for knitted garments, woven garments, and
              coordinated apparel programs. Our goal is to ensure a smooth,
              transparent, and efficient process from product development to
              final shipment.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-primary transition-colors duration-300 hover:text-accent"
          >
            View All Services

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid gap-px overflow-hidden border border-border-light bg-border-light md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative min-h-[330px] bg-white p-8 transition-all duration-300 hover:bg-primary sm:p-10"
            >
              {/* Top */}
              <div className="mb-12 flex items-center justify-between">
                <span className="font-heading text-[27px] font-semibold text-accent">
                  {service.number}
                </span>

                <span className="h-px w-10 bg-border-dark transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
              </div>

              {/* Content */}
              <h3 className="max-w-[330px] font-heading text-[30px] font-semibold leading-[1.12] text-primary transition-colors duration-300 group-hover:text-white sm:text-[32px]">
                {service.title}
              </h3>

              <p className="mt-5 max-w-[360px] text-[16px] leading-7 text-text-secondary transition-colors duration-300 group-hover:text-white/75 sm:text-[17px] sm:leading-8">
                {service.description}
              </p>

              {/* Arrow */}
              <Link
                to="/services"
                aria-label={`Learn more about ${service.title}`}
                className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center border border-border-light text-xl text-primary transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
              >
                →
              </Link>
            </div>
          ))}

          {/* CTA Card */}
          <div className="flex min-h-[330px] flex-col justify-between bg-primary p-8 sm:p-10">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
                Work With Us
              </p>

              <h3 className="mt-5 max-w-[350px] font-heading text-[32px] font-semibold leading-[1.15] text-white sm:text-[35px]">
                Your Trusted Partner in Garment Sourcing.
              </h3>

              <p className="mt-5 max-w-[350px] text-[16px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
                Reliable sourcing, professional production management, and
                consistent quality for every order.
              </p>
            </div>

            <Link
              to="/contact"
              className="group mt-8 inline-flex w-fit items-center gap-3 text-[13px] font-bold uppercase tracking-[0.13em] text-white"
            >
              Get In Touch

              <span className="text-xl text-accent transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;