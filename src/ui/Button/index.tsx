import cx from 'classnames';
import './style.scss';

interface IButton {
    onClick?: any;
    title: string;
    id?: string;
    className?: string;
}

const Button: React.FC<IButton> = ({
    onClick,
    id,
    className = '',
    title
}) => {
    const classNames = cx('button', className)
    return (
        <button className={classNames} id={id} onClick={onClick}>{title}</button>
    )
}

export { Button };
