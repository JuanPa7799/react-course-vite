import { useRoutes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from '../Home';
import MyAcount from '../MyAcount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

const AppRoutes = () => {
  let routes =useRoutes([
    {path: '/',element: <Home />},
    {path: '/my-acount',element: <MyAcount />},
    {path: '/my-order',element: <MyOrder />},
    {path: '/my-orders',element: <MyOrders />},
    {path: '/sig-in',element: <SignIn />},
    {path: '/*',element: <NotFound />},
  ]);
  return routes;
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
