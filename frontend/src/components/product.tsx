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

    return (
        <div className="p-4 m-4 w-96 text-[#111111]">
            <img src={product.url_image} alt={product.name} className="w-96" />
            <div className="mt-4 ">
                <h2>{product.name}</h2>
                <p>{formattedPrice}</p>
            </div> 
        </div>
    );
}

export default ProductAdmin;