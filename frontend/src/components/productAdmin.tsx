import { useState } from "react";
import EditModal from "./editModal";
import DeleteConfirmModal from "./deleteConfirmModal";

interface ProductProps {
    product: {
        id:string;
        name: string;
        price: number;
        url_image: string;
    };

}

const ProductAdmin: React.FC<ProductProps> = ({ product }) => {
    
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const handleEditModal = () => {
        setEditModalVisible(!editModalVisible);
    }
    const handleDeleteModal = () => {
        setDeleteModalVisible(!deleteModalVisible);
    }

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price);

    return (
        <div className="p-4 m-4 w-96 text-[#111111]">
            <img src={product.url_image} alt={product.name} className="w-96 h-[370px]" />
            <div className="mt-4 ">
                <h2>{product.name}</h2>
                <p>{formattedPrice}</p>
            </div>
            <div className="flex justify-end">
                <button onClick={handleEditModal} className="bg-[#111111] cursor-pointer hover:bg-blue-900 text-white py-2 px-4 mt-4">Editar</button>
                <button onClick={handleDeleteModal} className="bg-[#111111] cursor-pointer hover:bg-red-600 text-white py-2 px-4 mt-4 ml-4  ">Excluir</button>
            </div>
            {editModalVisible && <EditModal data={product} handleModal={handleEditModal} />}
            {deleteModalVisible && <DeleteConfirmModal id={product.id} handleModal={handleDeleteModal} />}
        </div>
    );
}

export default ProductAdmin;