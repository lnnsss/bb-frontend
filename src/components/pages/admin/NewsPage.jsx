import React from "react"
import { Helmet } from "react-helmet"
import News from "../../Admin/components/News/index.jsx";

const NewsPage = () => {
    return (
        <>
            <Helmet>
                <title>Новости</title>
            </Helmet>
            <News/>
        </>
    )
}

export default NewsPage