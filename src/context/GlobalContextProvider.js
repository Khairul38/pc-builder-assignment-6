import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  // Global state management start -->
  const [isLoading, setIsLoading] = useState(true);
  const [pcBuilderData, setPcBuilderData] = useState({});

  // Tost Notification Section
  const notify = (type, message) => {
    switch (type) {
      case "info":
        toast.info(message, {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        break;
      case "success":
        toast.success(message, {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        break;
      case "warning":
        toast.warn(message, {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        break;
      case "error":
        toast.error(message, {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        break;
      default:
        break;
    }
  };

  // Global state management end -->
  const globalStateInfo = {
    isLoading,
    setIsLoading,
    pcBuilderData,
    setPcBuilderData,
    notify,
  };
  return (
    <GlobalContext.Provider value={globalStateInfo}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
