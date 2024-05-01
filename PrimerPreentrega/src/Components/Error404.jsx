import { Link } from "react-router-dom";

const Error404 = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Error 404</h1>
                    <h2>La Pagina que ingresaste no existe</h2>
                    <p><Link to={"/"} className="btn bg-secondary text-white">Volver a la Pagina Principal</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;