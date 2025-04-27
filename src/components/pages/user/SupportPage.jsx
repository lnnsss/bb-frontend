import React from "react"
import { Helmet } from "react-helmet";
import Support from "../../Support/index.jsx";

const SupportPage = () => {
    return (
        <>
            <Helmet>
                <title>Поддержка</title>
            </Helmet>
            <Support />
        </>
    )
}
export default SupportPage