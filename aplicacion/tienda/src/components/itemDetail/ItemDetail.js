import './ItemDetail.css'

import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import {  useState } from 'react'
import {CartProvider, useCartContext} from '../../cartContext/CartContext'


const ItemDetail = ({id, marca, kilogramo, precio, stock}) => {

const [cantidad, setCantidad] = useState(0)

const {agregarAlCarrito} = useCartContext()

const funcionGuardarCantidad = (cantidadX) => {
    setCantidad(cantidadX)
}


const onAdd = () => {
    if(cantidad !== 1){
        const producto = {
            id: id,
            marca: marca,
            kilogramo: kilogramo,
            precio: precio,
            count: cantidad,
        }
    agregarAlCarrito(producto)
    } else{
        alert("No te olvides de sumar un producto")
    }

    }


    return(
        <div className='divItemDetail'>
        <p className='pMarca'>{marca}</p>
        <p className='pKilogramo'>{kilogramo}</p>
        <p className='pPrecio'>{precio}</p>
        <button className='btn2' onClick={onAdd}>onAdd</button>
        <Link className='linkToProductos' to="/productos"> Ver mas productos</Link>
        <ItemCount stock={stock} guardarCantidad={funcionGuardarCantidad}/>
    </div>
    )
}

export default ItemDetail