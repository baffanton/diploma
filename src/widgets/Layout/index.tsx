import React from 'react';
import { ILayout } from './types';

const Layout: React.FC<ILayout> = ({ className, children, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    );
};

export { Layout };
