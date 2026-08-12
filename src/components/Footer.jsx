import { Link } from "react-router-dom";
import logo from "../assets/zuha-sourcing-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Zuha Sourcing"
                className="h-[70px] w-[70px] rounded-full bg-white object-contain p-1"
              />

              <div>
                <h2 className="font-heading text-[28px] font-semibold uppercase leading-none tracking-[0.05em]">
                  <span className="text-white">Zuha </span>
                  <span className="text-accent">Sourcing</span>
                </h2>

                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/60">
                  Sourcing Excellence. Delivering Value.
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-[320px] text-[16px] leading-7 text-white/70">
              Your trusted partner in garment sourcing, product development,
              production management, quality assurance, and shipment
              coordination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-[25px] font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/"
                className="w-fit text-[16px] text-white/70 transition-colors duration-300 hover:text-accent"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="w-fit text-[16px] text-white/70 transition-colors duration-300 hover:text-accent"
              >
                Services
              </Link>

              <Link
                to="/products"
                className="w-fit text-[16px] text-white/70 transition-colors duration-300 hover:text-accent"
              >
                Products
              </Link>

              <Link
                to="/contact"
                className="w-fit text-[16px] text-white/70 transition-colors duration-300 hover:text-accent"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading text-[25px] font-semibold text-white">
              Products
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/products/men"
                className="w-fit text-[16px] text-white/70 transition-colors duration-300 hover:text-accent"
              >
                Men
              </Link>

              <Link
                to="/products/women"
                className="w-fit text-[16px] text-white/70 transition-colors duration-300 hover:text-accent"
              >
                Women
              </Link>

              <Link
                to="/products/kids"
                className="w-fit text-[16px] text-white/70 transition-colors duration-300 hover:text-accent"
              >
                Kids
              </Link>

              <Link
                to="/products"
                className="w-fit text-[16px] text-white/70 transition-colors duration-300 hover:text-accent"
              >
                View All Products
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-[25px] font-semibold text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5 text-[16px] leading-7 text-white/70">
              <div>
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.14em] text-accent">
                  Address
                </p>

                <p>
                  B-39, 2nd Floor
                  <br />
                  Rufi Greenland Society
                  <br />
                  Scheme 33, Gulzar e Hijri
                </p>
              </div>

              <div>
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.14em] text-accent">
                  Phone
                </p>

                <a
                  href="tel:+923212011837"
                  className="block transition-colors duration-300 hover:text-accent"
                >
                  + 92-321-2011837
                </a>

                <a
                  href="tel:+923030872445"
                  className="block transition-colors duration-300 hover:text-accent"
                >
                  + 92-303-0872445
                </a>
              </div>

              <div>
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.14em] text-accent">
                  Email
                </p>

                <a
                  href="mailto:takhlique@zuhasourcing.com"
                  className="break-all transition-colors duration-300 hover:text-accent"
                >
                  takhlique@zuhasourcing.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-6 text-[14px] text-white/50 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} Zuha Sourcing. All Rights Reserved.
          </p>

          <p>
            Sourcing Excellence.{" "}
            <span className="text-accent">Delivering Value.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
