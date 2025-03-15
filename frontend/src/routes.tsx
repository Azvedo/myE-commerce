import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./screens/adminPage";
import { ProductUpdateProvider } from "./context/useProductUpdate";
import ClientPage from "./screens/clientPage";
import Login from "./screens/login";
import ProtectedRoute from "./protectedRoute";


const AppRoutes : React.FC = () => {
    return (
        <ProductUpdateProvider>
            <Routes>
                <Route path="/" element={<ClientPage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <Admin/>
                    </ProtectedRoute>
                    } />
            </Routes>
        </ProductUpdateProvider>
    )
}

export default AppRoutes;