import { Children, createContext } from "react";

const ShoppingCartContext =createContext();

export default ShoppingCartProvider = ({children}) => {
  return (
    <ShoppingCartContext.Provider>
      {children}
    </ShoppingCartContext.Provider>
  )
}