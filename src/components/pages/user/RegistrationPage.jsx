import React from "react"
import { Helmet } from "react-helmet";
import Registration from "../../Registration/index.jsx";

const RegistrationPage = () => {
    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <Registration />
        </>
    )
}
export default RegistrationPage