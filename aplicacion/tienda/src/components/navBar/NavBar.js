import './NavBar.css'
import doggydeli from './img/doggydeli.png'
import CardWidget from '../cardWidget/CardWidget'

import { Link } from 'react-router-dom'

const NavBar = () => {
     return(
        <header>

<div className='div1'>
    <img className='img1' src={doggydeli} alt='logo-tienda'></img>
</div>

            <ul>
                <li className='mx-3'><Link to="inicio">Inicio</Link></li>
                <li className='mx-3'><Link to="productos">Productos</Link></li>
                <li className='mx-3'><Link to="nosotros">Nosotros</Link></li>
                <li className='mx-3 li4'><Link to="accesorios">Accesorios</Link></li>
            </ul>

  <CardWidget className='cardWidget' cantidad="4"></CardWidget>
        </header>
     )
}


export default NavBar