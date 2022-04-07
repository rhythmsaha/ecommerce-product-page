/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DesktopImageSlider = ({ images }) => {
    return (
        <div className="relative select-none">
            <Carousel
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                renderThumbs={customRenderThumb}
            >
                {images.map(({ id, url }) => (
                    <div
                        key={id}
                        className="relative w-full overflow-hidden rounded-3xl aspect-square"
                    >
                        <img src={url} alt={url} layout="fill" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default DesktopImageSlider;

const customRenderThumb = (children) =>
    children.map((item, id) => {
        return (
            <img
                src={`/images/image-product-${id + 1}-thumbnail.jpg`}
                alt="dsdsad"
                key={item.id}
            />
        );
    });
