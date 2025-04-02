import React from "react"
import { Helmet } from "react-helmet"
import Games from "../../Admin/components/Games/index.jsx";

const GamesPage = () => {
    return (
        <>
            <Helmet>
                <title>Игры</title>
            </Helmet>
            <Games/>
        </>
    )
}

export default GamesPage