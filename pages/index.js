import Head from "next/head";
import DesktopImageSlider from "../components/DesktopImageSlider";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import ProductDetails from "../components/ProductDetails";

export default function Home() {
    const product = {
        id: "product1",
        images: [
            {
                id: 1,
                url: "/images/image-product-1.jpg",
                thumb: "/images/image-product-1-thumbnail.jpg",
            },
            {
                id: 2,
                url: "/images/image-product-2.jpg",
                thumb: "/images/image-product-2-thumbnail.jpg",
            },
            {
                id: 3,
                url: "/images/image-product-3.jpg",
                thumb: "/images/image-product-3-thumbnail.jpg",
            },
            {
                id: 4,
                url: "/images/image-product-4.jpg",
                thumb: "/images/image-product-4-thumbnail.jpg",
            },
        ],
        name: "fall limited edition sneakers",
        category: "sneaker company",
        description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 649.0,
        discount: "50%",
        originalPrice: 1299.0,
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <Navbar />
                <section className="grid gap-4 lg:gap-16 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto  lg:mt-16  lg:w-9/12">
                    <div className="lg:hidden">
                        <ImageSlider images={product.images} />
                    </div>

                    <div className="hidden lg:block xl:p-8">
                        <DesktopImageSlider images={product.images} />
                    </div>

                    <ProductDetails
                        name={product.name}
                        category={product.category}
                        description={product.description}
                        price={product.price}
                        discount={product.discount}
                        originalPrice={product.originalPrice}
                        id={product.id}
                    />
                </section>
            </main>
        </>
    );
}
