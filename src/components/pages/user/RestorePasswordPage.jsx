import React from "react"
import { Helmet } from "react-helmet";
import RestorePassword from "../../RestorePassword/index.jsx";

const RestorePasswordPage = () => {
    return (
        <>
            <Helmet>
                <title>Восстановить пароль</title>
            </Helmet>
            <RestorePassword />
        </>
    )
}
export default RestorePasswordPage