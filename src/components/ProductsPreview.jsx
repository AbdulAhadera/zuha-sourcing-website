import { useRef } from "react";
import { Link } from "react-router-dom";
import { featuredProducts } from "../data/products";

const ProductsPreview = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[760px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-accent">
              Our Products
            </p>

            <h2 className="mt-3 font-heading text-[42px] font-semibold leading-tight text-primary sm:text-[52px] lg:text-[58px]">
              Explore Our{" "}
              <span className="text-accent">
                Featured Collection.
              </span>
            </h2>

            <p className="mt-5 max-w-[680px] text-[17px] leading-8 text-text-secondary sm:text-[18px]">
              A selection of garment styles from our denim sourcing collection.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous products"
              className="flex h-12 w-12 items-center justify-center border border-border-light bg-white text-xl text-primary transition duration-300 hover:border-accent hover:bg-accent hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next products"
              className="flex h-12 w-12 items-center justify-center bg-primary text-xl text-white transition duration-300 hover:bg-accent"
            >
              →
            </button>
          </div>
        </div>

        {/* Product Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              to="/products"
              className="group w-[280px] shrink-0 sm:w-[310px] lg:w-[330px]"
            >
              {/* Image */}
              <div
                className={`relative h-[400px] overflow-hidden ${
                  index % 3 === 0
                    ? "bg-[#e7f0f6]"
                    : index % 3 === 1
                    ? "bg-[#f5e8e5]"
                    : "bg-[#f4eddc]"
                }`}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.id}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[16px] text-text-secondary">
                    Product Image
                  </div>
                )}

                {/* Style Badge */}
                <span className="absolute left-4 top-4 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary shadow-sm">
                  {product.id}
                </span>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-primary text-xl text-white transition duration-300 group-hover:bg-accent">
                  →
                </div>
              </div>

              {/* Info */}
              <div className="pt-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {product.collection}
                </p>

                <h3 className="mt-2 font-heading text-[29px] font-semibold text-primary">
                  {product.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[15px] text-text-secondary">
                  {product.fit && <span>{product.fit}</span>}

                  {product.wash && (
                    <>
                      <span className="text-border-dark">•</span>
                      <span>{product.wash}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-6 border-t border-border-light pt-8 sm:flex-row sm:items-center">
          <p className="max-w-[700px] text-[17px] leading-8 text-text-secondary">
            Explore the complete collection to view more garment styles,
            fabrics, fits, and washes.
          </p>

          <Link
            to="/products"
            className="inline-flex w-fit shrink-0 items-center gap-3 bg-primary px-7 py-4 text-[13px] font-bold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-accent"
          >
            Explore Products
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;