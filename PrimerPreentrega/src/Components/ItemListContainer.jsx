import { useEffect, useState } from "react"
import arrayProductos from "./Productos/ListaProductos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ItemContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams()

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 1500)
        })
    promesa.then( respuesta => {
        setItems(respuesta)
    })
}, [id])


    return(
        
        <div className="container">
            <div className="row">
                    <ItemList items={items} />
            </div>
         </div>
        
    )
}

export default ItemContainer