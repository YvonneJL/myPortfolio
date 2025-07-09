import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Portfolio from "./pages/Portfolio"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Portfolio/>}/>
    </Route>
  ))

  return (
    <main className="bg-animate p-5">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
