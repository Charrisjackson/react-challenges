import {NavLink} from 'react-router-dom';

import './App.css'


export default function Navbar(){
    return(
        <>
     <nav className="navbar">
     <ul>
        <li><NavLink to="/" className={({isActive})=> isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive})=> isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/contact" className={({isActive})=> isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
     </nav>

</>
    )
}