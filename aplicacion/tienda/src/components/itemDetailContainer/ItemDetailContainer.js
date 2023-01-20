import './ItemDetailContainer.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {

const [producto, setProducto] = useState({})

 const { productoId } = useParams()

 
 const getProduct = (productoId) => {
     fetch('/data/productos.json')
     .then(response => response.json())
     .then(productos => setProducto(productos.find(el => el.id === parseInt(productoId))))
    }
    useEffect(() => {
        getProduct()
    }, [productoId])
    
    console.log(`${producto}`)
    console.log(productoId);
      
      return(
          
          <div className='ItemDetail-box divPadreItemDetail'>
 
        <ItemDetail {...producto}/> 
        </div>
        
        
        
    )
}

export default ItemDetailContainer