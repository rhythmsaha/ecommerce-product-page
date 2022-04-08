/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useCartCtx } from "../context/cartContext";

function ProductDetails({
    name,
    category,
    description,
    price,
    discount,
    originalPrice,
    id,
    images,
}) {
    const [quantity, setQuantity] = useState(1);
    const { addToCartHandler } = useCartCtx();

    const increaseQuantityHandler = () => {
        if (quantity > 0 && quantity < 5) {
            return setQuantity((prev) => prev + 1);
        }
    };

    const decreaseQuantityHandler = () => {
        if (quantity > 1) {
            return setQuantity((prev) => prev - 1);
        }
    };

    return (
        <section className="mx-auto w-11/12 px-2 lg:w-full lg:px-6 xl:px-8 lg:py-6 xl:py-10">
            <div>
                <div className="">
                    <span className="text-orange-500 uppercase font-semibold  tracking-wider text-sm xl:text-base">
                        {category}
                    </span>

                    <div className="space-y-3 mt-3 xl:space-y-6 xl:mt-6">
                        <h1 className="font-bold capitalize text-3xl xl:text-5xl tracking-wide text-gray-900 xl:leading-[1.35]">
                            {name}
                        </h1>
                        <p className="text-gray-500 xl:text-lg">
                            {description}
                        </p>
                    </div>

                    <div className="mt-4 xl:mt-8 flex items-center justify-between lg:flex-col lg:items-start lg:gap-2">
                        <div className="flex gap-4 items-center">
                            <h2 className="text-3xl font-bold text-gray-800">
                                ₹{price?.toFixed(2)}
                            </h2>

                            <span className="font-bold text-orange-500 bg-orange-100 px-3 py-1 rounded-md">
                                {discount}
                            </span>
                        </div>
                        <span className="font-bold text-gray-300 line-through text-lg">
                            ₹{originalPrice?.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 lg:flex-row w-full">
                <div className="bg-gray-100 flex justify-between px-5 py-3 rounded-lg items-center lg:min-w-[128px] lg:py-3">
                    <button
                        className="h-full block cursor-pointer lg:hover:opacity-70 transition duration-300"
                        onClick={decreaseQuantityHandler}
                    >
                        <img src="/images/icon-minus.svg" alt="minus" />
                    </button>

                    <span className="font-bold">{quantity}</span>

                    <button
                        onClick={increaseQuantityHandler}
                        className="h-full block cursor-pointer lg:hover:opacity-70 transition duration-300"
                    >
                        <img src="/images/icon-plus.svg" alt="icon-plus" />
                    </button>
                </div>

                <button
                    className="flex items-center justify-center gap-2 bg-orange-500 text-white px-5 py-3 lg:py-3 rounded-lg font-semibold tracking-wide w-full lg:w-full lg:hover:bg-orange-300 transition duration-300"
                    onClick={addToCartHandler.bind(null, {
                        name,
                        price,
                        id,
                        quantity,
                        images,
                    })}
                    disabled={quantity < 1}
                >
                    <svg
                        width="22"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill="#fff"
                            fillRule="nonzero"
                        />
                    </svg>
                    Add to cart
                </button>
            </div>
        </section>
    );
}

export default ProductDetails;
