import { SizeEnum } from 'enums/sizeTypes';
import './style.scss';
import cx from 'classnames';
import { WeightEnum } from 'enums/weightTypes';
import { ITitle } from './types';

const Title: React.FC<ITitle> = ({
    className = '',
    fontSize = SizeEnum.medium,
    fontWeight = WeightEnum.default,
    onClick,
    children,
}) => {
    const classNames = cx('title', `title_size_${fontSize}`, `title_weight_${fontWeight}`, className);

    return (
        <p className={classNames} onClick={onClick}>
            {children}
        </p>
    );
};

export { Title };
