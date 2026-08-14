import { useState } from "react";
import { Link } from "react-router-dom";
import { products, productFilters } from "../data/products";

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.gender === activeFilter);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setActiveImage(0);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    setActiveImage(0);
  };

  const nextImage = () => {
    if (!selectedProduct?.images?.length) return;

    setActiveImage((prev) =>
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    if (!selectedProduct?.images?.length) return;

    setActiveImage((prev) =>
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
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
              {productFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] transition duration-300 ${
                    activeFilter === filter.value
                      ? "bg-primary text-white"
                      : "border border-border-light bg-white text-primary hover:border-accent hover:text-accent"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Count */}
          <div className="mb-7 border-t border-border-light pt-5">
            <p className="text-[15px] text-text-secondary">
              Showing{" "}
              <span className="font-semibold text-primary">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <button
                key={product.id}
                type="button"
                onClick={() => openProduct(product)}
                className="group block w-full text-left"
              >
                {/* Product Image */}
                <div
                  className={`relative h-[430px] overflow-hidden ${
                    index % 3 === 0
                      ? "bg-[#edf4f8]"
                      : index % 3 === 1
                        ? "bg-[#f7eeee]"
                        : "bg-[#f7f2e8]"
                  }`}
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.id}
                      className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-text-secondary">
                      Product Image
                    </div>
                  )}

                  {/* ID */}
                  <span className="absolute left-4 top-4 bg-white px-4 py-2 text-[12px] font-bold text-primary shadow-sm">
                    {product.id}
                  </span>

                  {/* Multiple Images */}
                  {product.images?.length > 1 && (
                    <span className="absolute right-4 top-4 bg-primary px-3 py-2 text-[11px] font-semibold text-white">
                      {product.images.length} Views
                    </span>
                  )}

                  {/* View Button */}
                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-primary text-xl text-white transition duration-300 group-hover:bg-accent">
                    →
                  </div>
                </div>

                {/* Product Details */}
                <div className="pt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {product.collection}
                  </p>

                  <h3 className="mt-2 text-[29px] font-semibold text-primary">
                    {product.id}
                  </h3>

                  <p className="mt-1 text-[17px] text-text-secondary">
                    {product.title}
                  </p>

                  {(product.fit || product.wash) && (
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[15px] text-text-secondary">
                      {product.fit && <span>{product.fit}</span>}

                      {product.fit && product.wash && <span>•</span>}

                      {product.wash && <span>{product.wash}</span>}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

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

      {/* Quick View Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={closeProduct}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-[1000px] overflow-y-auto bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeProduct}
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center bg-primary text-[25px] text-white transition hover:bg-accent"
              aria-label="Close product"
            >
              ×
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Images */}
              <div className="bg-[#f4f5f6] p-5 sm:p-7">
                <div className="relative flex min-h-[500px] items-center justify-center">
                  {selectedProduct.images?.[activeImage]?.src ? (
                    <img
                      src={selectedProduct.images[activeImage].src}
                      alt={`${selectedProduct.id} ${
                        selectedProduct.images[activeImage].label
                      }`}
                      className="max-h-[600px] w-full object-contain"
                    />
                  ) : (
                    <div className="text-text-secondary">Product Image</div>
                  )}

                  {/* Image Navigation */}
                  {selectedProduct.images?.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={previousImage}
                        className="absolute left-0 flex h-11 w-11 items-center justify-center bg-white text-xl text-primary shadow-md transition hover:bg-primary hover:text-white"
                        aria-label="Previous image"
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        onClick={nextImage}
                        className="absolute right-0 flex h-11 w-11 items-center justify-center bg-white text-xl text-primary shadow-md transition hover:bg-primary hover:text-white"
                        aria-label="Next image"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>

                {/* Image Thumbnails */}
                {selectedProduct.images?.length > 1 && (
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    {selectedProduct.images.map((image, index) => (
                      <button
                        key={`${image.fileName}-${index}`}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        className={`relative h-[85px] w-[85px] overflow-hidden border-2 bg-white ${
                          activeImage === index
                            ? "border-accent"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.label}
                          className="h-full w-full object-contain p-1"
                        />

                        <span className="absolute bottom-0 left-0 w-full bg-primary/80 py-1 text-center text-[9px] font-semibold uppercase text-white">
                          {image.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Information */}
              <div className="flex items-center p-7 sm:p-10 lg:p-12">
                <div className="w-full">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {selectedProduct.collection}
                  </p>

                  <h2 className="mt-3 text-[42px] font-semibold text-primary sm:text-[48px]">
                    {selectedProduct.id}
                  </h2>

                  <p className="mt-1 text-[19px] text-text-secondary">
                    {selectedProduct.title}
                  </p>

                  {/* Specifications */}
                  <div className="mt-8 border-y border-border-light">
                    {selectedProduct.composition && (
                      <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-border-light py-4">
                        <span className="font-semibold text-primary">
                          Fabric
                        </span>

                        <span className="text-text-secondary">
                          {selectedProduct.composition}
                        </span>
                      </div>
                    )}

                    {selectedProduct.fit && (
                      <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-border-light py-4">
                        <span className="font-semibold text-primary">Fit</span>

                        <span className="text-text-secondary">
                          {selectedProduct.fit}
                        </span>
                      </div>
                    )}

                    {selectedProduct.feel && (
                      <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-border-light py-4">
                        <span className="font-semibold text-primary">Feel</span>

                        <span className="text-text-secondary">
                          {selectedProduct.feel}
                        </span>
                      </div>
                    )}

                    {selectedProduct.wash && (
                      <div className="grid grid-cols-[110px_1fr] gap-5 py-4">
                        <span className="font-semibold text-primary">Wash</span>

                        <span className="text-text-secondary">
                          {selectedProduct.wash}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Inquiry */}
                  <div className="mt-8">
                    <p className="mb-5 text-[16px] leading-7 text-text-secondary">
                      Interested in this style? Contact us to discuss your
                      sourcing requirements.
                    </p>

                    <Link
                      to="/contact"
                      onClick={closeProduct}
                      className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-accent"
                    >
                      Send Inquiry
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsPage;