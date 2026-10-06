const qualitySteps = [
  {
    number: "01",
    title: "Pre Production Check (PPC)",
    description:
      "Risk Are Reduced By Checking Material Components, Accessories/User Manuals Etc. At This Stage Itself.",
    image: "/service/ppc.jfif",
  },
  {
    number: "02",
    title: "Initial Production Check (IPC)",
    description:
      "First Finished Products Are Checked Against Buyer's Specification And Prototype Sample. Deviations Are Identified And Brought Out For Correction.",
    image: "/service/ipc.jpg",
  },
  {
    number: "03",
    title: "During Production Check (DUPRO)",
    description:
      "Inspection During Production Is Carried Out To Check And Verify That Initial Discrepancies Have Been Rectified And To Ensure The Average Quality Standards Of Production Runs.",
    image: "/service/dupro.webp",
  },
  {
    number: "04",
    title: "Final Random Inspection (FRI)",
    description:
      "Final Random Inspection Is Carried Out When The Total Consignment Is Packed And Ready For Shipment. It Is Performed According To The International Inspection Standards.",
    image: "/service/fri.webp",
  },
  {
    number: "05",
    title: "Documentation & Shipping",
    description:
      "Our Exports Department Checks All Shipping Documents As Per Buyer Instructions & Ensure Dispatch Of Documentation As Per Dispatch Instruction Provided By Buyers.",
    image: "/service/das.jpg",
  },
];

const QualityProcess = () => {
  return (
    <section className="bg-primary py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-accent">
            Quality Assurance
          </p>

          <h2 className="mt-4 font-heading text-[44px] font-semibold leading-tight text-white sm:text-[54px] lg:text-[60px]">
            We Deliver What{" "}
            <span className="text-accent">We Commit.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-8 text-white/70 sm:text-[18px]">
            We believe in maintaining systems and control measures from yarn
            to finished products, keeping in accordance to the AQL, thereby
            minimizing the lead times rejection factor, giving you value for
            your money.
          </p>
        </div>

        {/* Process */}
        <div className="space-y-10 lg:space-y-14">
          {qualitySteps.map((step, index) => (
            <div
              key={step.number}
              className="grid items-center overflow-hidden bg-white lg:grid-cols-2"
            >
              {/* Image */}
              <div
                className={`relative h-[320px] sm:h-[380px] lg:h-[430px] ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center bg-accent font-heading text-[22px] font-semibold text-white">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex min-h-[320px] items-center p-8 sm:p-10 lg:min-h-[430px] lg:p-14 ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <div>
                  <span className="mb-5 block h-[3px] w-12 bg-accent" />

                  <h3 className="font-heading text-[32px] font-semibold leading-tight text-primary sm:text-[38px]">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-[17px] leading-8 text-text-secondary sm:text-[18px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Reporting */}
        <div className="mt-12 border border-white/15 px-7 py-9 text-center sm:px-10">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-accent">
            Status Reporting
          </p>

          <h3 className="mt-3 font-heading text-[30px] font-semibold text-white">
            Complete Visibility at Every Stage
          </h3>

          <p className="mx-auto mt-4 max-w-[760px] text-[17px] leading-8 text-white/70">
            Status Report Based On Multiple Stage Inspection Are Transmitted To
            The Buyers By Fax Or E-Mail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;