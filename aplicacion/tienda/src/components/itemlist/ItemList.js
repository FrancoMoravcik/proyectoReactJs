import './ItemList.css'

import Item from '../item/Item'


import { useState, useEffect } from 'react'

const ItemList = (props) => {

   const [productos, setProductos] = useState("")

   useEffect(() => {
      fetch('/data/productos.json')
      .then(res=>res.json())
      .then(json=> setProductos(json.map(productos => <Item key={productos.id} data={productos}/>)))

   },[])


   return(

        <div className='divPadreItems'>
            {productos}
        </div>
    )
}

export default ItemList