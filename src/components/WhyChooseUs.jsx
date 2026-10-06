const expertise = [
  {
    number: "01",
    title: "Knitted Garments",
    query: "knitwear sweaters folded stack",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Woven Garments",
    query: "woven shirts fabric rolls",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Coordinated Sets",
    query: "matching two piece set clothing rack",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Basic Apparel Programs",
    query: "plain t-shirts folded basics",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Value-Added Garments",
    query: "embroidery garment detail",
    image:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    title: "Washed Garments",
    query: "washed denim jeans stack",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "07",
    title: "Low and High MOQ Programs",
    query: "garment factory production line",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "08",
    title: "Factory Sourcing & Vendor Management",
    query: "textile factory fabric rolls warehouse",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "09",
    title: "Quality Control & Compliance Monitoring",
    query: "fabric inspection quality control",
    image:
      "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=900&q=85",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-primary py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 max-w-[820px]">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />

            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-accent">
              Our Expertise
            </p>
          </div>

          <h2 className="font-heading text-[42px] font-semibold leading-[1.05] text-white sm:text-[52px] lg:text-[58px]">
            Expertise Built Around{" "}
            <span className="text-accent">Your Sourcing Needs.</span>
          </h2>
        </div>

        {/* Expertise Image Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.number}
              className="group relative h-[330px] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/10 transition-all duration-500 group-hover:from-primary group-hover:via-primary/65" />

              {/* Top Number */}
              <div className="absolute left-7 top-7">
                <span className="font-heading text-[22px] font-semibold text-accent">
                  {item.number}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-7 sm:p-8">
                <span className="mb-4 block h-[2px] w-10 bg-accent transition-all duration-300 group-hover:w-16" />

                <h3 className="max-w-[330px] font-heading text-[29px] font-semibold leading-[1.12] text-white sm:text-[31px]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-14 flex flex-col justify-between gap-8 border-t border-white/15 pt-10 lg:flex-row lg:items-center">
          <p className="max-w-[850px] font-heading text-[26px] font-semibold leading-[1.4] text-white sm:text-[30px]">
            Experience, Reliability, and Quality —{" "}
            <span className="text-accent">
              The Foundation of Zuha Sourcing.
            </span>
          </p>

          <div className="flex shrink-0 items-center gap-4">
            <span className="font-heading text-[50px] font-semibold leading-none text-accent">
              22+
            </span>

            <span className="text-[13px] font-semibold uppercase leading-5 tracking-[0.15em] text-white/70">
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;