// import {Link} from 'react-router-dom';

// const Header = () =>{
//     return(
//         <> 
//         <header>
//             <nav className="nav-container">
//                 <p>✅</p>
//                 <ul className="navbar">
//                     <li><Link to ="">inicio</Link></li>
//                     <li><Link to ="">about</Link></li>
//                     <li><Link to ="">contact</Link></li>
//                 </ul>
//             </nav>
//         </header>
//         </>
//     )
// }

// export default Header;


import React from "react";
import './Header.css';
import logo from '../assets/FDI-1.svg';

function Header() {
    return (
        // <div className="image-logo">
        //     <img src={logo} alt="Fabrica de Ideias" className="logo-image" />
        //   </div>
        <header className="header">
            <div className="logo"> <img src={logo} alt="Fábrica de Ideias"/> 
            </div>
            <nav>
                <ul className="nav-menu">
                    <li>Início</li>
                    <li className="active">Sobre mim</li>
                    <li>Colabore</li>
                    <li>Catálogo</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;