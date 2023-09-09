import { createContext, useState, useEffect } from "react";


export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    // *Shoping Cart - Increment quantity
  const[count,setCount] = useState(0)

    // *Product Detail - Open/Close
  const[isProductDetailOpen,setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true) 
  const closeProductDetail = () => setIsProductDetailOpen(false) 
  
  // *Checkout Side Menu - Open/Close
const[isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen] = useState(false)
const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true) 
const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false) 

  // *Product Detail - Showproduct
  const[productToShow, setProductToShow] = useState({})

  // *Shopping cart - Add products to cart.
  const[cartProducts, setCartProducts] = useState([])
  
  // *Shopping cart - Order.
  const[order, setOrder] = useState([])

  // *Get products
  const [items,setItems] = useState(null);
  
  // *Get products by filter
  const [filteredItems,setFilteredItems] = useState(null);

  // *Get products by title
  const [searchByTitle, setsearchByTitle] = useState(null);
  console.log('searchByTitle: ',searchByTitle );

  useEffect(() => {
    // fetch pide los elementos d ela API
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
    
  },[])
  
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle))
    
  },[items, searchByTitle])




  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen, 
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order, 
      setOrder,
      items,
      setItems,
      searchByTitle,
      setsearchByTitle,
      filteredItems,
      setFilteredItems, 
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}