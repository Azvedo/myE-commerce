import React from "react"
import Product from "./productAdmin";
import { motion } from "framer-motion";

const Catalog: React.FC = () => {

    

    const products = [
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

    return (
        <div>
            <motion.div className="flex flex-wrap items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
               {products.map((products, index) => (
                <Product key={index} product={products} />
                ))} 
            </motion.div>
        </div>     
    )
}

export default Catalog;