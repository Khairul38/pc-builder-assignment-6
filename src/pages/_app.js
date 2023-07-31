import GlobalContextProvider from "@/context/GlobalContextProvider";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <GlobalContextProvider>
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </SessionProvider>
    </GlobalContextProvider>
  );
}
