import manifest from "./manifest.json";

/**
 * Turns manifest.json into the shape the UI needs.
 * Used by ProductCard, ProductsPreview (home) and ProductsPage.
 */

export const CATEGORY_NAMES = {
  KID: "Kids Denim",
  JKT: "Denim Jackets",
  PNT: "Denim Pants",
};

const AUDIENCE_NAMES = {
  women: "Women",
  men: "Men",
  kids: "Kids",
};

const VIEW_LABELS = {
  front: "Front",
  back: "Back",
  main: "Main",
  set: "Set",
};

// Images live in public/<folder>/..., so "denim-pants/ZHS-PNT-001_front.png"
// is served from "/denim-pants/ZHS-PNT-001_front.png".
const imageUrl = (file) =>
  `${import.meta.env.BASE_URL}${file}`.replace(/([^:]\/)\/+/g, "$1");

const toTitle = (text) =>
  text
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const buildProduct = (product) => {
  const images = product.images.map((image) => ({
    view: image.view,
    label: VIEW_LABELS[image.view] || toTitle(image.view),
    src: imageUrl(image.file),
  }));

  const find = (view) => images.find((image) => image.view === view);
  const front = find("front") || find("main") || find("set") || images[0];
  const back = find("back");

  const categoryName = CATEGORY_NAMES[product.category] || "Denim";
  const audience = AUDIENCE_NAMES[product.audience] || null;

  return {
    id: product.sku,
    category: product.category,
    categoryName,
    audience,
    title: product.legacy_label ? toTitle(product.legacy_label) : categoryName,
    collection: audience ? `${categoryName} • ${audience}` : categoryName,
    styleCode: product.legacy_code || null,
    image: front?.src || null,
    backImage: back?.src || null,
    hasFrontBack: Boolean(find("front") && back),
    images,
  };
};

export const products = manifest.products.map(buildProduct);

export const productsBySku = new Map(products.map((p) => [p.id, p]));

export const categoryCounts = products.reduce((counts, product) => {
  counts[product.category] = (counts[product.category] || 0) + 1;
  return counts;
}, {});

export const productFilters = [
  { label: "All", value: "all" },
  { label: "Kids", value: "KID" },
  { label: "Jackets", value: "JKT" },
  { label: "Pants", value: "PNT" },
];