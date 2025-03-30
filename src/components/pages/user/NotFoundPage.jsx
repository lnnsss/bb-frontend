import React from 'react';
import { Helmet } from 'react-helmet';
import NotFound from "../../NotFound/index.jsx";

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Страница не найдена</title>
            </Helmet>
            <NotFound/>
        </>
    );
};

export default NotFoundPage;