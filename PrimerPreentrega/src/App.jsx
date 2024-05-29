import './App.css'
import Error404 from './components/Error404'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemContainer from './components/ItemListContainer'
import Nav from './components/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartContextProvider from './components/context/CartContext'
import Cart from './components/Cart'

function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path={"/"} element={<ItemContainer />} />
      <Route path={"/category/:id"} element={<ItemContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"/Cart"} element={<Cart />} />
      <Route path={"*"} element={<Error404 />} />
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App