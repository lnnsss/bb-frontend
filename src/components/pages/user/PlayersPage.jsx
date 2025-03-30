import React from "react"
import { Helmet } from "react-helmet";
import Players from "../../Players/index.jsx";

const PlayersPage = () => {
    return (
        <>
            <Helmet>
                <title>Игроки</title>
            </Helmet>
            <Players />
        </>
    )
}
export default PlayersPage