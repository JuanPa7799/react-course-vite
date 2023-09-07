import { useRoutes, BrowserRouter} from 'react-router-dom';
import './App.css';
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home';
import MyAcount from '../MyAcount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';

const AppRoutes = () => {
  let routes =useRoutes([
    {path: '/',element: <Home />},
    {path: '/my-acount',element: <MyAcount />},
    {path: '/my-order',element: <MyOrder />},
    {path: '/my-orders',element: <MyOrders />},
    {path: '/sign-in',element: <SignIn />},
    {path: '/*',element: <NotFound />},
  ]);
  return routes;
}

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes/>
          <Navbar />
          <CheckoutSideMenu/>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App
