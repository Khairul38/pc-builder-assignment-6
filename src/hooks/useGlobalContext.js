import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContextProvider";

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default useGlobalContext;
