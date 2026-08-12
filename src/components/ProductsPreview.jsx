import { Link } from "react-router-dom";

const products = [
  {
    title: "Men",
    subtitle: "Men's Collection",
    path: "/products/men",
    bg: "bg-[#D9ECF7]",
    badge: "bg-[#BFDDEE]",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=90",
  },
  {
    title: "Women",
    subtitle: "Women's Collection",
    path: "/products/women",
    bg: "bg-[#F9DDE2]",
    badge: "bg-[#F0C5CD]",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=90",
  },
  {
    title: "Kids",
    subtitle: "Kids Collection",
    path: "/products/kids",
    bg: "bg-[#FFF0C9]",
    badge: "bg-[#F7DFA3]",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=90",
  },
];

const ProductsPreview = () => {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[750px] text-center">
          <p className="mb-3 text-[14px] font-bold uppercase tracking-[0.2em] text-accent">
            Our Products
          </p>

          <h2 className="font-heading text-[44px] font-semibold leading-tight text-primary sm:text-[54px] lg:text-[60px]">
            Something for{" "}
            <span className="text-accent">Everyone.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[17px] leading-8 text-text-secondary sm:text-[18px]">
            Explore our garment collections for men, women, and kids.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {products.map((product) => (
            <Link
              key={product.title}
              to={product.path}
              className="group flex flex-col items-center"
            >
              {/* Circle */}
              <div
                className={`relative flex aspect-square w-full max-w-[360px] items-center justify-center rounded-full ${product.bg} p-10 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl lg:max-w-[390px]`}
              >
                {/* Small Badge */}
                <div
                  className={`absolute left-6 top-10 rounded-full ${product.badge} px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-primary`}
                >
                  Explore
                </div>

                {/* Image Circle */}
                <div className="h-[72%] w-[72%] overflow-hidden rounded-full bg-white shadow-md">
                  <img
                    src={product.image}
                    alt={product.subtitle}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Arrow */}
                <div className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[22px] font-bold text-primary shadow-md transition duration-300 group-hover:bg-primary group-hover:text-white">
                  →
                </div>
              </div>

              {/* Title */}
              <div className="mt-7 text-center">
                <h3 className="font-heading text-[38px] font-semibold text-primary">
                  {product.title}
                </h3>

                <p className="mt-1 text-[16px] text-text-secondary">
                  {product.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-[13px] font-bold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-accent"
          >
            Explore All Products
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;