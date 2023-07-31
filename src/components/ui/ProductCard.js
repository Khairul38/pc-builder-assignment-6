import useGlobalContext from "@/hooks/useGlobalContext";
import GetCamelCase from "@/utils/GetCamelCase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const { pcBuilderData, setPcBuilderData } = useGlobalContext();

  return (
    <div className="mx-auto">
      <div className="max-w-sm bg-white border border-blue-200 rounded-lg dark:bg-gray-800 dark:border-blue-700 shadow-md shadow-blue-200 hover:shadow-blue-200 dark:shadow-blue-500 dark:hover:shadow-blue-500 hover:shadow-2xl transition-all overflow-hidden cursor-pointer">
        <div
          onClick={() => router.push(`/products/${product?._id}`)}
          className="relative"
        >
          <Image
            className="rounded-t-lg w-full p-4"
            src={product?.image}
            alt={product?.name}
            priority={true}
            quality={100}
            width="200"
            height="200"
          />
          <div className="absolute top-0 right-0">
            <div className="text-xs font-medium text-slate-100  bg-blue-600 bg-opacity-90 rounded-bl-xl text-center px-2 py-1">
              <span>{product?.category}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <div
              className={`text-xs font-medium text-slate-100 ${
                product?.status === "Out of Stock"
                  ? "bg-red-600"
                  : "bg-blue-600"
              } bg-opacity-90 rounded-tr-xl text-center px-2 py-1`}
            >
              <span>{product?.status}</span>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <Link href={`/products/${product?._id}`}>
            <h5 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-400 line-clamp-2">
              {product?.name}
            </h5>

            {/* Rating and price */}
            <div className="flex flex-wrap justify-between items-center">
              {/* Rating */}
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

              {/* Price */}
              <div>
                <div className="inline-flex text-sm font-medium bg-blue-100 text-blue-600 dark:bg-gray-600 dark:text-gray-300 rounded-lg text-center px-2 py-0.5">
                  ${product?.price}
                </div>
              </div>
            </div>
          </Link>
          {router?.query?.referer && (
            <button
              onClick={() => {
                setPcBuilderData({
                  ...pcBuilderData,
                  [GetCamelCase(product.category)]: product,
                });
                router.push("/pc-builder", "/pc-builder", { scroll: false });
              }}
              type="button"
              className="w-full py-2.5 px-5 mb- text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Add To Builder
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
