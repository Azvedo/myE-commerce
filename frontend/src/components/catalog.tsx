import React, { useState, useEffect } from "react";
import Product from "./productAdmin";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { FourSquare } from "react-loading-indicators";
import { getProducts } from "../services/productService";

interface ProductType {
    id: string;
    name: string;
    price: number;
    url_image: string;
}

const Catalog: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [allProducts, setAllProducts] = useState<ProductType[]>([]);

    const fetchData = async () => {
        try {
            const response = await getProducts();
            setAllProducts(response);
        } catch (error) {
            console.error(error);
        }
    };

    console.log("allProducts", allProducts);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setProducts(allProducts.slice(0, 6));
    }, [allProducts]);

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
                            <FourSquare color="#111111" size="small" textColor="#111010" />
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