import './ItemCount.css'

import { useState } from 'react'

const ItemCount = (props) => {
  
    const [count, setCount] = useState(0)

    const addOne = () => {
        if(count < props.stock){
            setCount(count + 1)
            props.guardarCantidad(count)
        }
    }
   
    const disOne = () => {
        if(count > 0){
            setCount(count - 1)
            props.guardarCantidad(count)
        }
    }


    return (
        <div>
            <div className='divBotonesSumar-Restar'>
            <button className='btn1' onClick={addOne}>+</button>
            <p className='pItemCount'>{count}</p>
            <button className='btn1 btn1b' onClick={disOne}>-</button>
            </div>
        </div>
    )
} 

export default ItemCount