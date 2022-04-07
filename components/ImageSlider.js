/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ images }) => {
    return (
        <div className="relative select-none">
            <Carousel
                showThumbs={false}
                showIndicators={false}
                showArrows={true}
                showStatus={false}
                renderArrowNext={NextButton}
                renderArrowPrev={PrevButton}
                infiniteLoop
            >
                {images.map(({ id, url }) => (
                    <div key={id} className="w-full h-80 md:h-[400px]">
                        <Image
                            src={url}
                            alt={url}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageSlider;

const NextButton = (onClickHandler) => (
    <button
        className="absolute top-2/4 -translate-y-2/4 right-4 w-12 h-12 flex items-center justify-center  bg-white rounded-full"
        onClick={onClickHandler}
    >
        <img
            src="/images/icon-next.svg"
            alt="icon-next"
            className="object-contain h-5 w-5"
        />
    </button>
);

const PrevButton = (onClickHandler) => (
    <button
        className="absolute top-2/4 -translate-y-2/4 left-4 w-12 h-12 flex items-center justify-center bg-white rounded-full z-10"
        onClick={onClickHandler}
    >
        <img
            src="/images/icon-previous.svg"
            alt="icon-prev"
            className="object-contain h-5 w-5"
        />
    </button>
);
