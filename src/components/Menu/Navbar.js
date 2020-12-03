import React from 'react'; 
import { HashRouter, NavLink } from 'react-router-dom';

const NavBar = ({ onClick, toggle }) => {
    return (
        <HashRouter>
             <div className={`slide-menu ${toggle ? "slide-in" : "slide-out"}`}>
                <ul className="nav-bar">
                    <NavLink 
                        className="home-nav"
                        onClick={onClick} to='/' >
                        Home
                    </NavLink>
                    <NavLink 
                        className="add-item-nav"
                        onClick={onClick} to='/new' >
                        Add New Item
                    </NavLink>
                    <NavLink 
                        className="inventory-nav"
                        onClick={onClick} to='/inventory' >
                        Pantry Inventory
                    </NavLink>
                    <NavLink 
                        className="about-nav"
                        onClick={onClick} to='/about' >
                        About
                    </NavLink>
                </ul>
            </div>
        </HashRouter>
    );
};

export default NavBar


