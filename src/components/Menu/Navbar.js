import React from 'react'; 
import { HashRouter, NavLink } from 'react-router-dom';

const NavBar = ({ onClick, toggle }) => {
    return (
        <HashRouter>
             <div className={`slide-menu ${toggle ? "slide-in" : "slide-out"}`}>
                <ul className="nav-bar">
                    <NavLink onClick={onClick} to='/' >
                        Home
                    </NavLink>
                    <NavLink onClick={onClick} to='/new' >
                        Add New Item
                    </NavLink>
                    <NavLink onClick={onClick} to='/setup' >
                    Configure Pantry
                    </NavLink>
                    <NavLink onClick={onClick} to='/inventory' >
                        Pantry Inventory
                    </NavLink>
                    <NavLink onClick={onClick} to='/about' >
                        About
                    </NavLink>
                </ul>
            </div>
        </HashRouter>
    );
};

export default NavBar


