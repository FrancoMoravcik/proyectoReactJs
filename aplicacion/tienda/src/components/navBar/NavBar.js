import './NavBar.css'
import doggydeli from './img/doggydeli.png'
import CardWidget from '../cardWidget/CardWidget'

const NavBar = () => {
     return(
        <header>

<div className='div1'>
    <img className='img1' src={doggydeli} alt='logo-tienda'></img>
</div>

            <ul>
                <li className='mx-3'><a href='#inicio'>Inicio</a></li>
                <li className='mx-3'><a href='#nosotros'>Nosotros</a></li>
                <li className='mx-3'><a href='#catalogo'>Catalogo</a></li>
                <li className='mx-3'><a href='#accesorios'>Accesorios</a></li>
            </ul>

  <CardWidget cantidad="4"></CardWidget>
        </header>
     )
}


export default NavBar