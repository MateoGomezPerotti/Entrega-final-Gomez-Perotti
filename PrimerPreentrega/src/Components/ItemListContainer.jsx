import { useEffect, useState } from "react"
import arrayProductos from "./Productos/ListaProductos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { doc, getDoc, getDocs, collection, getFirestore } from "firebase/firestore"

const ItemContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams()

useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "items")
    const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs(queryCollection).then(snapShot => {
        if (snapShot.size > 0) {
            setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            setVisible(false);
        }       
    })
}, []);


    return(
        
        <div className="container">
            <div className="row">
                <ItemList items={items} />
            </div>
         </div>
        
    )
}

export default ItemContainer