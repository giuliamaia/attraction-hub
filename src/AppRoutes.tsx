import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import MyList from "./pages/my-list";
import Register from "./pages/register";
import Search from "./pages/search";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/my-list" element={<MyList />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;