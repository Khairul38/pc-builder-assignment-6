import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/ui/Banner";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";
import Head from "next/head";

const Home = ({ products, categories }) => {
  return (
    <>
      <Head>
        <title>PC Builder Bangladesh</title>
        <meta
          name="home page"
          description="this page is created by PC Builder Bangladesh"
        />
      </Head>
      <main>
        <Banner />
        {/* Featured Products */}
        <div className="py-10">
          <div className="text-center dark:text-white pb-8">
            <p className="text-4xl font-bold mb-2">Featured Products</p>
            <p>Check & Get Your Desire Product!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 px-8 max-w-screen-xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>

        {/* Featured category */}
        <div className="pt-10 pb-20">
          <div className="text-center dark:text-white pb-8">
            <p className="text-4xl font-bold mb-2">Featured Category</p>
            <p>Get Your Desire Product from Featured Category!</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 px-8 max-w-screen-xl mx-auto">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const products = await fetch(`${process.env.API_URL}/api/products`);
  const categories = await fetch(`${process.env.API_URL}/api/categories`);

  const productsData = await products.json();
  const filterProducts = productsData
    .filter(
      (product) => product.averageRating === 5 && product.status === "In Stock"
    )
    .sort(() => 0.5 - Math.random())
    .slice(0, 9);
  const categoriesData = await categories.json();

  return {
    props: {
      products: filterProducts,
      categories: categoriesData,
    },
    // revalidate: 30,
  };
};
