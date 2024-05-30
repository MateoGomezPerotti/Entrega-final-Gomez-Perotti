import { useContext } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(item, quantity)
        console.log("Agregaste " + quantity + " Productos al carrito!");
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <h3><b>${item.precio}</b></h3>
                    <p>{item.descripcion}</p>
                    < ItemCount invent={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )

}

export default ItemDetail