import './App.css'
import ItemContainer from './components/ItemListContainer'
import Nav from './components/NavBar'

function App() {

  return (
    <>
    <Nav />
    <ItemContainer notificacion={"Hacemos envios a todo el país"} />
    </>
  )
}

export default App