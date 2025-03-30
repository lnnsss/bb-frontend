import React from "react"
import { Helmet } from "react-helmet";
import Main from "../../Main/index.jsx";

const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <Main />
        </>
    )
}
export default MainPage