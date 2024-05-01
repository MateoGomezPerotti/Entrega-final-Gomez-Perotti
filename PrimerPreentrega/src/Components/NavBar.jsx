import CartWidget from "./CompCarWidget"
import { NavLink, Link} from "react-router-dom"

const Nav = () => {
return(
<>
<div className="container-fluid bg-secondary">
    <div className="row">
        <div className="col">
            <p><Link to={"/"}><img src={"./public/HardStore.png"} alt="Logo" width={240} /></Link></p>
                <div className="btn-group">
                
                <button className="btn btn bg-secondary text-white"><NavLink className="nav-link text-white bg-secondary"to={"/"}>Inicio</NavLink></button>
                <button className="btn btn bg-secondary text-white"><NavLink className="nav-link text-white bg-secondary"to={"/"}>Productos</NavLink></button>
                
                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
                </button>
    <ul className="dropdown-menu bg-secondary">
        <li><NavLink className="dropdown-item text-white" to={"/category/Monitores"}>Monitores</NavLink></li>
        <li><NavLink className="dropdown-item text-white" to={"/category/Gabinetes"}>Gabinetes</NavLink></li>
        <li><NavLink className="dropdown-item text-white" to={"/category/Perifericos"}>Perifericos</NavLink></li>
        <li><NavLink className="dropdown-item text-white" to={"/category/Hardware"}>Hardware</NavLink></li>

    </ul>
            <button type="button" className="btn btn-secondary">Contacto</button>
            <div className="col justify-content-end"> <CartWidget/> </div>
            </div>
        </div>
    </div>
</div>

</>
)
}

export default Nav