import './Item.css'

import { Link } from 'react-router-dom'  

const Item = (props) => {

const {marca, kilogramo, precio, id} = props.data

    return(

        <div className='divItem'>
            <p className='pMarca'>{marca}</p>
            <p className='pKilogramo'>{kilogramo}</p>
            <p className='pPrecio'>{precio}</p>
            <Link className='linkDetalle' to={`/producto/${id}`}>Ver detalle del producto</Link>
        </div>
    )
}

export default Item