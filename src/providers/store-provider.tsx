import { ReactNode, createContext } from "react";
import { PaginationControl, RootStore } from "../root-store";

export const Context = createContext<RootStore | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Context.Provider value={new RootStore(new PaginationControl())}>
      {children}
    </Context.Provider>
  );
};
