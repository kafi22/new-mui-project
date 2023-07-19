
import {Link, RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Home, About, Login, Products} from './page/index';
import {  Layout, Error } from './component';
import { useState } from 'react';
import ProductItem from './component/productItem';
import GlobalProvider from './UserContext/GlobalProvider';
import ProtectedRoute from './component/ProtectedRoute';
import Dashboard from './page/Dashboard';




const route =createBrowserRouter([
    {
      path : "/",
      element : <Layout />,
      errorElement : <Error />,

      children : [
        {
          index : true,
          element : <Home />,

        },

        {
          path : "about",
          element : <About />,

          children : [
            {
              path : "me",
              element : (<div>

                <h1>hello, this is me, kafi ahmed</h1>

                <Link to={'/about'}>back to about</Link>
              </div>)
            },

          ]
        },

        {
          path : 'product',
          element : (<Products />)
        },

        {
          path : 'product/:id',
          element : <ProductItem />
        },

        {
          path : "login",
          element : <Login />,
         
        },

        {
          path : "dashboard",
          element : (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          )
        },
        
      ]
    }
])


const App = () => {



  

  return (
    <GlobalProvider>
      <RouterProvider router={route} />
    </GlobalProvider>
   
  )
}

export default App