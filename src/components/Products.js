import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Navbar from './Navbar';
import Product from './Product';
import ProductsData from './ProductsData';
import Cart from './Cart';
import { useEffect } from 'react';
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

    async function bac() {
        //console.log('inbac');
        return 'bac';
    }
    const abc = async () => {
        //console.log('in bac 1');
        await bac();
        //console.log('in bac 2');
        return 'abc';
    };
    const test = abc();
    const test2 = bac();
    console.log(test);

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
