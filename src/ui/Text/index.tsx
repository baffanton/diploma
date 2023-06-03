import cx from 'classnames';

interface IText {
    className?: string;
    children?: React.ReactNode;
}

const Text: React.FC<IText> = ({ className, children }) => {
    return (
        <div className={cx('text', className)}>{children}</div>
    )
}

export { Text };


