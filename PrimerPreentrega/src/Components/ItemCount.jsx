import { useEffect, useState } from "react";

const ItemCount = ({invent}) => {

    const [contador, setContador] = useState(0);
    const [inventario, setInventario] = useState(invent)

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

    const onAdd = () => {
        if (contador <= inventario)
        setInventario(inventario - contador)
        setContador(0)
    console.log("Agregaste " + contador + " Productos al carrito!");
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
                 <button type="button" className="btn bg-secondary text-white rounded-1 my-1"onClick={onAdd}>Agregar Al Carrito</button>  
            </div>
        </div>
    </div>
    )
}

export default ItemCount;