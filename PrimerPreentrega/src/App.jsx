import './App.css'
import Error404 from './components/Error404'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemContainer from './components/ItemListContainer'
import Nav from './components/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path={"/"} element={<ItemContainer />} />
      <Route path={"/category/:id"} element={<ItemContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"*"} element={<Error404 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App