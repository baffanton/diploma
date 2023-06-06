import cx from 'classnames';
import { FontSizesEnum } from 'enums/fontSizeTypes';
import './style.scss';

interface IText {
    className?: string;
    children?: React.ReactNode;
    fontSize?: FontSizesEnum;
    onClick?: any;
}

const Text: React.FC<IText> = ({ 
    className, 
    children,
    fontSize = FontSizesEnum.medium,
    onClick,
}) => {
    const classNames = cx('text', `text_size_${fontSize}`, onClick && 'text_cursor_pointer', className);
    
    return (
        <div className={classNames} onClick={onClick}>{children}</div>
    )
}

export { Text };


