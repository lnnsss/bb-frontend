import React from "react"
import { Helmet } from "react-helmet";
import Login from "../../Login/index.jsx";

const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <Login />
        </>
    )
}
export default LoginPage