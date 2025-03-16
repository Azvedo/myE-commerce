import React from "react";
import { deleteProduct } from "../services/productService";
import { useProductUpdate } from "../context/useProductUpdate";

interface ActionHandlers {
    setSuccess: (value: boolean) => void;
    setError: (value: boolean) => void;
    setWhere: (value: string) => void;
}

interface DeleteConfirmModalProps {
    handleModal: () => void;
    id : string;
    actions : ActionHandlers;
}


const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({id, handleModal, actions}) => {
    
    const {triggerUpdate} = useProductUpdate()

    async function handleDeleteProduct() {
        try {
            await deleteProduct(id)
            actions.setSuccess(true)
            actions.setWhere("delete")
            triggerUpdate()
            handleModal()
        } catch (error) { 
            actions.setError(true)
            actions.setWhere("delete")
            console.error("Failed to delete product:", error)
            handleModal()
        }

    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/85 flex justify-center items-center">
            <div className="w-full m-3 md:w-1/3 md:m-0 h-1/3 bg-white rounded-xs flex flex-col items-center justify-center">
                <h1 className="text-3xl font-light text-[#111111] text-center p-4">Excluir Produto</h1>
                <p className="text-[#111111] text-center p-4">Tem certeza que deseja excluir este produto?</p>
                <div className="flex items-center w-2/3 justify-around gap-12">
                    <button onClick={handleDeleteProduct} className="w-1/2 p-2 bg-[#111111] text-white border-2 hover:bg-gray-600 text-2xs font-medium rounded-lg mb-4 cursor-pointer">Sim</button>
                    <button onClick={handleModal} className="w-1/2 p-2 bg-[#eaeaea] text-black border-2 hover:bg-gray-900 text-2xs font-medium rounded-lg mb-4 cursor-pointer">Não</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmModal;