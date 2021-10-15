import React, { createContext, useReducer, useState, useEffect } from 'react';
import ProductsData from '../components/ProductsData';

const initialState = [];

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [amount, setAmount] = useState(0);
    const [value, setValue] = useState(0);

    const AppReducer = (state, action) => {
        function addToCartId(theid) {
            let theitem = ProductsData[theid - 1];
            let newCart;
            let index = checkExist(theid);
            if (index !== -1) {
                newCart = state.map((el) =>
                    el.product.id === theid
                        ? { ...el, quantity: el.quantity + 1 }
                        : el
                );
            } else {
                newCart = [
                    ...state,
                    {
                        product: theitem,
                        quantity: 1,
                    },
                ];
            }
            setAmount(amount + 1);
            return newCart;
        }

        function updateToCartId(inpArr) {
            let num = parseInt(inpArr[1]);
            let theid = inpArr[0];
            let newCart;
            let index = checkExist(theid);
            let totalvalue = 0;
            let totalamount = 0;
            if (index !== -1) {
                if (num <= 0) {
                    newCart = [
                        ...state.filter((item) => item.product.id !== theid),
                    ];
                } else {
                    newCart = state.map((el) =>
                        el.product.id === theid ? { ...el, quantity: num } : el
                    );
                }
                newCart.forEach((el) => {
                    totalvalue = totalvalue + el.product.price * el.quantity;
                    totalamount += el.quantity;
                });
                setAmount(totalamount);
                setValue(totalvalue);
                return newCart;
            }
        }

        function checkExist(theid) {
            return state.findIndex((item) => item.product.id === theid);
        }

        switch (action.type) {
            case 'ADD_ITEM':
                return addToCartId(action.payload);
            case 'UPDATE_ITEM':
                return updateToCartId(action.payload);
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);
    /*
    function calValue() {
        const calculateValue = () => {
            let newValue = parseFloat(value);
            state.forEach((item) => {
                newValue = newValue + item.product.price * item.quantity;
            });
            let valuestr = newValue.toFixed(2);
            return valuestr;
        };
        setValue(calculateValue());
    }
*/
    function toggleCart() {
        setIsCartOpen(!isCartOpen);
    }

    function addItemToList(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item,
        });
    }

    function updateItemToList(arr) {
        dispatch({
            type: 'UPDATE_ITEM',
            payload: arr,
        });
    }

    useEffect(() => {
        const calculateValue = () => {
            let newValue = 0;
            state.forEach((item) => {
                newValue =
                    Math.round(
                        (newValue + item.product.price * item.quantity) * 100
                    ) / 100;
            });
            let valuestr = newValue.toFixed(2);
            return valuestr;
        };
        setValue(calculateValue());
    }, [state]);

    return (
        <GlobalContext.Provider
            value={{
                cart: state,
                addItemToList,
                updateItemToList,
                toggleCart,
                amount: amount,
                value,
                isCartOpen,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
