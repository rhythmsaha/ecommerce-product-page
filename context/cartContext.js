import { createContext, useContext, useReducer } from "react";

const cartContext = createContext({
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    addToCartHandler: (item) => {},
    deleteFromCartHandler: (item) => {},
});

const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const reducer = (state, action) => {
    if (action.type === "ADD") {
        const cartItems = [...state.items];
        const existItemIndex = cartItems.findIndex(
            (item) => item.id === action.item.id
        );

        if (existItemIndex < 0) {
            const newCartItems = [...cartItems, action.item];
            const updatedTotalQuantity =
                +state.totalQuantity + +action.item.quantity;
            const updatedTotalPrice =
                +state.totalPrice + +action.item.price * +action.item.quantity;

            const newCart = {
                items: newCartItems,
                totalQuantity: updatedTotalQuantity,
                totalPrice: updatedTotalPrice,
            };

            return newCart;
        } else {
            let exsistingCartItems = cartItems.map((item) => {
                if (item.id === action.item.id) {
                    let newItem = {
                        ...item,
                        quantity: item.quantity + action.item.quantity,
                    };

                    return newItem;
                }

                return item;
            });

            const updatedTotalQuantity =
                +state.totalQuantity + +action.item.quantity;
            const updatedTotalPrice =
                +state.totalPrice + +action.item.price * +action.item.quantity;

            const newCart = {
                items: exsistingCartItems,
                totalQuantity: updatedTotalQuantity,
                totalPrice: updatedTotalPrice,
            };

            return newCart;
        }
    }

    if (action.type === "DELETE") {
        const cartItems = [...state.items];

        const itemIndex = cartItems.findIndex((item) => item.id === action.id);

        if (itemIndex >= 0) {
            const removedItem = cartItems.filter(
                (item) => item.id !== action.id
            );

            const updatedTotalQuantity =
                state.totalQuantity - cartItems[itemIndex].quantity;

            const updatedTotalPrice =
                state.totalPrice -
                cartItems[itemIndex].price * cartItems[itemIndex].quantity;

            return {
                items: removedItem,
                totalPrice: updatedTotalPrice,
                totalQuantity: updatedTotalQuantity,
            };
        }

        return state;
    }

    return state;
};

export default function AuthProvider({ children }) {
    const [cart, dispatch] = useReducer(reducer, initialState);

    const addToCartHandler = (item) => {
        dispatch({ type: "ADD", item: item });
    };

    const deleteFromCartHandler = (id) => {
        dispatch({ type: "DELETE", id: id });
    };

    return (
        <cartContext.Provider
            value={{
                ...cart,
                addToCartHandler,
                deleteFromCartHandler,
            }}
        >
            {children}
        </cartContext.Provider>
    );
}

export const useCartCtx = () => {
    const context = useContext(cartContext);
    return context;
};
