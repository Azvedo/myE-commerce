import React, { createContext, useContext, useState } from "react";

interface ProductUpdateContextType {
    triggerUpdate: () => void;
}

const ProductUpdateContext = createContext<ProductUpdateContextType | null>(null);

export const ProductUpdateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [update, setUpdate] = useState(false);

    const triggerUpdate = () => {
        setUpdate(!update);
    };

    return (
        <ProductUpdateContext.Provider value={{ triggerUpdate }}>
            {children}
        </ProductUpdateContext.Provider>
    );
};

export const useProductUpdate = () => {
    const context = useContext(ProductUpdateContext);
    if (!context) {
        throw new Error("useProductUpdate must be used within a ProductUpdateProvider");
    }

    return context;
};