// app/category/[category]/[id]/page.jsx
import ProductDetailPage from "@/page/ProductDetailPage";
import productsData from "@/data/products.json";

export async function generateStaticParams() {
  const paths = [];

  // Loop through categories and their products
  for (const [slug, categoryData] of Object.entries(productsData.categories)) {
    if (categoryData.products && Array.isArray(categoryData.products)) {
      categoryData.products.forEach((product) => {
        paths.push({
          category: slug.toLowerCase().replace(/\s+/g, "-"),
          id: String(product.id),
        });
      });
    }
  }

  return paths;
}

export async function generateMetadata({ params }) {
  const { category, id } = params;
  
  // Map URL slugs to data category keys
  const categorySlugMap = {
     'drones': 'drones',
    'smartwatches': 'smartwatches', // URL uses hyphen, data uses one word
    'soundbars': 'soundbars',
    'drills': 'drills', // URL uses full name, data uses "drills"
    'earbuds': 'earbuds'
  };
  
  const dataCategory = categorySlugMap[category];
  
  if (!dataCategory) {
    return {
      title: "Category Not Found | SmartGadget",
    };
  }
  
  const categoryData = productsData.categories[dataCategory];
  
  if (!categoryData) {
    return {
      title: "Category Not Found | SmartGadget",
    };
  }
  
  const product = categoryData?.products?.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return {
      title: "Product Not Found | SmartGadget",
    };
  }

  return {
    title: `${product.name} | SmartGadget`,
    description: product.description,
  };
}

export default function Page({ params }) {
  return <ProductDetailPage />;
}