import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const PcBuilder = () => {
  return (
    <div>
      <h1>This is pc builder page</h1>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
