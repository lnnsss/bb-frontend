import React from "react"
import { Helmet } from "react-helmet"
import Admin from "../../Admin/index.jsx";

const AdminPage = () => {
    return (
        <>
            <Helmet>
                <title>Админка</title>
            </Helmet>
            <Admin/>
        </>
    )
}

export default AdminPage