import React from "react"
import { Provider } from "./context"

const WrapPageElement = ({ element, props }) => (
  <Provider value={props}>{element}</Provider>
)

export default WrapPageElement
