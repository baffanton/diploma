import cx from 'classnames';
import './style.scss';
import { Row } from 'ui/Field';
import { AlignItemsTypes } from 'enums/flexTypes';

interface IInputCheckbox {
    id: string;
    name?: string;
    label?: string;
    onClick?: any;
    onChange?: any;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    checked?: boolean;
    errors?: any;
}

const InputCheckbox: React.FC<IInputCheckbox> = ({
    id,
    name = '',
    label,
    onChange,
    classNameInput = '',
    classNameLabel = '',
    classNameContainer = '',
    checked,
    errors,
    ...props
}) => {
    const inputClassNames = cx('input-checkbox', classNameInput);
    const labelClassNames = cx('input-checkbox__label', classNameLabel);
    const containerClassNames = cx('input-checkbox__wrapper', classNameContainer);
    return (
        <Row className={containerClassNames} ai={AlignItemsTypes.center} noFlex>
            <input 
                className={inputClassNames} 
                id={id} 
                name={name} 
                type="checkbox" 
                checked={checked} 
                onChange={onChange}
                {...props}
            />
            <label className={labelClassNames} htmlFor={id}>{label}</label>
        </Row>
    )
}

export { InputCheckbox };
