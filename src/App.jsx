import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import './App.css'
import { Details } from "./pages/Details"
import { Home } from "./pages/Home"
import { Products } from "./pages/Products"

function App() {
  
  const [data, setData] = useState()
    useEffect(
        ()=>{
            fetch('https://northwind.vercel.app/api/suppliers')
            .then(response => response.json())
            .then(data => setData(data))
            .then(()=>{console.log(data)})
        }
    ,[])

  
  return (
    <div className="App">
   <header>
    <Link className="link" to='/'>Home</Link>
    <Link className="link" to='/products'>Products</Link>
    <Link className="link" to='/details'>Details</Link>
   </header>
   <main>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/details" element={<Details></Details>}></Route>
    </Routes>
   </main>
   <footer>© 2022, All Rights Reserved</footer>
    </div>
  )
}

export default App
