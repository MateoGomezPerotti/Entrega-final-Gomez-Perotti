import { Link } from "react-router-dom"
import { CartContext } from "./context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
    const {contProduct} = useContext(CartContext);

        if (contProduct() > 0) {
            return (
                <div className="container-fluid">
            <div className="row">
                <div className="col">
                <Link to={"/Cart"} className="btn btn-secondary position-relative">
                        <img src={"/cart.svg"} alt="cart" className="" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{contProduct()}</span>
                </Link>
            </div>
        </div>
    </div>
    )  
  }
}

export default CartWidget


