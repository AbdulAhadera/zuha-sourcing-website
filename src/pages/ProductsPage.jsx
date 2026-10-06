import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductPopup from "../components/ProductPopup";
import { categoryCounts, productFilters, products } from "../data/catalog";

const PAGE_SIZE = 12;

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [activeFilter, setActiveFilter] = useState(
    productFilters.some((filter) => filter.value === categoryFromUrl)
      ? categoryFromUrl
      : "all"
  );
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeProduct = useCallback(() => setSelectedProduct(null), []);

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const remainingCount = filteredProducts.length - visibleProducts.length;

  const changeFilter = (value) => {
    setActiveFilter(value);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
            Zuha Sourcing
          </p>

          <h1 className="mt-3 font-heading text-[46px] font-semibold leading-tight text-white sm:text-[56px]">
            Our <span className="text-accent">Products</span>
          </h1>

          <p className="mt-5 max-w-[760px] text-[17px] leading-8 text-white/75 sm:text-[18px]">
            Explore our garment collection featuring a variety of denim styles,
            fits, washes, and fabric compositions.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">
          {/* Heading + Filters */}
          <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
                Product Collection
              </p>

              <h2 className="mt-2 font-heading text-[36px] font-semibold text-primary sm:text-[44px]">
                Explore Our Collection
              </h2>

              <p className="mt-3 text-[17px] leading-8 text-text-secondary">
                Browse our available garment styles and product developments.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {productFilters.map((filter) => {
                const count =
                  filter.value === "all"
                    ? products.length
                    : categoryCounts[filter.value] || 0;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => changeFilter(filter.value)}
                    className={`px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] transition duration-300 ${
                      activeFilter === filter.value
                        ? "bg-primary text-white"
                        : "border border-border-light bg-white text-primary hover:border-accent hover:text-accent"
                    }`}
                  >
                    {filter.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Count */}
          <div className="mb-7 border-t border-border-light pt-5">
            <p className="text-[15px] text-text-secondary">
              Showing{" "}
              <span className="font-semibold text-primary">
                {visibleProducts.length}
              </span>{" "}
              of {filteredProducts.length} products
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                variant="grid"
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {/* Load More */}
          {remainingCount > 0 && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="inline-flex items-center gap-3 border border-primary bg-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-primary transition duration-300 hover:bg-primary hover:text-white"
              >
                Load More ({remainingCount} left)
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <h3 className="font-heading text-[32px] font-semibold text-primary">
                No Products Found
              </h3>

              <p className="mt-3 text-[17px] text-text-secondary">
                Products for this collection will be added soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quick View Popup */}
      {selectedProduct && (
        <ProductPopup
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={closeProduct}
        />
      )}
    </>
  );
};

export default ProductsPage;