import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Product quick view.
 *
 * - Laptop: two columns, fixed to the screen height, so the page never scrolls.
 * - Mobile: full-height bottom sheet. Image on top (swipe to change view),
 *   details scroll inside, and the inquiry button stays pinned at the bottom.
 *
 * Use it with a key so the image resets when the product changes:
 *   <ProductPopup key={product.id} product={product} onClose={...} />
 */
const ProductPopup = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const touchStartX = useRef(null);

  const images = product.images || [];
  const current = images[activeImage];
  const hasMany = images.length > 1;

  const nextImage = () =>
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const previousImage = () =>
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Lock the page behind the popup
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Keyboard: Escape closes, arrows change the image
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();

      if (images.length > 1) {
        if (event.key === "ArrowRight") {
          setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }
        if (event.key === "ArrowLeft") {
          setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [images.length, onClose]);

  // Swipe left / right on the image (mobile)
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || !hasMany) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) > 50) {
      if (distance < 0) nextImage();
      else previousImage();
    }
  };

  const details = [
    ["Category", product.categoryName],
    ["For", product.audience],
    ["Style code", product.styleCode],
    ["Views", images.map((image) => image.label).join(" / ")],
  ].filter(([, value]) => value);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 lg:items-center lg:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${product.id} ${product.title}`}
        className="relative flex h-[94dvh] w-full max-w-[1040px] flex-col overflow-hidden bg-white lg:h-[min(640px,88dvh)] lg:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product"
          className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center bg-primary text-[24px] leading-none text-white transition hover:bg-accent sm:h-11 sm:w-11"
        >
          ×
        </button>

        {/* Images */}
        <div className="flex h-[44dvh] shrink-0 flex-col bg-[#f4f5f6] lg:h-auto lg:w-[56%]">
          {/* Main image */}
          <div
            className="relative min-h-0 flex-1"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {current?.src ? (
              <img
                src={current.src}
                alt={`${product.id} ${current.label}`}
                className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-text-secondary">
                Product Image
              </div>
            )}

            {/* View label + counter */}
            {current && (
              <span className="absolute bottom-3 left-3 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary shadow-sm">
                {current.label}
                {hasMany && ` • ${activeImage + 1}/${images.length}`}
              </span>
            )}

            {/* Arrows */}
            {hasMany && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white text-lg text-primary shadow-md transition hover:bg-primary hover:text-white sm:left-3 sm:h-11 sm:w-11"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white text-lg text-primary shadow-md transition hover:bg-primary hover:text-white sm:right-3 sm:h-11 sm:w-11"
                >
                  →
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {hasMany && (
            <div className="flex shrink-0 justify-center gap-2 overflow-x-auto px-4 pb-3 pt-1">
              {images.map((image, index) => (
                <button
                  key={`${image.view}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${image.label} view`}
                  className={`relative h-14 w-14 shrink-0 overflow-hidden border-2 bg-white sm:h-16 sm:w-16 ${
                    activeImage === index
                      ? "border-accent"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image.src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Information */}
        <div className="flex min-h-0 flex-1 flex-col lg:w-[44%] lg:flex-none">
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 lg:px-10 lg:py-9">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              {product.collection}
            </p>

            <h2 className="mt-2 font-heading text-[32px] font-semibold leading-tight text-primary sm:text-[40px]">
              {product.id}
            </h2>

            <p className="mt-1 text-[17px] text-text-secondary sm:text-[18px]">
              {product.title}
            </p>

            <div className="mt-6 divide-y divide-border-light border-y border-border-light">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[100px_1fr] gap-4 py-3 text-[15px]"
                >
                  <span className="font-semibold text-primary">{label}</span>
                  <span className="text-text-secondary">{value}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[15px] leading-7 text-text-secondary">
              Interested in this style? Contact us to discuss your sourcing
              requirements.
            </p>
          </div>

          {/* Pinned inquiry button */}
          <div className="shrink-0 border-t border-border-light bg-white px-5 py-4 sm:px-8 lg:px-10 lg:py-5">
            <Link
              to={`/contact?product=${product.id}`}
              onClick={onClose}
              className="flex w-full items-center justify-center gap-3 bg-primary px-7 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-accent"
            >
              Send Inquiry
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;