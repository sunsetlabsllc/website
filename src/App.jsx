import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home'
import Companies from './pages/Companies'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/companies", element: <Companies /> },
  { path: "/contact", element: <Contact /> }
]);

function App() {
  return (
    <div className="h-screen bg-darkBlue">
      <h1 className="sr-only">Sunset Labs</h1>
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-24 lg:px-8">
          <RouterProvider router={router} />
        </div>
      </div>      
    </div>
  )
}

export default App
