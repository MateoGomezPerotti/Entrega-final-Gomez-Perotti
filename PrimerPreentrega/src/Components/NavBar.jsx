import CartWidget from "./CompCarWidget"

const Nav = () => {
return(
<>
<div className="container-fluid bg-secondary">
    <div className="row">
        <div className="col">
            <p><img src={"./public/HardStore.png"} alt="Logo" width={240} /></p>
                <div className="btn-group">
                <button type="button" className="btn btn-secondary">Inicio</button>
                <button type="button" className="btn btn-secondary">Productos</button>
                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
                </button>
    <ul className="dropdown-menu bg-secondary">
        <li><a className="dropdown-item" href="#">Monitores</a></li>
        <li><a className="dropdown-item" href="#">Gabinetes armados</a></li>
        <li><a className="dropdown-item" href="#">Perifericos</a></li>
        <li><a className="dropdown-item" href="#">Hardware</a></li>

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