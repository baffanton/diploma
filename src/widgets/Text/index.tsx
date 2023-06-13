import cx from 'classnames';
import './style.scss';
import { SizeEnum } from 'enums/sizeTypes';

interface IText {
    className?: string;
    children?: React.ReactNode;
    fontSize?: SizeEnum;
    onClick?: any;
}

const Text: React.FC<IText> = ({ 
    className, 
    children,
    fontSize = SizeEnum.medium,
    onClick,
}) => {
    const classNames = cx('text', `text_size_${fontSize}`, onClick && 'text_cursor_pointer', className);
    
    return (
        <p className={classNames} onClick={onClick}>{children}</p>
    )
}

export { Text };


