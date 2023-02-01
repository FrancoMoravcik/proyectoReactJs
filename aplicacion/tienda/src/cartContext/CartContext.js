import { useContext, createContext, useState } from "react";


export const CartContext = createContext([])


export const useCartContext = () => { return useContext(CartContext)} 

const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const cantidadProductosEnCarrito = () => {
        return items.length
    }

    const agregarAlCarrito = (data) => {

        if(validarProductoExistente(data.id)){
            alert("El producto ya esta en el carrito")
        }else{
            
                   const listaActual = items 
                   listaActual.push(data)
                   setItems(listaActual)
                   console.log(items);
                }

        }


    const borrarProductoDelCarrito = (id) => {
       const listaNueva = items.filter(producto => producto.id !== id)
       setItems(listaNueva)
    }

    const vaciarCarrito = (id) => {
      setItems([])
    }

    const validarProductoExistente = (id) => {
        if(items.find(producto => producto.id === id )){
            return true
        }else{
            return false
        }
    }
 

    return(
    <>
    
    <CartContext.Provider value={{items, agregarAlCarrito}}>
      {children}
    </CartContext.Provider>

    </>
    )
}

export default CartProvider


