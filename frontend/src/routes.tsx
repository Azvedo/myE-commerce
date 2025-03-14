import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./screens/adminPage";
import { ProductUpdateProvider } from "./context/useProductUpdate";
import ClientPage from "./screens/clientPage";

const AppRoutes : React.FC = () => {
    return (
        <ProductUpdateProvider>
            <Routes>
                <Route path="/" element={<ClientPage/>} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </ProductUpdateProvider>
    )
}

export default AppRoutes;