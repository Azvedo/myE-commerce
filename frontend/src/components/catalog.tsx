import React, { useState, useEffect } from "react";
import Product from "./productAdmin";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { FourSquare } from "react-loading-indicators";

interface ProductType {
    name: string;
    price: number;
    url_image: string;
}

const Catalog: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const allProducts = [
        {
            name: "Produto 1",
            price: 100,
            url_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s"
        },
        {
            name: "Produto 2",
            price: 200,
            url_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s"
        },
        {
            name: "Produto 3",
            price: 300,
            url_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsugfdIEuaYFaLAkEOTshSZ36WJfbPXxZzg&s"
        },
        {
            name: "Produto 1",
            price: 100,
            url_image: "https://c.static-nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1521,c_limit/tpqid8vgfey6m4ke86te/123-joyride-cdp-apla-xa-xp.jpg"
        },
        {
            name: "Produto 2",
            price: 200,
            url_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s"
        },
        {
            name: "Produto 3",
            price: 300,
            url_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s"
        },
        {
            name: "Produto 1",
            price: 100,
            url_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s"
        },
        {
            name: "Produto 2",
            price: 200,
            url_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s"
        },
        {
            name: "Produto 3",
            price: 300,
            url_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s"
        }
    ];

    const fetchMoreData = () => {
        if (products.length >= allProducts.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setProducts(products.concat(allProducts.slice(products.length, products.length + 3)));
            setPage(page + 1);
        }, 1500);
    };

    useEffect(() => {
        setProducts(allProducts.slice(0, 6));
    }, []);

    return (
        <div>
            <motion.div className="flex items-center justify-center text-[#111111]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={
                    <div className="text-center ">
                        <FourSquare color="#111111" size="small" textColor="#111010"/>
                    </div>
                    }
                >
                    <div className="flex flex-wrap justify-center gap-4">
                        {products.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                </InfiniteScroll>
            </motion.div>
        </div>
    );
}

export default Catalog;