import { Link } from "react-router-dom";

const IMAGE_BACKGROUNDS = ["bg-[#e7f0f6]", "bg-[#f5e8e5]", "bg-[#f4eddc]"];

/**
 * One product card.
 *
 * - product: an item from `products` in data/catalog.js
 * - index:   position in the list (used for the background tint)
 * - variant: "slider" (fixed width, for the home page) or "grid" (full width)
 * - to:      pass a route to render the card as a link
 * - onClick: otherwise the card renders as a button and calls this
 */
const ProductCard = ({
  product,
  index = 0,
  variant = "grid",
  to,
  onClick,
}) => {
  const isSlider = variant === "slider";
  const Heading = isSlider ? "h4" : "h3";

  const wrapperClass = isSlider
    ? "group block w-[280px] shrink-0 text-left sm:w-[310px] lg:w-[330px]"
    : "group block w-full text-left";

  const content = (
    <>
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          isSlider ? "h-[400px]" : "h-[430px]"
        } ${IMAGE_BACKGROUNDS[index % IMAGE_BACKGROUNDS.length]}`}
      >
        {product.image ? (
          <>
            <img
              src={product.image}
              alt={`${product.title} ${product.id}`}
              loading="lazy"
              className={`h-full w-full object-contain p-4 transition-all duration-500 ${
                product.backImage
                  ? "group-hover:opacity-0"
                  : "group-hover:scale-105"
              }`}
            />

            {/* Back view, shown on hover */}
            {product.backImage && (
              <img
                src={product.backImage}
                alt={`${product.title} ${product.id} back view`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-[16px] text-text-secondary">
            Product Image
          </div>
        )}

        {/* SKU Badge */}
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

        <Heading className="mt-2 font-heading text-[29px] font-semibold text-primary">
          {product.title}
        </Heading>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[15px] text-text-secondary">
          {product.styleCode && <span>Style {product.styleCode}</span>}

          {product.hasFrontBack && (
            <>
              {product.styleCode && (
                <span className="text-border-dark">•</span>
              )}
              <span>Front &amp; Back</span>
            </>
          )}
        </div>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={wrapperClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapperClass}>
      {content}
    </button>
  );
};

export default ProductCard;