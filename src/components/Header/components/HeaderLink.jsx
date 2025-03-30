import React from 'react';
import {Link} from "react-router-dom";

const HeaderLink = ({path, children}) => {
    return (
        <li>
            <Link to={`/${path}`}>{children}</Link>
        </li>
    );
};

export default HeaderLink;