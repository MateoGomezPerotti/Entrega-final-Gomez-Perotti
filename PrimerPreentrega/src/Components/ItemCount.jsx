import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({invent, onAdd}) => {

    const [contador, setContador] = useState(0);
    const [inventario, setInventario] = useState(invent);
    const [visible, setVisible] = useState(true);


    const incrementar = () => {
        if (contador < inventario) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const agregarCarrito = () => {
        if (contador <= inventario)
        setInventario(inventario - contador)
        onAdd(contador)
        setContador(0)
        setVisible(false)
    }

useEffect(() => {
    setInventario(invent);
}, [invent])


    return(
        <div className="container">
        <div className="row">
            <div className="col">
                <div className="btn-group" role="group">
                    <button type="button" className="btn bg-secondary text-white" onClick={decrementar}> - </button>
                    <button type="button" className="btn bg-secondary text-white">{contador}</button>
                    <button type="button" className="btn bg-secondary text-white" onClick={incrementar}> + </button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                 {visible ? <button type="button" className="btn bg-secondary text-white rounded-1 my-1"onClick={agregarCarrito}>Agregar Al Carrito</button> : <Link to={"/cart"} className="btn bg-secondary text-white rounded-1 my-1">Finalizar compra</Link>} 
            </div>
        </div>
    </div>
    )
}

export default ItemCount;