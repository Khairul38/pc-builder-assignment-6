import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import React from "react";

const CategoryDetails = ({ products }) => {
  
  return (
    <div>
      <h1>This is category details page</h1>
      {
        products.map((product) => (
          <div key={product._id}>
            <Image src={product.image} alt="" width={500} height={500} />
          </div>
        ))
      }
    </div>
  );
};

export default CategoryDetails;

CategoryDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
  const resData = await res.json();

  const paths = resData.map((category) => ({
    params: { categoryName: category.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/${params.categoryName}`
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    // revalidate: 30,
  };
};
