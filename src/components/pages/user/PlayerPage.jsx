import React from "react"
import { Helmet } from "react-helmet";
import Player from "../../Player/index.jsx";

const PlayerPage = () => {
    return (
        <>
            <Helmet>
                <title>Игрок</title>
            </Helmet>
            <Player />
        </>
    )
}
export default PlayerPage