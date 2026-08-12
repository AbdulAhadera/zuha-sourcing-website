const About = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85"
                alt="Garment sourcing and manufacturing"
                className="h-[430px] w-full object-cover sm:h-[520px]"
              />
            </div>

            {/* Experience Box */}
            <div className="absolute -bottom-8 right-0 bg-primary px-7 py-6 text-white sm:right-8">
              <p className="font-heading text-4xl font-semibold text-accent">
                22+
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
                Years of Industry
                <br />
                Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="pt-8 lg:pt-0">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />

              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-accent">
                About Us
              </p>
            </div>

            <h2 className="font-heading text-[42px] font-semibold leading-[1.05] text-primary sm:text-[52px]">
              Experience, Reliability,
              <span className="text-accent"> and Quality.</span>
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-text-secondary">
              <p>
                Zuha Sourcing is a newly established garment sourcing agency
                backed by over 22 years of hands-on experience in the apparel
                industry. Our extensive knowledge of sourcing, product
                development, manufacturing, and quality management enables us
                to provide reliable and efficient solutions to customers
                worldwide.
              </p>

              <p>
                We specialize in a wide range of apparel programs, including
                knitted garments, woven garments, and coordinated sets. Our
                expertise covers basics, value-added products, and washed
                garments, catering to the diverse requirements of fashion
                brands, retailers, and importers.
              </p>

              <p>
                Over the years, we have built strong relationships with some of
                the most compliant and reputable factories in the industry.
                Many of our manufacturing partners operate as fully vertical
                setups, allowing better control over quality, production
                efficiency, and lead times.
              </p>

              <p>
                In addition to large-scale manufacturing facilities, we also
                work with carefully selected smaller factories, enabling us to
                accommodate lower minimum order quantities (MOQs) without
                compromising on quality, workmanship, or delivery performance.
              </p>

              <p>
                At Zuha Sourcing, our goal is to be a trusted sourcing partner
                by offering professional service, transparent communication,
                competitive solutions, and consistent quality for every order,
                regardless of size.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-heading text-[22px] font-semibold italic text-primary sm:text-[25px]">
                Experience, Reliability, and Quality — The Foundation of Zuha
                Sourcing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;