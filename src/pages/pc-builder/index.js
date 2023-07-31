import RootLayout from "@/components/layout/RootLayout";
import useGlobalContext from "@/hooks/useGlobalContext";
import GetCamelCase from "@/utils/GetCamelCase";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PcBuilder = ({ categories }) => {
  const { pcBuilderData, setPcBuilderData, notify } = useGlobalContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  const calculateTotalPrice = () => {
    let total = 0;
    Object.keys(pcBuilderData).map((key) => {
      total = total + pcBuilderData[key]?.price;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    if (Object.keys(pcBuilderData).length > 0) {
      calculateTotalPrice();
    }
  }, [pcBuilderData]);

  return (
    <div className="flex justify-center align-middle items-center min-h-[80vh] px-8 py-12 max-w-screen-2xl mx-auto">
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Build Your Own Computer
          </h5>
          <div>
            {Object.keys(pcBuilderData).length > 0 && (
              <div className="inline-flex text-sm font-medium bg-blue-100 text-blue-600 dark:bg-gray-600 dark:text-gray-300 rounded-lg text-center px-4 py-2">
                {Object.keys(pcBuilderData).length} Items ${totalPrice}
              </div>
            )}
            <button
              onClick={() => {
                notify("success", "PC build successfully done");
                router.push("/");
              }}
              disabled={Object.keys(pcBuilderData).length < 6}
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 ml-4 text-center disabled:cursor-not-allowed"
            >
              Complete Build
            </button>
          </div>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {categories.map((category) => (
              <li key={category._id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="w-16 h-16 bg-blue-50 dark:bg-gray-400 rounded-lg p-2"
                      src={category.image}
                      alt={category.name}
                      priority
                      quality={100}
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                      {category.name}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      router.push(
                        `/categories/${category?.name}?referer=pc-builder`,
                        `/categories/${category?.name}`
                      )
                    }
                    type="button"
                    className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Select
                  </button>
                </div>
                {pcBuilderData[GetCamelCase(category.name)] && (
                  <div className="w-[85%] mx-auto">
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex-shrink-0">
                        <Image
                          className="w-16 h-16 rounded-lg"
                          src={
                            pcBuilderData[GetCamelCase(category.name)]?.image
                          }
                          alt={category.name}
                          priority
                          quality={100}
                          width={56}
                          height={56}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-medium text-gray-900 truncate dark:text-white">
                          {pcBuilderData[GetCamelCase(category.name)].name}
                        </p>
                        <div className="inline-flex text-sm font-medium bg-blue-100 text-blue-600 dark:bg-gray-600 dark:text-gray-300 rounded-lg text-center px-2 py-0.5 mt-1">
                          ${pcBuilderData[GetCamelCase(category.name)].price}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const {
                            [GetCamelCase(category.name)]: _,
                            ...newObject
                          } = pcBuilderData;
                          setPcBuilderData(newObject);
                        }}
                        type="button"
                        className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="w-4 h-4 text-current"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const categories = await fetch(`${process.env.API_URL}/api/categories`);
  const categoriesData = await categories.json();

  const filterCategories = categoriesData.slice(0, 7);
  return {
    props: {
      categories: filterCategories,
    },
    // revalidate: 30,
  };
};
