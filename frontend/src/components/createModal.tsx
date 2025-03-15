import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {createProduct} from "../services/productService"
import { useProductUpdate } from "../context/useProductUpdate"

const creatModalSchema = z.object({
    name: z.string().nonempty(),
    price: z.coerce.number(),
    url_image: z.string().nonempty(),
})

type CreatModalType = z.infer<typeof creatModalSchema>

interface CreatModalProps {
    handleModal: () => void;
    setSuccess: (value: boolean) => void;
    setError: (value: boolean) => void;
}

const CreatModal: React.FC<CreatModalProps> = ({ handleModal, setSuccess, setError}) => {

    const { register, handleSubmit } = useForm<CreatModalType>({
        resolver: zodResolver(creatModalSchema)
    })

    const { triggerUpdate } = useProductUpdate()

    async function handleCreateProduct(data: CreatModalType) {
        try {
            await createProduct(data)
            setSuccess(true)
            triggerUpdate()
            handleModal()
            
        } catch (error) {
            console.error("Failed to create product:", error)
            setError(true)
            handleModal()
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/85 flex justify-center items-center">
            <div className="w-full m-3 md:w-1/3 md:m-0 h-1/2 bg-white rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-3xl font-light text-[#111111] text-center p-4">Adicionar Produto</h1>
                <form onSubmit={handleSubmit(handleCreateProduct)} className="flex flex-col items-center w-full text-black">
                    <input type="text" placeholder="Nome do produto" className="w-2/3 p-2 border border-[#111111] rounded-lg mb-4" {...register('name')} />
                    <input type="string" placeholder="Preço" className="w-2/3 p-2 border border-[#111111] rounded-lg mb-4"  {...register('price')} />
                    <input type="text" placeholder="Url da imagem" className="w-2/3 p-2 border border-[#111111] rounded-lg mb-4" {...register('url_image')} />
                    <div className="flex items-center w-2/3 justify-around gap-12">
                        <button className="w-1/2 p-2 bg-[#111111] text-white hover:bg-gray-900 text-2xs font-medium rounded-lg mb-4 cursor-pointer">Salvar</button>
                        <button onClick={handleModal} className=" w-1/2 p-2 bg-red-500 hover:bg-red-400 text-2xs font-medium rounded-lg mb-4 cursor-pointer">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreatModal;