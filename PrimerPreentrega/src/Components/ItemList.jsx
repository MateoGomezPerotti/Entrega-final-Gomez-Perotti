import Item from "./Item"

const ItemList = ({items}) => {
    return(
        <>
            {items.map(objeto => (
                <Item key={objeto.id} item={objeto} />
            ))}
        </>
    )
}

export default ItemList