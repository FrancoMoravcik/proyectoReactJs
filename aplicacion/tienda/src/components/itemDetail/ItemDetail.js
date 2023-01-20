import './ItemDetail.css'

import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({marca, kilogramo, precio, stock}) => {

    

    return(
        <div className='divItem'>
        <p className='pMarca'>{marca}</p>
        <p className='pKilogramo'>{kilogramo}</p>
        <p className='pPrecio'>{precio}</p>
        <ItemCount stock={stock}/>
    </div>
    )
}

export default ItemDetail