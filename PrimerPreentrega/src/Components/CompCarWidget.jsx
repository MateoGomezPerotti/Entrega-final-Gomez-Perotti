const CartWidget = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                <button type="button" className="btn btn-secondary position-relative">
                        <img src={"/cart.svg"} alt="cart" className="" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default CartWidget


