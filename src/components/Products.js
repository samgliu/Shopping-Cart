import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Navbar from './Navbar';
import Product from './Product';
import ProductsData from './ProductsData';
import Cart from './Cart';

const Shop = () => {
    //const [items, setItems] = useState(ProductsData);
    const { cart, amount, value, addItemToList, toggleCart } =
        useContext(GlobalContext);
    const onAddClick = (theid) => {
        addToCartId(theid);
    };

    const addToCartId = (theid) => {
        addItemToList(theid);
    };

    return (
        <div className="Shop">
            <Navbar amount={amount} />

            <Cart
                cart={cart}
                amount={amount}
                value={value}
                toggleCart={toggleCart}
            />

            <div className="productcontainer">
                {ProductsData.map((item) => (
                    <Product
                        id={item.id}
                        img={item.src}
                        name={item.name}
                        price={item.price}
                        onAddClick={onAddClick}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;
