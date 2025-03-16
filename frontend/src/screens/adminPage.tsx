import Header from "../components/header";
import React, {useEffect, useState} from 'react';
import Catalog from "../components/catalog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignOut } from '@fortawesome/free-solid-svg-icons';
import CreateModal  from "../components/createModal";
import ProductAdmin from "../components/productAdmin";
import Success from "../components/popups/success";
import Error from "../components/popups/error";

interface ActionHandlers {
    setSuccess: (value: boolean) => void;
    setError: (value: boolean) => void;
    setWhere: (value: string) => void;
}

const AdminPage: React.FC = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const [success , setSuccess] = useState(false);
    const [error , setError] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);
    const [errorPopup, setErrorPopup] = useState(false);
    const [where, setWhere] = useState("edit");
    const [message, setMessage] = useState("");

    const actions: ActionHandlers = {
        setSuccess: setSuccess,
        setError: setError,
        setWhere: setWhere,
    }

    const showPopup = () => {
        if (success) {
            setSuccessPopup(true);
            if (where === "create") {
                setMessage("Produto criado com sucesso.");
                setTimeout(() => {
                    setSuccessPopup(false);
                    setSuccess(false);
                }, 5000);
            }else if (where === "edit") {
                setMessage("Produto editado com sucesso.");
                setTimeout(() => {
                    setSuccessPopup(false);
                    setSuccess(false);
                }, 5000);
            }else if (where === "delete") { 
                setMessage("Produto deletado com sucesso.");
                setTimeout(() => {
                    setSuccessPopup(false);
                    setSuccess(false);
                }, 5000);
            }
        }
        if (error) {
            setErrorPopup(true);
            if (where === "create") {
                setMessage("Erro ao criar o produto.");
                setTimeout(() => {
                    setErrorPopup(false);
                    setError(false);
                }, 5000);
            }else if (where === "edit") {
                setMessage("Erro ao editar o produto.");
                setTimeout(() => {
                    setErrorPopup(false);
                    setError(false);
                }, 5000);
            }
            else if (where === "delete") {
                setMessage("Erro ao deletar o produto.");
                setTimeout(() => {
                    setErrorPopup(false);
                    setError(false);
                }, 5000);
            }
        }
    }

    useEffect(() => {
        showPopup();
    },[success, error])


    const handleModal = () => {
        setModalVisible(!modalVisible);
    }

    const handleLogOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    return (
        <>
            <Header />
            <main className="flex flex-col items-center">
                <button onClick={handleLogOut} className="absolute top-10 right-10 hover:bg-gray-400 flex items-center justify-center p-2 text-black text-2xs font-medium rounded-lg mb-4 cursor-pointer">
                    <FontAwesomeIcon icon={faSignOut} size="xl"/>
                </button>
                <h1 className="text-3xl font-light text-[#111111] text-center p-4">Meu estoque</h1>
                <button onClick={handleModal} className=" flex items-center justify-center p-2 bg-[#2ccc13]/80 hover:bg-[#2ccc13] text-2xs font-medium rounded-lg mb-4 cursor-pointer">
                    Adicionar Produto<FontAwesomeIcon icon={faPlus} size="xl" className="text-[#ffffff] pl-2" />
                </button>
                <Catalog Product={ProductAdmin} actions={actions}/>
            </main>
            {modalVisible && <CreateModal handleModal={handleModal} setSuccess={setSuccess} setError={setError} setWhere={setWhere} />}
            {successPopup && <Success message={message} />}
            {errorPopup && <Error message={message} />}
        </>
    )
}

export default AdminPage;