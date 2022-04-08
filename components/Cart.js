/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { useCartCtx } from "../context/cartContext";

const Cart = () => {
    const { items, totalPrice, deleteFromCartHandler } = useCartCtx();
    return (
        <div className="absolute  top-0 left-0 right-0 bottom-0 z-50 p-2  lg:translate-x-14 lg:-translate-y-5 ">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white w-full mx-auto rounded-xl overflow-hidden shadow-xl lg:max-w-md lg:ml-auto lg:mr-0 lg:rounded-2xl"
            >
                <div className="h-14 flex items-center bg-gray-50 border-b">
                    <h2 className="text-base tracking-wide px-8 font-bold text-gray-600">
                        Cart
                    </h2>
                </div>

                {items.length === 0 && (
                    <div className="min-h-[12rem] grid place-content-center text-gray-400 font-bold tracking-wide">
                        Your cart is empty.
                    </div>
                )}

                {items.length > 0 &&
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between w-full p-8 gap-3"
                        >
                            <img
                                src={item?.images[0]?.thumb}
                                alt="thumb"
                                className="object-contain h-12 rounded-md"
                            />

                            <div className="flex-1">
                                <div className="truncate w-40 lg:w-60">
                                    <span className="capitalize font-semibold tracking-wide text-gray-600">
                                        {item.name}
                                    </span>
                                </div>

                                <div className="flex gap-4 items-center mt-1">
                                    <div className="text-gray-500">
                                        {`₹${item.price.toFixed(2)} × ${
                                            item.quantity
                                        }`}
                                    </div>
                                    <span className="font-bold text-gray-900">
                                        ₹{totalPrice.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={deleteFromCartHandler.bind(
                                    null,
                                    item.id
                                )}
                            >
                                <img
                                    src="/images/icon-delete.svg"
                                    alt="delete"
                                />
                            </button>
                        </div>
                    ))}
            </motion.div>
        </div>
    );
};

export default Cart;
