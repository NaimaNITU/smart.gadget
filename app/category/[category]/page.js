// app/category/[category]/page.jsx
import DynamicPage from "@/page/DynamicPage";
import productsData from "@/data/products.json";

export async function generateStaticParams() {
  // Define the exact category slugs that exist in your data
  const validCategories = [
    { category: "drones" },
    { category: "smartwatches" },
    { category: "soundbars" },
    { category: "drills" },
    { category: "earbuds" }
  ];
  
  return validCategories;
}

export async function generateMetadata({ params }) {
  // Await params for Next.js 15
  const awaitedParams = await params;
  const { category } = awaitedParams;
  
  // Map URL slugs to data category keys
  const categorySlugMap = {
    'drones': 'drones',
    'smartwatches': 'smartwatches',
    'soundbars': 'soundbars',
    'drills': 'drills',
    'earbuds': 'earbuds'
  };
  
  const dataCategory = categorySlugMap[category];
  const categoryData = productsData.categories[dataCategory];

  if (!categoryData) {
    return {
      title: "Category Not Found | SmartGadget",
    };
  }

  return {
    title: `${categoryData.name} | SmartGadget`,
    description: categoryData.description,
  };
}

export default function Page({ params }) {
  return <DynamicPage />;
}