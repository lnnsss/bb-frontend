import React from "react"
import { Helmet } from "react-helmet"
import Deleted from "../../Deleted/index.jsx";

const DeletedPage = () => {
    return (
        <>
            <Helmet>
                <title>Восстановить</title>
            </Helmet>
            <Deleted />
        </>
    )
}

export default DeletedPage