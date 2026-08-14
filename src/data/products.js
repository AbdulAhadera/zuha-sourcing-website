/*
|--------------------------------------------------------------------------
| ZUHA SOURCING - PRODUCT DATA
|--------------------------------------------------------------------------
|
| All images inside:
|
| src/assets/denim/
|
| are automatically imported.
|
| Examples:
| MN 1601.jpg
| MN 1622 FRONT.png
| MN 1622 BACK.png
| MN 1624 SET.png
|
| FRONT / BACK / SET files with the same MN number are automatically
| grouped into one product.
|
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| AUTO IMPORT ALL DENIM IMAGES
|--------------------------------------------------------------------------
*/

const denimImages = import.meta.glob(
  "../assets/denim/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

const normalizeStyleId = (fileName) => {
  const normalized = fileName
    .replace(/\.[^/.]+$/, "")
    .toUpperCase()
    .replace(/\s+/g, " ")
    .trim();

  const match = normalized.match(/MN\s*(\d{4})/);

  if (!match) return null;

  return `MN ${match[1]}`;
};

const getImageLabel = (fileName) => {
  const upperName = fileName.toUpperCase();

  if (upperName.includes("FRONT")) return "Front";
  if (upperName.includes("BACK")) return "Back";
  if (upperName.includes("SET")) return "Set";

  return "View";
};

const imagePriority = {
  Front: 1,
  Set: 2,
  View: 3,
  Back: 4,
};

/*
|--------------------------------------------------------------------------
| REUSABLE PRODUCT DETAILS
|--------------------------------------------------------------------------
*/

const mensSlimStretch = (wash = "") => ({
  title: "Men's Denim",
  gender: "Men",
  collection: "Men's Casual Classics",
  composition: "98% Cotton, 2% Elastane",
  fit: "Slim Fit",
  feel: "Soft Hand Feel",
  wash,
});

const mensRegularStretch = (wash = "") => ({
  title: "Men's Denim",
  gender: "Men",
  collection: "Men's Casual Classics",
  composition: "99% Cotton, 1% Elastane",
  fit: "Regular Fit",
  feel: "Soft Hand Feel",
  wash,
});

const mens100Cotton11Oz = {
  title: "Men's Denim",
  gender: "Men",
  collection: "Men's Denim Casual Classics",
  composition: "100% Cotton, 11 oz",
  fit: "",
  feel: "",
  wash: "",
};

const mensSlim98 = {
  title: "Men's Denim",
  gender: "Men",
  collection: "Men's Denim Casual Classics",
  composition: "98% Cotton, 2% Elastane",
  fit: "Slim Fit",
  feel: "",
  wash: "",
};

const mensRegular100 = {
  title: "Men's Denim",
  gender: "Men",
  collection: "Men's Denim Casual Classics",
  composition: "100% Cotton",
  fit: "Regular Fit",
  feel: "",
  wash: "",
};

const ladiesSlim98 = {
  title: "Ladies' Denim",
  gender: "Women",
  collection: "Ladies' Casual Classics",
  composition: "98% Cotton, 2% Elastane",
  fit: "Slim Fit",
  feel: "Soft Hand Feel",
  wash: "",
};

/*
|--------------------------------------------------------------------------
| PRODUCT METADATA
|--------------------------------------------------------------------------
|
| Product specifications from the catalogues.
|
| If an MN style does not exist here, it will STILL appear on the website.
| It will simply use the fallback/default product information.
|
|--------------------------------------------------------------------------
*/

const productDetails = {
  /*
  |--------------------------------------------------------------------------
  | 1600 SERIES
  |--------------------------------------------------------------------------
  */

  "MN 1601": mensSlimStretch("Apollo 11"),

  "MN 1602": mensSlimStretch("Oder"),

  "MN 1603": mensSlimStretch("Kracow"),

  "MN 1604": mensSlimStretch("Kalisz"),

  "MN 1605": mensSlimStretch("Fondane"),

  "MN 1606": mensSlimStretch("Moonbeam"),

  "MN 1607": mensSlimStretch("Himalian Indigo"),

  "MN 1608": mensSlimStretch("Wonderwall"),

  "MN 1609": mensSlimStretch("Happy Hellowen"),

  "MN 1610": mensSlimStretch("Fashionista"),

  "MN 1611": mensSlimStretch("NYC Subway"),

  "MN 1612": mensSlimStretch("Keats Odes"),

  "MN 1613": mensSlimStretch("Midnight Resistance"),

  "MN 1614": mensSlimStretch("Grey Grace"),

  "MN 1615": mensSlimStretch("Fondane"),

  "MN 1617": mensSlimStretch("Fondane"),

  "MN 1618": mensSlimStretch("Fondane"),

  "MN 1619": mensRegularStretch("Fondane"),

  "MN 1620": mensSlimStretch("Pearl Dust"),

  "MN 1621": mensRegularStretch("Grey Grace"),

  /*
  |--------------------------------------------------------------------------
  | 1622 - 1624
  |--------------------------------------------------------------------------
  |
  | These have multiple FRONT / BACK / SET images in your assets.
  | Exact specifications can be added later when confirmed.
  |
  */

  "MN 1622": {
    title: "Men's Denim",
    gender: "Men",
    collection: "Men's Casual Classics",
    composition: "",
    fit: "",
    feel: "",
    wash: "",
  },

  "MN 1623": {
    title: "Men's Denim",
    gender: "Men",
    collection: "Men's Casual Classics",
    composition: "",
    fit: "",
    feel: "",
    wash: "",
  },

  "MN 1624": {
    title: "Men's Denim Set",
    gender: "Men",
    collection: "Men's Casual Classics",
    composition: "",
    fit: "",
    feel: "",
    wash: "",
  },

  /*
  |--------------------------------------------------------------------------
  | 3300 SERIES
  |--------------------------------------------------------------------------
  */

  "MN 3305": {
    ...mens100Cotton11Oz,
  },

  "MN 3307": {
    ...mens100Cotton11Oz,
  },

  "MN 3308": {
    ...mens100Cotton11Oz,
  },

  "MN 3309": {
    ...mens100Cotton11Oz,
  },

  "MN 3310": {
    ...mens100Cotton11Oz,
  },

  "MN 3311": {
    ...mens100Cotton11Oz,
  },

  "MN 3312": {
    ...mensSlim98,
    wash: "Stone Washed",
  },

  "MN 3313": {
    ...mensSlim98,
    wash: "Stone Washed",
  },

  "MN 3314": {
    title: "Men's Denim",
    gender: "Men",
    collection: "Men's Denim Casual Classics",
    composition: "100% Cotton, 10.5 oz",
    fit: "",
    feel: "Soft Hand Feel",
    wash: "Stone Washed",
  },

  "MN 3315": {
    ...mensSlim98,
  },

  "MN 3316": {
    ...mensSlim98,
  },

  "MN 3317": {
    ...mensRegular100,
  },

  "MN 3318": {
    ...mensRegular100,
  },

  "MN 3319": {
    ...mensSlim98,
  },

  "MN 3320": {
    ...mensSlim98,
  },

  "MN 3321": {
    ...mensRegular100,
  },

  "MN 3322": {
    ...mensRegular100,
  },

  "MN 3323": {
    ...mensRegular100,
  },

  "MN 3324": {
    ...mensRegular100,
  },

  "MN 3325": {
    ...mensSlim98,
  },

  "MN 3326": {
    ...mensSlim98,
  },

  "MN 3327": {
    ...mensSlim98,
    feel: "Soft Hand Feel",
  },

  "MN 3328": {
    ...mensSlim98,
    feel: "Soft Hand Feel",
  },

  "MN 3329": {
    ...mensSlim98,
  },

  "MN 3330": {
    ...mensSlim98,
  },

  /*
  |--------------------------------------------------------------------------
  | LADIES
  |--------------------------------------------------------------------------
  */

  "MN 3331": {
    ...ladiesSlim98,
  },

  "MN 3332": {
    ...ladiesSlim98,
  },

  "MN 3333": {
    ...ladiesSlim98,
  },
};

/*
|--------------------------------------------------------------------------
| DEFAULT PRODUCT DATA
|--------------------------------------------------------------------------
|
| Used if you add a new image into assets/denim but haven't added its
| specifications to productDetails yet.
|
|--------------------------------------------------------------------------
*/

const getDefaultDetails = (id) => {
  const styleNumber = Number(id.replace(/\D/g, ""));

  const isLadies = styleNumber >= 3331 && styleNumber <= 3333;

  return {
    title: isLadies ? "Ladies' Denim" : "Men's Denim",
    gender: isLadies ? "Women" : "Men",
    collection: isLadies
      ? "Ladies' Casual Classics"
      : "Denim Casual Classics",
    composition: "",
    fit: "",
    feel: "",
    wash: "",
  };
};

/*
|--------------------------------------------------------------------------
| GROUP IMAGES BY PRODUCT ID
|--------------------------------------------------------------------------
|
| Example:
|
| MN 1622 FRONT.png
| MN 1622 BACK.png
|
| becomes:
|
| {
|   id: "MN 1622",
|   images: [
|     { label: "Front", src: "..." },
|     { label: "Back", src: "..." }
|   ]
| }
|
|--------------------------------------------------------------------------
*/

const groupedProducts = Object.entries(denimImages).reduce(
  (groups, [path, imageUrl]) => {
    const fileName = path.split("/").pop();

    if (!fileName) return groups;

    const id = normalizeStyleId(fileName);

    if (!id) return groups;

    const label = getImageLabel(fileName);

    if (!groups[id]) {
      groups[id] = {
        id,
        images: [],
      };
    }

    groups[id].images.push({
      src: imageUrl,
      label,
      fileName,
    });

    return groups;
  },
  {}
);

/*
|--------------------------------------------------------------------------
| BUILD FINAL PRODUCTS ARRAY
|--------------------------------------------------------------------------
*/

export const products = Object.values(groupedProducts)
  .map((product) => {
    const details =
      productDetails[product.id] || getDefaultDetails(product.id);

    const sortedImages = [...product.images].sort((a, b) => {
      const priorityA = imagePriority[a.label] || 99;
      const priorityB = imagePriority[b.label] || 99;

      return priorityA - priorityB;
    });

    return {
      id: product.id,

      category: "Denim",

      title: details.title,

      gender: details.gender,

      collection: details.collection,

      composition: details.composition,

      fit: details.fit,

      feel: details.feel,

      wash: details.wash,

      /*
      |--------------------------------------------------------------------------
      | BACKWARD COMPATIBILITY
      |--------------------------------------------------------------------------
      |
      | product.image
      |
      | can continue being used by your existing ProductsPreview and
      | ProductsPage.
      |
      */

      image: sortedImages[0]?.src || "",

      /*
      |--------------------------------------------------------------------------
      | MULTIPLE IMAGES
      |--------------------------------------------------------------------------
      |
      | Used later inside the Quick View modal.
      |
      */

      images: sortedImages,
    };
  })

  /*
  |--------------------------------------------------------------------------
  | SORT BY MN NUMBER
  |--------------------------------------------------------------------------
  */

  .sort((a, b) => {
    const numberA = Number(a.id.replace(/\D/g, ""));
    const numberB = Number(b.id.replace(/\D/g, ""));

    return numberA - numberB;
  });

/*
|--------------------------------------------------------------------------
| FEATURED PRODUCTS
|--------------------------------------------------------------------------
|
| These will be shown on the homepage.
|
| Change these IDs whenever you want different products on the homepage.
|
|--------------------------------------------------------------------------
*/

export const featuredProductIds = [
  "MN 1601",
  "MN 1603",
  "MN 1624",
  "MN 3307",
  "MN 3314",
  "MN 3331",
];

export const featuredProducts = featuredProductIds
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean);

/*
|--------------------------------------------------------------------------
| SIMPLE FILTER VALUES
|--------------------------------------------------------------------------
*/

export const productFilters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Men",
    value: "Men",
  },
  {
    label: "Women",
    value: "Women",
  },
];

/*
|--------------------------------------------------------------------------
| PRODUCT HELPERS
|--------------------------------------------------------------------------
*/

export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

export const getProductsByGender = (gender) => {
  return products.filter((product) => product.gender === gender);
};

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export default products;