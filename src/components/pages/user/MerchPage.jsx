import React from "react"
import { Helmet } from "react-helmet";
import Merch from "../../Merch/index.jsx";

const MerchPage = () => {
    return (
        <>
            <Helmet>
                <title>Мерч</title>
            </Helmet>
            <Merch />
        </>
    )
}
export default MerchPage