import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import HotelForm from './components/forms/HotelForm'

const router = createBrowserRouter([{
  path: "/",
  element: <Home/>
},
{
  path: "/hotel-search",
  element: <HotelForm/>
}
])

function App() {

  return (
    <>
    <div className='max-w-screen-xl w-full mx-auto'>
    <Navbar/>
    <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
