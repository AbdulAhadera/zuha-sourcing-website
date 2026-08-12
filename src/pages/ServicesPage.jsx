import QualityProcess from "../components/QualityProcess";

const services = [
  {
    title: "Product Development",
    description:
      "We support our customers in transforming ideas into market-ready products. Our development services include fabric and trim sourcing, sample development, fit approvals, wash developments, and cost optimization. We work closely with factories to ensure that every product meets the customer's design, quality, and commercial expectations.",
  },
  {
    title: "Production Management",
    description:
      "Our team coordinates the entire production process, from order placement to shipment. We work with carefully selected manufacturing partners to ensure that production runs efficiently, deadlines are met, and customer requirements are fully understood and implemented.",
  },
  {
    title: "Production Control",
    description:
      "Effective production control is essential for on-time delivery. We closely monitor production schedules, capacity planning, material availability, and critical milestones throughout the manufacturing process. Regular follow-up helps us identify and resolve potential issues before they impact delivery timelines.",
  },
  {
    title: "Quality Assurance",
    description:
      "Quality is at the core of our services. We implement strict quality control procedures throughout the production cycle, including inline inspections, final inspections, and shipment verification. Our focus is to ensure that all products meet approved specifications, workmanship standards, and customer requirements.",
  },
  {
    title: "Communication & Customer Support",
    description:
      "Clear and timely communication is key to successful sourcing. We provide regular updates on development, production status, quality results, and shipment schedules. Our customers receive transparent information and responsive support at every stage of the process, ensuring complete visibility and confidence in their orders.",
  },
];

const ServicesPage = () => {
  return (
    <>
      {/* Simple Page Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
            Zuha Sourcing
          </p>

          <h1 className="mt-3 font-heading text-[46px] font-semibold text-white sm:text-[56px]">
            Our <span className="text-accent">Services</span>
          </h1>

          <p className="mt-5 max-w-[850px] text-[17px] leading-8 text-white/80 sm:text-[18px]">
            At Zuha Sourcing, we provide comprehensive sourcing and production
            management services for knitted garments, woven garments, and
            coordinated apparel programs. Our goal is to ensure a smooth,
            transparent, and efficient process from product development to
            final shipment.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
              What We Do
            </p>

            <h2 className="mt-3 font-heading text-[38px] font-semibold text-primary sm:text-[46px]">
              Complete Sourcing Support
            </h2>
          </div>

          <div className="divide-y divide-border-light border-y border-border-light">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid gap-5 py-10 md:grid-cols-[70px_280px_1fr] md:gap-8 lg:py-12"
              >
                {/* Number */}
                <span className="font-heading text-[36px] font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="font-heading text-[28px] font-semibold leading-tight text-primary sm:text-[31px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[17px] leading-8 text-text-secondary sm:text-[18px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Inspection Process */}
      <QualityProcess />
    </>
  );
};

export default ServicesPage;