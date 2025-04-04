import React from "react"
import { Helmet } from "react-helmet"
import Add from "../../Admin/components/Add/index.jsx";

const AddPage = () => {
    return (
        <>
            <Helmet>
                <title>Добавить</title>
            </Helmet>
            <Add/>
        </>
    )
}

export default AddPage