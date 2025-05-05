import {Route, Routes, useRoutes} from "react-router-dom";
import Admin from "../../components/pages/admin/AdminPage.jsx";
import Players from "../pages/admin/PlayersPage.jsx";
import Games from "../pages/admin/GamesPage.jsx";
import NotFound from "../../components/pages/user/NotFoundPage.jsx";
import Users from "../pages/admin/UsersPage.jsx";
import User from "../pages/admin/UserPage.jsx";
import Add from "../pages/admin/AddPage.jsx";
import News from "../pages/admin/NewsPage.jsx";

const AdminRoutes = () => {

    return (
        <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/users/:id" element={<User />} />
            <Route path="/admin/players" element={<Players />} />
            <Route path="/admin/games" element={<Games />} />
            <Route path="/admin/news" element={<News />} />
            <Route path="/admin/add" element={<Add />} />

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AdminRoutes;