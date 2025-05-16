import React from "react"
import { Helmet } from "react-helmet";
import ConfirmPassword from "../../ConfirmPassword/index.jsx";

const ConfirmPasswordPage = () => {
    return (
        <>
            <Helmet>
                <title>Восстановить пароль</title>
            </Helmet>
            <ConfirmPassword />
        </>
    )
}
export default ConfirmPasswordPage