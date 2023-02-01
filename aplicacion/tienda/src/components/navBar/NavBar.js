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

            <ul className='ulNavBar'>
                <li className='mx-3 liNavBar'><Link className='linkNavBar' to="inicio">Inicio</Link></li>
                <li className='mx-3 liNavBar'><Link className='linkNavBar' to="productos">Productos</Link></li>
                <li className='mx-3 liNavBar'><Link className='linkNavBar' to="nosotros">Nosotros</Link></li>
                <li className='mx-3 liNavBar li4'><Link className='linkNavBar' to="accesorios">Accesorios</Link></li>
            </ul>

<ul className='ulCart'>
    <li className='liCart'><Link className='linkCart' to="/carrito"><CardWidget className='cardWidget' cantidad="4"></CardWidget></Link> </li>
</ul>
           
        </header>
     )
}


export default NavBar