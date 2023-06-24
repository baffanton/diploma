import './style.scss';
import cx from 'classnames';

interface ILink {
    children?: React.ReactNode;
    href: string;
    className?: string;
    onClick?: any;
}

const Link: React.FC<ILink> = ({ children, href, className = '', onClick }) => {
    const classNames = cx('link', className);

    return (
        <a
            className={classNames}
            href={href}
            onClick={onClick}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
};

export { Link };
