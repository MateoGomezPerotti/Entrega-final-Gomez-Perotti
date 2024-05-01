import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                <img src={item.imagen} className="img-fluid" alt={item.nombre}></img>
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <h3><b>${item.precio}</b></h3>
                    <p>{item.descripcion}</p>
                    < ItemCount invent={item.stock} />
                </div>
            </div>
        </div>
    )

}

export default ItemDetail