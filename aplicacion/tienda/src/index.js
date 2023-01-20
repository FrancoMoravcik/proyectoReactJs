import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//import App from './App';
import NavBar from './components/navBar/NavBar';
import Inicio from './components/inicio/Inicio'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Nosotros from './components/nosotros/Nosotros';
import Accesorios from './components/accesorios/Accesorios';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <NavBar/>

   <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='productos' element={<ItemListContainer/>}/>
        <Route exact path='producto/:productoId' element={<ItemDetailContainer/>}/>
        <Route exact path='nosotros' element={<Nosotros/>}/>
        <Route exact path='accesorios' element={<Accesorios/>}/>

   </Routes>

   </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
