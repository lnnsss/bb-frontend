import React from "react"
import { Helmet } from "react-helmet";
import Account from "../../Account/index.jsx";

const AccountPage = () => {
    return (
        <>
            <Helmet>
                <title>Личный компонент</title>
            </Helmet>
            <Account />
        </>
    )
}
export default AccountPage