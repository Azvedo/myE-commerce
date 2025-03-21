import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{children:React.ReactNode}> = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;