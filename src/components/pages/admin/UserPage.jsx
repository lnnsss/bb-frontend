import React from "react"
import { Helmet } from "react-helmet"
import Admin from "../../Admin/index.jsx";
import User from "../../Admin/components/User/index.jsx";

const UserPage = () => {
    return (
        <>
            <Helmet>
                <title>Пользователь</title>
            </Helmet>
            <User/>
        </>
    )
}

export default UserPage