
import {Link, RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Home, About, Login, Products} from './page/index';
import {  Layout, Error } from './component';
import { useState } from 'react';




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
          path : 'products',
          element : (<Products />)
        },

        {
          path : "login",
          element : <Login />,
        }
        
      ]
    }
])


const App = () => {

  const [user, setUser] = useState()

  return (
    
    <RouterProvider router={route} />
   
  )
}

export default App