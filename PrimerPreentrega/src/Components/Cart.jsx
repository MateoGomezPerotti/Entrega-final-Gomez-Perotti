import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, removeItem, clear, contProduct, sumaTotProdu} = useContext(CartContext);

    if (contProduct() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-light" role="alert">
                            <div>
                                 <h3>No se encontraron productos en tu carrito!</h3>
                                 <Link to={"/"} className="btn text-light bg-secondary">Volver a la pagina principal</Link>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                <td>{item.nombre}</td>
                                <td>${item.precio}</td>
                                <td>{item.quantity}</td>
                                <td className="text-end"><img src={"./public/trash.svg"} alt="trash" className="" /> </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${sumaTotProdu()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;