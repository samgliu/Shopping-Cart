import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import CartItem from './CartItem';

const Cart = () => {
    const { cart, amount, value, toggleCart, isCartOpen } =
        useContext(GlobalContext);
    const onCheckoutClick = (e) => {
        e.preventDefault();
        alert('Thanks for shopping from us');
    };
    const onCloseClick = (e) => {
        e.preventDefault();
        toggleCart();
    };
    let index = 0;
    return (
        <div className={isCartOpen ? 'Cart' : 'Cart CartHidden'}>
            <h2>Shopping Cart</h2>
            <div className="listcontainer">
                {cart.map((item) => (
                    <CartItem
                        id={item.product.id}
                        img={item.product.src}
                        name={item.product.name}
                        price={item.product.price}
                        key={item.product.id}
                        index={index++}
                    />
                ))}
            </div>
            Amount: {amount}
            <br />
            Total: ${parseFloat(value).toFixed(2)}
            <br />
            <button
                type="button"
                onClick={(e) => onCheckoutClick(e)}
                className="checkoutbtn"
            >
                Checkout
            </button>
            <button
                type="button"
                onClick={(e) => onCloseClick(e)}
                className="closebtn"
            >
                Close
            </button>
        </div>
    );
};

export default Cart;
