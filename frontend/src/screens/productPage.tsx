import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import { getProduct } from "../services/productService";

interface Product {
    name: string;
    price: number;
    url_image: string;
}


const ProductPage: React.FC = () => {

    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    async function getProductByID() {
        if (productId) {
            const product = await getProduct(productId);
            setProduct(product);
        } else {
            console.error("Product ID is undefined");
        }
    }

    useEffect(() => {
        getProductByID();
    }, []);


    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product?product.price:0);

    return (
        <div className="flex flex-col items-center">
            <Header />
            <button onClick={() => window.history.back()} className="absolute top-10 left-10 hover:bg-gray-400 flex items-center justify-center p-2 text-black text-2xs font-medium rounded-lg mb-4 cursor-pointer"> Voltar </button>
            <div className="flex flex-col items-center w-full">      
                {product && (
                    <div className="p-4 m-4 w-full text-[#111111] md:flex items-center justify-around ">
                        <div className="flex justify-center md:w-1/2 shadow-xs ">
                            <img src={product.url_image} alt={product.name} className="w-2/3 " />
                        </div>
                        <div className="mt-4 md:w-1/3 h-96 flex flex-col items-start p-8 justify-between">
                            <div className=" flex flex-col items-start gap-14">
                                <h1 className="font-regular text-3xl">{product.name}</h1>
                                <p className="font-regular text-xl">{formattedPrice}</p>
                            </div>
                            <div className="flex items-center justify-center w-full gap-12">
                                <button className="w-2/3 p-4 bg-[#111111] text-white hover:bg-[#111111]/60 text-2xs font-medium rounded-3xl mb-4 cursor-pointer">Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductPage;