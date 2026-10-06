import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
            Zuha Sourcing
          </p>

          <h1 className="mt-3 font-heading text-[46px] font-semibold text-white sm:text-[56px]">
            Contact <span className="text-accent">Us</span>
          </h1>

          <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-white/80 sm:text-[18px]">
            Get in touch with us to discuss your garment sourcing,
            manufacturing, quality, and production requirements.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Side */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
                Get In Touch
              </p>

              <h2 className="mt-3 font-heading text-[38px] font-semibold leading-tight text-primary sm:text-[46px]">
                We'd Love to Hear From You.
              </h2>

              <p className="mt-5 max-w-[520px] text-[17px] leading-8 text-text-secondary sm:text-[18px]">
                Whether you are looking for product development, production
                management, quality assurance, or complete garment sourcing
                support, our team is ready to assist you.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-8">
                {/* Address */}
                <div className="border-l-2 border-accent pl-5">
                  <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                    Address
                  </p>

                  <p className="mt-2 text-[17px] leading-8 text-text-secondary">
                    B-39, 2nd Floor
                    <br />
                    Rufi Greenland Society
                    <br />
                    Scheme 33, Gulzar e Hijri
                  </p>
                </div>

                {/* Phone */}
                <div className="border-l-2 border-accent pl-5">
                  <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                    Phone
                  </p>

                  <div className="mt-2 flex flex-col gap-1">
                    <a
                      href="tel:+923212011837"
                      className="w-fit text-[17px] text-text-secondary transition-colors duration-300 hover:text-accent"
                    >
                      + 92-321-2011837
                    </a>

                    <a
                      href="tel:+923030872445"
                      className="w-fit text-[17px] text-text-secondary transition-colors duration-300 hover:text-accent"
                    >
                      + 92-303-0872445
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="border-l-2 border-accent pl-5">
                  <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                    Email
                  </p>

                  <a
                    href="mailto:takhlique@zuhasourcing.com"
                    className="mt-2 inline-block text-[17px] text-text-secondary transition-colors duration-300 hover:text-accent"
                  >
                    takhlique@zuhasourcing.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-bg-soft p-6 sm:p-8 lg:p-10">
              <h3 className="font-heading text-[32px] font-semibold text-primary sm:text-[36px]">
                Send Us a Message
              </h3>

              <p className="mt-3 text-[16px] leading-7 text-text-secondary">
                Fill out the form below and our team will get back to you.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[14px] font-semibold text-primary"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    required
                    className="w-full border border-border-light bg-white px-4 py-4 text-[16px] text-text-primary outline-none transition-colors duration-300 placeholder:text-text-muted focus:border-accent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[14px] font-semibold text-primary"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="from_email"
                    placeholder="Your email address"
                    required
                    className="w-full border border-border-light bg-white px-4 py-4 text-[16px] text-text-primary outline-none transition-colors duration-300 placeholder:text-text-muted focus:border-accent"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[14px] font-semibold text-primary"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    required
                    className="w-full border border-border-light bg-white px-4 py-4 text-[16px] text-text-primary outline-none transition-colors duration-300 placeholder:text-text-muted focus:border-accent"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[14px] font-semibold text-primary"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-none border border-border-light bg-white px-4 py-4 text-[16px] text-text-primary outline-none transition-colors duration-300 placeholder:text-text-muted focus:border-accent"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="border-l-2 border-green-600 bg-green-50 px-4 py-3 text-[15px] text-green-800">
                    Thank you! Your message has been sent. We'll get back to
                    you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="border-l-2 border-red-600 bg-red-50 px-4 py-3 text-[15px] text-red-800">
                    Something went wrong. Please try again or email us
                    directly at takhlique@zuhasourcing.com.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[13px] font-bold uppercase tracking-[0.13em] text-white transition-colors duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <span className="text-lg">→</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;