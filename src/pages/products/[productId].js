import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import React from "react";
import Rating from "react-rating";

const ProductDetails = ({ product }) => {
  return (
    <div className="px-8 max-w-screen-xl mx-auto pt-10">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen-xl dark:border-gray-700 dark:bg-gray-800">
        {/* <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={product?.image}
          alt=""
        /> */}
        <Image
          className="w-"
          src={product?.image}
          alt={product?.name}
          priority={true}
          quality={100}
          width="400"
          height="400"
        />
        <div className="flex flex-col justify-between p-4 leading-normal space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product?.name}
          </h1>
          <p className="font-normal text-gray-700 dark:text-gray-400"></p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Brand: {product?.brand}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Category: {product?.category}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Status: {product?.status}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Price: ${product?.price}
          </p>
          <div className="flex items-center gap-2">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Average Rating:
            </p>
            <div className="flex items-center space-x-2 mr-2">
              <Rating
                className="leading-none space-x-1"
                initialRating={product?.averageRating}
                readonly
                fullSymbol={
                  <svg
                    className="w-4 h-4 fill-current text-amber-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                }
                emptySymbol={
                  <svg
                    className="w-4 h-4 fill-current text-slate-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                }
              />
              {/* Rate */}
              <div className="inline-flex text-sm font-medium text-amber-600">
                {product?.averageRating}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Individual Rating:
            </p>
            <div className="flex items-center space-x-2 mr-2">
              <Rating
                className="leading-none space-x-1"
                initialRating={product?.individualRating}
                fullSymbol={
                  <svg
                    className="w-4 h-4 fill-current text-amber-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                }
                emptySymbol={
                  <svg
                    className="w-4 h-4 fill-current text-slate-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                }
              />
              {/* Rate */}
              <div className="inline-flex text-sm font-medium text-amber-600">
                {product?.averageRating}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <ul
            className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <li className="mr-2">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="true"
                className="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
              >
                Key Features
              </button>
            </li>
            <li className="mr-2">
              <button
                id="services-tab"
                data-tabs-target="#services"
                type="button"
                role="tab"
                aria-controls="services"
                aria-selected="false"
                className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                Description
              </button>
            </li>
            <li className="mr-2">
              <button
                id="statistics-tab"
                data-tabs-target="#statistics"
                type="button"
                role="tab"
                aria-controls="statistics"
                aria-selected="false"
                className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                Reviews
              </button>
            </li>
          </ul>
          <div id="defaultTabContent">
            <div
              className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              {product.keyFeatures.map((kf, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500 mb-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <p className="mb-3 font-semibold text-gray-500 dark:text-gray-400">
                    {kf.title}:
                  </p>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    {kf.description}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="services"
              role="tabpanel"
              aria-labelledby="services-tab"
            >
              <p className="mb-3 font-semibold text-gray-500 dark:text-gray-400">
                {product?.description}:
              </p>
            </div>
            <div
              className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="statistics"
              role="tabpanel"
              aria-labelledby="statistics-tab"
            >
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {product?.reviews.map((review, i) => (
                  <li key={i} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          className="w-8 h-8 rounded-full"
                          src="/avatar-04.jpg"
                          alt={review?.userName}
                          priority={true}
                          quality={100}
                          width="32"
                          height="32"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {review?.userName}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {review?.message}
                        </p>
                      </div>
                      {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        rating
                      </div> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/products`);
  const resData = await res.json();

  const paths = resData.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.API_URL}/api/products/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
    // revalidate: 30,
  };
};
