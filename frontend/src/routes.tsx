import { Route, Routes } from "react-router-dom";
import Admin from "./screens/adminPage";

const AppRoutes = () => {
    return(
        <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/admin" element={ <Admin/> } />
        </Routes>
    )
}

export default AppRoutes;