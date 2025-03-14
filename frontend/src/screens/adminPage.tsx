import Header from "../components/header";
import React, {useState} from 'react';
import Catalog from "../components/catalog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateModal  from "../components/createModal";


const AdminPage: React.FC = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleModal = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <Header />
            <main className="flex flex-col items-center">
                <h1 className="text-3xl font-light text-[#111111] text-center p-4">Meu estoque</h1>
                <button onClick={handleModal} className=" flex items-center justify-center p-2 bg-[#2ccc13] text-2xs font-medium rounded-lg mb-4 cursor-pointer">
                    Adicionar Produto<FontAwesomeIcon icon={faPlus} size="xl" className="text-[#ffffff] pl-2" />
                </button>
                <Catalog />
            </main>
            {modalVisible && <CreateModal handleModal={handleModal} />}
        </>
    )
}

export default AdminPage;