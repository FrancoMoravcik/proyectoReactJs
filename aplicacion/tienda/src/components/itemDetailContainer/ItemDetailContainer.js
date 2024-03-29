import './ItemDetailContainer.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {

const [producto, setProducto] = useState({})

 const { productoId } = useParams()
    useEffect(() => {
        fetch('../data/productos.json')
        .then(response => response.json())
        .then(productos => setProducto(productos.find(el => el.id === parseInt(productoId))))
    }, [productoId])
    
    console.log(producto)
   
      
      return(
          
          <div className='ItemDetail-box divPadreItemDetail'>
 
        <ItemDetail {...producto}/> 
        </div>
        
        
        
    )
}

export default ItemDetailContainer