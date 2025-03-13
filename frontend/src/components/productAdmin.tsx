
interface ProductProps {
    product: {
        name: string;
        price: number;
        type?: string;
        url_image: string;
    };

}

const Product: React.FC<ProductProps> = ({ product }) => {

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price);

    return (
        <div className="p-4 m-4 w-96 text-[#111111]">
            <img src={product.url_image} alt={product.name} className="w-96"/>
            <div className="mt-4 ">
                <h2>{product.name}</h2>
                <p>{formattedPrice}</p>
            </div>
            <div className="flex justify-end">
                <button className="bg-[#111111] cursor-pointer hover:bg-blue-900 text-white py-2 px-4 mt-4">Editar</button>
                <button className="bg-[#111111] cursor-pointer hover:bg-red-600 text-white py-2 px-4 mt-4 ml-4  ">Excluir</button>  
            </div>
        </div>
    );
}

export default Product;