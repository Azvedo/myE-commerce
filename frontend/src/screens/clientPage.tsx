import React from "react"
import Header from "../components/header"
import Catalog from "../components/catalog"
import Product from "../components/product"

const ClientPage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center">
                <h1 className="text-3xl font-light text-[#111111] text-center p-4">Catálogo</h1>
                <Catalog Product={Product} />
            </main>
        </>
    )
}

export default ClientPage;