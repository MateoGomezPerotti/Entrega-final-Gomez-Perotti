import { useEffect, useState } from "react"
import arrayProductos from "./Productos/ListaProductos.json"
import { addDoc, collection, doc, getDocs, getFirestore } from "firebase/firestore";

const Checkout = (sumaTotProdu) => {
    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

useEffect (() => {
     const promesa = new Promise(resolve => {
    setTimeout(() => {
    resolve(arrayProductos);
}, 1000)
})
    promesa.then( respuesta => {
    setCart(respuesta)
})
}, [])

const generarOrden = () => {
    const buyer = {nombre:nombre, email:email, telephone:telephone};
    const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(data => {
        setOrderId(data.id);
    });
}
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <form>
    <div className="mb-3">
    <label className="form-label">Nombre</label>
    <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
    </div>
    <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="text" className="form-control"onInput={(e) => {setEmail(e.target.value)}}/>
    </div>
    <div className="mb-3">
    <label className="form-label">Telefono</label>
    <input type="text" className="form-control"onInput={(e) => {setTelefono(e.target.value)}}/>
    </div>
   
    <button type="button" className="btn btn-secondary text-light" onClick={generarOrden}>Submit</button>
                </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(items => (
                                <tr>
                                    <td><img src={items.imagen} alt={items.nombre} width={80}/></td>
                                    <td>{items.nombre}</td>
                                    <td>${items.precio}</td> 
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>Total</td>
                                <td>${sumaTotProdu}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Checkout;