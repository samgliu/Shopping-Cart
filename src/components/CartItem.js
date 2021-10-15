import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function CartItem(props) {
    const { id, img, name, price, index } = props;
    const { cart, updateItemToList } = useContext(GlobalContext);

    function handleChange(e) {
        e.preventDefault();
        updateItemToList([id, e.target.value]);
    }

    return (
        <div className="CartItem">
            {<img src={img} alt={name} width="100px" id={id}></img>}
            <p>
                {name}
                <br />
                Price:&nbsp;${price}
            </p>
            <p>
                Quantity:
                <input
                    type="number"
                    min="0"
                    max="99"
                    value={cart[index].quantity}
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => {
                        handleChange(e);
                    }}
                />
            </p>
        </div>
    );
}

export default CartItem;
