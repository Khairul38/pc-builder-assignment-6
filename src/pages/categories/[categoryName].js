import RootLayout from "@/components/layout/RootLayout";
import ProductCard from "@/components/ui/ProductCard";
import { useRouter } from "next/router";

const CategoryDetails = ({ products }) => {
  const { query } = useRouter();
  return (
    <div className="py-10">
      <div className="text-center dark:text-white pb-8">
        <p className="text-4xl font-bold mb-2">{query.categoryName}</p>
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

export default CategoryDetails;

CategoryDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/categories`);
  const resData = await res.json();

  const paths = resData.map((category) => ({
    params: { categoryName: category.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.API_URL}/api/products/${params.categoryName}`
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    // revalidate: 30,
  };
};
