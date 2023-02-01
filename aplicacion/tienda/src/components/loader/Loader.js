import './Loader.css'

import { useState, useEffect } from 'react'

const Loader = () => {


    const [cargando, setCargando] = useState(true)


    useEffect(() => {

        setTimeout(() => {
            setCargando(false)
        },5000)
    },[])


   return(
 <div>
    { cargando ? 'Cargando' : 'Ya cargo' }
 </div>

   )

}

export default Loader