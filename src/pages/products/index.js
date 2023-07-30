import RootLayout from "@/components/layout/RootLayout";
import ProductCard from "@/components/ui/ProductCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="text-center dark:text-white pb-8">
        <p className="text-4xl font-bold mb-2">All Products</p>
        <p>Check & Get Your Desire Product!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 px-8 max-w-screen-xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const products = await fetch(`${process.env.API_URL}/api/products`);

  const productsData = await products.json();

  return {
    props: {
      products: productsData,
    },
    // revalidate: 30,
  };
};
