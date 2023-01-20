import './ItemListContainer'
import ItemList from '../itemlist/ItemList'




const ItemListContainer = (props) => {
   


    return (
<div>
    {props.greeting}
   <ItemList/>
</div>
    )
}

export default ItemListContainer