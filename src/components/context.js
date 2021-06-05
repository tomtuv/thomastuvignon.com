import React from "react"

const Context = React.createContext()

export const Provider = ({ children, value }) => {
  const { data } = value

  return <Context.Provider value={{ data }}>{children}</Context.Provider>
}

export default Context
