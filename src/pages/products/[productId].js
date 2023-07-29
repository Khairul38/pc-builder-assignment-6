import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <h1>This is product details page</h1>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
