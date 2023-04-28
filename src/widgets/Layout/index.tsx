import React from 'react';

interface ILayout {
    className?: string;
    children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ className, children }) => {
    return (
        <div className={className}>{children}</div>
    )
}

export { Layout };
