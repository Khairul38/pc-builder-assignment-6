import Image from "next/image";
import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { Avatar, Dropdown } from "flowbite-react";

const categoriesData = [
  "Processor",
  "Motherboard",
  "Graphics Card",
  "RAM",
  "Power Supply Unit",
  "Storage Device",
  "Monitor",
  "Others",
];

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="PCBBD Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PCB <span className="text-base">BD</span>
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <DarkModeSwitcher />
          <button
            onClick={() => {
              router.push("/pc-builder");
            }}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 mx-4 text-center"
          >
            PC Builder
          </button>
          {!session?.user ? (
            <button
              onClick={() => {
                router.push("/login");
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mx- dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          ) : (
            <>
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    alt="User settings"
                    img={session?.user?.image}
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{session?.user?.name}</span>
                  <span className="block truncate text-sm font-medium">
                    {session?.user?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item onClick={() => signOut()}>Logout</Dropdown.Item>
              </Dropdown>
            </>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 ml-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 md:bg-transparent rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  router.asPath === "/"
                    ? "bg-blue-700 text-white md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 "
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 md:bg-transparent rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  !router?.query?.referer &&
                  router.asPath.includes("/categories")
                    ? "bg-blue-700 text-white md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 "
                }`}
              >
                Categories{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  {categoriesData.map((c, i) => (
                    <li key={i}>
                      <Link
                        href={`/categories/${c}`}
                        className={`block px-4 py-2  ${
                          !router?.query?.referer &&
                          router?.query?.categoryName === c
                            ? "bg-blue-700 text-white"
                            : "hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        }`}
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/products"
                className={`block py-2 pl-3 pr-4 md:bg-transparent rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  router.asPath === "/products"
                    ? "bg-blue-700 text-white md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 "
                }`}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
