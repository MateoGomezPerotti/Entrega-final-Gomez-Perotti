const ItemContainer = ({notificacion}) => {
    return(
        
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 style={{fontWeight:"bold"}}>{notificacion}</h2>
                </div>
            </div>
        </div>
        
    )
}

export default ItemContainer