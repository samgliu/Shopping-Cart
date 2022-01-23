import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { amount, toggleCart } = useContext(GlobalContext);
    const cartOnClick = () => {
        toggleCart();
    };
    return (
        <div className="Navbar">
            <h1>
                <Link to="/">Example Cloth Store</Link>
            </h1>
            <ul className="navcontainer">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Products">Products</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <button onClick={cartOnClick}>🛒{amount}</button>
            </ul>
        </div>
    );
};

export default Navbar;
