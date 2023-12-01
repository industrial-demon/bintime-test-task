import { useContext } from "react";
import { Context } from "../providers/store-provider";

export const useStore = () => {
    const ctx = useContext(Context);
  
    if (ctx === null) {
      throw new Error(
        "You have forgotten to wrap your root component with RootStoreProvider"
      );
    }
    return ctx;
  };
  