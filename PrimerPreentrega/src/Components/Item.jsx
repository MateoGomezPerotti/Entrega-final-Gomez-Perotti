import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
<div className="col-md-4 text-center">
    <Link className="text-decoration-none" to={"/item/" + item.id}>
    <div className="card">
        <img src={item.imagen} className="img-fluid" alt={item.nombre}></img>
        <div className="card-body">
        <p className="card-text text-decoration-none">{item.nombre}</p>
        <p className="card-text text-decoration-none"><b>${item.precio}</b></p>
        </div>
    </div>
    </Link>
</div>

        
    )
}

export default Item