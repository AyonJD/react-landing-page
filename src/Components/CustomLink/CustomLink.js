import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div className={`${match ? "menu-item-active-color" : 'menu-item-color'}`}>
            <Link
                // style={{ color: match ? "#F54C47" : "#000" }}
                to={to}
                {...props}>
            {children}
            </Link>
        </div>
    );
};

export default CustomLink;