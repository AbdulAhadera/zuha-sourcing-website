import { useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { categoryCounts, productsBySku } from "../data/catalog";

/**
 * The three sections shown on the home page, in display order.
 * `skus` controls which products appear in each slider (SKUs from manifest.json).
 */
const SECTIONS = [
  {
    category: "KID",
    eyebrow: "Kids",
    title: "Denim Kids",
    description: "Jeans, shorts, cargos and jackets for boys and girls.",
    skus: [
      "ZHS-KID-001",
      "ZHS-KID-004",
      "ZHS-KID-005",
      "ZHS-KID-006",
      "ZHS-KID-009",
      "ZHS-KID-010",
      "ZHS-KID-011",
      "ZHS-KID-013",
    ],
  },
  {
    category: "JKT",
    eyebrow: "Jackets",
    title: "Denim Jackets",
    description: "Ladies and men's denim jackets in different washes and details.",
    skus: [
      "ZHS-JKT-001",
      "ZHS-JKT-002",
      "ZHS-JKT-010",
      "ZHS-JKT-011",
      "ZHS-JKT-012",
      "ZHS-JKT-014",
      "ZHS-JKT-016",
      "ZHS-JKT-017",
    ],
  },
  {
    category: "PNT",
    eyebrow: "Pants",
    title: "Denim Pants",
    description: "Wide-leg, baggy, cargo, chino and twill styles for ladies and men.",
    skus: [
      "ZHS-PNT-001",
      "ZHS-PNT-003",
      "ZHS-PNT-007",
      "ZHS-PNT-056",
      "ZHS-PNT-061",
      "ZHS-PNT-066",
      "ZHS-PNT-067",
      "ZHS-PNT-069",
    ],
  },
];

const CategorySlider = ({ section, isFirst }) => {
  const sliderRef = useRef(null);

  const products = section.skus
    .map((sku) => productsBySku.get(sku))
    .filter(Boolean);

  const scrollBy = (amount) => {
    sliderRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (products.length === 0) return null;

  return (
    <div className={isFirst ? "" : "mt-16 border-t border-border-light pt-14"}>
      {/* Sub header */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-[640px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-accent">
            {section.eyebrow} • {categoryCounts[section.category] || 0} styles
          </p>

          <h3 className="mt-2 font-heading text-[34px] font-semibold leading-tight text-primary sm:text-[40px]">
            {section.title}
          </h3>

          <p className="mt-3 text-[16px] leading-7 text-text-secondary sm:text-[17px]">
            {section.description}
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-360)}
            aria-label={`Previous ${section.title}`}
            className="flex h-12 w-12 items-center justify-center border border-border-light bg-white text-xl text-primary transition duration-300 hover:border-accent hover:bg-accent hover:text-white"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollBy(360)}
            aria-label={`Next ${section.title}`}
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
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            variant="slider"
            to={`/products?category=${section.category}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProductsPreview = () => {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Main Header */}
        <div className="mb-14 max-w-[760px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-accent">
            Our Products
          </p>

          <h2 className="mt-3 font-heading text-[42px] font-semibold leading-tight text-primary sm:text-[52px] lg:text-[58px]">
            Explore Our{" "}
            <span className="text-accent">Featured Collection.</span>
          </h2>

          <p className="mt-5 max-w-[680px] text-[17px] leading-8 text-text-secondary sm:text-[18px]">
            A selection of garment styles from our denim sourcing collection.
          </p>
        </div>

        {/* Category Sliders */}
        {SECTIONS.map((section, index) => (
          <CategorySlider
            key={section.category}
            section={section}
            isFirst={index === 0}
          />
        ))}

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-border-light pt-8 sm:flex-row sm:items-center">
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