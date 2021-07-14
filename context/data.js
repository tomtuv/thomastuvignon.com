import { createContext, useContext } from "react";

const DataContext = createContext();

export function DataProvider({ children, value }) {
  const data = value;

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}
