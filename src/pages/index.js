import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/ui/Banner";
import Head from "next/head";

const Home = () => {
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
        <div>
          <p>Featured Products</p>
          <p>Check & Get Your Desire Product!</p>
        </div>
        <div>
          <p>Featured Category</p>
          <p>Get Your Desire Product from Featured Category!</p>
        </div>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
