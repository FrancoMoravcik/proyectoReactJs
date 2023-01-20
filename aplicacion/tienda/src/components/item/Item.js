import './Item.css'

import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'  

const Item = (props) => {

const {marca, kilogramo, precio, stock, id} = props.data

    return(

        <div className='divItem'>
            <p className='pMarca'>{marca}</p>
            <p className='pKilogramo'>{kilogramo}</p>
            <p className='pPrecio'>{precio}</p>
            <ItemCount stock={stock}/>
            <Link className='linkDetalle' to={`/producto/${id}`}>Ver detalle del producto</Link>
        </div>
    )
}

export default Item