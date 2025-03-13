import Header from "../components/header";
import React from 'react';
import Catalog from "../components/catalog";


const AdminPage: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <h1 className="text-3xl font-light text-[#111111] text-center p-4">Meu estoque</h1>
                <Catalog />
            </main>
        </>
    )
}

export default AdminPage;