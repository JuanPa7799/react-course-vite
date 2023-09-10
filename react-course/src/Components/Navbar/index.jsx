import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context';

const Navbar = () =>{
  const activeStye = 'underline underline-offset-4'
  const context = useContext(ShoppingCartContext);


  return(
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-sm font-light">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink 
          to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/'
          onClick={() => context.setSearchByCategory()}
          className ={({ isActive}) =>
            isActive ? activeStye : undefined
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/clothes'
          onClick={() => context.setSearchByCategory('clothes')}
          className ={({ isActive}) =>
            isActive ? activeStye : undefined
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/electronics'
          onClick={() => context.setSearchByCategory('electronics')}
          className ={({ isActive}) =>
            isActive ? activeStye : undefined
          }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/furnitures'
          onClick={() => context.setSearchByCategory('furnitures')}
          className ={({ isActive}) =>
            isActive ? activeStye : undefined
          }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/toys'
          onClick={() => context.setSearchByCategory('toys')}
          className ={({ isActive}) =>
            isActive ? activeStye : undefined
          }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/others'
          onClick={() => context.setSearchByCategory('others')}
          className ={({ isActive}) =>
            isActive ? activeStye : undefined
          }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li className=" text-black/60">
          juanpa@platzi.com
        </li>
        <li>
          <NavLink 
          to='/my-orders'
          className ={({ isActive}) =>
            isActive ? activeStye : undefined
          }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/my-acount'
          className ={({ isActive}) =>
            isActive ? activeStye : undefined
          }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/sign-in'
          className ={({ isActive}) =>
            isActive ? activeStye : undefined
          }>
            Sign In
          </NavLink>
        </li>
        <li className=" flex items-center">
        <ShoppingCartIcon className=' h-6 w-6 text-black'></ShoppingCartIcon>
        <div>
          {context.cartProducts.length}
        </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;

{// import React from 'react'

// function Navbar() {
  // return (
  //   <nav>
  //     <ul>
  //       <li>
  //         <NavLink 
  //         to='/'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           Shopi
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink 
  //         to='/'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           All
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink 
  //         to='/clothes'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           Clothes
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink 
  //         to='/electronics'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           Electronics
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink 
  //         to='/furnitures'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           Furnitures
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink 
  //         to='/toys'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           Toys
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink 
  //         to='/others'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           Others
  //         </NavLink>
  //       </li>
  //     </ul>
  //     <ul>
  //       <li>
  //         <NavLink 
  //         to='/'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           juanpa@platzi.com
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink 
  //         to='/my-orders'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           My Orders
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink 
  //         to='/my-acount'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           My Account
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink 
  //         to='/sign-in'
  //         className ={({ isActive}) =>
  //           isActive ? activeStye : undefined
  //         }>
  //           Sign In
  //         </NavLink>
  //       </li>
  //       <li>
  //         🛒0
  //       </li>
  //     </ul>
  //   </nav>
  // )
// }

// export default Navbar
}