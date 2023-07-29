import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const Products = () => {
  return (
    <div>
      <h1>This is all products page</h1>
    </div>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};