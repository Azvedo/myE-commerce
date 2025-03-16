import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { FourSquare } from "react-loading-indicators";
import { getProducts } from "../services/productService";
import { useProductUpdate } from "../context/useProductUpdate";

interface ProductType {
    id: string;
    name: string;
    price: number;
    url_image: string;
}

interface ActionHandlers {
    setSuccess: (value: boolean) => void;
    setError: (value: boolean) => void;
    setWhere: (value: string) => void;
}

interface ProductProps {
    product: {
        id: string;
        name: string;
        price: number;
        url_image: string;
    };

    actions: ActionHandlers;
}

interface CatalogProps {
    Product: React.FC<ProductProps>;
    actions: ActionHandlers;
}

const Catalog: React.FC<CatalogProps> = ({Product , actions}) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [allProducts, setAllProducts] = useState<ProductType[]>([]);

    const { triggerUpdate } = useProductUpdate();

    const fetchData = async () => {
        try {
            const response = await getProducts();
            setAllProducts(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [triggerUpdate]);

    useEffect(() => {
        setProducts(allProducts.slice(0, 6));
    }, []);

    useEffect(() => {
        setProducts(allProducts.slice(0, page * 6));
    }, [allProducts]);

    const fetchMoreData = () => {
        if (products.length >= allProducts.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setProducts(products.concat(allProducts.slice(products.length, products.length + 3)));
            setPage(page + 1);
        }, 1000);
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
                            <Product key={index} product={product} actions={actions}/>
                        ))}
                    </div>
                </InfiniteScroll>
            </motion.div>
        </div>
    );
}

export default Catalog;