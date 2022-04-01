import { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext({
    items: [],
});

export default function AuthProvider({ children }) {
    return (
        <cartContext.Provider value={{ items: [] }}>
            {children}
        </cartContext.Provider>
    );
}

export const useCartCtx = () => {
    const context = useContext(cartContext);
    return context;
};
