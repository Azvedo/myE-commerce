interface ProductProps {
    product: {
        id:string;
        name: string;
        price: number;
        url_image: string;
    };

}

const ProductAdmin: React.FC<ProductProps> = ({ product }) => {
   
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price);

    const goToProduct = () => {
        window.location.href = `/product/${product.id}`;
    }

    return (
        <div onClick={goToProduct} className="p-4 m-4 w-96 text-[#111111] cursor-pointer shadow-xs hover:shadow-md">
            <div className="flex justify-center">
                <img src={product.url_image} alt={product.name} className="w-80 h-80" />
            </div>
            <div className="mt-4 ">
                <h2 className="font-bold">{product.name}</h2>
                <p className="font-extralight">{formattedPrice}</p>
            </div> 
        </div>
    );
}

export default ProductAdmin;