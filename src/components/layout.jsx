import React from "react"
import MainRoutes from './routes/MainRoutes.jsx'
import Header from "./Header/index.jsx";
import Footer from "./Footer/index.jsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <MainRoutes />
            </main>
            <Footer/>
        </>
    )
}

export default Layout