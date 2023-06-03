import React from 'react';

interface ILayout {
    className?: string;
    children?: React.ReactNode;
    onClick?: any;
}

const Layout: React.FC<ILayout> = ({ className, children, onClick }) => {
    return (
        <div className={className} onClick={onClick}>{children}</div>
    )
}

export { Layout };
