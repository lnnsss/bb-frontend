import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute.jsx';
import Main from "../pages/user/MainPage.jsx";
import Registration from "../pages/user/RegistrationPage.jsx";
import Login from "../pages/user/LoginPage.jsx";
import Account from "../pages/user/AccountPage.jsx";
import NotFound from "../pages/user/NotFoundPage.jsx";
import Games from "../pages/user/GamesPage.jsx";
import Players from "../pages/user/PlayersPage.jsx";
import Player from "../pages/user/PlayerPage.jsx";
import Gallery from "../pages/user/GalleryPage.jsx";

const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/games" element={<Games />} />
            <Route path="/players" element={<Players />} />
            <Route path="/players/:id" element={<Player />} />
            <Route path="/photogallery" element={<Gallery />} />

            {/* Публичные маршруты  */}
            <Route element={<ProtectedRoute isProtected={false} redirectTo="/account" />}>
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* Защищенные маршруты для обычных пользователей */}
            <Route element={<ProtectedRoute isProtected={true} redirectTo="/registration" />}>
                <Route path="/account" element={<Account />} />
            </Route>

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MainRoutes;