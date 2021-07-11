import { createContext, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children, value }) {
  const data = value;

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
